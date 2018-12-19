# Promise

- [理解Promise简单实现的背后原理](https://segmentfault.com/p/1210000008832836/read)

## 三种操作状态

* pending（进行中）
* fulfilled（已成功）
* rejected（已失败）

## api 类标

| api                                   | more                                                                                                                                                                              |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| new Promise((resolve, reject) => { }) | -                                                                                                                                                                                 |
| Promise.prototype.then()              | 为 Promise 实例添加状态改变时的回调函数。前面说过，then 方法的第一个参数是 resolved 状态的回调函数，第二个参数（可选）是 rejected 状态的回调函数                                  |
| Promise.prototype.catch()             | Promise.prototype.catch 方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数                                                                                          |
| Promise.prototype.finally()           | finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作                                                                                                                 |
| Promise.all()                         | 用于将多个 Promise 实例，包装成一个新的 Promise 实例                                                                                                                              |
| Promise.race()                        | 将多个 Promise 实例，包装成一个新的 Promise 实例                                                                                                                                  |
| Promise.resolve()                     | 将现有对象转为 Promise 对象。                                                                                                                                                     |
| Promise.reject(reason)                | 返回一个新的 Promise 实例，该实例的状态为 rejected                                                                                                                                |
| Promise.try()                         | 不知道或者不想区分，函数 f 是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管 f 是否包含异步操作，都用 then 方法指定下一步流程，用 catch 方法处理 f 抛出的错误 |
