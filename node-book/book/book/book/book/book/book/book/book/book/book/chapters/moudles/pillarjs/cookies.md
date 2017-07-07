# cookies

> 例子运行失败

## 方法列表

方法                                              | more
----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------
new Cookies( request, response, [ options ] )   | This creates a cookie jar corresponding to the current request and response, additionally passing an object options
express.createServer( Cookies.express( keys ) ) | express 支持
cookies.get( name, [ options ] )                | This extracts the cookie with the given name from the Cookie header in the request
cookies.set( name, [ value ], [ options ] )     | This sets the given cookie in the response and returns the current context to allow chaining

## new Cookies( request, response, [ options ] ) 的 options 选项

opt  | more
---- | ----
keys | aaa

## cookies.set 的 options 选项

opt       | more
--------- | ----------------------------------------------------------------------------------------------------
maxAge    | 过期的毫秒数
expires   | 过期的时间点
path      | cookie对应的路径 (/ by default).
domain    | cookie 的 domain (no default).
secure    | 是否只是用了HTTPS 通信 cookie
httpOnly  | 与secure有什么区别吗？
sameSite  | a boolean or string indicating whether the cookie is a "same site" cookie
signed    | a boolean indicating whether the cookie is to be signed (false by default)
overwrite | a boolean indicating whether to overwrite previously set cookies of the same name (false by default)
