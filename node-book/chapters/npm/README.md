# npm

## npm 可以做什么？

- 限制代码给指定的开发者
- 使用 npm 运行未下载的包
- 管理代码版本和代码依赖
- Update applications easily when underlying code is updated.
- Discover multiple ways to solve the same puzzle.
- Find other developers who are working on similar problems.

## npm 淘宝镜像(查看使用 npm config list）

```
  npm config set registry " https://registry.npm.taobao.org "
  npm config set registry http://registry.hz:4873
```

* [如何清除已设置的 npm 淘宝镜像？](https://segmentfault.com/q/1010000004596263)

## 命令列表

| 概括             | 命令                                       | 含义                                                            |
| ---------------- | ------------------------------------------ | --------------------------------------------------------------- |
| 其他             | -                                          | -                                                               |
| ~                | sudo npm install npm -g                    | 升级 npm                                                        |
| ~                | npm -v                                     | 查看版本号                                                      |
| ~                | npm init                                   | 创建模块                                                        |
| ~                | npm init --yes                             | 根据当前项目创建默认的 package.json                             |
| ~                | npm help                                   | -                                                               |
| ~                | npm cache clear                            | 清空 NPM 本地缓存，用于对付使用相同版本号发布新版本代码的人     |
| ~                | npm docs                                   | 打开代码托管的页面                                              |
| 安装／卸载／更新 | -                                          | -                                                               |
| ~                | `npm install <Module Name>`                | 本地安装模块,将安装包放在 ./node_modules 下                     |
| -                | `npm install <Module Name> -g`             | 全局安装模块,将安装包放在 /usr/local 下或者你 node 的安装目     |
| -                | `npm install <Module Name> -D／--save-dev` | -                                                               |
| -                | `npm install <Module Name> -S／--save`     | -                                                               |
| -                | `npm uninstall <Module Name>`              | 卸载模块                                                        |
| -                | `npm update <Module Name>`                 | 把当前目录下 node_modules 子目录里边的对应模块更新至最新版本    |
| -                | `npm update <Module Name> -g`              | 把全局安装的对应命令行程序更新至最新版                          |
| 查看             | -                                          | -                                                               |
| ~                | npm list -g                                | 查看所有全局安装的模块                                          |
| -                | `npm list <Module Name>`                   | 查看某个模块的版本号                                            |
| -                | npm ls                                     | 查看安装的模块列表                                              |
| -                | `npm search <Module Name>`                 | 搜索模块                                                        |
| 公开模块         | -                                          | -                                                               |
| ~                | npm adduser                                | 注册用户                                                        |
| -                | npm publish                                | 发布模块                                                        |
| -                | npm cache clear                            | 清空 NPM 本地缓存，用于对付使用相同版本号发布新版本代码的       |
| -                | `npm unpublish <package>@<version>`        | 撤销发布自己发布过的某个版本代码                                |
| npm config       | -                                          | -                                                               |
| ~                | npm config set proxy null                  | 解决错误：`npm err! Error: connect ECONNREFUSED 127.0.0.1:8087` |
| -                | `npm config set registry <Registry Url>`   | 设置镜像源                                                      |

## 版本号

> 语义版本号分为 X.Y.Z 三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新

| 原则 | more                                            |
| ---- | ----------------------------------------------- |
| -    | 如果只是修复 bug，需要更新 Z 位。               |
| -    | 如果是新增了功能，但是向下兼容，需要更新 Y 位。 |
| -    | 如果有大变动，向下不兼容，需要更新 X 位         |