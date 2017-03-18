# git相关知识点整理

命令|含义
---|---
git init|创建版本库（把某个目录变成Git可以管理的仓库）
git add readme.txt|把文件修改添加到暂存区（可以多次add）
git rm test.txt|删除文件
git commit -m "wrote a readme file"|暂存区的所有内容提交到当前分支（commit可以一次提交很多文件）
git remote add origin ×××|添加到远程库（关联一个远程库）
git push -u origin master|把本地库的所有内容推送到远程库上(初次推送)
git push -u origin master -f|强制推送（强制使用本地版本替代云端版本）
git push origin master|正常推送（把本地master分支的最新修改推送至GitHub）
git status|让我们时刻掌握仓库当前的状态
git diff readme.txt |查看某个文件具体修改了什么内容
git log|显示从最近到最远的提交日志
git reflog|Git提供了一个命令git reflog用来记录你的每一次命令
git reset --hard HEAD^|回到上一个版本
git reset --hard 63a6ec037e6c821c46eefcf7c4618dd37e244b92|回到指定版本号

参数|含义
---|---
-|-

- github ssh添加:[多个ssh的问题](http://www.bkjia.com/Androidjc/837965.html)
