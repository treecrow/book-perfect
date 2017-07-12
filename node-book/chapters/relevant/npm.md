# Npm

- 设置npm镜像(查看使用npm config list）

  ```
  npm config set registry " https://registry.npm.taobao.org "
  npm config set registry http://registry.hz:4873
  ```

## 命令列表

命令                    | 含义
--------------------- | -----------------------------
npm -v                | 查看版本号
npm list -g           | 查看所有全局安装的模块
npm list xxx          | 查看某个模块的版本号
npm ls                | 查看安装的模块列表
npm update xxx        | 更新模块
npm update xxx -g     | 把全局安装的对应命令行程序更新至最新版
npm search xxx        | 搜索模块
npm init              | 创建模块
npm adduser           | 注册用户
npm publish           | 发布模块
npm cache clear       | 清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的
npm unpublish xxx@版本号 | 撤销发布自己发布过的某个版本代码

- [如何清除已设置的npm淘宝镜像？](https://segmentfault.com/q/1010000004596263)
