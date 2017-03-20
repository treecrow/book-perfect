# HTTP总结

## 教程
- [《图解HTTP》]()
- [《HTTP权威指南》](https://book.douban.com/subject/10746113/)
- [HTTP协议 处理流程](http://www.qixing318.com/article/the-http-protocol-handling-process.html)
- [图解Http协议](https://zhuanlan.zhihu.com/p/25518072)
- [网络基础知识之 HTTP 协议](https://zhuanlan.zhihu.com/p/24913080)
- [爬虫入门及HTTP协议的讲解](https://zhuanlan.zhihu.com/p/25035661)

## 方法
- GET---获取、读取数据
- POST---提交数据
- PUT---更新
- DELETE---删除
- HEAD---类似GET，请求
- TRACE---
- OPTIONS---

## 状态
- 1xx---请求已经接受，继续处理
  - 200：客户端请求成功
- 2xx---请求已经成功接受并处理
- 3xx---请求需要进一步的操作
- 4xx---客户端错误，请求语法错误/无法实现
  - 400：客户端请求有语法错误
  - 401：请求未经过授权
  - 403：服务端收到请求但拒绝提供服务
  - 404：请求资源不存在
- 5xx---服务器端错误
  - 500：服务端未知错误
  - 503：当前不能处理客户端的请求，可能过段时间会回复正常
  
## 网络过程
- DNS解析
  > 可缓存,100~200ms
- 建立TCP连接
  > 三次握手,100~200ms
- HTTP Request
  > 半个RTT
- HTTP Response
  >RTT不确定,优化空间
