# [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

> ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。ArrayBuffer 不能直接操作，而是要通过类型数组对象或 DataView 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容

## api list

| class | api                                       | more                                                                                                                               |
| ----- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 创建  | new ArrayBuffer(length)                   | 创建一个指定大小的 ArrayBuffer 对象，其内容被初始化为 0                                                                            |
| 属性  | ArrayBuffer.prototype                     | 表示 ArrayBuffer 对象的原型                                                                                                        |
| ^     | ArrayBuffer.prototype.byteLength          | 表示一个 ArrayBuffer 对象的字节长度                                                                                                |
| 方法  | ArrayBuffer.isView(arg)                   | 当 arg 是一个 ArrayBuffer 的视图就返回 true, 例如类型化数组对象(typed array objects )或者 一个数据视图(a DataView); 否则返回 false |
| ^     | ArrayBuffer.prototype.slice(begin[, end]) | 返回一个新的 ArrayBuffer ，它的内容是这个 ArrayBuffer 的字节副本，从 begin（包括），到 end（不包括）                               |
