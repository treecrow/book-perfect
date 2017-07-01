# net网络

> net模块提供了一个用于创建基于tcp或IPC servers (net.createServer())和clients(net.createConnection()) 的异步api

## net.Server类

> 这个类用于创建TCP或IPC server

```javascript
new net.Server([options][, connectionListener])
```

### 事件列表

事件           | more
------------ | ----------------------------------------------------------------------------
'close'      | 当server关闭的时候触发. 注意,如果connections存在, 直到所有的connections结束才会触发这个事件
'connection' | 当一个新的connection建立的时候触发. socket 是一个 net.Socket的实例对象.
'error'      | 当错误出现的时候触发. 不同与 net.Socket, 'close' 事件不会在这个事件触发后继续触发 除非 server.close() 是手动调用
'listening'  | 当服务被绑定后调用 server.listen()

### 方法列表

方法                              | more
------------------------------- | ----
server.address()                | -
server.close([callback])        | -
server.getConnections(callback) | -
server.listen()                 | -
server.ref()                    | -
server.unref()                  | -

### 属性列表

属性                    | more
--------------------- | ------------------------------------------------------------------------------------
server.listening      | A Boolean indicating whether or not the server is listening for connections
server.maxConnections | Set this property to reject connections when the server's connection count gets high

## net.Socket类

```javascript
new net.Socket([options])
```

### 事件列表

事件        | more
--------- | ----
'close'   | -
'connect' | -
'data'    | -
'drain'   | -
'end'     | -
'error'   | -
'lookup'  | -
'timeout' | -

### 方法列表

方法                                              | more
----------------------------------------------- | ----
socket.address()                                | -
socket.connect(options[, connectListener])      | -
socket.connect(path[, connectListener])         | -
socket.connect(port[, host][, connectListener]) | -
socket.destroy([exception])                     | -
socket.end([data][, encoding])                  | -
socket.pause()                                  | -
socket.ref()                                    | -
socket.resume()                                 | -
socket.setEncoding([encoding])                  | -
socket.setKeepAlive([enable][, initialDelay])   | -
socket.setNoDelay([noDelay])                    | -
socket.setTimeout(timeout[, callback])          | -
socket.unref()                                  | -
socket.write(data[, encoding][, callback])      | -

### 属性列表

属性                   | more
-------------------- | ----
socket.bufferSize    | -
socket.bytesRead     | -
socket.bytesWritten  | -
socket.connecting    | -
socket.destroyed     | -
socket.localAddress  | -
socket.localPort     | -
socket.remoteAddress | -
socket.remoteFamily  | -
socket.remotePort    | -

## 其它net方法

方法                     | more
---------------------- | ----
net.connect()          | -
net.createConnection() | -
net.createServer()     | -
net.isIP(input)        | -
net.isIPv4(input)      | -
net.isIPv6(input)      | -
