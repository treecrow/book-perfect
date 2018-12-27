# [Cookies](https://www.electronjs.cn/docs/api/cookies)

> 查询和修改一个会话的cookies

> 通过Session的cookies属性来访问Cookies的实例


## api 列表

| api                                 | more                                                                                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| cookies.get(filter, callback)       | 发送一个请求获取所有匹配 filter 对象条件的cookie，回调函数将在请求结束后以 callback(error, cookies) 的形式被调用 |
| cookies.set(details, callback)      | 设置一个以details对象为模型的cookie，回调函数将在设置执行后以callback(error)形式被调用。                         |
| cookies.remove(url, name, callback) | 删除与 url 和 name 相匹配的 cookie, 回调函数将在执行完成时被调用                                                 |
| cookies.flushStore(callback)        | 写入所有未写入磁盘的 cookie                                                                                      |

## 事件列表

| event   | more                                          |
| ------- | --------------------------------------------- |
| changed | 该事件在cookie 被添加、修改、删除或过期时触发 |