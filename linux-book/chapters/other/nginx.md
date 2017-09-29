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

| 文件／路径                           | more     |
|---------------------------------|----------|
| /usr/local/Cellar/nginx/1.12.1  | 默认安装路径   |
| /usr/local/etc/nginx/nginx.conf | conf文件   |
| /usr/local/var/log/nginx/*.log  | ngnix 日志 |

## ngnix 相关命令

| 命令                          | more                   |
|-----------------------------|------------------------|
| brew services start nginx   | 启动 ngnix               |
| brew services stop nginx    | 关闭 ngnix               |
| brew services restart nginx | 重启 ngnix               |
| nginx                       | -                      |
| nginx -t                    | 验证配置文件是否正确             |
| nginx -V                    | 查看版本，以及配置文件地址          |
| nginx -v                    | 查看版本                   |
| nginx -c filename           | 指定配置文件                 |
| nginx -h                    | 帮助                     |
| nginx -s reload             | 重新加载配置文件，相当于重启         |
| nginx -s stop               | 直接关闭 nginx             |
| nginx -s quit               | 会在处理完当前正在的请求后退出，也叫优雅关闭 |
| nginx -s reopen             | 重新打开日志文件               |
| ps -ax / grep nginx         | 得到所有正在运行的 nginx 进程     |

## 内核模块(CoreModule-主上下文)

> 用于控制Nginx服务器的基本功能

| 名字               | more |
|------------------|------|
| user             | -    |
| worker_processes | -    |
| events           | -    |
| http             | -    |

## 事件驱动模块(EventsModule-events)

> 用于控制Nginx如何处理连接，该模块的指令的一些参数会对应用系统的性能产生重要的影响

| 名字                 | more         |
|--------------------|--------------|
| worker_connections | 每个进程支持的最大连接数 |

## HTTP内核模块(HttpCoreModule-http)

> 提供HTTP访问Nginx服务器，该模块是不能缺少的

| 名字                | 名字                   | 名字         | more |
|-------------------|----------------------|------------|------|
| include           | -                    | -          | -    |
| default_type      | -                    | -          | -    |
| sendfile          | -                    | -          | -    |
| keepalive_timeout | -                    | -          | -    |
| server            | -                    | -          | -    |
| ~                 | listen               | -          | -    |
| ~                 | server_name          | -          | -    |
| ~                 | access_log           | -          | -    |
| ~                 | root                 | -          | -    |
| ~                 | location             | -          | -    |
| ~                 | ~                    | proxy_pass | 跳转网址 |
| ~                 | autoindex            | -          | -    |
| ~                 | autoindex_exact_size | -          | -    |
| ~                 | error_page           | -          | -    |

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
