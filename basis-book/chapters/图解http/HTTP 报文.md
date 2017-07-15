# HTTP 报文

## 报文的结构

![报文的结构](../../imgs/报文的结构.png)

## 首部字段列表

分类     | 字段                | more
------ | ----------------- | -------------------------------------
内通协商   | Accept            | 指定客户端能够接收的内容类型
-      | Accept-Charset    | 浏览器可以接受的字符编码集
-      | Accept-Encoding   | -
-      | Accept-Language   | -
-      | Content-Language  | -
请求首部字段 | -                 | -
-      | If-Modified-Since | 如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码
-      | Range             | 指定资源的byte范围，用于范围请求
-      | Content-Range     | 在整个返回体中本部分的字节位置
响应首部字段 | Set-Cookie        | 同志客户端保存 cookie
未分类    | Max-Forwards      | 用于 TRACE 方法，记录请求或响应经过的服务器的情况（或者代理服务器）
-      | Host              | 指定请求的服务器的域名和端口号
