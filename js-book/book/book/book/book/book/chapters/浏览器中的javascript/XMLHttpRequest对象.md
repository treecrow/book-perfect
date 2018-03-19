# XMLHttpRequest对象

## 方法列表

| method                                           | more                                                                                              |
|--------------------------------------------------|---------------------------------------------------------------------------------------------------|
| request.open(method,url[,isAsync,user,password]) | 第一个参数指定HTTP方法或动作（不区分大小写），允许使用get、post、delete、head、options、put等http方法，第二个参数是一个相对于文档的url或一个绝对路径的url |
| request.setRequestHeader()                       | 设置请求头，多次调用不会覆盖原来的设置（很多请求头不能手动设置）                                                                  |
| resuest.overrideMimeType()                       | 解析返回数据的时候按照指定的类型解析，而不是依据响应头的'Content-Type'                                                        |
| request.send()                                   | 指定可选的请求主体并向服务器发送它                                                                                 |
| request.getResponseHeader()                      | 查询相应头                                                                                             |
| request.getAllResponseHeaders()                  | ~                                                                                                 |
| request.abort()                                  | 手动触发abort事件                                                                                       |

## 属性列表

| attr                 | more                                   |
|----------------------|----------------------------------------|
| request.status       | 以数字和文本的形式放回HTTP状态码                     |
| request.statusText   | ~                                      |
| request.readyState   | 指定了HTTP请求的状态                           |
| request.responseText | 获得文本形式的响应主体                            |
| request.responseXML  | 获得Document形式的响应主体                      |
| request.upload       | 定义了addEventListener()方法和整个progress事件集合 |

## 事件列表

| event            | more                             |
|------------------|----------------------------------|
| readystatechange | 每次readyState属性的改变都会触发这个事件        |
| loadstart        | 调用send()时触发                      |
| progress         | 正在加载服务器的响应时                      |
| timeout          | 请求超时时触发                          |
| abort            | 请求中止时触发                          |
| error            | 重定向等网络错误                         |
| load             | 请求完成时触发                          |
| loadend          | timeout、abort、error、load等事件发生后触发 |

## CORS

- request.open()方法中携带用户名和用户密码的http请求不允许CORS
- CORS默认不会携带其它任何的用户证书（cokkie && HTTP身份验证令牌(token)等），设置XMLHttpRequest的withCredentials属性为true可以携带用户证书

## JSONP

> 需要接口支持