# stream流

> stream 模块可以通过以下方式引入：
```js
const stream = require('stream');
```

## 流的类型
> Node.js 中有四种基本的流类型：
  - Readable - 可读的流 (例如 fs.createReadStream()).
  - Writable - 可写的流 (例如 fs.createWriteStream()).
  - Duplex - 可读写的流 (例如 net.Socket).
  - Transform - 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate()).
  
## 对象模式
> 所有使用 Node.js API 创建的流对象都只能操作 strings 和 Buffer 对象。但是，通过一些第三方流的实现，你依然能够处理其它类型的 JavaScript 值 (除了 null，它在流处理中有特殊意义)。 这些流被认为是工作在 “对象模式”（object mode

> 在创建流的实例时，可以通过 objectMode 选项使流的实例切换到对象模式。试图将已经存在的流切换到对象模式是不安全的

## 缓冲
> Writable 和 Readable 流都会将数据存储到内部的缓存（buffer）中。这些缓存可以 通过下面的方法获取:
  - writable._writableState.getBuffer()
  - - readable._readableState.buffer
#### highWaterMark 选项
> 缓存的大小取决于传递给流构造函数的 highWaterMark 选项。 对于普通的流， highWaterMark 选项指定了总共的字节数。对于工作在对象模式的流， highWaterMark 指定了对象的总数
#### 相关API
- stream.push(chunk)
- stream.read()
- writable.write(chunk)

## 可写流
### stream.Writable 类
#### 事件
- 'close' 事件---'close' 事件将在流或其底层资源（比如一个文件）关闭后触发。'close' 事件触发后，该流将不会再触发任何事件
- 'drain' 事件---如果调用 stream.write(chunk) 方法返回 false，流将在适当的时机触发 'drain' 事件，这时才可以继续向流中写入数据
- 'error' 事件---在写入数据出错或者使用管道出错时触发
- 'finish' 事件---在调用了 stream.end() 方法，且缓冲区数据都已经传给底层系统（underlying system）之后， 'finish' 事件将被触发
- 'pipe' 事件---在可读流（readable stream）上调用 stream.pipe() 方法，并在目标流向 (destinations) 中添加当前可写流 ( writable ) 时，将会在可写流上触发 'pipe' 事件
- 'unpipe' 事件---在 Readable 上调用 stream.unpipe() 方法，从目标流向中移除当前 Writable 时，将会触发 'unpipe' 事件
#### 方法
- writable.cork()---调用 writable.cork() 方法将强制所有写入数据都内存中的缓冲区里
- writable.end([chunk][, encoding][, callback])---调用 writable.end() 方法表明接下来没有数据要被写入 Writable
- writable.setDefaultEncoding(encoding)---writable.setDefaultEncoding() 用于为 Writable 设置 encoding
- writable.uncork()--- 将输出在 stream.cork() 方法被调用之后缓冲在内存中的所有数据
- writable.write(chunk[, encoding][, callback])---向流中写入数据，并在数据处理完成后调用 callback

## 可读流
#### 两种模式
- flowing--- 可读流自动从系统底层读取数据，并通过 EventEmitter 接口的事件尽快将数据提供给应用
- paused---必须显式调用 stream.read() 方法来从流中读取数据片段
#### 三种状态
- readable._readableState.flowing = null
- readable._readableState.flowing = false
- readable._readableState.flowing = true
### stream.Readable 类
#### 事件
- 'close' 事件---将在流或其底层资源（比如一个文件）关闭后触发
- 'data' 事件---会在流将数据传递给消费者时触发
- 'end' 事件---将在流中再没有数据可供消费时触发
- 'error' 事件--- 通常，这会在底层系统内部出错从而不能产生数据，或当流的实现试图传递错误数据时发生
- 'readable' 事件---将在流中有数据可供读取时触发
#### 方法
- readable.isPaused()---返回可读流的当前操作状态
- readable.pause()---将会使 flowing 模式的流停止触发 'data' 事件， 进而切出 flowing 模式
- readable.pipe(destination[, options])---readable.pipe() 绑定一个 Writable 到 readable 上， 将可写流自动切换到 flowing 模式并将所有数据传给绑定的 Writable
- readable.read([size])---
- readable.resume()---
- readable.setEncoding(encoding)---
- readable.unpipe([destination])---
- readable.unshift(chunk)---
- readable.wrap(stream)---

## Duplex 流与 Transform 流
- stream.Duplex 类
- stream.Transform 类
