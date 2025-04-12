// index.js
const api = require('../../utils/api.js');

// 删除不存在的字体URL
// const CUSTOM_FONT_URL = 'https://example.com/fonts/dingliexidafont.ttf';

Page({
  data: {
    inputText: '',
    generatedText: '',
    imageUrl: '',
    canvasImageUrl: '',
    isLoading: false,
    showPreview: false, // 控制预览弹窗显示状态
    // 默认字体
    selectedFont: 'SimSun',
    availableFonts: [
      {name: 'SimSun', label: '宋体'},
      {name: 'Microsoft YaHei', label: '微软雅黑'},
      {name: 'KaiTi', label: '楷体'},
      {name: 'YouYuan', label: '幼圆'},
    ]
  },

  onLoad() {
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: '水果书签'
    });
    console.log('页面加载完成');
  },

  // 我们不再尝试加载不存在的字体
  // async loadCustomFont() {...},

  handleInput(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  // 快捷选择水果
  selectFruit(e) {
    const fruit = e.currentTarget.dataset.fruit;
    console.log('选择水果:', fruit);
    this.setData({
      inputText: fruit
    });
  },

  // 字体选择处理
  handleFontChange(e) {
    this.setData({
      selectedFont: e.detail.value
    });
  },

  async handleGenerate() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入水果名称',
        icon: 'none'
      });
      return;
    }

    // 确保先清理之前的图片状态
    this.setData({
      imageUrl: '',
      canvasImageUrl: '',
      showPreview: false,
      generatedText: '', // 清空之前生成的文字
      isLoading: true
    });
    
    // 显示加载提示
    wx.showLoading({
      title: '小果果思考中...',
      mask: true
    });

    try {
      // 1. 生成文本
      console.log('开始生成文本，水果：', this.data.inputText);
      const textResult = await api.generateText(this.data.inputText);
      console.log("Text generation result:", textResult);
      
      // 设置生成的文本到data
      if (textResult && textResult.content) {
        const generatedText = textResult.content.trim();
        this.setData({ generatedText });
        console.log('文本生成成功:', generatedText);
        
        // 更新加载提示 - 确保显示
        wx.hideLoading(); // 先隐藏之前的loading
        await new Promise(resolve => setTimeout(resolve, 100)); // 短暂延时
        wx.showLoading({
          title: '正在绘制书签...',
          mask: true
        });
        
        // 确保loading显示
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // 2. 生成图片
        console.log('开始生成图片，水果：', this.data.inputText);
        const imageResult = await api.generateImage(this.data.inputText, generatedText);
        console.log('图片生成结果:', imageResult);
        
        if (imageResult && imageResult.url) {
          const imageUrl = imageResult.url;
          this.setData({ imageUrl });
          console.log('图片生成成功:', imageUrl);
          
          // 3. 更新加载提示 - 书签即将出炉
          wx.hideLoading(); // 先隐藏之前的loading
          await new Promise(resolve => setTimeout(resolve, 100)); // 短暂延时
          wx.showLoading({
            title: '书签即将出炉...',
            mask: true
          });
          
          // 确保loading显示
          await new Promise(resolve => setTimeout(resolve, 300));
          
          await this.addTextToImage(imageUrl, generatedText);
          console.log('书签生成完成');
        } else {
          throw new Error('图片生成失败，请重试');
        }
      } else {
        throw new Error('无法生成有关水果的内容');
      }
    } catch (error) {
      console.error("生成过程出错:", error);
      
      // 定制更友好的错误提示
      let errorMessage = '啊哦，小果果遇到了问题，请稍后再试~';
      
      if (error.message) {
        if (error.message.includes('timeout') || error.message.includes('超时')) {
          errorMessage = '请求超时了，网络可能有点慢，请稍后再试~';
        } else if (error.message.includes('网络')) {
          errorMessage = '网络连接不顺畅，请检查您的网络连接';
        } else if (error.message.includes('无法生成')) {
          errorMessage = '呀，小果果不太了解这个水果，换一个试试吧~';
        }
      }
      
      wx.showToast({
        title: errorMessage,
        icon: 'none',
        duration: 3000
      });
    } finally {
      // 无论成功失败都隐藏加载提示
      wx.hideLoading();
      this.setData({ isLoading: false });
    }
  },

  // 添加wx.previewImage的处理方法
  onHideImage() {
    // 确保隐藏自定义预览窗口
    this.setData({
      showPreview: false,
      imageUrl: '',
      canvasImageUrl: ''
    });
  },

  // 添加文字到图片
  async addTextToImage(imageUrl, text) {
    try {
      // 获取canvas上下文
      const query = wx.createSelectorQuery();
      query.select('#bookmarkCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
          
          // 设置固定的画布尺寸为512*512
          const info = wx.getWindowInfo();
          const dpr = info.pixelRatio;
          
          // 使用固定的画布尺寸
          const canvasWidth = 512; // 固定宽度
          const canvasHeight = 512; // 固定高度
          
          // 设置实际的画布尺寸（考虑设备像素比）
          canvas.width = canvasWidth * dpr;
          canvas.height = canvasHeight * dpr;
          
          // 缩放上下文以适应设备像素比
          ctx.scale(dpr, dpr);
          
          // 保存基础尺寸到上下文中，方便后续使用
          ctx._canvasWidth = canvasWidth;
          ctx._canvasHeight = canvasHeight;
          
          // 获取当前日期
          const today = new Date();
          const dateString = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
          
          // 创建图片对象
          const img = canvas.createImage();
          img.src = imageUrl;
          img.onload = () => {
            // 清空画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 计算图片绘制尺寸，保持宽高比
            const scale = Math.min(ctx._canvasWidth / img.width, ctx._canvasHeight / img.height);
            const drawWidth = img.width * scale;
            const drawHeight = img.height * scale;
            const drawX = (ctx._canvasWidth - drawWidth) / 2;
            const drawY = (ctx._canvasHeight - drawHeight) / 2;
            
            // 绘制图片，保持比例并居中
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
            
            // 设置字体 - 使用更通用的跨平台兼容字体组合，优先使用iOS和Android上常见的系统字体
            const fontFamily = "'PingFang SC', 'Heiti SC', 'STHeiti', 'Microsoft YaHei', '微软雅黑', '宋体', sans-serif";
            //const fontFamily = "'STKaiti', '华文楷体', sans-serif"
            
            // 设置字体大小 - 调整为适合512*512尺寸的大小
            const fontSize = 28; // 减小字体大小以适应新的画布尺寸
            ctx.font = `${fontSize}px ${fontFamily}`;
            
            // 计算文本需要的行数和空间 - 调整为适合512*512尺寸
            const maxWidth = ctx._canvasWidth * 0.8; // 使用画布宽度的80%作为文本最大宽度
            
            // 根据文本长度动态调整行距
            let lineHeightFactor = 0.07; // 默认行高因子
            const textLength = text.length;
            
            // 文本少于50字时，增加行距
            if (textLength < 56) {
              lineHeightFactor = 0.08; // 增加行高因子
              console.log('文本较短，增加行距');
            }
            // 文本多于80字时，减少行距
            else if (textLength > 84) {
              lineHeightFactor = 0.055; // 减少行高因子
              console.log('文本较长，减少行距');
            }
            
            const lineHeight = Math.floor(ctx._canvasHeight * lineHeightFactor); // 根据文本长度动态计算行高
            
            // 从截图中获取灵感，为书签头部添加水果名称显示
            const fruitName = this.data.inputText;
            
            // 分段处理并计算所需高度
            const paragraphs = text.split('\n');
            let lines = [];
            
            for (let i = 0; i < paragraphs.length; i++) {
              const words = paragraphs[i].split('');
              let currentLine = '';
              
              for (let j = 0; j < words.length; j++) {
                const testLine = currentLine + words[j];
                const metrics = ctx.measureText(testLine);
                if (metrics.width > maxWidth && j > 0) {
                  lines.push(currentLine);
                  currentLine = words[j];
                } else {
                  currentLine = testLine;
                }
              }
              lines.push(currentLine);
              
              // 增加段落之间的间距
              if (i < paragraphs.length - 1) {
                lines.push(''); // 添加空行增加段落间距
                lines.push(''); // 再添加一个空行使段落间距更大
              }
            }
            
            // 计算文本绘制所需的总高度
            const textAreaHeight = lines.length * lineHeight;
            
            // 调整填充区域以适应512*512的画布
            const paddingTop = 80; // 减小顶部间距
            const paddingBottom = 80; // 减小底部间距
            
            // 矩形总高度 = 文本高度 + 顶部填充 + 底部填充
            const rectHeight = textAreaHeight + paddingTop + paddingBottom;
            
            // 确保矩形高度足够容纳文本和日期，但不超过画布高度
            const minRectHeight = 380; // 减小最小高度以适应新的画布尺寸
            const maxRectHeight = ctx._canvasHeight - 40; // 确保矩形不会太大
            const finalRectHeight = Math.min(Math.max(rectHeight, minRectHeight), maxRectHeight);
            
            // 计算矩形应该放置的Y坐标（垂直居中）
            const rectY = Math.floor((ctx._canvasHeight - finalRectHeight) / 2);
            
            // 计算标题和其他元素的位置
            const titleX = ctx._canvasWidth/2;
            // 基于白色矩形上边缘计算标题Y坐标
            const titleY = rectY + 80; // 标题位置固定在白色矩形上边缘下方60px处
            const dateY = rectY + finalRectHeight - 40; // 日期位置固定在白色矩形下边缘上方30px处
            
            // 创建更精致的白色矩形背景 - 调整尺寸适应512*512画布
            const cornerRadius = 30; // 减小圆角
            
            // 计算矩形宽度，确保在画布内居中
            const rectWidth = ctx._canvasWidth - 40; // 两边各留20px的边距
            const rectX = (ctx._canvasWidth - rectWidth) / 2;
            
            // 1. 先绘制微弱的透明阴影作为底层
            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            this.roundRect(ctx, rectX + 3, rectY + 3, rectWidth - 6, finalRectHeight, cornerRadius);
            
            // 2. 绘制半透明白色矩形，使其更加融入背景图片
            const gradientBg = ctx.createLinearGradient(rectX, rectY, rectX, rectY + finalRectHeight);
            gradientBg.addColorStop(0, 'rgba(255, 255, 255, 0.70)');
            gradientBg.addColorStop(0.5, 'rgba(255, 255, 255, 0.70)');
            gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.70)');
            ctx.fillStyle = gradientBg;
            this.roundRect(ctx, rectX, rectY, rectWidth, finalRectHeight, cornerRadius);
            
            // 添加精致的内边框
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 1.5;
            this.roundRect(ctx, rectX + 10, rectY + 10, rectWidth - 20, finalRectHeight - 20, cornerRadius - 5, true);
            
            // 绘制标题装饰横线和文字 - 调整尺寸适应512*512画布
            const titleLineWidth = 100; // 减小标题装饰线的长度
            ctx.strokeStyle = 'rgba(85, 85, 85, 0.6)'; // 加深横线颜色
            ctx.lineWidth = 3; // 调整横线粗细
            
            // 先绘制标题文字
            ctx.font = `bold ${fontSize + 4}px ${fontFamily}`; // 调整标题字体大小
            ctx.fillStyle = '#333333';
            ctx.textAlign = 'center';
            
            // 测量标题文字高度
            const titleMetrics = ctx.measureText(`{ ${fruitName} }`);
            const titleHeight = titleMetrics.actualBoundingBoxAscent + titleMetrics.actualBoundingBoxDescent;
            
            console.log('标题高度:', titleHeight);
          
            // 绘制标题
            ctx.fillText(`{ ${fruitName} }`, titleX, titleY);
            
            // 上横线 - 放在标题上方，相对于白色矩形上边缘
            const upperLineY = rectY + 30; // 上横线位置在标题上方25px-titleY - 25
            ctx.beginPath();
            ctx.moveTo(titleX - titleLineWidth, upperLineY);
            ctx.lineTo(titleX + titleLineWidth, upperLineY);
            ctx.stroke();
            
            // 下横线 - 放在标题下方，相对于标题位置
            const lowerLineY = titleY + 30; // 下横线位置在标题下方15px - titleY + titleHeight
            ctx.beginPath();
            ctx.moveTo(titleX - titleLineWidth, lowerLineY);
            ctx.lineTo(titleX + titleLineWidth, lowerLineY);
            ctx.stroke();
            
            // 设置正文文字样式 - 调整适应512*512画布
            ctx.font = `bold ${fontSize - 2}px ${fontFamily}`; // 调整正文字体大小
            ctx.fillStyle = '#222222';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            
            // 调整文本区域的顶部间距，基于下横线位置
            const startY = lowerLineY + 25; // 正文起始位置在下横线下方25px
            
            // 计算正文区域可用高度
            const availableTextHeight = dateY - startY - 20; // 留出20px的底部间距
            
            // 根据可用高度和文本行数动态计算行距
            let dynamicLineHeight;
            if (lines.length <= 1) {
              // 如果只有一行，使用默认行高
              dynamicLineHeight = lineHeight;
            } else {
              // 根据可用高度和行数计算行高，确保文本均匀分布
              dynamicLineHeight = Math.max(Math.min(availableTextHeight / lines.length, lineHeight * 1.5), lineHeight * 0.8);
            }
            
            // 限制最大显示行数，防止文本溢出
            const maxLines = Math.floor(availableTextHeight / dynamicLineHeight);
            const displayLines = lines.length > maxLines ? lines.slice(0, maxLines) : lines;
            
            // 绘制文本内容 - 使用动态计算的行高
            for (let i = 0; i < displayLines.length; i++) {
              ctx.fillText(displayLines[i], titleX, startY + i * dynamicLineHeight);
            }
            
            // 绘制日期
            ctx.font = `${fontSize - 5}px ${fontFamily}`; // 调整日期字号
            ctx.fillStyle = '#666666';
            ctx.fillText(dateString, titleX, dateY);
            
            // 使用小程序的API保存Canvas为图片 - 使用高清设置
            console.log('Canvas尺寸:', canvas.width, canvas.height);
            console.log('实际绘制尺寸:', ctx._canvasWidth, ctx._canvasHeight);
            wx.canvasToTempFilePath({
              canvas: canvas,
              x: 0,
              y: 0,
              width: canvas.width,
              height: canvas.height,
              destWidth: canvas.width, // 直接使用canvas的高清分辨率
              destHeight: canvas.height,
              fileType: 'png', // 使用PNG格式保持透明度
              quality: 1.0, // 最高质量
              success: (res) => {
                const tempFilePath = res.tempFilePath;
                
                
                // 将临时文件路径保存到data并显示预览弹窗
                this.setData({
                  canvasImageUrl: tempFilePath,
                  imageUrl: '',  // 确保清除原始图片URL
                  isLoading: false,
                  showPreview: true
                }, () => {
                  // 清理Canvas
                  const query = wx.createSelectorQuery();
                  query.select('#bookmarkCanvas')
                    .fields({ node: true, size: true })
                    .exec((res) => {
                      if (res[0] && res[0].node) {
                        const canvas = res[0].node;
                        const ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                      }
                    });
                });
                
                console.log('书签生成完成，预览弹窗已显示');
              },
              fail: (err) => {
                console.error('Canvas导出失败:', err);
                this.setData({ isLoading: false });
                wx.showToast({
                  title: '图片生成失败',
                  icon: 'none'
                });
                wx.hideLoading();
              }
            });
          };
          
          img.onerror = (err) => {
            console.error("图片加载失败:", err);
            wx.showToast({
              title: '图片处理失败',
              icon: 'none'
            });
            this.setData({ isLoading: false });
            wx.hideLoading();
          };
          
          img.src = imageUrl;
        });
    } catch (error) {
      console.error("添加文字到图片失败:", error);
      wx.showToast({
        title: '图片处理失败',
        icon: 'none'
      });
      this.setData({ isLoading: false });
      wx.hideLoading();
    }
  },
  
  // 辅助方法：绘制圆角矩形
  roundRect(ctx, x, y, width, height, radius, isStroke = false) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    
    if (isStroke) {
      ctx.stroke();
    } else {
      ctx.fill();
    }
  },
  
  // 显示预览
  previewImage() {
    this.setData({
      showPreview: true
    });
  },
  
  // 隐藏预览
  hidePreview() {
    this.setData({
      showPreview: false,
      imageUrl: '',  // 清除图片URL
      canvasImageUrl: ''  // 清除Canvas图片URL
    });
  },
  
  // 处理长按事件
  handleLongPress() {
    wx.showActionSheet({
      itemList: ['保存到相册'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.saveImage();
        }
      }
    });
  },

  // 保存图片到相册
  saveImage() {
    const url = this.data.canvasImageUrl || this.data.imageUrl;
    if (!url) {
      wx.showToast({
        title: '没有可保存的图片',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '正在保存...',
      mask: true
    });
    
    // 检查授权
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: () => {
              this.finalSaveImageToAlbum(url);
            },
            fail: () => {
              wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '需要您授权保存图片到相册',
                confirmText: '去授权',
                success: (res) => {
                  if (res.confirm) {
                    wx.openSetting();
                  }
                }
              });
            }
          });
        } else {
          this.finalSaveImageToAlbum(url);
        }
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({
          title: '检查授权失败',
          icon: 'none'
        });
      }
    });
  },
  
  // 最终保存图片到相册
  finalSaveImageToAlbum(tempFilePath) {
    wx.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success: () => {
        wx.hideLoading();
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
        
        // 保存成功后隐藏预览框
        setTimeout(() => {
          this.hidePreview();
        }, 1500);
      },
      fail: (err) => {
        console.error('保存到相册失败:', err);
        wx.hideLoading();
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      }
    });
  },

  // 重置生成状态
  resetState() {
    this.setData({
      imageUrl: '',
      canvasImageUrl: '',
      showPreview: false,
      generatedText: '' // 确保清空生成的文本
    });
    
    // 尝试手动清理内存中可能的图片引用
    if (global.gc) {
      try {
        global.gc(); // 触发垃圾回收，如果可用
      } catch (e) {
        console.log('垃圾回收不可用');
      }
    }
  },

  // 在页面隐藏时清理资源
  onHide() {
    // 如果离开页面，确保关闭预览并清理资源
    this.resetState();
  },
  
  // 在页面卸载时清理资源
  onUnload() {
    // 确保清理所有资源
    this.resetState();
  },
  
  // 响应物理返回按钮或导航栏返回按钮
  onBackPress() {
    // 如果预览窗口打开，则关闭预览而不是退出页面
    if (this.data.showPreview) {
      this.hidePreview();
      return true; // 阻止默认的返回行为
    }
    return false; // 使用默认的返回行为
  }
});
