# Reset system

> 重置系统流程

## 安装各种软件；

## 同步 vscode 配置；

## 安装 [brew](https://brew.sh/)；

- [Homebrew 国内如何自动安装](https://zhuanlan.zhihu.com/p/111014448)
- 重启终端 source /Users/wangzhihui/.zprofile

## switchHost 配置 github520

- url: https://raw.fastgit.org/521xueweihan/GitHub520/main/hosts

## 安装 zsh

```bash
# 安装
brew install zsh
# 将預設的 shell 修改为 zsh
chsh -s /bin/zsh

# 下载 oh-my-zsh
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

# 打开.zshrc
open -e ~/.zshrc
# 添加下面内容
source ~/.bash_profile
```

## 安装 nvm

```bash
brew install nvm
echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile
```

## 整理 ssh

```bash
# 生成 ssh
ssh-keygen
```

## 设置 npm

```bash
# 安装 nrm
npm install -g nrm
```
