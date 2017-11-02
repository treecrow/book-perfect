# nginx

## 相关文档

- [在Mac上安装nginx](http://www.jianshu.com/p/46b083bfd5e0)
- [nginx在MAC上的安装、启动、重启和关闭](http://blog.csdn.net/yqh19880321/article/details/70478827)

## ngnix 相关命令

| 命令                        | more      |
|---------------------------|-----------|
| brew services start nginx | 启动 ngnix  |
| brew services stop nginx  | 关闭 ngnix  |
| nginx -s reload           | 重新加载nginx |
| nginx -s stop             | 停止nginx   |

## 相关文件／路径

| 文件／路径                           | more            |
|---------------------------------|-----------------|
| /usr/local/Cellar/nginx/1.12.1  | 默认安装路径          |
| /usr/local/etc/nginx/nginx.conf | conf文件          |
| http://localhost:8080           | nginx服务启动后的欢迎界面 |
| /usr/local/var/log/nginx/*.log  | ngnix 日志        |

## 期望将端口去掉，绑定域名提供测试

1. 创建新的目录conf.d

```bash
mkdir /usr/local/etc/nginx/conf.d
```

2. 创建单个服务所需的conf文件

```bash
touch /usr/local/etc/nginx/conf.d/default.conf
```

3. 将nginx的主文件nginx.conf中的server{}删除，替换成 include /usr/local/etc/nginx/conf.d/*.conf ，nginx将可以加载存放在conf.d目录下的所有conf文件了