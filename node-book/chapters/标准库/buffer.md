# [buffer](http://nodejs.cn/api/buffer.html)

## api

| 分类方法           | 作用                                                                        |
| ------------------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 创建实例           | Buffer.from(array)                                                          | -                                                                                                  |
| ~                  | Buffer.from(buffer)                                                         | -                                                                                                  |
| ~                  | Buffer.from(arrayBuffer[, byteOffset[, length]])                            | -                                                                                                  |
| ~                  | Buffer.from(string[, encoding])                                             | -                                                                                                  |
| ~                  | Buffer.alloc(size[, fill[, encoding]])                                      | 返回一个指定大小的被填满的 Buffer 实例                                                             |
| ~                  | Buffer.allocUnsafe(size)                                                    | -                                                                                                  |
| ~                  | Buffer.allocUnsafeSlow(size)                                                | -                                                                                                  |
| Buffer类属性／方法 | Buffer.poolSize                                                             | 这是用于决定预分配的、内部 Buffer 实例池的大小的字节数（可设置）                                   |
| ~                  | Buffer.byteLength(string[, encoding])                                       | 返回一个字符串的实际字节长度                                                                       |
| ~                  | Buffer.compare(buf1, buf2)                                                  | 比较 buf1 和 buf2 ，通常用于 Buffer 实例数组的排序                                                 |
| ~                  | Buffer.concat(list[, totalLength])                                          | -                                                                                                  |
| ~                  | Buffer.isBuffer(obj)                                                        | 如果 obj 是一个 Buffer 则返回 true ，否则返回 false                                                |
| ~                  | Buffer.isEncoding(encoding)                                                 | -                                                                                                  |
| 实例属性/方法      | buf.length                                                                  | 返回 buf 在字节数上分配的内存量。 注意，这并不一定反映 buf 内可用的数据量                          |
| ~                  | buf.keys()                                                                  | -                                                                                                  |
| ~                  | buf.values()                                                                | -                                                                                                  |
| ~                  | buf.entries()                                                               | -                                                                                                  |
| ~                  | buf.indexOf(value[, byteOffset][, encoding])                                | -                                                                                                  |
| ~                  | buf.lastIndexOf(value[, byteOffset][, encoding])                            | -                                                                                                  |
| ~                  | buf.includes(value[, byteOffset][, encoding])                               | -                                                                                                  |
| ~                  | buf.equals(otherBuffer)                                                     | -                                                                                                  |
| ~                  | buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]]) | 比较 buf 与 target，返回表明 buf 在排序上是否排在 target 之前、或之后、或相同                      |
| ~                  | buf.fill(value[, offset[, end]][, encoding])                                | 填充buf                                                                                            |
| ~                  | buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])                 | 拷贝 buf 的一个区域的数据到 target 的一个区域，即便 target 的内存区域与 buf 的重叠                 |
| ~                  | buf.toString([encoding[, start[, end]]])                                    | 根据 encoding 指定的字符编码解码 buf 成一个字符串                                                  |
| ~                  | buf.slice([start[, end]])                                                   | ~                                                                                                  |
| ~                  | buf.toJSON()                                                                | 返回 buf 的 JSON 格式                                                                              |
| ~                  | buf.readDoubleBE(offset[, noAssert])                                        | 以大尾数格式从 buf 中指定的 offset 读取一个64位双精度值                                            |
| ~                  | buf.readDoubleLE(offset[, noAssert])                                        | 以小尾数格式从 buf 中指定的 offset 读取一个64位双精度值                                            |
| ~                  | buf.readFloatBE(offset[, noAssert])                                         | 以大尾数格式从 buf 中指定的 offset 读取一个32位浮点值                                              |
| ~                  | buf.readFloatLE(offset[, noAssert])                                         | 以小尾数格式从 buf 中指定的 offset 读取一个32位浮点值                                              |
| ~                  | buf.readInt32BE(offset[, noAssert])                                         | 以大尾数格式从 buf 中指定的 offset 读取一个有符号的32位整数值                                      |
| ~                  | buf.readInt32LE(offset[, noAssert])                                         | 以小尾数格式从 buf 中指定的 offset 读取一个有符号的32位整数值                                      |
| ~                  | buf.readUInt32BE(offset[, noAssert])                                        | 以大尾数格式从 buf 中指定的 offset 读取一个无符号的32位整数值                                      |
| ~                  | buf.readUInt32LE(offset[, noAssert])                                        | 以小尾数格式从 buf 中指定的 offset 读取一个无符号的32位整数值                                      |
| ~                  | buf.readInt16BE(offset[, noAssert])                                         | 以大尾数格式从 buf 中指定的 offset 读取一个有符号的16位整数值                                      |
| ~                  | buf.readInt16LE(offset[, noAssert])                                         | 以小尾数格式从 buf 中指定的 offset 读取一个有符号的16位整数值                                      |
| ~                  | buf.readUInt16BE(offset[, noAssert])                                        | 以大尾数格式从 buf 中指定的 offset 读取一个无符号的16位整数值                                      |
| ~                  | buf.readUInt16LE(offset[, noAssert])                                        | 以小尾数格式从 buf 中指定的 offset 读取一个无符号的16位整数值                                      |
| ~                  | buf.readIntBE(offset, byteLength[, noAssert])                               | 从 buf 中指定的 offset 读取 byteLength 个字节，且读取的值会被解析为二进制补码值。 最高支持48位精度 |
| ~                  | buf.readIntLE(offset, byteLength[, noAssert])                               | 从 buf 中指定的 offset 读取 byteLength 个字节，且读取的值会被解析为二进制补码值。 最高支持48位精度 |
| ~                  | buf.readUIntBE(offset, byteLength[, noAssert])                              | 从 buf 中指定的 offset 读取 byteLength 个字节，且读取的值会被解析为无符号的整数。 最高支持48位精度 |
| ~                  | buf.readUIntLE(offset, byteLength[, noAssert])                              | 从 buf 中指定的 offset 读取 byteLength 个字节，且读取的值会被解析为无符号的整数。 最高支持48位精度 |
| ~                  | buf.readInt8(offset[, noAssert])                                            | 从 buf 中指定的 offset 读取一个有符号的8位整数值                                                   |
| ~                  | buf.readUInt8(offset[, noAssert])                                           | 从 buf 中指定的 offset 读取一个无符号的8位整数值                                                   |
| ~                  | buf.write(string[, offset[, length]][, encoding])                           | 根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数            |
| ~                  | buf.writeDoubleBE(value, offset[, noAssert])                                | 以大尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的64位双精度值            |
| ~                  | buf.writeDoubleLE(value, offset[, noAssert])                                | 以小尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的64位双精度值            |
| ~                  | buf.writeFloatBE(value, offset[, noAssert])                                 | 以大尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的32位浮点值              |
| ~                  | buf.writeFloatLE(value, offset[, noAssert])                                 | 以小尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的32位浮点值              |
| ~                  | buf.writeInt32BE(value, offset[, noAssert])                                 | 以大尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的32位整数                |
| ~                  | buf.writeInt32LE(value, offset[, noAssert])                                 | 以小尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的32位整数                |
| ~                  | buf.writeUInt32BE(value, offset[, noAssert])                                | 以大尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的无符号的32位整数        |
| ~                  | buf.writeUInt32LE(value, offset[, noAssert])                                | 以小尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的无符号的32位整数        |
| ~                  | buf.writeInt16BE(value, offset[, noAssert])                                 | 以大尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的有符号的16位整数        |
| ~                  | buf.writeInt16LE(value, offset[, noAssert])                                 | 以小尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的有符号的16位整数        |
| ~                  | buf.writeUInt16BE(value, offset[, noAssert])                                | 以大尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的无符号的16位整数        |
| ~                  | buf.writeUInt16LE(value, offset[, noAssert])                                | 以小尾数格式写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的无符号的16位整数        |
| ~                  | buf.writeIntBE(value, offset, byteLength[, noAssert])                       | 写入 value 中的 byteLength 个字节到 buf 中指定的 offset 位置。 最高支持48位精度                    |
| ~                  | buf.writeIntLE(value, offset, byteLength[, noAssert])                       | 写入 value 中的 byteLength 个字节到 buf 中指定的 offset 位置。 最高支持48位精度                    |
| ~                  | buf.writeUIntBE(value, offset, byteLength[, noAssert])                      | 写入 value 中的 byteLength 个字节到 buf 中指定的 offset 位置。 最高支持48位精度                    |
| ~                  | buf.writeUIntLE(value, offset, byteLength[, noAssert])                      | 写入 value 中的 byteLength 个字节到 buf 中指定的 offset 位置。 最高支持48位精度                    |
| ~                  | buf.writeInt8(value, offset[, noAssert])                                    | 写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的有符号的8位整数                     |
| ~                  | buf.writeUInt8(value, offset[, noAssert])                                   | 写入 value 到 buf 中指定的 offset 位置。 value 应当是一个有效的无符号的8位整数                     |
| ~                  | buf.swap16()                                                                | 将 buf 解析为一个无符号16位的整数数组，并且以字节顺序原地进行交换                                  |
| ~                  | buf.swap32()                                                                | 将 buf 解析为一个无符号32位的整数数组，并且以字节顺序原地进行交换                                  |
| ~                  | buf.swap64()                                                                | 将 buf 解析为一个64位的数值数组，并且以字节顺序原地进行交换                                        |

## Node.js 目前支持的字符编码包括：

| 字符编码  | 解释                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| 'ascii'   | 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。                                                    |
| 'utf8'    | 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。                                                      |
| 'utf16le' | 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。                                       |
| 'ucs2'    | 'utf16le' 的别名。                                                                                                    |
| 'base64'  | Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受"URL 与文件名安全字母表"。   |
| 'latin1'  | 一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。 |
| 'binary'  | 'latin1' 的别名。                                                                                                     |
| 'hex'     | 将每个字节编码为两个十六进制字符。                                                                                    |
