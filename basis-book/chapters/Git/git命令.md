# git命令

## 提交commit时的签名

| 命令                                 | 含义         |
|------------------------------------|------------|
| git config --global user.name xxx  | 全局中设置名字和邮箱 |
| git config --global user.email xxx | ~          |
| git config user.name xxx           | 项目中设置名字和邮箱 |
| git config user.email xxx          | ~          |

## 常用

| 命令                          | 含义            |
|-----------------------------|---------------|
| git clone xxx               | Clone一个仓库     |
| git init                    | 初始化一个新仓库      |
| git add file1 file2 file3   | 将多个文件添加到索引    |
| git add .                   | 将所有文件添加到索引    |
| git rm file1                | 删除文件          |
| git commit -m 'some remark' | 索引中大内容提交到当前分支 |

## 查看区别

| 命令                     | more                       |
|------------------------|----------------------------|
| git status             | 让我们时刻掌握仓库当前的状态             |
| git diff               | 显示当前你所有已做的但没有加入到索引里的修改     |
| git diff --cached      | 显示你当前的索引和上次提交间的差异          |
| git diff HEAD          | 显示你工作目录与上次提交时之间的所有差别       |
| git diff xxx           | 查看xxx分支与当前分支的区别            |
| git diff master..xxx   | 查看xxx分支和master的区别          |
| git diff HEAD -- ./lib | 显示你当前工作目录下的lib目录与上次提交之间的差别 |

## 分枝

| 命令                         | 含义                          |
|----------------------------|-----------------------------|
| git branch xxx             | 创建分枝                        |
| git branch                 | 查看所有分支列表                    |
| git checkout xxx           | 切换分支                        |
| git checkout -b xxx        | 创建+切换分支                     |
| git branch -d xxx          | 删除分枝（只能删除那些已经被当前分支合并的分支）    |
| git branch -D xxx          | 强制删除分枝                      |
| git merge xxx              | 将 xxx 分支合并到当前分支             |
| git checkout -b xxx origin | 基于远程分支origin 创建分支,并切换到对应分支上 |

## 日志

| 命令                                                     | more                                        |
|--------------------------------------------------------|---------------------------------------------|
| git log                                                | 显示所有的提交（commit）                             |
| git log -p                                             | 显示提交日志中带有补丁                                 |
| git log --stat                                         | 显示在每个提交(commit)中哪些文件被修改了, 这些文件分别添加或删除了多少行内容 |
| git log --pretty=oneline                               | 格式化日志                                       |
| git log --pretty=format:'%h was %an, %ar, message: %s' | 自定义格式化日志                                    |
| git log  --graph                                       | 可视化提交图                                      |
| git log --reverse                                      | 逆向显示日志                                      |
| git reflog                                             | 可以查看所有分支的所有操作记录                             |

## push

| 命令                           | more                            |
|------------------------------|---------------------------------|
| git push -u origin master    | 把本地库的所有内容推送到远程库上(初次推送)          |
| git push -u origin master -f | 强制推送（强制使用本地版本替代云端版本）            |
| git push origin master       | 正常推送（把本地master分支的最新修改推送至GitHub） |
| git push origin xxx          | 推送xxx分支                         |

## 撤销/回退版本

| 命令                                                        | 含义                          |
|-----------------------------------------------------------|-----------------------------|
| git checkout -- file                                      | 把 file 文件在工作区的修改全部撤销        |
| git reset HEAD readme.txt                                 | 把暂存区的修改撤销掉（unstage），重新放回工作区 |
| git reset --hard HEAD                                     | 让工作区回到上一次提交后的状态             |
| git reset --hard ORIG_HEAD                                | -                           |
| git reset --hard 63a6ec037e6c821c46eefcf7c4618dd37e244b92 | 回到指定版本号                     |
| git revert HEAD                                           | 创建了一个撤消了上次提交(HEAD)的新提交      |

## 远程仓库

| 命令                        | more            |
|---------------------------|-----------------|
| git remote                | 查看远程库的信息        |
| git remote -v             | 查看远程库的更详细的信息    |
| git remote add origin ××× | 添加到远程库（关联一个远程库） |
| git clone xxx             | 克隆远程库xxx        |

## 储藏

| 命令                                           | more                                                           |
|----------------------------------------------|----------------------------------------------------------------|
| git stash "work in progress for foo feature" | 保存你的本地修改到储藏(stash)中, 然后将你的工作目录和索引里的内容全部重置, 回到你当前所在 分支的上次提交时的状态 |
| git stash apply                              | 恢复到到以前的工作状态                                                    |

## rebase

| 命令                          | more |
|-----------------------------|------|
| git rebase --continue       | -    |
| git rebase --abort          | -    |
| git rebase -i origin/master | -    |
