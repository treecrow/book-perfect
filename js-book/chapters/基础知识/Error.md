# [Error](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)

> 通过 Error 的构造器可以创建一个错误对象。当运行时错误产生时，Error 的实例对象会被抛出。Error 对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。

## Error 类型

> 除了通用的 Error 构造函数外，JavaScript 还有 6 个其他类型的错误构造函数

| type                                                                                                              | more                                                                              |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [EvalError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError)           | 创建一个 error 实例，表示错误的原因：与 eval() 有关。                             |
| [RangeError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)         | 创建一个 error 实例，表示错误的原因：数值变量或参数超出其有效范围。               |
| [ReferenceError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) | 创建一个 error 实例，表示错误的原因：无效引用。                                   |
| [SyntaxError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)       | 创建一个 error 实例，表示错误的原因：eval()在解析代码的过程中发生的语法错误。     |
| [TypeError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)           | 创建一个 error 实例，表示错误的原因：变量或参数不属于有效类型。                   |
| [URIError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)             | 创建一个 error 实例，表示错误的原因：给 encodeURI()或 decodeURl()传递的参数无效。 |

## api list

| class | api                                           | more                                           |
| ----- | --------------------------------------------- | ---------------------------------------------- |
| 创建  | new Error([message[, fileName[,lineNumber]]]) | -                                              |
| 属性  | Error.prototype                               | 代表 Error 的构造器                            |
| ^     | Error.prototype.name                          | 表示 error 类型的名称.初始值为"Error"          |
| ^     | Error.prototype.message                       | 有关错误信息，人类易读的（human-readable）描述 |
| 方法  | Error.prototype.toString()                    | -                                              |
