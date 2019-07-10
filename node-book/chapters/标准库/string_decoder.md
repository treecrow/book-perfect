# [stringDecode字符串解码器](http://nodejs.cn/api/string_decoder.html)

> string_decoder 模块提供了一个 API，用于解码 Buffer 对象成字符串。它可以通过以下方式被使用：
```js
const StringDecoder = require('string_decoder').StringDecoder;
```

## StringDecoder 实例
> 创建StringDecoder 实例
```js
new StringDecoder([encoding])
```
#### 方法
- stringDecoder.end([buffer])---以字符串的形式返回任何剩下的被保存在内部 buffer 中的字节
- stringDecoder.write([buffer])
  > 返回一个解码后的字符串，并确保 Buffer 末尾的任何不完整的多字节字符从返回的字符串中被过滤并保存在一个内部的 buffer 中用于下次调用 stringDecoder.write() 或 stringDecoder.end()
