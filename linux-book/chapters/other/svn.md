# svn

## 相关文档

- [svn的merge使用例子](https://blog.csdn.net/keda8997110/article/details/21813035)
- [前端svn分支开发步骤](http://wiki.fenqi.d.xiaonei.com/pages/viewpage.action?pageId=34155548)

## 常用命令

| 命令                                      | more                       |
| ----------------------------------------- | -------------------------- |
| svn checkout path（path是服务器上的目录） | 将文件checkout到本地目录   |
| svn up                                    | 更新版本库到本地           |
| svn st                                    | 显示本地文件变动状态       |
| svn add xxx                               | 往版本库中添加新的文件     |
| svn diff xxx                              | 将修改的文件与基础版本比较 |
| svn revert xxx                            | 取消本地修改               |
| svn rm xxx                                | 删除文件                   |
| svn commit -m ''                          | 提交                       |

## 命令列表

| 命令                                                                                         | more                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| svn add file                                                                                 | 往版本库中添加新的文件                                 |
| svn commit -m “LogMessage” [-N] [--no-unlock] PATH(如果选择了保持锁，就使用–no-unlock开关) | 将改动的文件提交到版本库                               |
| svn ci                                                                                       | -                                                      |
| svn lock -m “LockMessage” [--force] PATH                                                   | 加锁                                                   |
| svn unlock PATH                                                                              | 解锁                                                   |
| svn update -r m path                                                                         | 更新到某个版本                                         |
| svn up                                                                                       | ~                                                      |
| svn status path                                                                              | 目录下的文件和子目录的状态，正常状态不显示             |
| svn status -v path(                                                                          | 显示文件和子目录状态                                   |
| svn st                                                                                       | ~                                                      |
| svn delete path -m “delete test fle”                                                       | 删除文件                                               |
| svn (del, remove, rm)                                                                        | ~                                                      |
| svn log path                                                                                 | 查看日志                                               |
| svn info path                                                                                | 查看文件详细信息                                       |
| svn diff path                                                                                | 将修改的文件与基础版本比较                             |
| svn diff -r m:n path                                                                         | 对版本m和版本n比较差异                                 |
| svn di                                                                                       | ~                                                      |
| svn merge -r m:n path                                                                        | 将两个版本之间的差异合并到当前文件                     |
| svn help                                                                                     | SVN 帮助                                               |
| svn help ci                                                                                  | ~                                                      |
| svn list path                                                                                | 显示path目录下的所有属于版本库的文件和目录简写：svn ls |
