# 水果书签生成小程序

这是一个基于微信小程序平台开发的创意书签生成应用。用户可以输入水果名称，系统会自动生成一句与该水果相关的富有哲理的话语，并制作成精美的书签图片。

## 功能特点

1. **文字输入**：用户可以在输入框中输入10个字以内的中文文字（主要是水果名称）
2. **文字生成**：通过大模型API生成一句50-70字以内的有哲理话语
3. **图片生成**：自动生成一张以输入文字为标题，生成话语为主体的创意书签图片
4. **背景关联**：生成的图片背景与输入文字（水果）具有主题关联性
5. **日期标记**：每张生成的书签都会自动添加当前日期

## 技术实现

- **前端**：微信小程序原生开发
![screenshot_of_miniprogram](screenshot_of_miniprogram.png)
- **API集成**：
  - **主API服务**：pollinations.ai，不需要 key
    - 文本生成：使用Mistral模型
    - 图片生成：使用flux模型
  - **备用API服务**：siliconflow.cn，需要 key
    - 文本处理：使用Qwen/Qwen2.5-72B-Instruct-128K模型
    - 图片生成：使用Kwai-Kolors/Kolors模型
  - 系统会优先使用主API，当主API请求失败时自动切换到备用API

## 安装步骤

1. 克隆仓库到本地
   ```bash
   git clone https://github.com/你的用户名/FruitBookmark.git
   cd FruitBookmark
   ```

2. 配置API密钥
   - 复制配置文件模板
     ```bash
     cp miniprogram/utils/config.example.js miniprogram/utils/config.js
     ```
   - 编辑`miniprogram/utils/config.js`文件，填入您的API密钥和APPID
   - 运行配置更新脚本，将APPID从config.js同步到project.config.json
     ```bash
     node scripts/update-config.js
     ```

3. 使用微信开发者工具打开项目
   - 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
   - 打开微信开发者工具，选择「导入项目」
   - 选择项目目录，填入您的AppID（如果没有AppID，可以选择「测试号」）

## 使用说明

1. 在输入框中输入水果名称（10个字以内）
2. 点击生成按钮
3. 等待系统生成创意书签（可能需要一些时间）
4. 查看并保存生成的书签图片

## 配置说明

本项目使用了外部API服务，需要配置相关密钥才能正常使用。敏感信息存储在`miniprogram/utils/config.js`文件中（该文件已被添加到.gitignore，不会被提交到Git仓库）。

### 必要配置项

1. **API密钥**：用于调用备用API服务(siliconflow)的文本和图像生成服务
2. **AppID**：您的微信小程序AppID，用于小程序的身份识别和服务调用

请确保在`miniprogram/utils/config.js`文件中正确填写这些信息：
```javascript
module.exports = {
  // API密钥
  API_KEY: 'your_api_key_here',
  
  // API基础URL
  API_BASE_URL: 'https://api.siliconflow.cn/v1',
  
  // 微信小程序AppID - 此值将被自动同步到project.config.json
  APPID: 'your_appid_here',
};
```

### 配置文件示例

```javascript
module.exports = {
  // API密钥 - 请替换为您自己的密钥
  API_KEY: 'your_api_key_here',
  
  // API基础URL
  API_BASE_URL: 'https://api.siliconflow.cn/v1',
  
  // 其他配置信息
  // APPID: 'your_appid_here',
  // SECRET: 'your_secret_here',
};
```

## 注意事项

- 输入文字限制在10个字以内
- 生成的话语限制在50-70字以内
- 图片生成可能需要一定时间，请耐心等待
- 请勿将包含API密钥和APPID的配置文件提交到公共仓库
- 每次修改config.js中的APPID后，都需要运行`node scripts/update-config.js`更新project.config.json
- 系统会优先使用pollinations.ai作为主API服务，仅在主API请求失败时才会使用siliconflow作为备用API

## 许可证

[MIT](LICENSE)