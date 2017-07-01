# events事件

> 大多数 Node.js 核心 API 都采用惯用的异步事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）。所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数绑定到会被对象触发的命名事件上。 事件名称通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性名

## 给监听器传入参数与 this

监听器       | this
--------- | --------------------------------------
普通的监听器函数  | 标准的 this 关键词会被设置指向监听器所附加的 EventEmitter
ES6 的箭头函数 | block本身

## 异步与同步

> EventListener 会按照监听器注册的顺序同步地调用所有监听器 (监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式)

## 只处理事件一次

注册监听器方法             | more
------------------- | --------------------------------------------
eventEmitter.on()   | 监听器会在每次触发命名事件时被调用
eventEmitter.once() | 注册一个对于特定事件最多被调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用

## 错误事件

> 如果 EventEmitter 没有为 'error' 事件注册至少一个监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、且退出 Node.js 进程

- 抛出错误，并使 Node.js 奔溃

```javascript
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
```

- 为了防止 Node.js 进程崩溃，可以在 process 对象的 uncaughtException 事件上注册监听器

```javascript
const myEmitter = new MyEmitter();

process.on('uncaughtException', (err) => {
  console.error('有错误');
});

myEmitter.emit('error', new Error('whoops!'));
```

- 作为最佳实践，应该始终为 'error' 事件注册监听器

```javascript
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('有错误');
});
myEmitter.emit('error', new Error('whoops!'));
```

## EventEmitter 类

### EventEmitter 类

- EventEmitter.defaultMaxListeners---每个事件默认可以注册最多 10 个监听器, 所有 EventEmitter 实例的默认值可以使用此属性改变

#### 事件列表

事件                  | more
------------------- | ------------------------------------------------
'newListener' 事件    | 当新的监听器被添加时，所有的 EventEmitter 会触发 'newListener' 事件
'removeListener' 事件 | 'removeListener' 事件在 listener 被移除后触发

#### 属性列表

属性                               | more
-------------------------------- | ----------------------
EventEmitter.defaultMaxListeners | （每个事件默认可以注册最多 10 个监听器）

#### 方法列表

方法                                               | more
------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------
emitter.addListener(eventName, listener)         | emitter.on(eventName, listener) 的别名
emitter.emit(eventName[, ...args])               | 按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数
emitter.eventNames()                             | 返回一个列出触发器已注册监听器的事件的数组
emitter.getMaxListeners()                        | 返回 EventEmitter 当前的最大监听器限制值，该值可以通过 emitter.setMaxListeners(n) 设置或默认为 EventEmitter.defaultMaxListeners
emitter.listenerCount(eventName)                 | 返回正在监听名为 eventName 的事件的监听器的数量
emitter.listeners(eventName)                     | 返回名为 eventName 的事件的监听器数组的副本
emitter.on(eventName, listener)                  | 添加 listener 函数到名为 eventName 的事件的监听器数组的末尾。 不会检查 listener 是否已被添加。 多次调用并传入相同的 eventName 和 listener 会导致 listener 被添加与调用多次
emitter.once(eventName, listener)                | 添加一个单次 listener 函数到名为 eventName 的事件。 下次触发 eventName 事件时，监听器会被移除，然后调用
emitter.prependListener()                        | 添加 listener 函数到名为 eventName 的事件的监听器数组的开头
emitter.prependOnceListener(eventName, listener) | 添加一个单次 listener 函数到名为 eventName 的事件的监听器数组的开头
emitter.removeAllListeners([eventName])          | 移除全部或指定 eventName 的监听器
emitter.removeListener(eventName, listener)      | 从名为 eventName 的事件的监听器数组中移除指定的 listener
emitter.setMaxListeners(n)                       | 允许修改指定的 EventEmitter 实例关于监听器数量的限制。 值设为 Infinity（或 0）表明不限制监听器的数量
