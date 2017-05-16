# brew

- [Mac OS X系统 HomeBrew的安装和简单使用](http://blog.csdn.net/G_eorge/article/details/51378654)

## 安装Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 命令列表

命令                 | 含义
------------------ | ------------------
brew install xxx   | 安装xxx
brew remove xxx    | -
brew cleanup git   | 清除单个软件
brew cleanup       | 清除所有软件
brew info xxx      | 显示包信息
brew search        | -
brew outdated      | 查看那些已安装的程序需要更新
brew upgrade git   | 更新指定软件
brew update        | 更新Homebrew
brew uninstall git | -
brew list          | 显示已安装的包
brew home []       | 用浏览器打开相关包的页面
brew deps []       | 显示包依赖
brew server        | 启动web服务器，可以通过浏览器访问
brew -h            | brew帮助

## 卸载Homebrew

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
    cd `brew –prefix`
    rm -rf Cellar
    brew prune
    rm `git ls-files`
    rm -rf Library .git .gitignore bin/brew
    rm  -rf README.md share/man/man1/brew
    rm -rf Library/Homebrew Library/Aliases
    rm -rf Library/Formula Library/Contributions
    rm -rf ~/Library/Caches/Homebrew
```
