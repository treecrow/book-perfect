# nginx

## 相关文档

| 文档                                                                                                 | more             |
| ---------------------------------------------------------------------------------------------------- | ---------------- |
| [在 Mac 上安装 nginx](http://www.jianshu.com/p/46b083bfd5e0)                                         | 绑定域名提供测试 |
| [Nginx 中文文档](http://www.nginx.cn/doc/)                                                           | -                |
| [Nginx 开发从入门到精通](http://tengine.taobao.org/book/)                                            | -                |
| [Nginx 初探](http://blog.csdn.net/xlgen157387/article/details/49781487)                              | -                |
| [nginx 在 MAC 上的安装、启动、重启和关闭](http://blog.csdn.net/yqh19880321/article/details/70478827) | -                |
| [nginx 基本入门](https://zhuanlan.zhihu.com/p/24382606)                                              | 有示例           |

## ngnix 相关命令

| 分类                       | 命令                           | more                                         |
| -------------------------- | ------------------------------ | -------------------------------------------- |
| 命令行参数                 | nginx -t                       | 验证配置文件是否正确                         |
| ~                          | nginx -v                       | 查看版本                                     |
| ~                          | nginx -V                       | 查看版本，编译器版本和配置参数               |
| ~                          | nginx -c filename              | 指定配置文件                                 |
| ~                          | nginx -h                       | 帮助                                         |
| nginx 启动、停止、重启命令 | ps -ax / grep nginx            | 得到所有正在运行的 nginx 进程                |
| ~                          | sudo kill -QUIT nginx 主进程号 | nginx 从容停止命令，等所有请求结束后关闭服务 |
| ~                          | kill -TERM nginx 主进程号      | nginx 快速停止命令，立刻关闭 nginx 进程      |
| ~                          | kill -9 nginx 主进程号         | 强制停止                                     |
| ~                          | nginx                          | nginx 启动                                   |
| ~                          | nginx -s reload                | 重新加载配置文件，相当于重启                 |
| ~                          | nginx -s stop                  | 直接关闭 nginx                               |
| ~                          | nginx -s quit                  | 会在处理完当前正在的请求后退出，也叫优雅关闭 |
| ~                          | nginx -s reopen                | 重新打开日志文件                             |
| other                      | brew services start nginx      | 启动 ngnix                                   |
| ~                          | brew services stop nginx       | 关闭 ngnix                                   |
| ~                          | brew services restart nginx    | 重启 ngnix                                   |
