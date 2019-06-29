# https

## https.Agent 类
> HTTPS 的一个类似于 http.Agent 的代理对象

## https.Server 类
> 与 http.Server类似
- server.setTimeout(msecs, callback)---
- server.timeout---

## https.createServer(options[, requestListener])
#### 创建实例
- https.createServer(options[, requestListener])---返回一个新的 HTTPS 网络服务器对象
#### 实例方法
- server.close([callback])
- server.listen(handle[, callback])
- server.listen(path[, callback])
- server.listen(port[, host][, backlog][, callback])

## https.get(options, callback)
> 类似 http.get()，但是用于 HTTPS

## https.globalAgent
> https.Agent 的全局实例，用于所有 HTTPS 客户端请求

## https.request(options, callback)
> 向一个安全的服务器发起一个请求
