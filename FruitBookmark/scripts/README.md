# 配置脚本使用说明

本目录包含用于项目配置的脚本文件。

## update-config.js

这个脚本用于从`miniprogram/utils/config.js`中读取APPID，并自动更新`project.config.json`文件，确保敏感信息不会被硬编码到版本控制系统中。

### 使用方法

1. 确保已经按照项目根目录README.md的说明创建并配置了`miniprogram/utils/config.js`文件
2. 运行以下命令更新配置：

```bash
node scripts/update-config.js
```

3. 脚本将自动读取config.js中的APPID并更新project.config.json文件

### 注意事项

- 每次修改`config.js`中的APPID后，都需要重新运行此脚本
- 在团队协作中，每个开发者都需要在本地运行此脚本，以使用自己的APPID
- 请勿将包含真实APPID的`config.js`文件提交到版本控制系统