# koa

## 文档教程

网站                                                              | 描述
--------------------------------------------------------------- | --
[koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)          | -
[最新Node.js框架：Koa 2 实用入门](https://sanwen8.cn/p/1feFr7y.html)     | -
[Koa 2实用入门](https://cnodejs.org/topic/5709959abc564eaf3c6a48c8) | -
[「新手向」koa2从起步到填坑](http://www.jianshu.com/p/6b816c609669)        | -

## 依赖的模块系统

来源   | 模块                                              | more
---- | ----------------------------------------------- | ---------------------------------------------------
Node | assert                                          | -
-    | events                                          | -
-    | stream                                          | -
-    | http                                            | -
-    | url                                             | -
-    | net                                             | -
-    | querystring                                     | -
-    | path                                            | -
koa  | [koa-compose](https://github.com/koajs/compose) | 组合多个中间件为一个中间件
-    | [koa-convert](https://github.com/koajs/convert) | 转化koa1的中间件（generator-based）为koa2的中间件（promise-based）
-    | [koa-is-json](https://github.com/koajs/is-json) | Check if a body is JSON

## 模块生态

模块                  | 作用
------------------- | -------------------
koa-convert         | 转化koa1的中间件为koa2的中间件
koa-bodyparser      | 配置ctx.body解析中间件
koa-views           | 配置项目模板和views路径
koa-static          | 配置静态资源路径
koa-logger          | 开发过程中的日志记录
koa-mysql-session   | -
koa-session-minimal | -
koa-router          | -
koa-jsonp           | -
mysql               | 连接mysql数据库的客户端
validator           | 验证

--------------------------------------------------------------------------------

# 个人阅读源码整理

## koa 继承自 events

> 可以自定义事件等等

## app(koa的实例，由new koa()生成)

### 属性列表

属性                  | 默认值                                  | more
------------------- | ------------------------------------ | ---------------------------------------------
app.subdomainOffset | 2                                    | offset of .subdomains to ignore [2]
app.proxy           | false                                | when true proxy header fields will be trusted
app.env             | process.env.NODE_ENV ／ 'development' | -
app.middleware      | []                                   | -
app.context         | -                                    | ctx的原型,可以用来为应用添加全局的属性和方法(不能直接调用，否则会报错)
app.request         | -                                    | 直接打印'undefined'
app.response        | -                                    | 直接打印'undefined'
app.silent          | false                                | 设置为true会取消默认的错误处理程序的执行
app.keys=           | -                                    | 用于设置签名cookie密钥

### 方法列表

方法                  | more
------------------- | -----------------------------------------------------------------------------------
app.listen()        | http.createServer(app.callback()).listen(...) 简化封装
app.use()           | 添加中间件函数到app.middleware中，如果中间件函数是 generator函数，会自动转化
app.createContext() | -
app.callback()      | 返回一个适合http.createServer()的回调函数
app.onerror()       | app 的 error 事件上默认的错误处理程序（可以覆盖），忽略 404 == err.status 和 err.expose 为true到情况，其他错误会打印出来
app.toJSON()        | 只返回包含了app的['subdomainOffset','proxy','env']等属性的一个对象
app.inspect()       | 同 app.toJSON()

### 事件列表

事件    | more
----- | ------------------------
error | 有默认的事件处理程序 app.onerror()

## Context、Request、Response的关系

具柄               | 代表       | more
---------------- | -------- | ----
context.app      | app      | -
context.req      | req      | -
context.res      | res      | -
-                | -        | -
request.app      | app      | -
request.req      | req      | -
request.res      | res      | -
request.ctx      | context  | -
request.response | response | -
-                | -        | -
response.app     | app      | -
response.req     | req      | -
response.res     | res      | -
response.ctx     | context  | -
response.request | request  | -

## Context

### 属性列表

属性              | more
--------------- | ------------------------------------------------------------------------------------------------------
ctx.app         | 应用实例
ctx.req         | Node's request object
ctx.res         | Node's response object
ctx.request     | A koa Request object
ctx.response    | A koa Response object
ctx.originalUrl | from req.url
ctx.socket      | -
ctx.state       | -
ctx.accept      | Accepts object from req(可以通过这个对象方便的获取一些req的信息)
ctx.respond     | 默认调用respond(ctx)方法，此方法为返回客户端内容前的最后一步。设置为false可以绕过koa内置的response处理方法，通过最后一步app.use()声明自己的respond(ctx)方法
ctx.writable    | res是否可以改动？（默认为true）
ctx.cookies     | cookies对象
ctx.body        | -
ctx.status      | 状态码
ctx.method      | -
ctx.length      | 返回内容字节长度
ctx.message     | 返回内容
ctx.type        | 返回内容的格式

方法                                               | more
------------------------------------------------ | -------------------------------------
ctx.toJSON()                                     | Return JSON representation
ctx.inspect()                                    | 同ctx.toJSON()
ctx.assert(value, [status], [msg], [properties]) | 断言，失败的话抛出状态码错误
ctx.throw([status], [msg], [properties])         | 抛出错误，默认500
ctx.onerror(err)                                 | 请求内部 error 事件错误处理程序
ctx.cookies.get(name, [options])                 | Get cookie name with options
ctx.cookies.set(name, value, [options])          | Set cookie name to value with options

## Request

属性              | more
--------------- | ----
req.header      | -
req.header= val | -
req.headers     | -
req.headers=val | -
req.url         | -
req.url=val     | -
req.origin      | -
req.href        | -
req.method      | -
req.method=val  | -
req.path        | -
req.query       | -
req.querystring | -
req.search      | -
req.host        | -
req.hostname    | -
req.URL         | -
req.fresh       | -
req.stale       | -
req.idempotent  | -
req.socket      | -
req.charset     | -
req.length      | -
req.protocol    | -
req.secure      | -
req.ips         | -
req.subdomains  | -
req.type        | -

方法                            | more
----------------------------- | ----
req.path(path)                | -
req.query(obj)                | -
req.querystring(str)          | -
req.search(str)               | -
req.accepts(...args)          | -
req.acceptsEncodings(...args) | -
req.acceptsCharsets(...args)  | -
req.acceptsLanguages(...args) | -
req.get(field)                | -
req.inspect()                 | -
req.toJSON()                  | -

## Response

属性               | more
---------------- | -----------------------------------------------------------------------------------------------------------------
res.socket       | -
res.header       | -
res.headers      | -
res.status       | Get response status. By default, response.status is set to 404 unlike node's res.statusCode which defaults to 200
res.message      | -
res.body         | -
res.length       | -
res.headerSent   | -
res.lastModified | -
res.etag         | -
res.type         | -
res.writable     | -

方法                       | more
------------------------ | ----
res.status(code)         | -
res.message(msg)         | -
res.body(val)            | -
res.length(n)            | -
res.vary(field)          | -
res.redirect(url, alt)   | -
res.attachment(filename) | -
res.type(type)           | -
res.lastModified(val)    | -
res.etag(val)            | -
res.get(field)           | -
res.set(field, val)      | -
res.append(field, val)   | -
res.remove(field)        | -
res.inspect()            | -
res.toJSON()             | -
res.flushHeaders()       | -
