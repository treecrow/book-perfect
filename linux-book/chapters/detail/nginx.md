# nginx

## 相关文档

- [Nginx中文文档](http://www.nginx.cn/doc/)
- [Nginx开发从入门到精通](http://tengine.taobao.org/book/)
- [在Mac上安装nginx](http://www.jianshu.com/p/46b083bfd5e0)
- [nginx在MAC上的安装、启动、重启和关闭](http://blog.csdn.net/yqh19880321/article/details/70478827)
- [nginx 基本入门](https://zhuanlan.zhihu.com/p/24382606)

## ngnix 相关命令

| 命令                          | more                   |
|-----------------------------|------------------------|
| brew services start nginx   | 启动 ngnix               |
| brew services stop nginx    | 关闭 ngnix               |
| brew services restart nginx | 重启 ngnix               |
| nginx                       | -                      |
| nginx -V                    | 查看版本，以及配置文件地址          |
| nginx -v                    | 查看版本                   |
| nginx -c filename           | 指定配置文件                 |
| nginx -h                    | 帮助                     |
| nginx -s reload             | 重新加载配置文件，相当于重启         |
| nginx -s stop               | 直接关闭 nginx             |
| nginx -s quit               | 会在处理完当前正在的请求后退出，也叫优雅关闭 |
| nginx -s reopen             | 重新打开日志文件               |
| ps -ax / grep nginx         | 得到所有正在运行的 nginx 进程     |

## 相关文件／路径

| 文件／路径                                    | more            |
|------------------------------------------|-----------------|
| /usr/local/Cellar/nginx/1.12.1           | 默认安装路径          |
| /usr/local/etc/nginx/nginx.conf          | conf文件          |
| http://localhost:8080                    | nginx服务启动后的欢迎界面 |
| /usr/local/var/log/nginx/*.log           | ngnix 日志        |
| /usr/sbin/nginx -c /etc/nginx/nginx.conf | -               |

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

## 配置文件结构

| 字段     | 字段     | more     |
|--------|--------|----------|
| events | -      | -        |
| http   | -      | -        |
| ~      | server | -        |
| ~      | ~      | location |
