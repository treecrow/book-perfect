# [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

> Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值

- [理解 Promise 简单实现的背后原理](https://segmentfault.com/p/1210000008832836/read)

## api list

| class | api                                                | more                                                                                                                                                                                                                                         |
| ----- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 创建  | new Promise( (resolve, reject)=> {...})            | -                                                                                                                                                                                                                                            |
| 属性  | Promise.prototype                                  | 表示 Promise 构造器的原型                                                                                                                                                                                                                    |
| 方法  | Promise.all(iterable)                              | 返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中 promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。 |
| ^     | Promise.prototype.allSettled(iterable)             | 返回一个 promise，该 promise 在所有给定的 promise 已被解析或被拒绝后解析，并且每个对象都描述每个 promise 的结果。                                                                                                                            |
| ^     | Promise.prototype.catch((reason)=>{}))             | 返回一个 Promise，并且处理拒绝的情况。它的行为与调用 Promise.prototype.then(undefined, onRejected) 相同                                                                                                                                      |
| ^     | Promise.prototype.finally(onFinally)               | 返回一个 Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 Promise 是否成功完成后都需要执行的代码提供了一种方式。                                                                             |
| ^     | Promise.prototype.then((value)=>{}, (reason)=>{})) | 返回一个 Promise 。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。                                                                                                                                                                |
| ^     | Promise.race(iterable)                             | 返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。                                                                                                                                                     |
| ^     | Promise.reject(reason)                             | 返回一个带有拒绝原因 reason 参数的 Promise 对象                                                                                                                                                                                              |
| ^     | Promise.resolve(value / promise / thenable)        | 返回一个以给定值解析后的 Promise 对象                                                                                                                                                                                                        |

## 三种操作状态

- pending（进行中）
- fulfilled（已成功）
- rejected（已失败）
