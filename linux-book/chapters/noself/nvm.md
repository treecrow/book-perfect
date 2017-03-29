# nvm Node Version Manager
- [使用nvm安装管理多个版本的node.js(适用于Mac和Windows系统)](https://zhuanlan.zhihu.com/p/24698499)
- [ubuntu通过tnvm安装Nodejs](http://www.cnblogs.com/ystrdy/p/6025058.html)

## 安装

#### 安装或更新nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
#### 安装tnvm
```
wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash
export METHOD=script
source .bashrc
```
#### 设置多个版本的node共用一个npm的全局目录
```
cd
npm set prefix ".tnvm/"
//全局模块加载路径
export NODE_PATH="/home/treecrow/.tnvm/lib/node_modules/"
//命令行环境变量
export PATH="/home/treecrow/.tnvm/bin/":$PATH
//使环境变量生效
source .bashrc
```

## 命令
命令 | 含义 
----|------
nvm install v6.9.1|安装指定版本的 Node.js
nvm uninstall [nodeversion]|删除指定版本的 Node.js
nvm current|显示当前使用的 Node.js 版本
nvm ls|查看当前安装的 Node.js 版本列表
nvm use v6.9.1|指定当前使用的 Node.js 版本
nvm reinstall-packages [npmversion]|在当前的 Node.js 版本下，安装指定版本的 npm 包管理器
nvm ls-remote node|-
nvm ls-remote iojs|-
nvm alias default v5.0.0|设置默认node版本
