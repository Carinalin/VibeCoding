// app.js
App({
  onLaunch() {
    // 预加载字体文件
    wx.loadFontFace({
      family: 'BookmarkFont',
      source: 'url("https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk/Sans/OTF/Chinese-Simplified/NotoSansCJKsc-Regular.otf")',
      success: (res) => {
        console.log('字体加载成功:', res);
      },
      fail: (err) => {
        console.error('字体加载失败:', err);
      },
      complete: () => {
        console.log('字体加载完成');
      }
    });
  },
  globalData: {
    userInfo: null
  }
});
