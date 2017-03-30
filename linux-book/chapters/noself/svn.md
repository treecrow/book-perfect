# svn

## 命令
命令 | 含义 
---|---
svn checkout(co)   path|将文件checkout到本地目录
svn  add   file |往版本库中添加新的文件
svn commit   -m  " LogMessage "   [ -N ]   [ --no-unlock ]   PATH (如果选择了保持锁，就使用--no-unlock开关)|将改动的文件提交到版本库
svn lock   -m  " LockMessage "   [ --force ]   PATH | 加锁
svn unlock   PATH|解锁
svn update -r  m path|更新到某个版本
svn status   path|查看文件或者目录状态

- [Linux SVN 命令详解](http://blog.csdn.net/zyz511919766/article/details/7289530)
