# bin

> `/bin` 普通命令列表,命令管理员和一般的用户都可以使用

| class            | 命令                                                              | more                                                                                              |
| ---------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| shell 脚本解释器 | [sh](http://man.linuxde.net/sh)                                   | sh 命令是 shell 命令语言解释器，执行命令从标准输入读取或从一个文件中读取(已经被 /bin/bash 所取代) |
| ^                | [bash](https://baike.baidu.com/item/Bash)                         | (就是 Linux 默认的 shell)                                                                         |
| ^                | [ksh](https://baike.baidu.com/item/ksh/467159?fr=aladdin)         | (Kornshell 由 AT&T Bell lab. 发展出来的，兼容于 bash)                                             |
| ^                | [csh](https://baike.baidu.com/item/CSH/8950529?fr=aladdin)        | (已经被 /bin/tcsh 所取代)                                                                         |
| ^                | [tcsh](https://blog.csdn.net/alex_xfboy/article/details/52605763) | (整合 C Shell ，提供更多的功能)                                                                   |
| 进程             | [ps](http://man.linuxde.net/ps)                                   | 用于报告当前系统的进程状态 `ps -x ／ grep xxx`                                                    |
| ^                | [kill](http://man.linuxde.net/kills)                              | 用来删除执行中的程序或工作                                                                        |
| 文件目录处理     | [mkdir](http://man.linuxde.net/mkdir)                             | 创建目录                                                                                          |
| ^                | [cp](http://man.linuxde.net/cp)                                   | 将一个或多个源文件或者目录复制到指定的目的文件或目录                                              |
| ^                | [dd](http://man.linuxde.net/dd)                                   | 用于复制文件并对原文件的内容进行转换和格式化处理                                                  |
| ^                | [rm](http://man.linuxde.net/rm)                                   | 删除一个目录中的一个或多个文件或目                                                                |
| ^                | [rmdir](http://man.linuxde.net/rmdir)                             | 用来删除空目录                                                                                    |
| ^                | [unlink](http://man.linuxde.net/unlink)                           | 删除指定的文件                                                                                    |
| ^                | [mv](http://man.linuxde.net/mv)                                   | 对文件或目录重新命名，或者将文件从一个目录移到另一个目录中                                        |
| ^                | [chmod](http://man.linuxde.net/chmod)                             | 用来变更文件或目录的权限                                                                          |
| ^                | [ls](http://man.linuxde.net/ls)                                   | 显示目标列表                                                                                      |
| ^                | [pwd](http://man.linuxde.net/pwd)                                 | 以绝对路径的方式显示用户当前工作目录                                                              |
| ^                | [cat](http://man.linuxde.net/cat)                                 | 连接文件并打印到标准输出设备上                                                                    |
| 系统             | [df](http://man.linuxde.net/df)                                   | 显示磁盘分区上的可使用的磁盘空间                                                                  |
| ^                | [hostname](http://man.linuxde.net/hostname)                       | 用于显示和设置系统的主机名称                                                                      |
| ^                | [date](http://man.linuxde.net/date)                               | 显示或设置系统时间与日期                                                                          |
| 编辑器           | [ed](http://man.linuxde.net/ed)                                   | ed 命令是单行纯文本编辑器                                                                         |
| ===              | ===                                                               | ===                                                                                               |
| ===              | ===                                                               | ===                                                                                               |
| ^                | [ln](http://man.linuxde.net/ln)                                   | 创建硬连接 ／ 软连接                                                                              |
| ^                | [echo](http://man.linuxde.net/echo)                               | 用于在 shell 中打印 shell 变量的值，或者直接输出指定的字符串                                      |
| ^                | [stty](http://man.linuxde.net/stty)                               | 修改终端命令行的相关设置                                                                          |
| ^                | [sync](http://man.linuxde.net/sync)                               | 用于强制被改变的内容立刻写入磁盘，更新超块信息                                                    |
| ^                | [expr](http://man.linuxde.net/expr)                               | 一款表达式计算工具，使用它完成表达式的求值操作                                                    |
| ^                | [sleep](http://man.linuxde.net/sleep)                             | 暂停指定的时间                                                                                    |
| ^                | [test](http://man.linuxde.net/test)                               | 是 shell 环境中测试条件表达式的实用工具                                                           |
| ^                | [                                                                 | -                                                                                                 |
| ^                | launchctl                                                         | -                                                                                                 |
| ^                | link                                                              | -                                                                                                 |
| ^                | pax                                                               | -                                                                                                 |
| ^                | wait4pat                                                          | -h                                                                                                |
