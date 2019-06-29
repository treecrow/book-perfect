# events

> 事件

## api 列表

| 注册监听器方法                                        | more                                                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| eventEmitter.setMaxListeners(n)                       | 允许修改指定的 EventEmitter 实例关于监听器数量的限制。 值设为 Infinity（或 0）表明不限制监听器的数量                            |
| eventEmitter.defaultMaxListeners                      | 每个事件默认可以注册最多 10 个监听器,修改此属性修改所有 EventEmitter 实例监听器的限制                                           |
| eventEmitter.getMaxListeners()                        | 返回 EventEmitter 当前的最大监听器限制值，该值可以通过 emitter.setMaxListeners(n) 设置或默认为 EventEmitter.defaultMaxListeners |
| eventEmitter.on(eventName, listener)                  | 监听器会在每次触发命名事件时被调用                                                                                              |
| eventEmitter.addListener(eventName, listener)         | emitter.on(eventName, listener) 的别名                                                                                          |
| eventEmitter.prependListener(eventName, listener)     | 添加 listener 函数到名为 eventName 的事件的监听器数组的开头                                                                     |
| eventEmitter.prependOnceListener(eventName, listener) | 添加一个单次 listener 函数到名为 eventName 的事件的监听器数组的开头                                                             |
| eventEmitter.once(eventName, listener)                | 注册一个对于特定事件最多被调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用                                         |
| eventEmitter.removeListener(eventName, listener)      | 从名为 eventName 的事件的监听器数组中移除指定的 listener                                                                        |
| eventEmitter.off(eventName, listener)                 | ^                                                                                                                               |
| eventEmitter.eventNames()                             | 返回一个列出触发器已注册监听器的事件的数组                                                                                      |
| eventEmitter.listenerCount(eventName)                 | 返回正在监听的名为 eventName 的事件的监听器的数量                                                                               |
| eventEmitter.listeners(eventName)                     | 返回名为 eventName 的事件的监听器数组的副本                                                                                     |
| eventEmitter.rawListeners(eventName)                  | 返回 eventName 事件的监听器数组的拷贝，包括封装的监听器（例如由 .once() 创建的）                                                |
| eventEmitter.emit(eventName[, ...args])               | 按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数                                           |
| eventEmitter.removeAllListeners([eventName])          | 移除全部或指定 eventName 的监听器                                                                                               |

## 通用事件

| 事件                        | more                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| newListener                 | 当新的监听器被添加时，所有的 EventEmitter 会触发 'newListener' 事件                                       |
| removeListener              | 'removeListener' 事件在 listener 被移除后触发                                                             |
| error                       | 如果没有为 'error' 事件注册监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、并退出 Node.js 进程 |
| uncaughtException (process) | 为了防止 Node.js 进程崩溃，可以在 process 对象的 uncaughtException 事件上注册监听器                       |
