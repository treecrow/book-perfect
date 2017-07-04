# URL(Uniform Resource Locator)---统一资源定位符

```
scheme://host[:port#]/path/.../[?query-string][#anchor]
```

url各个部分      | 含义
------------ | -----------------------------------------------------------------------------
scheme       | 指定低层使用的协议(例如：http, https, ftp)
host         | HTTP服务器的IP地址或者域名
port         | HTTP服务器的默认端口是80，这种情况下端口号可以省略。如果使用了别的端口，必须指明，例如 <http://www.qixing318.com:80/>
path         | 访问资源的路径
query-string | 发送给http服务器的数据
anchor       | 锚
