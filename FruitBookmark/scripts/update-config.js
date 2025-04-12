// 更新project.config.json文件，从config.js中读取APPID
const fs = require('fs');
const path = require('path');

// 获取项目根目录路径
const rootDir = path.resolve(__dirname, '..');

try {
  // 尝试导入config.js文件
  const configPath = path.join(rootDir, 'miniprogram/utils/config.js');
  let config;
  
  try {
    config = require(configPath);
  } catch (error) {
    console.error('无法加载config.js文件，请确保已创建该文件并填入正确的APPID');
    console.error('您可以复制config.example.js为config.js并填入您的APPID');
    process.exit(1);
  }
  
  // 读取project.config.json文件
  const projectConfigPath = path.join(rootDir, 'project.config.json');
  const projectConfig = JSON.parse(fs.readFileSync(projectConfigPath, 'utf8'));
  
  // 更新APPID
  if (config.APPID && config.APPID !== 'your_appid_here') {
    projectConfig.appid = config.APPID;
    console.log(`已将project.config.json中的APPID更新为: ${config.APPID}`);
  } else {
    console.warn('警告: config.js中的APPID未设置或仍为默认值');
    projectConfig.appid = ''; // 设置为空字符串，微信开发者工具会提示选择AppID
  }
  
  // 写回project.config.json文件
  fs.writeFileSync(projectConfigPath, JSON.stringify(projectConfig, null, 2), 'utf8');
  console.log('project.config.json文件已成功更新');
  
} catch (error) {
  console.error('更新project.config.json时出错:', error);
  process.exit(1);
}