# stream流

> 流（stream）在 Node.js 中是处理流数据的抽象接口（abstract interface）。 stream 模块提供了基础的 API 。使用这些 API 可以很容易地来构建实现流接口的对象

## 流的类型

### Node.js 中有四种基本的流类型

流类型       | more
--------- | ---------------------------------------------------
Readable  | 可读的流 (例如 fs.createReadStream())
Writable  | 可写的流 (例如 fs.createWriteStream())
Duplex    | 可读写的流 (例如 net.Socket)
Transform | 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate())

### 对象模式

> 所有使用 Node.js API 创建的流对象都只能操作 strings 和 Buffer（或 Uint8Array） 对象。但是，通过一些第三方流的实现，你依然能够处理其它类型的 JavaScript 值 (除了 null，它在流处理中有特殊意义)。 这些流被认为是工作在 "对象模式"（object mode

### 缓冲

#### 缓存相关方法

方法                                  | more
----------------------------------- | -------------------------
writable._writableState.getBuffer() | 获取内部缓存
readable._readableState.buffer      | 获取内部缓存
stream.push(chunk)                  | 可读流数据被放到缓存中
stream.read()                       | 调用后，缓存中的数据因为消费而从缓存内部队列中移除
writable.write(chunk)               | 可写流将数据放到缓存

## 流消费者的 API

### 可写流

#### stream.Writable 类

##### 事件列表

事件          | more
----------- | -----------------------------------------------------------------------------------------------------------
'close' 事件  | 'close' 事件将在流或其底层资源（比如一个文件）关闭后触发。'close' 事件触发后，该流将不会再触发任何事件
'drain' 事件  | 如果调用 stream.write(chunk) 方法返回 false，流将在适当的时机触发 'drain' 事件，这时才可以继续向流中写入数据
'error' 事件  | 在写入数据出错或者使用管道出错时触发
'finish' 事件 | 在调用了 stream.end() 方法，且缓冲区数据都已经传给底层系统（underlying system）之后， 'finish' 事件将被触发
'pipe' 事件   | 在可读流（readable stream）上调用 stream.pipe() 方法，并在目标流向 (destinations) 中添加当前可写流 ( writable ) 时，将会在可写流上触发 'pipe' 事件
'unpipe' 事件 | 在 Readable 上调用 stream.unpipe() 方法，从目标流向中移除当前 Writable 时，将会触发 'unpipe' 事件

##### 方法列表

方法                                            | more
--------------------------------------------- | ------------------------------------------------------
writable.cork()                               | 调用 writable.cork() 方法将强制所有写入数据都内存中的缓冲区里
writable.end([chunk][, encoding][, callback]) | 调用 writable.end() 方法表明接下来没有数据要被写入 Writable
writable.setDefaultEncoding(encoding)         | writable.setDefaultEncoding() 用于为 Writable 设置 encoding
writable.uncork()                             | 将输出在 stream.cork() 方法被调用之后缓冲在内存中的所有数据
writable.write(chunk[, encoding][, callback]) | 向流中写入数据，并在数据处理完成后调用 callback
writable.destroy([error])                     | Destroy the stream, and emit the passed error.

### 可读流

#### 两种模式

模式      | more
------- | -----------------------------------------------
flowing | 可读流自动从系统底层读取数据，并通过 EventEmitter 接口的事件尽快将数据提供给应用
paused  | 必须显式调用 stream.read() 方法来从流中读取数据片段

##### 切换到 flowing 模式

- 监听 'data' 事件。
- 调用 stream.resume() 方法。
- 调用 stream.pipe() 方法将数据发送到 Writable。

##### 切换到 paused 模式

- 如果不存在管道目标（pipe destination），可以通过调用 stream.pause() 方法实现。
- 如果存在管道目标，可以通过取消 'data' 事件监听，并调用 stream.unpipe() 方法移除所有管道目标来实现。

#### 三种状态

状态                                      | more
--------------------------------------- | ---------------------------------
readable._readableState.flowing = null  | 由于不存在数据消费者，可读流将不会产生数据
readable._readableState.flowing = false | 暂停事件流，但 不会 暂停数据生成（数据可能堆积到流的内部缓存中）
readable._readableState.flowing = true  | 随着数据生成，可读流开始频繁触发事件

#### stream.Readable 类

##### 事件列表

事件            | more
------------- | ----------------------------------------
'close' 事件    | 将在流或其底层资源（比如一个文件）关闭后触发
'data' 事件     | 会在流将数据传递给消费者时触发
'end' 事件      | 将在流中再没有数据可供消费时触发
'error' 事件    | 通常，这会在底层系统内部出错从而不能产生数据，或当流的实现试图传递错误数据时发生
'readable' 事件 | 将在流中有数据可供读取时触发

##### 方法列表

方法                                    | more
------------------------------------- | --------------------------------------------------------------------------------------------------------------------
readable.isPaused()                   | 返回可读流的当前操作状态
readable.pause()                      | 将会使 flowing 模式的流停止触发 'data' 事件， 进而切出 flowing 模式
readable.pipe(destination[, options]) | readable.pipe() 绑定一个 Writable 到 readable 上， 将可写流自动切换到 flowing 模式并将所有数据传给绑定的 Writable
readable.read([size])                 | 从内部缓冲区中抽出并返回一些数据
readable.resume()                     | causes an explicitly paused Readable stream to resume emitting 'data' events, switching the stream into flowing mode
readable.setEncoding(encoding)        | 为从可读流读入的数据设置字符编码
readable.unpipe([destination])        | detaches a Writable stream previously attached using the stream.pipe() method
readable.unshift(chunk)               | pushes a chunk of data back into the internal buffer
readable.wrap(stream)                 |
readable.destroy([error])             | Destroy the stream, and emit 'error'

### Duplex 流与 Transform 流

#### stream.Duplex 类

> Duplex 流是同时实现了 Readable 和 Writable 接口的流

#### stream.Transform 类

> 变换流（Transform streams） 是一种 Duplex 流。它的输出与输入是通过某种方式关联的。和所有 Duplex 流一样，变换流同时实现了 Readable 和 Writable 接口

- transform.destroy([error])---Destroy the stream, and emit 'error'

## Stream API 的实现

```javascript
const { Writable } = require('stream');

class MyWritable extends Writable {
  constructor(options) {
    super(options);
    // ...
  }
}
```

Use-case                                      | Class     | Method(s) to implement
--------------------------------------------- | --------- | ------------------------------
Reading only                                  | Readable  | _read
Writing only                                  | Writable  | _write, _writev, _final
Reading and writing                           | Duplex    | _read, _write, _writev, _final
Operate on written data, then read the result | Transform | _transform, _flush, _final

### 简单的构建

> 略

### 可写流的实现

> 略

### 可读流的实现

> 略

### Duplex流的实现

> 略

### Transform流的实现

> 略

## 附加说明

### Compatibility with Older Node.js Versions

> 略

### readable.read(0)

> 略

### readable.push('')

> 略
