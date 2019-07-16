# [DataView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)

> DataView 视图是一个可以从 ArrayBuffer 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的字节序问题

## api list

| class | api                                                                | more                                                                                                 |
| ----- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 创建  | new DataView(buffer [, byteOffset [, byteLength]])                 | 返回一个 DataView 对象用来呈现指定的缓存区数据                                                       |
| 属性  | DataView.prototype                                                 | 表示 DataView 的原型                                                                                 |
| ^     | DataView.prototype.buffer                                          | 描述了在构造时被 DataView 引用的 ArrayBuffer                                                         |
| ^     | DataView.prototype.byteLength                                      | 描述了视图从它的 ArrayBuffer 开始的字节长度                                                          |
| ^     | DataView.prototype.byteOffset                                      | 描述了从 ArrayBuffer 开始的字节偏移量                                                                |
| 方法  | DataView.prototype.getFloat32(byteOffset [, littleEndian])         | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个 32-bit 数(浮点型，4 个字节).                 |
| ^     | DataView.prototype.getFloat64(byteOffset [, littleEndian])         | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个 64-bit 数(双精度浮点型，8 个字节).           |
| ^     | DataView.prototype.getInt16(byteOffset [, littleEndian])           | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个 16-bit 数(短整型，2 个字节).                 |
| ^     | DataView.prototype.getInt32(byteOffset [, littleEndian])           | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个 32-bit 数(长整型，4 个字节).                 |
| ^     | DataView.prototype.getInt8(byteOffset)                             | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个有符号的 8-bit 整数(一个字节)。               |
| ^     | DataView.prototype.getUint16(byteOffset [, littleEndian])          | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个 16-bit 数(无符号短整型，2 个字节).           |
| ^     | DataView.prototype.getUint32(byteOffset [, littleEndian])          | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个 32-bit 数(无符号长整型，4 个字节).           |
| ^     | DataView.prototype.getUint8(byteOffset)                            | 从 DataView 相对于起始位置偏移 n 个字节处开始，获取一个无符号的 8-bit 整数(一个字节).                |
| ^     | DataView.prototype.setFloat32(byteOffset, value [, littleEndian])) | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 32-bit 数(浮点型).              |
| ^     | DataView.prototype.setFloat64(byteOffset, value [, littleEndian])  | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 64-bit 数(双精度浮点型).        |
| ^     | DataView.prototype.setInt16(byteOffset, value [, littleEndian])    | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 16-bit 数(短整型).              |
| ^     | DataView.prototype.setInt32(byteOffset, value [, littleEndian])    | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 32-bit 数(长整型).              |
| ^     | DataView.prototype.setInt8(byteOffset, value)                      | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 8-bit 数(一个字节).             |
| ^     | DataView.prototype.setUint16(byteOffset, value [, littleEndian])   | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 16-bit 数(无符号短整型).        |
| ^     | DataView.prototype.setUint32(byteOffset, value [, littleEndian])   | 从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 32-bit 数(无符号长整型).        |
| ^     | DataView.prototype.setUint8(byteOffset, value)                     | setUint8()从 DataView 起始位置以 byte 为计数的指定偏移量(byteOffset)处储存一个 8-bit 数(无符号字节). |
