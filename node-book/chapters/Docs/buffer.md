## buffer

### 创建
> 为了使 Buffer 实例的创建更可靠、更不容易出错，各种 new Buffer() 构造函数已被 废弃，并由 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe() 方法替代:
- Buffer.alloc()
- Buffer.allocUnsafe()
- Buffer.allocUnsafeSlow()
- Buffer.from()

### Buffer 与字符编码
```js
console.log(buf); //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf.toString('hex')); //68656c6c6f20776f726c64
console.log(buf.toString('base64')); //aGVsbG8gd29ybGQ=
```

### 方法
- buf.fill()
- buf.write()
