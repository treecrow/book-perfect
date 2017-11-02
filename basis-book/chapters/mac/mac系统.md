# mac

## 重置步骤

1. 下载安装软件
2. 设置系统
3. 安装 brew
4. 安装 nvm 、node
5. 安装 zsh
6. 设置 github ssh
7. .DS_Store

## 软件列表

| 软件            | 功能       |
|---------------|----------|
| wechat        | -        |
| qq            | -        |
| 网易云音乐         | -        |
| 小米云服务         | -        |
| chrome        | -        |
| vsCode        | -        |
| lantern       | 科学上网     |
| Dr.Unarchiver | 压缩解压     |
| appcleaner    | 卸载软件     |
| iHosts        | 修改 hosts |
| cheetsheet    | 显示应用快捷键  |
| tickets       | 打字出声音    |
| Spectacle     | 窗口规范化放置  |
| Pap.er        | 修改桌面壁纸   |

## 设置系统列表

| 作用            | 步骤                                        |
|---------------|-------------------------------------------|
| 设置轻触单击        | setting-触控板- 轻点来点按                        |
| 将Dock停靠在屏幕左边  | setting-Dock                              |
| 快速锁定屏幕（触发角功能） | setting-桌面与屏幕保护程序-屏幕保护程序-触发角-将显示器置入睡眠状态   |
| 设置睡眠就需要密码     | setting-安全性与隐私-通用-进入睡眠或开始屏幕保护程序 立即 要求输入密码 |
| Finder 设置用户文件 | Finder->偏好设置->边栏                          |
| 全键盘控制模式       | setting-键盘-快捷键-所有控制                       |
| 自动隐藏菜单栏       | setting->通用                               |
| 设置 safari 主页  | -                                         |
| 关闭Dashboard   | setting->Mission Control ->               |
| 禁止多个桌面自动调制位置  | setting->Mission Control ->               |

## 安装 brew

``` javascript
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 安装  nvm 、node

- nvm

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

- node && npm 

```bash
// 查看 Node 版本
nvm ls-remote node
// 选择Node 版本安装
nvm install v6.9.1
// 使用制定版本 Node
nvm use v5.0.0
nvm alias default v5.0.0
```

## 安装 zsh

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

## 设置 github ssh

```bash
// 设置git的user.name和email
git config --global user.name "treecrow"
git config --global user.email "drytreecrow@gmail.com" 
// 生成私钥和公钥
ssh-keygen -t rsa -C "drytreecrow@gmail.com"
ssh-add -K id_rsa
// 添加 私密钥 到ssh(一般不需要做这一步)
id_rsa.pub
// 拷贝 id_rsa.pub 中的公钥到github
// ...
```

## .DS_Store

### 禁止.DS_store生成

```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
// 重启Mac
```

### 恢复.DS_store生成

```bash
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```

## 其它

- [Mac技巧之用苹果电脑自带的钥匙串访问（Keychain Access）记录需要密码保护的重要/敏感信息](http://www.mac52ipod.cn/post/mac-keychain-access-password-protected-inportant-info.php)
