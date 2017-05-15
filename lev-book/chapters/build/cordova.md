# cordova

- [cordova中文网](http://cordova.axuer.com/)

## 命令列表

命令                                   | 作用
------------------------------------ | -------------
npm install -g cordova               | 安装Cordova
cordova create cordova-template      | 建一个项目
cordova platform add (platform name) | 添加一个平台
cordova run (platform name)          | 运行App
ordova platform ls                   | 检查你当前平台设置状况
cordova requirements                 | 检测是否满足构建平台的要求
cordova build                        | 为所有添加的平台构建app
cordova build (platform name)        | 选择限制平台构建app
cordova plugin add xxx               | 添加某个插件
cordova prepare                      | -

## 发布的步骤：

1. cordova-hcp build
2. WWW 目录下 chcp.json chcp.manifest 将更新
3. 将 WWW 目录下所有变化的文件FTP 到 m.levmob.com/AppUpdate 目录下
4. APP 启动后将自动更新到新版本
