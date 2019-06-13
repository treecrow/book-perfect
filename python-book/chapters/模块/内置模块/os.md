# [os](https://docs.python.org/zh-cn/3/library/os.html)

> os 模块提供了不少与操作系统相关联的函数

## api list

| class                                                                          | api                   | more                                           |
| ------------------------------------------------------------------------------ | --------------------- | ---------------------------------------------- |
| ~                                                                              | os.system(command)    | 将字符串转化成命令在服务器上运行               |
| ~                                                                              | os.listdir(path='.')  | 返回给定目录（相对于入口路径）下的文件列表     |
| ~                                                                              | os.fork()             | fork 一个子进程                                |
| ~                                                                              | os.getpid()           | 返回当前进程 ID                                |
| [os.path](https://docs.python.org/zh-cn/3/library/os.path.html#module-os.path) | os.path.abspath()     | 返回文件的绝对路径                             |
| ^                                                                              | os.path.dirname(path) | 返回文件所在的目录路径                         |
| ^                                                                              | os.path.join()        | Join one or more path components intelligently |
