# net网络

## net.Server类
#### 事件
- 'close'
- 'connection'
- 'error'
- 'listening'
#### 方法
- server.address()
- server.close([callback])
- server.getConnections(callback)
- server.listen(handle[, backlog][, callback])
- server.listen(options[, callback])
- server.listen(path[, backlog][, callback])
- server.listen([port][, hostname][, backlog][, callback])
- server.ref()
- server.unref()
#### 属性
- server.connections
- server.listening
- server.maxConnections

## net.Socket类
### 创建net.Socket实例
```js
new net.Socket([options])
```
#### 事件
- 'close'
- 'connect'
- 'data'
- 'drain'
- 'end'
- 'error'
- 'lookup'
- 'timeout'
#### 方法
- socket.address()
- socket.connect(options[, connectListener])
- socket.connect(path[, connectListener])
- socket.connect(port[, host][, connectListener])
- socket.destroy([exception])
- socket.end([data][, encoding])
- socket.pause()
- socket.ref()
- socket.resume()
- socket.setEncoding([encoding])
- socket.setKeepAlive([enable][, initialDelay])
- socket.setNoDelay([noDelay])
- socket.setTimeout(timeout[, callback])
- socket.unref()
- socket.write(data[, encoding][, callback])
#### 属性
- socket.bufferSize
- socket.bytesRead
- socket.bytesWritten
- socket.connecting
- socket.destroyed
- socket.localAddress
- socket.localPort
- socket.remoteAddress
- socket.remoteFamily
- socket.remotePort

## 其它net方法
- net.connect(options[, connectListener])
- net.connect(path[, connectListener])
- net.connect(port[, host][, connectListener])
- net.createConnection(options[, connectListener])
- net.createConnection(path[, connectListener])
- net.createConnection(port[, host][, connectListener])
- net.createServer([options][, connectionListener])
- net.isIP(input)
- net.isIPv4(input)
- net.isIPv6(input)




