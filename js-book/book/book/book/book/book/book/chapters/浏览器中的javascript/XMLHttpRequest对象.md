# XMLHttpRequest对象

## 属性方法列表

| method/attr                                      | more                                                                                              |
|--------------------------------------------------|---------------------------------------------------------------------------------------------------|
| request.open(method,url[,isAsync,user,password]) | 第一个参数指定HTTP方法或动作（不区分大小写），允许使用get、post、delete、head、options、put等http方法，第二个参数是一个相对于文档的url或一个绝对路径的url |
| request.setRequestHeader()                       | 设置请求头，多次调用不会覆盖原来的设置（很多请求头不能手动设置）                                                                  |
| request.send()                                   | 指定可选的请求主体并向服务器发送它                                                                                 |
| request.status                                   | 以数字和文本的形式放回HTTP状态码                                                                                |
| request.statusText                               | ~                                                                                                 |
| request.getResponseHeader()                      | 查询相应头                                                                                             |
| request.getAllResponseHeaders()                  | ~                                                                                                 |
| resuest.responseText                             | 获得文本形式的响应主体                                                                                       |
| resuest.responseXML                              | 获得Document形式的响应主体                                                                                 |
| resuest.readyState                               | 指定了HTTP请求的状态                                                                                      |
| resuest.overrideMimeType()                       | 解析返回数据的时候按照指定的类型解析，而不是依据响应头的'Content-Type'                                                        |

## 事件列表

| event            | more |
|------------------|------|
| readystatechange | -    |
