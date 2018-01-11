# 类型化数组 和 ArrayBuffer

## 类型化数组

### 类型化数组与常规数组的区别

| 序号  | 类型化数组                                         |
|-----|-----------------------------------------------|
| 1   | 类型化数组中的元素都是数字。使用构造函数在创建类型化数组的时候决定了数组中数字的类型和大小 |
| 2   | 类型化数组有固定的长度                                   |
| 3   | 在创建类型化数组的时候，数组中的元素总是默认初始化为0                   |

### 类型化数组种类（每一种的元素类型都不同）

| 构造函数           | 数字类型      |
|----------------|-----------|
| Int8Array()    | 有符号字节     |
| Uint8Array()   | 无符号字节     |
| Int16Array()   | 有符号16位短整数 |
| Uint16Array()  | 无符号16位短整数 |
| Int32Array()   | 有符号32位整数  |
| Uint32Array()  | 无符号32位整数  |
| Float32Array() | 有符号32位整数  |
| Float32Array() | 无符号32位整数  |

### api列表

| api              | more                 |
|------------------|----------------------|
| new Uint8Array() | 创建类型化数组              |
| arr.set()        | 将常规或类型化数组复制到一个类型化数组中 |
| arr.subarray()   | 返回部分数组内容             |
| arr.buffer       | 返回一个ArrayBuffer对象    |
| arr.byteOffset   | 这个视图在基本缓冲区的位置        |
| arr.bytelength   | 这个视图的字节长度            |

## ArrayBuffer

> 基本缓冲区对象，类型化数组是基本缓冲区对象的基本字节块视图

### api列表

| api               | more           |
|-------------------|----------------|
| buffer.bytelength | 返回基本缓冲区对象的字节长度 |

## DataView类

> 采用显式指定的字节顺序从ArrayBuffer中读/写其值

### api列表

| api               | more   |
|-------------------|--------|
| DataView(buffer)  | 创建一个视图 |
| view.getInt8()    | -      |
| view.getUint8()   | -      |
| view.getInt16()   | -      |
| view.getUint16()  | -      |
| view.getInt32()   | -      |
| view.getUint32()  | -      |
| view.getFloat32() | -      |
| view.getFloat32() | -      |
| view.setInt8()    | -      |
| view.setUint8()   | -      |
| view.setInt16()   | -      |
| view.setUint16()  | -      |
| view.setInt32()   | -      |
| view.setUint32()  | -      |
| view.setFloat32() | -      |
| view.setFloat32() | -      |
