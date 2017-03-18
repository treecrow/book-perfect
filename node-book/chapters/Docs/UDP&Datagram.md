# dgram数据报

## dgram.Socket 类
#### 事件
- 'close' 事件---'close'事件将在使用close()关闭一个 socket 之后触发
- 'error' 事件---当有任何错误发生时，'error'事件将被触发
- 'listening' 事件---当一个 socket 开始监听数据包信息时，'listening'事件将被触发
- 'message' 事件---当有新的数据包被 socket 接收时，'message'事件会被触发
#### 方法
- socket.addMembership(multicastAddress[, multicastInterface])---通知内核将multicastAddress和multicastInterface提供的多路传送集合通过IP_ADD_MEMBERSHIP这个 socket 选项结合起来
- socket.address()---返回一个包含 socket 地址信息的对象
  > 对于 UDP socket，该对象将包含address、family和port属性
- socket.bind([port][, address][, callback])---对于 UDP socket，该方法会令dgram.Socket在指定的port和可选的address上监听数据包信息
- socket.bind(options[, callback])
- socket.close([callback])---关闭该 socket 并停止监听其上的数据
- socket.dropMembership(multicastAddress[, multicastInterface])---引导内核通过IP_DROP_MEMBERSHIP这个 socket 选项删除multicastAddress指定的多路传送集合。
  > 当 socket 被关闭或进程被终止时，该方法会被内核自动调用，所以大多数的应用都不用自行调用该方法。
- socket.send(msg, [offset, length,] port, address[, callback])---在 socket 上发送一个数据包
- socket.setBroadcast(flag)
- socket.setMulticastLoopback(flag)
- socket.setMulticastTTL(ttl)
- socket.setTTL(ttl)
- socket.ref()
- socket.unref()

## dgram
#### 方法
- dgram.createSocket(options[, callback])
- dgram.createSocket(type[, callback])
