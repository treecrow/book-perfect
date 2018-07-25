# npm

## 相关文档

- [npm 中文文档](https://www.npmjs.com.cn/)

## 命令列表

| 概括     | 命令                                                            | 含义                                                            |
| -------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| npm 配置 | npm config edit                                                 | 编辑 npm 配置文件                                               |
| ~        | npm config set prefix ‘~/.npm-global‘                         | 配置npm使用新路径                                               |
| ~        | npm config set proxy null                                       | 解决错误：`npm err! Error: connect ECONNREFUSED 127.0.0.1:8087` |
| ~        | npm config set registry https://registry.npm.taobao.org/        | 设置镜像源                                                      |
| ~        | npm config set registry http://registry.npmjs.org/              | 设置镜像源                                                      |
| ~        | npm config get registry                                         | 获取镜像源                                                      |
| ~        | npm config set disturl xxx                                      | ?                                                               |
| ~        | npm config delete registry                                      | -                                                               |
| ~        | npm config delete disturl                                       | -                                                               |
| 安装模块 | npm install <package_name>                                      | package.json有对应版本就安装指定版本，没有就安装最新版本        |
| -        | npm install <package_name> -g                                   | 全局安装模块                                                    |
| -        | npm i -D <package_name> ／npm install --save-dev <package_name> | -                                                               |
| -        | npm install --save <package_name>／ npm i -S <package_name>     | -                                                               |
| 卸载模块 | npm uninstall <package_name>                                    | 卸载模块                                                        |
| ~        | npm uninstall -g <package_name>                                 | 卸载全局模块                                                    |
| 更新模块 | npm outdated                                                    | 检测模块是否有过期的                                            |
| ~        | npm update                                                      | 将本地所有模块更新为最新                                        |
| ~        | npm update <package_name>                                       | 把当前目录下 node_modules 子目录里边的对应模块更新至最新版本    |
| ~        | npm outdated -g --depth=0                                       | 检测全局模块是否有过期的                                        |
| ~        | npm update -g                                                   | 将全局所有模块更新为最新                                        |
| ~        | npm update <package_name> -g                                    | 把全局安装的对应命令行程序更新至最新版                          |
| ~        | npm install npm@latest -g                                       | 更新 npm 模块                                                   |
| 公开模块 | npm adduser                                                     | 注册用户                                                        |
| ~        | npm login                                                       | 登录 npm                                                        |
| ~        | npm whoami                                                      | 检测当前登录的 npm 账号是哪个                                   |
| ~        | npm publish                                                     | 发布模块                                                        |
| ~        | npm unpublish <package>@<version>                               | 撤销发布自己发布过的某个版本代码                                |
| ~        | npm version someVersion                                         | -                                                               |
| -        | npm cache clear                                                 | 清空 NPM 本地缓存，用于对付使用相同版本号发布新版本代码的       |
| 创建模块 | npm init                                                        | 创建模块                                                        |
| ~        | npm init --yes                                                  | 根据当前项目创建默认的 package.json                             |
| 查看     | -                                                               | -                                                               |
| ~        | npm list -g                                                     | 查看所有全局安装的模块                                          |
| -        | `npm list <Module Name>`                                        | 查看某个模块的版本号                                            |
| -        | npm ls                                                          | 查看安装的模块列表                                              |
| -        | `npm search <Module Name>`                                      | 搜索模块                                                        |
| 其他     | -                                                               | -                                                               |
| ~        | sudo npm install npm -g                                         | 升级 npm                                                        |
| ~        | npm -v                                                          | 查看版本号                                                      |
| ~        | npm help                                                        | -                                                               |
| ~        | npm cache clear                                                 | 清空 NPM 本地缓存，用于对付使用相同版本号发布新版本代码的人     |
| ~        | npm docs                                                        | 打开代码托管的页面                                              |
| ~        | npm info                                                        | 查看模块信息                                                    |