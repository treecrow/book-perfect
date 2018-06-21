# git相关知识点整理

## 相关文档

- [Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [Git教程](https://www.yiibai.com/git/)

## git命令(已熟悉)

| 分类                 | 命令                                                     | 含义                                                                             |
| -------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 项目初始化           | git clone xxx                                            | 克隆远程库xxx                                                                    |
| ~                    | git init                                                 | 初始化一个新仓库                                                                 |
| 代码状态             | git status                                               | 查看所有分支的改动                                                               |
| ~                    | git status master                                        | 查看 master 分支上的改动                                                         |
| 添加文件             | git add file1 file2 file3                                | 将多个文件添加到暂存区                                                           |
| ~                    | git add .                                                | 将所有文件添加到暂存区                                                           |
| 删除文件             | git rm xxx                                               | 删除文件                                                                         |
| 提交                 | git commit -m 'some remark'                              | 暂存区中大内容提交到当前分支（commit可以一次提交很多文件）                       |
| 推送                 | git push -u origin master                                | 把本地库的所有内容推送到远程库上(初次推送)                                       |
| ~                    | git push -u origin master -f                             | 强制推送（强制使用本地版本替代云端版本）                                         |
| ~                    | git push origin master                                   | 正常推送（把本地master分支的最新修改推送至GitHub）                               |
| ~                    | git push origin xxx                                      | 推送xxx分支                                                                      |
| 分支                 | git branch                                               | 查看本地所有分支                                                                 |
| ~                    | git branch -r                                            | 查看远程所有分支                                                                 |
| ~                    | git branch -a                                            | 查看本地和远程所有分支                                                           |
| ~                    | git branch xxx                                           | 创建分枝但不切换到对应分支上                                                     |
| ~                    | git branch -d/-D xxx                                     | 删除/强制删除分枝（只能删除那些已经被当前分支合并的分支）                        |
| ~                    | git branch -d -r xxx                                     | 删除远程分支（删除后需要 git push origin xxx 推送到远程服务器）                  |
| ~                    | git branch -m/-M xxx xxx                                 | 修改/强制修改分支名（先删除远程待修改分支）                                      |
| ~                    | git branch --set-upstream master origin/next             | 指定本地 master 分支追踪 origin/next 分支                                        |
| 切换分支             | git checkout -- someFile                                 | 把 someFile 文件在工作区的修改全部撤销                                           | ❌ |
| ~                    | git checkout xxx                                         | 切换分支                                                                         |
| ~                    | git checkout -b xxx                                      | 创建+切换分支                                                                    |
| ~                    | git checkout -b xxx origin/master                        | 基于远程分支 origin/master 创建分支,并切换到对应分支上                           |
| 取回更新             | git fetch                                                | 将远程所有分支的更新，全部取回本地                                               |
| ~                    | git fetch origin master                                  | 取回origin主机的master分支的更新                                                 |
| 合并分支             | git merge xxx                                            | 将 xxx 分支合并到当前分支                                                        |
| ~                    | git merge origin/master                                  | 在当前分支上，合并origin/master                                                  |
| ~                    | git merge --abort                                        | 冲突时取消合并                                                                   |
| 重新应用（类似合并） | git rebase origin/master                                 | 在 origin/master  分支基础之上重新应用，用于把一个分支的修改合并到当前分支       |
| ~                    | git rebase --continue                                    | 让git继续应用(apply)余下的补丁                                                   |
| ~                    | git rebase --abort                                       | 用--abort参数来终止rebase的操作，并且”mywork“ 分支会回到rebase开始前的状态     |
| 拉取+合并            | git pull <远程主机名> <远程分支名>:<本地分支名>          | 把远程分支的代码拉取下来并合并到本地分支                                         |
| ~                    | git pull origin next                                     | 远程分支(next)要与当前分支合并                                                   |
| ~                    | git pull origin                                          | 本地的当前分支自动与对应的origin主机”追踪分支”(remote-tracking branch)进行合并 |
| ~                    | git pull                                                 | 如果当前分支只有一个追踪分支，连远程主机名都可以省略                             |
| ~                    | git pull --rebase <远程主机名> <远程分支名>:<本地分支名> | 合并使用 rebase 模式                                                             |
| 远程库               | git remote                                               | 查看远程库的信息                                                                 |
| ~                    | git remote -v                                            | 查看远程库的更详细的信息                                                         |
| ~                    | git remote add iview url                                 | 添加到远程库（关联一个远程库）并命名远程库为 iview                               |






## git命令(待熟悉)

| 命令                                                      | 含义                                                                                                             |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| git config --global user.name xxx                         | 全局中设置名字和邮箱                                                                                             |
| git config --global user.email xxx                        | ~                                                                                                                |
| git config user.name xxx                                  | 项目中设置名字和邮箱                                                                                             |
| git config user.email xxx                                 | ~                                                                                                                |
| git diff                                                  | 显示当前你所有已做的但没有加入到索引里的修改                                                                     |
| git diff --cached                                         | 显示你当前的索引和上次提交间的差异                                                                               |
| git diff HEAD                                             | 显示你工作目录与上次提交时之间的所有差别                                                                         |
| git diff xxx                                              | 查看xxx分支与当前分支的区别                                                                                      |
| git diff master..xxx                                      | 查看xxx分支和master的区别                                                                                        |
| git diff HEAD -- ./lib                                    | 显示你当前工作目录下的lib目录与上次提交之间的差别                                                                |
| git log                                                   | 显示所有的提交（commit）                                                                                         |
| git log -p                                                | 显示提交日志中带有补丁                                                                                           |
| git log --stat                                            | 显示在每个提交(commit)中哪些文件被修改了, 这些文件分别添加或删除了多少行内容                                     |
| git log --pretty=oneline                                  | 格式化日志                                                                                                       |
| git log --pretty=format:'%h was %an, %ar, message: %s'    | 自定义格式化日志                                                                                                 |
| git log  --graph                                          | 可视化提交图                                                                                                     |
| git log --reverse                                         | 逆向显示日志                                                                                                     |
| git reflog                                                | 可以查看所有分支的所有操作记录                                                                                   |
| git reset HEAD readme.txt                                 | 把暂存区的修改撤销掉（unstage），重新放回工作区                                                                  |
| git reset --hard HEAD                                     | 让工作区回到上一次提交后的状态                                                                                   |
| git reset --hard ORIG_HEAD                                | -                                                                                                                |
| git reset --hard 63a6ec037e6c821c46eefcf7c4618dd37e244b92 | 回到指定版本号                                                                                                   |
| git revert HEAD                                           | 创建了一个撤消了上次提交(HEAD)的新提交                                                                           |
| git stash "work in progress for foo feature"              | 保存你的本地修改到储藏(stash)中, 然后将你的工作目录和索引里的内容全部重置, 回到你当前所在 分支的上次提交时的状态 |
| git stash apply                                           | 恢复到到以前的工作状态                                                                                           |
| git stash                                                 | 把当前工作现场"储藏"起来，等以后恢复现场后继续工作                                                               |
| git stash list                                            | 储藏的工作现场列表                                                                                               |
| git stash pop                                             | 根据储藏的工作现场恢复工作现场                                                                                   |
| git stash apply stash@{0}                                 | 根据储藏的工作现场恢复指定的某个工作现场                                                                         |
| git tag                                                   | -                                                                                                                |
| git tag v1.0                                              | -                                                                                                                |
| git tag v0.9 6224937                                      | -                                                                                                                |
| git tag -a v0.1 -m "version 0.1 released" 3628164         | -                                                                                                                |
| git show tagName                                          | -                                                                                                                |
| git tag -d v0.1                                           | -                                                                                                                |
| git tag -d v0.9                                           | -                                                                                                                |


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
