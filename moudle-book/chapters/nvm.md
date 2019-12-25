# [nvm](https://github.com/nvm-sh/nvm)

## 相关文档

- [MAC：通过NVM安装指定版本的node](http://www.jianshu.com/p/a6044bd2ad35)
- [使用nvm安装管理多个版本的node.js(适用于Mac和Windows系统)](https://zhuanlan.zhihu.com/p/24698499)
- [ubuntu通过tnvm安装Nodejs](http://www.cnblogs.com/ystrdy/p/6025058.html)

## 安装步骤

```
// 安装NVM
brew install nvm
// 创建.bash_profile文件(如果有就不需要了)
touch ~/.bash_profile
// 向.bash_profile添加如下内容
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
// 使生效
source ～/.bash_profile
```

## 命令

| 命令                                | 含义                                                 |
| ----------------------------------- | ---------------------------------------------------- |
| nvm ls-remote node                  | 查看 所有的node可用版本                              |
| nvm current                         | 显示当前使用的 Node.js 版本                          |
| nvm ls                              | 查看当前安装的 Node.js 版本列表                      |
| nvm install v6.9.1                  | 安装指定版本的 Node.js                               |
| nvm install node                    | 安装最新版本的Node                                  |
| nvm uninstall [nodeversion]         | 删除指定版本的 Node.js                               |
| nvm use v6.9.1                      | 指定当前使用的 Node.js 版本                          |
| nvm use node                        | 使用当前安装的node版本                               |
| nvm reinstall-packages [npmversion] | 在当前的 Node.js 版本下，安装指定版本的 npm 包管理器 |
| nvm alias default v5.0.0            | 每次启动终端都使用该版本的node                       |
