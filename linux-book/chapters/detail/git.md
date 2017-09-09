# git相关知识点整理

- github ssh添加:[多个ssh的问题](http://www.bkjia.com/Androidjc/837965.html)

## 安装

```
apt-get update
apt-get install git
git --version
```

## 创建/添加/删除/提交/关联/推送/克隆

命令                                  | 含义
----------------------------------- | ---------------------------------
git init                            | 创建版本库（把某个目录变成Git可以管理的仓库）
git add readme.txt                  | 把文件修改添加到暂存区（可以多次add）
git rm test.txt                     | 删除文件
git commit -m "wrote a readme file" | 暂存区的所有内容提交到当前分支（commit可以一次提交很多文件）
git remote add origin ×××           | 添加到远程库（关联一个远程库）
git push -u origin master           | 把本地库的所有内容推送到远程库上(初次推送)
git push -u origin master -f        | 强制推送（强制使用本地版本替代云端版本）
git push origin master              | 正常推送（把本地master分支的最新修改推送至GitHub）
git clone xxx                       | 克隆远程库xxx

## 查看状态

命令                          | 含义
--------------------------- | -------------------------------
git status                  | 让我们时刻掌握仓库当前的状态
git diff HEAD -- readme.txt | 查看某个文件具体修改了什么内容
git log(--pretty=oneline)   | 显示从最近到最远的提交日志
git reflog                  | Git提供了一个命令git reflog用来记录你的每一次命令

## 回退版本

命令                                                        | 含义
--------------------------------------------------------- | -------
git reset --hard HEAD^                                    | 回到上一个版本
git reset --hard 63a6ec037e6c821c46eefcf7c4618dd37e244b92 | 回到指定版本号

## 撤销修改

命令                        | 含义
------------------------- | ---------------------------
git reset HEAD readme.txt | 把暂存区的修改撤销掉（unstage），重新放回工作区
git checkout -- file      | 把readme.txt文件在工作区的修改全部撤销

## 分支

命令                                               | 含义
------------------------------------------------ | --------------------------------------------------------------
git branch                                       | 查看所有分支以及当前使用的分支
git branch xxx                                   | 创建xxx分支
git checkout xxx                                 | 切换分支
git checkout -b xxx                              | 创建+切换分支
git merge xxx                                    | 合并xxx分支到master
git log --graph --pretty=oneline --abbrev-commit | 用带参数的git log也可以看到分支的合并情况
git branch -d xxx                                | 删除xxx分支
git branch -D xxx                                | 强制删除xxx分支
git merge --no-ff -m "merge with no-ff" dev      | 强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息

## bug分支

命令                        | 含义
------------------------- | --------------------------
git stash                 | 把当前工作现场"储藏"起来，等以后恢复现场后继续工作
git stash list            | 储藏的工作现场列表
git stash pop             | 根据储藏的工作现场恢复工作现场
git stash apply stash@{0} | 根据储藏的工作现场恢复指定的某个工作现场

## 远程仓库

命令                  | 含义
------------------- | ------------
git remote          | 查看远程库的信息
git remote -v       | 查看远程库的更详细的信息
git push origin xxx | 推送xxx分支

## 标签管理

命令                                                | 含义
------------------------------------------------- | --
git tag                                           | -
git tag v1.0                                      | -
git tag v0.9 6224937                              | -
git tag -a v0.1 -m "version 0.1 released" 3628164 | -
git show tagName                                  | -
git tag -d v0.1                                   | -
git push origin v1.0                              | -
git push origin --tags                            | -
git tag -d v0.9                                   | -
git push origin :refs/tags/v0.9                   | -

## [多个ssh的问题](http://www.bkjia.com/Androidjc/837965.html)

```
//通过指定不同的文件名来生成不同的私钥文
ssh-keygen -t rsa -f ~/.ssh/id_rsa.work -C "Key for Work"
ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "Key for GitHub"

//新增ssh的配置文件，并修改权限
touch ~/.ssh/config
chmod 600 ~/.ssh/config

//修改config文件的内容
Host *.workdomain.com
    IdentityFile ~/.ssh/id_rsa.work
    User lee
Host github.com
    IdentityFile ~/.ssh/id_rsa.github
    User git
```
