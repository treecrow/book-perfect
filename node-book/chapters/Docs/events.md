# events事件

### EventEmitter 类
- EventEmitter.defaultMaxListeners---每个事件默认可以注册最多 10 个监听器, 所有 EventEmitter 实例的默认值可以使用此属性改变

### EventEmitter实例
#### 事件
- 'newListener' 事件---EventEmitter 实例会在一个监听器被添加到其内部监听器数组之前触发自身的 'newListener' 事件
- 'removeListener' 事件---'removeListener' 事件在 listener 被移除后触发
- 'error'事件---当 EventEmitter 实例中发生错误时，会触发一个 'error' 事件
  > 如果 EventEmitter 没有为 'error' 事件注册至少一个监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、且退出 Node.js 进程.
  
  > 为了防止 Node.js 进程崩溃，可以在 process 对象的 uncaughtException 事件上注册监听器
  
  > 作为最佳实践，应该始终为 'error' 事件注册监听器
  
#### 方法
*注册事件*
- emitter.on()---添加 listener 函数到名为 eventName 的事件的监听器数组的末尾
  >  不会检查 listener 是否已被添加。 多次调用并传入相同的 eventName 和 listener 会导致 listener 被添加与调用多次
- emitter.addListener(eventName, listener)---emitter.on(eventName, listener) 的别名
- emitter.once()---可以注册一个对于特定事件最多被调用一次的监听器。 
  > 当事件被触发时，监听器会被注销，然后再调用
- emitter.prependListener(eventName, listener)---添加 listener 函数到名为 eventName 的事件的监听器数组的开头
- emitter.prependOnceListener(eventName, listener)---添加一个单次 listener 函数到名为 eventName 的事件的监听器数组的开头  

*移除事件*
- emitter.removeAllListeners([eventName])---移除全部或指定 eventName 的监听器
- emitter.removeListener(eventName, listener)---从名为 eventName 的事件的监听器数组中移除指定的 listener 

*触发事件*
- emitter.emit(eventName[, ...args])---按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数

*事件相关信息*
- emitter.eventNames()---返回一个列出触发器已注册监听器的事件的数组。 数组中的值为字符串或符号
- emitter.getMaxListeners()---返回 EventEmitter 当前的最大监听器限制值
- emitter.setMaxListeners(n)---修改指定的 EventEmitter 实例的限制。 值设为 Infinity（或 0）表明不限制监听器的数量
- emitter.listenerCount(eventName)---返回正在监听名为 eventName 的事件的监听器的数量
- emitter.listeners(eventName)---返回名为 eventName 的事件的监听器数组的副本

#### 监听器内部this的指向:
> eventEmitter.emit() 方法允许将任意参数传给监听器函数。 当一个普通的监听器函数被 EventEmitter 调用时，标准的 this 关键词会被设置指向监听器所附加的 EventEmitter

> 也可以使用 ES6 的箭头函数作为监听器。但是这样 this 关键词就不再指向 EventEmitter 实例

#### 异步与同步
> EventListener 会按照监听器注册的顺序同步地调用所有监听器

>  监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式
