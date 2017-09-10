# linux系统

> 阿里云 linux 重置后的部署

## 重置步骤

1. 安装 git
2. 安装 && 激活 nvm
3. 使用 nvm 安装并使用指定版本等 Node

## 安装 git

```bash
yum install git
```

## 安装 && 激活 nvm

```bash
// 下载 nvm
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
// 激活 nvm
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
```

## 使用 nvm 安装并使用指定版本等 Node

```bash
// 查看可使用的 Node 版本
nvm list-remote
// 安装指定版本的 Node
nvm install v8.0.0
// 使用指定版本的 Node
nvm use v8.0.0
```