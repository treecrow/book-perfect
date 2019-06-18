# [requests](https://2.python-requests.org//zh_CN/latest/)

> Requests 唯一的一个非转基因的 Python HTTP 库，人类可以安全享用

## api list

| class        | api                                  | more                                                                                                                      |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| requests     | requests.get(url)                    | Sends a GET request.                                                                                                      |
| ^            | requests.head()                      | -                                                                                                                         |
| ^            | requests.post(url,data = {})         | -                                                                                                                         |
| ^            | requests.put(url,data = {})          | -                                                                                                                         |
| ^            | requests.delete()                    | -                                                                                                                         |
| ^            | requests.options()                   | -                                                                                                                         |
| ^            | requests.cookies.RequestsCookieJar() | 返回 cookie 对象                                                                                                          |
| request 参数 | params={}                            | 请求参数                                                                                                                  |
| ^            | headers={}                           | 请求头                                                                                                                    |
| ^            | cookies=cookies                      | 请求体                                                                                                                    |
| ^            | allow_redirects=false                | 是否允许重定向处理                                                                                                        |
| ^            | timeout=0.001                        | 设定的秒数时间之后停止等待响应                                                                                            |
| ^            | xxx                                  | -                                                                                                                         |
| ^            | xxx                                  | -                                                                                                                         |
| 响应内容     | res.encoding                         | Requests 使用的编码                                                                                                       |
| ^            | res.text                             | 获取服务器响应文本内容                                                                                                    |
| ^            | res.content                          | 获取字节响应内容                                                                                                          |
| ^            | res.json()                           | 有一个内置的 JSON 解码器，助你处理 JSON 数据                                                                              |
| ^            | res.raw                              | 获取来自服务器的原始套接字响应                                                                                            |
| ^            | res.iter_content()                   | -                                                                                                                         |
| ^            | res.raise_for_status()               | 如果发送了一个错误请求(一个 4XX 客户端错误，或者 5XX 服务器错误响应)，我们可以通过 Response.raise_for_status() 来抛出异常 |
| ^            | res.status_code                      | 检测响应状态码                                                                                                            |
| ^            | res.headers                          | 以一个 Python 字典形式展示的服务器响应头                                                                                  |
| ^            | res.cookies                          | 如果某个响应中包含一些 cookie，你可以快速访问它们                                                                         |
| ^            | res.history                          | 这个对象列表按照从最老到最近的请求进行排序                                                                                |
| cookie       | -                                    | -                                                                                                                         |
| ^            | cookie.set()                         | -                                                                                                                         |
