# 安装nvm&&node

## nvm

```bash
// 安装NVM
brew install nvm
// 创建.bash_profile文件
touch ~/.bash_profile
// 向.bash_profile添加如下内容
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
// 生效
source ～/.bash_profile
```

## node && npm

```bash
// 查看 Node 版本
nvm ls-remote node
// 选择Node 版本安装
nvm install v6.9.1
// 使用制定版本 Node
nvm use v5.0.0
nvm alias default v5.0.0
```