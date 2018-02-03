# 安装zsh

1. 安裝 zsh

```bash
// 安装
brew install zsh
// 将預設的 shell 修改为 zsh
chsh -s /bin/zsh
```

2. 安裝 oh-my-zsh

```bash
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

3. 修改 .zshrc

```bash
// 打开.zshrc
open -e ~/.zshrc
// 添加下面内容
source ~/.bash_profile
```