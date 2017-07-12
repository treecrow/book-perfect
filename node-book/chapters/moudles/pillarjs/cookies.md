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

opt    | more
------ | ---------------------
keys   | 指定加密短语？
secure | cookie是否只有https请求下才发送

## cookies.set 的 options 选项

opt       | more
--------- | ----------------------------------------------------------------------------------------------------
maxAge    | 过期的毫秒数
expires   | cookie何时过期
path      | cookie的路径，默认是"/"
domain    | cookie的域名
secure    | cookie是否只有https请求下才发送
httpOnly  | 是否只有服务器可以取到cookie，默认为true
sameSite  | a boolean or string indicating whether the cookie is a "same site" cookie
signed    | 指定cookie是否加密。如果指定加密的话，必须用app.keys指定加密短语(koa框架中)
overwrite | a boolean indicating whether to overwrite previously set cookies of the same name (false by default)
