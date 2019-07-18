# [Cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)

> HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

## cookie 设置

> `Set-Cookie: <cookie 名>=<cookie 值>`

| 语句         | more                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------- |
| <cookie 名>= | -                                                                                                 |
| ,someTime    | 持久性 Cookie 可以指定一个特定的过期时间（Expires）或有效期（Max-Age）                            |
| ,domain=     | 权限有继承性                                                                                      |
| ,path=       | 权限有继承性                                                                                      |
| ;Secure      | 标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端                             |
| ;HttpOnly    | 通过 JavaScript 的 Document.cookie API 无法访问带有 HttpOnly 标记的 Cookie,它们只应该发送给服务端 |
