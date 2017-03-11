# Git

## 创建版本库（把某个目录变成Git可以管理的仓库）
```
$ git init
```

## 常用命令
### 把文件放到Git仓库只需要两步
```
//把文件修改添加到暂存区（可以多次add）
$ git add readme.txt
//把暂存区的所有内容提交到当前分支（commit可以一次提交很多文件）
$ git commit -m "wrote a readme file"
```
### git status命令可以让我们时刻掌握仓库当前的状态
```
$ git status
```
### 查看某个文件具体修改了什么内容
```
$ git diff readme.txt 
```
### 显示从最近到最远的提交日志
```
$ git log
//简化的提交日志
$ git log --pretty=oneline
```
### Git提供了一个命令git reflog用来记录你的每一次命令
```
$ git reflog
```
- 切换版本
> 在Git中，用HEAD表示当前版本,上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100

```
//回到上一个版本
$ git reset --hard HEAD^

//回到指定版本号
git reset --hard 63a6ec037e6c821c46eefcf7c4618dd37e244b92
```
- 撤销修改（回到最近一次git commit或git add时的状态）
```
//回到最近一次git commit或git add时的状态
 git checkout -- readme.txt
 
 ==>如果已经add修改到暂存区
//把暂存区的修改撤销掉（unstage），重新放回工作区
 git reset HEAD readme.txt
```
- 删除文件
```
$ git rm test.txt
$ git commit -m "remove test.txt"
```
- 添加到远程库（关联一个远程库）
```
$ git remote add origin ×××
```

## 把本地库的所有内容推送到远程库上
### 初次推送
> 由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令

```
$ git push -u origin master
```
### 强制推送（强制使用本地版本替代云端版本）
```
$ git push -u origin master -f
```
### 正常推送（把本地master分支的最新修改推送至GitHub）
```
$ git push origin master
```


- github ssh添加:[多个ssh的问题](http://www.bkjia.com/Androidjc/837965.html)
