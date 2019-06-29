# stream

> 流

## 流的类型

| 类        | 扩展需实现的方法                       | 解释                                                                   |
| --------- | -------------------------------------- | ---------------------------------------------------------------------- |
| Readable  | `_read`                                | 可读的流 (例如 fs.createReadStream())                                  |
| Writable  | `_write`, `_writev`, `_final`          | 可写的流 (例如 fs.createWriteStream())                                 |
| Duplex    | `_read`, `_write`, `_writev`, `_final` | 可读写的流 (例如 net.Socket)                                           |
| Transform | `_transform`, `_flush`, `_final`       | 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate()) |

## api 列表

- stream

| api                                     | more                                                                         |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| stream.finished(stream, callback)       | 当流不再可读、可写、发生错误、或提前关闭时，通过该函数获得通知。             |
| stream.pipeline(...streams[, callback]) | 使用管道连接多个流，并传递错误与完成清理工作，当管道连接完成时通知回调函数。 |

- stream.Readable 类

| class  | api                                   | more                                                                                              |
| ------ | ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| api    | readable.setEncoding(encoding)        | 为从可读流读入的数据设置字符编码                                                                  |
| ^      | readable.resume()                     | 将被暂停的可读流恢复触发 'data' 事件，并将流切换到流动模式。                                      |
| ^      | readable.pause()                      | 使流动模式的流停止触发 'data' 事件，并切换出流动模式                                              |
| ^      | readable.pipe(destination[, options]) | 绑定可写流到可读流，将可读流自动切换到流动模式，并将可读流的所有数据推送到绑定的可写流            |
| ^      | readable.unpipe([destination])        | 解绑之前使用 stream.pipe() 绑定的可写流。                                                         |
| ^      | readable.read([size])                 | 从内部缓冲拉取并返回数据。 如果没有可读的数据，则返回 null                                        |
| ^      | readable.unshift(chunk)               | 将数据块推回内部缓冲                                                                              |
| ^      | readable.isPaused()                   | 返回可读流的当前操作状态                                                                          |
| ^      | readable.destroy([error])             | 销毁流，并触发 'error' 事件和 'close' 事件                                                        |
| ^      | readable.readableFlowing              | 可读流状态： null / false / true                                                                  |
| ^      | readable.readable                     | Is true if it is safe to call [readable.read()][].                                                |
| ^      | readable.readableHighWaterMark        | 返回构造可读流时传入的 highWaterMark 的值。                                                       |
| ^      | readable.readableLength               | 返回队列中准备读取的字节数（或对象数）。                                                          |
| ^      | readable.readableBuffer               | 可写流和可读流都会在内部的缓冲器中存储数据，获取缓存数据                                          |
| event  | data                                  | 会在流将数据传递给消费者时触发                                                                    |
| ^      | error                                 | 通常，这会在底层系统内部出错从而不能产生数据，或当流的实现试图传递错误数据时发生                  |
| ^      | readable                              | 将在流中有数据可供读取时触发                                                                      |
| ^      | end                                   | 将在流中再没有数据可供消费时触发                                                                  |
| ^      | close                                 | 将在流或其底层资源（比如一个文件）关闭后触发                                                      |
| option | highWaterMark <number>                | 从底层资源读取数据并存储在内部缓冲区中的最大字节数。 默认为 16384 (16kb), 对象模式的流默认为 16。 |
| ^      | encoding <string>                     | 如果指定了，则使用指定的字符编码将 buffer 解码成字符串。 默认为 null。                            |
| ^      | objectMode <boolean>                  | 流是否可以是一个对象流。 也就是说 stream.read(n) 会返回对象而不是 Buffer。 默认为 false。         |
| ^      | read <Function>                       | 对 stream.`_read`() 方法的实现。                                                                  |
| ^      | destroy <Function>                    | 对 stream.`_destroy`() 方法的实现。                                                               |

- stream.Writable 类

| class  | api                                           | more                                                                                                                                               |
| ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| api    | writable.setDefaultEncoding(encoding)         | 为可写流设置默认的 encoding                                                                                                                        |
| ^      | writable.cork()                               | 强制把所有写入的数据都缓冲到内存中。 当调用 stream.uncork() 或 stream.end() 时，缓冲的数据才会被输出。                                             |
| ^      | writable.uncork()                             | 将调用 stream.cork() 后缓冲的所有数据输出到目标                                                                                                    |
| ^      | writable.write(chunk[, encoding][, callback]) | 写入数据到流，并在数据被完全处理之后调用 callback                                                                                                  |
| ^      | writable.destroy([error])                     | 销毁流，并触发 'error' 事件且传入 error 参数                                                                                                       |
| ^      | writable.end([chunk][, encoding][, callback]) | 调用 writable.end() 表明已没有数据要被写入可写流                                                                                                   |
| ^      | writable.writable                             | Is true if it is safe to call [writable.write()][].                                                                                                |
| ^      | writable.writableHighWaterMark                | 返回构造可写流时传入的 highWaterMark 的值。                                                                                                        |
| ^      | writable.writableLength                       | 返回队列中准备被写入的字节数（或对象数）。                                                                                                         |
| ^      | writable.writableBuffer                       | 可写流和可读流都会在内部的缓冲器中存储数据，获取缓存数据                                                                                           |
| event  | pipe                                          | 在可读流（readable stream）上调用 stream.pipe() 方法，并在目标流向 (destinations) 中添加当前可写流 ( writable ) 时，将会在可写流上触发 'pipe' 事件 |
| ^      | unpipe                                        | 在 Readable 上调用 stream.unpipe() 方法，从目标流向中移除当前 Writable 时，将会触发 'unpipe' 事件                                                  |
| ^      | error                                         | 在写入数据出错或者使用管道出错时触发                                                                                                               |
| ^      | drain                                         | 如果调用 stream.write(chunk) 方法返回 false，流将在适当的时机触发 'drain' 事件，这时才可以继续向流中写入数据                                       |
| ^      | finish                                        | 在调用了 stream.end() 方法，且缓冲区数据都已经传给底层系统（underlying system）之后， 'finish' 事件将被触发                                        |
| ^      | close                                         | 'close' 事件将在流或其底层资源（比如一个文件）关闭后触发。'close' 事件触发后，该流将不会再触发任何事件                                             |
| option | highWaterMark <number>                        | 当调用 stream.write() 开始返回 false 时的缓冲大小。 默认为 16384 (16kb), 对象模式的流默认为 16。                                                   |
| ^      | decodeStrings <boolean>                       | 是否把传入 stream.`_write`() 的字符串编码为 Buffer，使用的字符编码为调用 stream.write() 时指定的。 默认为 true。                                   |
| ^      | defaultEncoding <string>                      | 当 stream.write() 的参数没有指定字符编码时默认的字符编码。 默认为 'utf8'。                                                                         |
| ^      | objectMode <boolean>                          | 是否可以调用 stream.write(anyObj)。 一旦设为 true，则除了字符串、 Buffer 或 Uint8Array，还可以写入流实现支持的其他 JavaScript 值。 默认为 false。  |
| ^      | emitClose <boolean>                           | 流被销毁后是否触发 'close' 事件。 默认为 true。                                                                                                    |
| ^      | write <Function>                              | 对 stream.`_write`() 方法的实现。                                                                                                                  |
| ^      | writev <Function>                             | 对 stream.`_writev`() 方法的实现。                                                                                                                 |
| ^      | destroy <Function>                            | 对 stream.`_destroy`() 方法的实现。                                                                                                                |
| ^      | final <Function>                              | 对 stream.`_final`() 方法的实现。                                                                                                                  |

- stream.Duplex 类

| class  | api                            | more                                                                               |
| ------ | ------------------------------ | ---------------------------------------------------------------------------------- |
| option | readableObjectMode <boolean>   | 设置流的可读端为 objectMode。 如果 objectMode 为 true，则不起作用。 默认为 false。 |
| ^      | writableObjectMode <boolean>   | 设置流的可写端为 objectMode。 如果 objectMode 为 true，则不起作用。 默认为 false。 |
| ^      | readableHighWaterMark <number> | 设置流的可读端的 highWaterMark。 如果已经设置了 highWaterMark，则不起作用。        |
| ^      | writableHighWaterMark <number> | 设置流的可写端的 highWaterMark。 如果已经设置了 highWaterMark，则不起作用。        |

- stream.Transform 类

| class  | api                  | more                              |
| ------ | -------------------- | --------------------------------- |
| option | transform <Function> | 对 stream.`_transform`() 的实现。 |
| ^      | flush <Function>     | 对 stream.`_flush`() 的实现。     |
