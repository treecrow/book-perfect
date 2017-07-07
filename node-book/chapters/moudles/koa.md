# koa

## 文档教程

文档                                                               | 描述
---------------------------------------------------------------- | ------------------------------------------------------
[官方文档](http://koajs.com/)                                        | -
[「新手向」koa2从起步到填坑](http://www.jianshu.com/p/6b816c609669)         | 通俗易懂的介绍
[koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)           | 包含了mysql（数据库）、koa(后端)、react(前端)的完整教程和实例
[koa-middlewares](https://www.npmjs.com/package/koa-middlewares) | easy way to use some small but useful koa middlewares.

## koa 依赖的模块系统

来源              | 模块                                                                   | more
--------------- | -------------------------------------------------------------------- | -----------------------------------------------------------
Node            | assert                                                               | -
-               | events                                                               | -
-               | stream                                                               | -
-               | http                                                                 | -
-               | url                                                                  | -
-               | net                                                                  | -
-               | querystring                                                          | -
-               | path                                                                 | -
koa             | [koa-compose](https://github.com/koajs/compose)                      | 组合多个中间件为一个中间件（把多个中间件组合并结构为一个promise函数，这是这个框架的精髓之处）
-               | [koa-convert](https://github.com/koajs/convert)                      | 转化koa1的中间件（generator-based）为koa2的中间件（promise-based）
-               | [koa-is-json](https://github.com/koajs/is-json)                      | Check if a body is JSON
jshttp          | [accepts](https://github.com/jshttp/accepts)                         | Higher-level content negotiation
-               | [content-disposition](https://github.com/jshttp/content-disposition) | 创建和解析 HTTP Content-Disposition header（文件下载对话框）
-               | [content-type](https://github.com/jshttp/content-type)               | 创建和解析 HTTP Content-Type header
-               | [fresh](https://github.com/jshttp/fresh)                             | HTTP request 新鲜度测试（检测response在client's cache中是否过时，是否有内容改变 ）
-               | [http-assert](https://github.com/jshttp/http-assert)                 | assert with status codes
-               | [http-errors](https://github.com/jshttp/http-errors)                 | Create HTTP Errors
-               | [mime-types](https://github.com/jshttp/mime-types)                   | 终极 javascript content-type 工具
-               | [on-finished](https://github.com/jshttp/on-finished)                 | request停止后执行一个回调
-               | [statuses](https://github.com/jshttp/statuses)                       | HTTP status utility
-               | [type-is](https://github.com/jshttp/type-is)                         | 判断 the content-type of a request
-               | [vary](https://github.com/jshttp/vary)                               | Manipulate the HTTP Vary header
pillarjs        | [cookies](https://github.com/pillarjs/cookies)                       | Signed and unsigned cookies based on Keygrip
-               | [parseurl](https://github.com/pillarjs/parseurl)                     | parse a url with memoization(直接根据req解析响应的url)
stream-utils    | [destroy](https://github.com/stream-utils/destroy)                   | 尽可能的销毁一个stream
-               | [error-inject](https://github.com/stream-utils/error-inject)         | inject an error listener into a stream
koa 中间件（源码没有依赖） | koa-bodyparser                                                       | 配置ctx.body解析中间件
-               | koa-views                                                            | 配置项目模板和views路径
-               | koa-static                                                           | 配置静态资源路径
-               | koa-logger                                                           | 开发过程中的日志记录
-               | koa-mysql-session                                                    | -
-               | koa-session-minimal                                                  | -
-               | koa-router                                                           | -
-               | koa-jsonp                                                            | -

--------------------------------------------------------------------------------

# 个人阅读源码整理

## koa 继承自 events

> 可以自定义事件等等

## app(koa的实例，由new koa()生成)

### 属性列表

来源    | 属性                  | 默认值                                  | more
----- | ------------------- | ------------------------------------ | ---------------------------------------------
预设的属性 | app.silent          | false                                | 设置为true会取消默认的错误处理程序的执行
-     | app.keys=           | -                                    | 用于设置签名cookie密钥
自身    | app.proxy           | false                                | when true proxy header fields will be trusted
-     | app.middleware      | []                                   | -
-     | app.subdomainOffset | 2                                    | offset of .subdomains to ignore [2]
-     | app.env             | process.env.NODE_ENV ／ 'development' | -
-     | app.context         | -                                    | ctx的原型(不能直接调用，否则会报错),可以用来为应用添加全局的属性和方法
-     | app.request         | -                                    | 直接打印'undefined'
-     | app.response        | -                                    | 直接打印'undefined'

### 方法列表

方法                  | more
------------------- | --------------------------------------------------------------------------------------------
app.listen()        | http.createServer(app.callback()).listen(...) 简化封装
app.toJSON()        | 只返回包含了app的['subdomainOffset','proxy','env']等属性的一个对象
app.inspect()       | 同 app.toJSON()
app.use(function)   | 添加中间件函数到app.middleware中（如果中间件函数是 generator函数，会自动转化）
app.callback()      | 返回一个适合http.createServer()的回调函数
app.createContext() | -
app.onerror()       | app 的 error 事件上默认的错误处理程序(忽略 404 == err.status 和 err.expose 为true到情况)，其他错误会打印出来,这里的错误不能返回给客户端

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

来源              | 属性               | more
--------------- | ---------------- | ------------------------------------------------------------------------------------------------------
预设的属性           | ctx.respond      | 默认调用respond(ctx)方法，此方法为返回客户端内容前的最后一步。设置为false可以绕过koa内置的response处理方法，通过最后一步app.use()声明自己的respond(ctx)方法
来自 request 的属性  | ctx.querystring  | -
-               | ctx.querystring= | -
-               | ctx.idempotent   | -
-               | ctx.socket       | -
-               | ctx.search       | -
-               | ctx.method       | Request method
-               | ctx.method=      | 设置请求方法，常用于实现中间件
-               | ctx.query        | -
-               | ctx.query=       | -
-               | ctx.path         | -
-               | ctx.path=        | -
-               | ctx.url          | -
-               | ctx.origin       | -
-               | ctx.href         | -
-               | ctx.subdomains   | -
-               | ctx.protocol     | -
-               | ctx.host         | -
-               | ctx.hostname     | -
-               | ctx.URL          | -
-               | ctx.header       | Request header object
-               | ctx.headers      | Request header object
-               | ctx.secure       | -
-               | ctx.stale        | -
-               | ctx.fresh        | -
-               | ctx.ips          | -
-               | ctx.ip           | -
来自 response 的属性 | ctx.status       | 状态码
-               | ctx.status=      | 状态码
-               | ctx.message      | 返回内容
-               | ctx.message=     | 返回内容
-               | ctx.body         | -
-               | ctx.body=        | -
-               | ctx.length       | 返回内容字节长度
-               | ctx.length=      | 返回内容字节长度
-               | ctx.type         | 返回内容的格式
-               | ctx.type=        | 返回内容的格式
-               | ctx.lastModified | -
-               | ctx.etag=        | -
-               | ctx.headerSent=  | -
-               | ctx.writable     | -
后来添加            | -                | -
-               | ctx.app          | 应用实例
-               | ctx.req          | Node's request object
-               | ctx.res          | Node's response object
-               | ctx.request      | A koa Request object
-               | ctx.response     | A koa Response object
-               | ctx.originalUrl  | from req.url
-               | ctx.cookies      | cookies对象（由'cookies'模块生成，包含相应的方法）
-               | ctx.accept       | Accepts object from req(可以通过这个对象方便的获取一些req的信息)
-               | ctx.state        | 建议利用这个 namespace 通过中间件向客户端传递信息

来源              | 方法                                               | more
--------------- | ------------------------------------------------ | --------------------------
自身              | ctx.inspect()                                    | 同ctx.toJSON()
-               | ctx.toJSON()                                     | Return JSON representation
-               | ctx.assert(value, [status], [msg], [properties]) | 断言，失败的话抛出状态码错误
-               | ctx.throw([status], [msg], [properties])         | 抛出错误，默认500
-               | ctx.onerror(err)                                 | 请求内部 error 事件错误处理程序
来自 request 的方法  | ctx.acceptsLanguages()                           | -
-               | ctx.acceptsEncodings()                           | -
-               | ctx.acceptsCharsets()                            | -
-               | ctx.accepts()                                    | -
-               | ctx.get()                                        | -
-               | ctx.is()                                         | -
来自 response 的方法 | ctx.attachment                                   | -
-               | ctx.redirect                                     | -
-               | ctx.remove                                       | -
-               | ctx.vary                                         | -
-               | ctx.set                                          | -
-               | ctx.append                                       | -
-               | ctx.flushHeaders                                 | -

## Request

属性                   | more
-------------------- | -------------------------------------------------------------------------------------------------------------------------------
request.header       | Request header object
request.header= val  | -
request.headers      | Request header object. Alias as request.header
request.headers=val  | -
request.url          | Get request URL
request.url=         | Set request URL, useful for url rewrites
request.origin       | Get origin of URL, include protocol and host
request.href         | Get full request URL, include protocol, host and url
request.method       | Request method
request.method=      | Set request method, useful for implementing middleware such as methodOverride().
request.path         | Get request pathname
request.path=        | Set request pathname and retain query-string when present
request.query        | Get parsed query-string, returning an empty object when no query-string is present.
request.query=       | Set query-string to the given object. Note that this setter does not support nested objects
request.querystring  | Get raw query string void of ?.
request.querystring= | Set raw query string.
request.search       | Get raw query string with the ?.
request.search=      | Set raw query string.
request.host         | Get host (hostname:port) when present. Supports X-Forwarded-Host when app.proxy is true, otherwise Host is used
request.hostname     | Get hostname when present. Supports X-Forwarded-Host when app.proxy is true, otherwise Host is used.
request.URL          | -
request.fresh        | Check if a request cache is "fresh", aka the contents have not changed
request.stale        | Inverse of request.fresh
request.idempotent   | Check if the request is idempotent
request.socket       | Return the request socket
request.charset      | Get request charset when present, or undefined:
request.length       | Return request Content-Length as a number when present, or undefined
request.protocol     | Return request protocol, "https" or "http". Supports X-Forwarded-Proto when app.proxy is true
request.secure       | Shorthand for ctx.protocol == "https" to check if a request was issued via TLS
request.ips          | When X-Forwarded-For is present and app.proxy is enabled an array of these ips is returned, ordered from upstream -> downstream
request.subdomains   | Return subdomains as an array
request.type         | Get request Content-Type void of parameters such as "charset"
-                    | -
request.originalUrl  | Get request original URL(源码中没有)
request.ip           | Request remote address. Supports X-Forwarded-For when app.proxy is true.(源码中没有)

方法                                | more
--------------------------------- | ------------------------------------------------------------------------------------------------------------------
request.accepts(...args)          | from [accepts](https://github.com/jshttp/accepts)
request.acceptsEncodings(...args) | ~
request.acceptsCharsets(...args)  | ~
request.acceptsLanguages(...args) | ~
request.is(types)                 | Check if the incoming request contains the "Content-Type" header field, and it contains any of the give mime types
request.get(field)                | Return request header
request.inspect()                 | -
request.toJSON()                  | -

## Response

属性                     | more
---------------------- | -----------------------------------------------------------------------------------------------------------------
response.socket        | Request socket.
response.header        | Response header object.
response.headers       | Response header object. Alias as response.header.
response.status        | Get response status. By default, response.status is set to 404 unlike node's res.statusCode which defaults to 200
response.status=       | Set response status via numeric code
response.message       | Get response status message. By default, response.message is associated with response.status.
response.message=      | Set response status message to the given value
response.body          | Get response body
response.body=         | Set response body to one of the following:
response.length        | Return response Content-Length as a number when present, or deduce from ctx.body when possible, or undefined.
response.length=       | Set response Content-Length to the given value
response.headerSent    | Check if a response header has already been sent. Useful for seeing if the client may be notified on error
response.lastModified  | Return the Last-Modified header as a Date, if it exists.
response.lastModified= | Set the Last-Modified header as an appropriate UTC string
response.etag          | -
response.etag=         | Set the ETag of a response including the wrapped "s
response.type          | Get response Content-Type void of parameters such as "charset"
response.type=         | Set response Content-Type via mime string or file extension
response.writable      | -

方法                            | more
----------------------------- | ----------------------------------------------------------------------------------------------
response.vary(field)          | Vary on field.
response.redirect(url, [alt]) | Perform a [302] redirect to url
response.attachment(filename) | Set Content-Disposition to "attachment" to signal the client to prompt for download.
response.is(types...)         | Very similar to ctx.request.is(). Check whether the response type is one of the supplied types
response.get(field)           | Get a response header field value with case-insensitive field.
response.set(field, val)      | Set response header field to value
response.set(fields)          | Set several response header fields with an object
response.append(field, val)   | Append additional header field with value val
response.remove(field)        | Remove header field
response.inspect()            | -
response.toJSON()             | -
response.flushHeaders()       | Flush any set headers, and begin the body.
