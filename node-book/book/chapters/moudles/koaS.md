# 官方文档整理

## app

### 属性列表

属性                  | more
------------------- | ---------------------------------------------
app.env             | NODE_ENV / "development"
app.proxy           | when true proxy header fields will be trusted
app.subdomainOffset | offset of .subdomains to ignore [2]
app.keys            | 用于设置签名cookie密钥
app.context         | ctx的原型,可以用来为应用添加全局的属性和方法（感觉更像一个可以利用的全局对象）

### 方法列表

方法                | more
----------------- | -------------------------------------
app.listen(...)   | 返回一个新建的 http.Server 实例，并调用示例的listen方法
app.callback()    | 返回一个适合http.createServer()的回调函数
app.use(function) | 给应用添加中间件

### 事件列表

事件    | more
----- | ----
error | -

## Context

### 属性列表

属性             | more
-------------- | -------------------------------------
ctx.app        | 应用实例
ctx.req        | Node's request object
ctx.res        | Node's response object
ctx.request    | A koa Request object
ctx.response   | A koa Response object
ctx.state      | 推荐用于传递信息给中间件或者视图
ctx.originalUr | -
ctx.socket     | -
ctx.respond    | 设置为false可以绕过koa内置的response处理方法（使用原生？）

### 方法列表

方法                                               | more
------------------------------------------------ | -------------------------------------
ctx.cookies.get(name, [options])                 | Get cookie name with options
ctx.cookies.set(name, value, [options])          | Set cookie name to value with options
ctx.throw([status], [msg], [properties])         | 抛出错误，默认500
ctx.assert(value, [status], [msg], [properties]) | 断言（抛出错误）

## Request

### 属性列表

属性                 | more
------------------ | --------------------------------------------------------------------------------------------------------------------------------
ctx.header         | Request header object
ctx.headers        | Request header object
ctx.method         | Request method
ctx.method=        | 设置请求方法，常用于实现中间件
request.length     | Return request Content-Length as a number when present, or undefined.
ctx.url            | Get request URL.
ctx.url=           | Set request URL, useful for url rewrites
ctx.originalUrl    | Get request original URL
ctx.origin         | Get origin of URL, include protocol and host
ctx.href           | Get full request URL, include protocol, host and url
ctx.path           | Get request pathname
ctx.path=          | Set request pathname and retain query-string when present
ctx.query          | Get parsed query-string, returning an empty object when no query-string is present
ctx.query=         | Set query-string to the given object
ctx.querystring    | Get raw query string void of ?
ctx.querystring=   | Set raw query string
request.search     | Get raw query string with the ?
request.search=    | Set raw query string
ctx.host           | Get host (hostname:port) when present. Supports X-Forwarded-Host when app.proxy is true, otherwise Host is used.
ctx.hostname       | Get hostname when present. Supports X-Forwarded-Host when app.proxy is true, otherwise Host is used
request.type       | Get request Content-Type void of parameters such as "charset"
request.charset    | Get request charset when present, or undefined:
ctx.fresh          | Check if a request cache is "fresh", aka the contents have not changed
ctx.stale          | Inverse of request.fresh
ctx.socket         | Return the request socket
ctx.protocol       | Return request protocol, "https" or "http". Supports X-Forwarded-Proto when app.proxy is true.
ctx.secure         | Shorthand for ctx.protocol == "https" to check if a request was issued via TLS.
ctx.ip             | Request remote address. Supports X-Forwarded-For when app.proxy is true
ctx.ips            | When X-Forwarded-For is present and app.proxy is enabled an array of these ips is returned, ordered from upstream -> downstream.
ctx.subdomains     | Return subdomains as an array.
request.idempotent | Check if the request is idempotent

### 方法列表

方法                     | more
---------------------- | ------------------------------------------------------------------------------------------------------------------
ctx.is()               | Check if the incoming request contains the "Content-Type" header field, and it contains any of the give mime types
ctx.accepts()          | Check if the given type(s) is acceptable, returning the best match when true, otherwise false
ctx.acceptsEncodings() | Check if encodings are acceptable, returning the best match when true, otherwise false
ctx.acceptsCharsets()  | Check if charsets are acceptable, returning the best match when true, otherwise false
ctx.acceptsLanguages() | Check if langs are acceptable, returning the best match when true, otherwise false
ctx.get()              | Return request header

## Response

### 属性列表

属性                | more
----------------- | -----------------------------------------------------------------------------------------------------------------
response.header   | Response header object
response.headers  | Response header object
response.socket   | Request socket
ctx.body          | Get response body
ctx.body=         | Set response body to one of the following
ctx.status        | Get response status. By default, response.status is set to 404 unlike node's res.statusCode which defaults to 200
ctx.status=       | Set response status via numeric code
ctx.message       | Get response status message
ctx.message=      | Set response status message to the given value
ctx.length=       | Set response Content-Length to the given value
ctx.length        | Return response Content-Length as a number when present, or deduce from ctx.body when possible, or undefined
ctx.type=         | Set response Content-Type via mime string or file extension
ctx.type          | Get response Content-Type void of parameters such as "charset"
ctx.headerSent    | Check if a response header has already been sent
ctx.lastModified  | Return the Last-Modified header as a Date, if it exists
ctx.lastModified= | Set the Last-Modified header as an appropriate UTC string.
ctx.etag=         | Set the ETag of a response including the wrapped "s

### 方法列表

方法                              | more
------------------------------- | ----------------------------------------------------------------------------------------------
ctx.redirect()                  | -
ctx.attachment()                | -
response.get(field)             | Get a response header field value with case-insensitive field
response.set(field, value)      | Set response header field to value
response.set(fields)            | Set several response header fields with an object:
ctx.append()                    | Append additional header field with value val
ctx.remove()                    | Remove header field.
response.is(types...)           | Very similar to ctx.request.is(). Check whether the response type is one of the supplied types
response.redirect(url, [alt])   | Perform a [302] redirect to url
response.attachment([filename]) | Set Content-Disposition to "attachment" to signal the client to prompt for download
response.vary(field)            | Vary on field
response.flushHeaders()         | Flush any set headers, and begin the body
