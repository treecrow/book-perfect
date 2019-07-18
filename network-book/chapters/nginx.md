# nginx

## 相关文档

| 文档                                                                                  | more     |
|-------------------------------------------------------------------------------------|----------|
| [Nginx中文文档](http://www.nginx.cn/doc/)                                               | -        |
| [Nginx开发从入门到精通](http://tengine.taobao.org/book/)                                    | -        |
| [Nginx初探](http://blog.csdn.net/xlgen157387/article/details/49781487)                | -        |
| [在Mac上安装nginx](http://www.jianshu.com/p/46b083bfd5e0)                               | 绑定域名提供测试 |
| [nginx在MAC上的安装、启动、重启和关闭](http://blog.csdn.net/yqh19880321/article/details/70478827) | -        |
| [nginx 基本入门](https://zhuanlan.zhihu.com/p/24382606)                                 | 有示例      |

## 相关文件／路径

| 文件／路径                           | more                                                               |
|---------------------------------|--------------------------------------------------------------------|
| /usr/local/Cellar/nginx/1.12.1  | 默认安装路径                                                             |
| /usr/local/etc/nginx/nginx.conf | conf文件                                                             |
| /usr/local/var/log/nginx/*.log  | ngnix 日志                                                           |
| /usr/local/nginx/nginx.pid      | 默认，nginx 将其主进程的 pid 写入此处(通过传递参数给 ./configure 或使用 pid 指令，来改变该文件的位置) |

## ngnix 相关命令

| 分类               | 命令                          | more                     |
|------------------|-----------------------------|--------------------------|
| 命令行参数            | nginx -t                    | 验证配置文件是否正确               |
| ~                | nginx -v                    | 查看版本                     |
| ~                | nginx -V                    | 查看版本，编译器版本和配置参数          |
| ~                | nginx -c filename           | 指定配置文件                   |
| ~                | nginx -h                    | 帮助                       |
| nginx 启动、停止、重启命令 | ps -ax / grep nginx         | 得到所有正在运行的 nginx 进程       |
| ~                | sudo kill -QUIT nginx主进程号   | nginx从容停止命令，等所有请求结束后关闭服务 |
| ~                | kill -TERM nginx主进程号        | nginx 快速停止命令，立刻关闭nginx进程 |
| ~                | kill -9 nginx主进程号           | 强制停止                     |
| ~                | nginx                       | nginx 启动                 |
| ~                | nginx -s reload             | 重新加载配置文件，相当于重启           |
| ~                | nginx -s stop               | 直接关闭 nginx               |
| ~                | nginx -s quit               | 会在处理完当前正在的请求后退出，也叫优雅关闭   |
| ~                | nginx -s reopen             | 重新打开日志文件                 |
| other            | brew services start nginx   | 启动 ngnix                 |
| ~                | brew services stop nginx    | 关闭 ngnix                 |
| ~                | brew services restart nginx | 重启 ngnix                 |

## 期望将端口去掉，绑定域名提供测试

- 创建新的目录conf.d

```bash
mkdir /usr/local/etc/nginx/conf.d
```

- 创建单个服务所需的conf文件

```bash
touch /usr/local/etc/nginx/conf.d/default.conf
```

- 将nginx的主文件nginx.conf中的server{}删除，替换成 include /usr/local/etc/nginx/conf.d/*.conf ，nginx将可以加载存放在conf.d目录下的所有conf文件了