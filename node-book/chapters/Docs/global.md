# global全局变量

## module && exports
- module---当前模块的引用
- exports---module.exports 的一个简短的引用
## require
- require()---用于引入模块
- require.cache---当模块被引入时，它们会缓存到这个对象
- require.resolve()---使用内部的 require() 机制来查找模块的位置，但不会加载模块，只返回解析后的文件名
## 定时器
- setTimeout(callback, delay[, ...args])
- setInterval(callback, delay[, ...args])
- setImmediate(callback[, ...args])
- clearTimeout(timeoutObject)
- clearInterval(intervalObject)
- clearImmediate(immediateObject)
## 其它
- global---<Object> 全局的命名空间对象
- Buffer 类---用于处理二进制数据
- __dirname---当前模块的目录名
  >  等同于path.dirname(__filename)
- __filename---当前模块的文件名。 这是当前模块文件的解析后的绝对路径
- console
- process---进程对象

