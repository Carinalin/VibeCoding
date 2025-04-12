// API工具函数
const config = require('./config.js');
const API_KEY = config.API_KEY;
const API_BASE_URL = config.API_BASE_URL;

// 封装请求函数
const request = (options, retryCount = 3) => {
  return new Promise((resolve, reject) => {
    const makeRequest = (retryLeft) => {
      wx.request({
        ...options,
        success: (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data);
          } else {
            reject(new Error(`API请求失败: ${res.statusCode} - ${res.errMsg || '未知错误'}`));
          }
        },
        fail: (err) => {
          if (retryLeft > 0 && (err.errMsg.includes('timeout') || err.errMsg.includes('request:fail'))) {
            console.log(`请求失败，剩余重试次数：${retryLeft - 1}`);
            setTimeout(() => makeRequest(retryLeft - 1), 1000);
          } else {
            reject(new Error(`请求失败: ${err.errMsg || '网络错误'}`));
          }
        }
      });
    };
    makeRequest(retryCount);
  });
};

// 文本生成API
const generateText = async (inputText) => {
  try {
    console.log('开始调用文本生成API，输入水果：', inputText);
    
    // 首先尝试使用 pollinations.ai API
    try {
      console.log('尝试使用主API (pollinations.ai)...');
      const pollinationsResponse = await request({
        url: 'https://text.pollinations.ai/openai',
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        data: {
          messages: [
            {
              role: "system",
              content: "你是一个很有创意和智慧的人，擅长根据水果引申出哲理和智慧。请基于输入的水果名称，联想出一句有深度、有哲理的话，表达出水果的特性与人生哲理的联系。例如：'橙子'可以联想到'人生如橙，外表坚硬，内心甘甜，酸甜苦辣皆为养分'（60字）。请确保你的回答清新自然、富有哲理。要求：字数严格控制在60-70字之间。"
            },
            {
              role: "user",
              content: inputText
            }
          ],
          model: "mistral"
        },
        timeout: 60000
      });
      
      console.log('pollinations.ai API响应：', pollinationsResponse);
      
      // 处理 pollinations.ai 的响应
      if (pollinationsResponse && pollinationsResponse.choices && 
          pollinationsResponse.choices.length > 0 && 
          pollinationsResponse.choices[0].message && 
          pollinationsResponse.choices[0].message.content) {
        
        const content = pollinationsResponse.choices[0].message.content.trim();
        console.log('pollinations.ai 文本生成成功:', content);
        return { content };
      } else {
        throw new Error('pollinations.ai API返回数据格式不正确');
      }
    } catch (primaryError) {
      // 如果主API失败，使用备用API (siliconflow)
      console.log('主API (pollinations.ai) 请求失败，尝试备用API：', primaryError);
      
      // 使用备用API
      const response = await request({
        url: `${API_BASE_URL}/chat/completions`,
        method: 'POST',
        header: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        data: {
          model: "Qwen/Qwen2.5-72B-Instruct-128K",
          messages: [
            {
              role: "system",
              content: "你是一个很有创意和智慧的人，擅长根据水果引申出哲理和智慧。请基于输入的水果名称，联想出一句有深度、有哲理的话，表达出水果的特性与人生哲理的联系。例如：'橙子'可以联想到'人生如橙，外表坚硬，内心甘甜，酸甜苦辣皆为养分'（60字）。请确保你的回答清新自然、富有哲理。要求：字数严格控制在60-70字之间。"
            },
            {
              role: "user",
              content: inputText
            }
          ],
          stream: false,
          max_tokens: 256,
          temperature: 0.7,
          top_p: 0.7,
          top_k: 50,
          frequency_penalty: 0.5,
          n: 1,
          response_format: {
            type: "text"
          }
        },
        timeout: 60000
      });

      console.log('备用API响应：', response);

      // 修复响应处理逻辑
      if (!response) {
        throw new Error('备用API返回为空');
      }
      
      // 处理不同的响应格式
      let content = '';
      
      if (response.choices && response.choices.length > 0) {
        // 优先检查choices[0].message.content
        if (response.choices[0].message && response.choices[0].message.content) {
          content = response.choices[0].message.content;
        } 
        // 然后检查choices[0].text
        else if (response.choices[0].text) {
          content = response.choices[0].text;
        }
        // 最后尝试choices[0].content
        else if (response.choices[0].content) {
          content = response.choices[0].content;
        }
      }
      
      if (!content) {
        console.error('无法从备用API响应中提取内容', response);
        throw new Error('备用API返回数据格式不正确');
      }
      
      // 返回内容对象，包含提取的文本
      return {
        content: content.trim()
      };
    }
  } catch (error) {
    console.error('文本生成失败:', error);
    throw error;
  }
};

// 图片生成API - 仅生成背景图
const generateImage = async (inputText, generatedText) => {
  try {
    console.log('开始调用图片生成API，为水果生成背景图：', inputText);
    
    // 创建背景图提示词 - 只生成背景，不包含文字
    const prompt = `
图片风格为水彩画，图片内容和${inputText}有关，图片尺寸为512x512像素，垂直长方形布局。

禁止在图像中包含：
- 任何文字、标题、符号或文本元素
- 过于复杂或明亮的图案
- 纯色背景或过于单调的设计

最佳效果应该是：以"${inputText}"水果为主题的水彩画背景，清新自然，整体色调和谐淡雅，中央区域适合添加文字。图片必须严格保持512x512像素的尺寸。
    `;
    
    console.log('背景图生成提示词：', prompt);

    try {
      // 首先尝试使用pollinations.ai API
      const encodedPrompt = encodeURIComponent(prompt);
      const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?nologo=true&width=512&height=512`;
      
      // 返回统一的格式
      return {
        url: pollinationsUrl
      };
    } catch (primaryError) {
      console.log('主API (pollinations.ai) 请求失败，尝试备用API：', primaryError);
      
      // 如果主API失败，使用备用API
      const response = await request({
        url: `${API_BASE_URL}/images/generations`,
        method: 'POST',
        header: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        data: {
          model: "Kwai-Kolors/Kolors",
          prompt: prompt,
          negative_prompt: "文字,字母,符号,标题,日期,标记,过度装饰,复杂图案,强烈的颜色,纯色背景,混乱的构图",
          image_size: "600x900", // 适合书签的长宽比，并保持较好的图片质量
          batch_size: 1,
          num_inference_steps: 30, // 增加步数提高质量
          guidance_scale: 8.5 // 增加提示词引导强度
        },
        timeout: 120000
      }, 5);

      console.log('备用API响应：', response);

      // 处理备用API的响应
      let imageUrl = '';
      if (response.images && response.images.length > 0 && response.images[0].url) {
        imageUrl = response.images[0].url;
      } else if (response.data && response.data.length > 0) {
        imageUrl = response.data[0].url || response.data[0].image || response.data[0];
      }
      
      if (!imageUrl) {
        throw new Error('备用API返回数据格式不正确');
      }
      
      return {
        url: imageUrl
      };
    }
  } catch (error) {
    console.error('图片生成失败:', error);
    throw error;
  }
};

module.exports = {
  generateText,
  generateImage
};