# git相关知识点整理

## 相关文档

- [Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## git命令

### 提交commit时的签名  

| 命令                               | 含义                 |
| ---------------------------------- | -------------------- |
| git config --global user.name xxx  | 全局中设置名字和邮箱 |
| git config --global user.email xxx | ~                    |
| git config user.name xxx           | 项目中设置名字和邮箱 |
| git config user.email xxx          | ~                    |

### 常用

| 命令                        | 含义                                                       |
| --------------------------- | ---------------------------------------------------------- |
| git init                    | 初始化一个新仓库                                           |
| git add file1 file2 file3   | 将多个文件添加到暂存区                                     |
| git add .                   | 将所有文件添加到暂存区                                     |
| git rm xxx                  | 删除文件                                                   |
| git commit -m 'some remark' | 暂存区中大内容提交到当前分支（commit可以一次提交很多文件） |

### 查看区别

| 命令                   | more                                              |
| ---------------------- | ------------------------------------------------- |
| git status             | 让我们时刻掌握仓库当前的状态                      |
| git diff               | 显示当前你所有已做的但没有加入到索引里的修改      |
| git diff --cached      | 显示你当前的索引和上次提交间的差异                |
| git diff HEAD          | 显示你工作目录与上次提交时之间的所有差别          |
| git diff xxx           | 查看xxx分支与当前分支的区别                       |
| git diff master..xxx   | 查看xxx分支和master的区别                         |
| git diff HEAD -- ./lib | 显示你当前工作目录下的lib目录与上次提交之间的差别 |

### 分枝

| 命令                       | 含义                                             |
| -------------------------- | ------------------------------------------------ |
| git branch xxx             | 创建分枝                                         |
| git branch                 | 查看所有分支列表                                 |
| git checkout xxx           | 切换分支                                         |
| git checkout -b xxx        | 创建+切换分支                                    |
| git branch -d xxx          | 删除分枝（只能删除那些已经被当前分支合并的分支） |
| git branch -D xxx          | 强制删除分枝                                     |
| git merge xxx              | 将 xxx 分支合并到当前分支                        |
| git checkout -b xxx origin | 基于远程分支origin 创建分支,并切换到对应分支上   |

### 日志

| 命令                                                   | more                                                                         |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| git log                                                | 显示所有的提交（commit）                                                     |
| git log -p                                             | 显示提交日志中带有补丁                                                       |
| git log --stat                                         | 显示在每个提交(commit)中哪些文件被修改了, 这些文件分别添加或删除了多少行内容 |
| git log --pretty=oneline                               | 格式化日志                                                                   |
| git log --pretty=format:'%h was %an, %ar, message: %s' | 自定义格式化日志                                                             |
| git log  --graph                                       | 可视化提交图                                                                 |
| git log --reverse                                      | 逆向显示日志                                                                 |
| git reflog                                             | 可以查看所有分支的所有操作记录                                               |

### push

| 命令                         | more                                               |
| ---------------------------- | -------------------------------------------------- |
| git push -u origin master    | 把本地库的所有内容推送到远程库上(初次推送)         |
| git push -u origin master -f | 强制推送（强制使用本地版本替代云端版本）           |
| git push origin master       | 正常推送（把本地master分支的最新修改推送至GitHub） |
| git push origin xxx          | 推送xxx分支                                        |

### 撤销/回退版本

| 命令                                                      | 含义                                            |
| --------------------------------------------------------- | ----------------------------------------------- |
| git checkout -- file                                      | 把 file 文件在工作区的修改全部撤销              |
| git reset HEAD readme.txt                                 | 把暂存区的修改撤销掉（unstage），重新放回工作区 |
| git reset --hard HEAD                                     | 让工作区回到上一次提交后的状态                  |
| git reset --hard ORIG_HEAD                                | -                                               |
| git reset --hard 63a6ec037e6c821c46eefcf7c4618dd37e244b92 | 回到指定版本号                                  |
| git revert HEAD                                           | 创建了一个撤消了上次提交(HEAD)的新提交          |

### 远程仓库

| 命令                      | more                           |
| ------------------------- | ------------------------------ |
| git remote                | 查看远程库的信息               |
| git remote -v             | 查看远程库的更详细的信息       |
| git remote add origin ××× | 添加到远程库（关联一个远程库） |
| git clone xxx             | 克隆远程库xxx                  |

### 储藏

| 命令                                         | more                                                                                                             |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| git stash "work in progress for foo feature" | 保存你的本地修改到储藏(stash)中, 然后将你的工作目录和索引里的内容全部重置, 回到你当前所在 分支的上次提交时的状态 |
| git stash apply                              | 恢复到到以前的工作状态                                                                                           |
| git stash                                    | 把当前工作现场"储藏"起来，等以后恢复现场后继续工作                                                               |
| git stash list                               | 储藏的工作现场列表                                                                                               |
| git stash pop                                | 根据储藏的工作现场恢复工作现场                                                                                   |
| git stash apply stash@{0}                    | 根据储藏的工作现场恢复指定的某个工作现场                                                                         |

### rebase

| 命令                        | more |
| --------------------------- | ---- |
| git rebase --continue       | -    |
| git rebase --abort          | -    |
| git rebase -i origin/master | -    |

### 标签管理

| 命令                                              | 含义 |
| ------------------------------------------------- | ---- |
| git tag                                           | -    |
| git tag v1.0                                      | -    |
| git tag v0.9 6224937                              | -    |
| git tag -a v0.1 -m "version 0.1 released" 3628164 | -    |
| git show tagName                                  | -    |
| git tag -d v0.1                                   | -    |
| git push origin v1.0                              | -    |
| git push origin --tags                            | -    |
| git tag -d v0.9                                   | -    |
| git push origin :refs/tags/v0.9                   | -    |

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

## gitignore

| 规则      | more             |
| --------- | ---------------- |
| /mtk/     | 过滤整个文件夹   |
| *.zip     | 过滤所有.zip文件 |
| /mtk/do.c | 过滤某个具体文件 |
