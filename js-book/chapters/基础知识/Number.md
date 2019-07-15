# [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

> JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。

- 继承链: `Number->Function->Object`

## api list

| class     | api                                                    | more                                                                                                                     |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 创建/转化 | new Number(value)                                      | -                                                                                                                        |
| ^         | Number(obj)                                            | 可以用于任何数据类型转换成数值                                                                                           |
| 属性      | Number.EPSILON                                         | 表示 1 与 Number 可表示的大于 1 的最小的浮点数之间的差值                                                                 |
| ^         | Number.MAX_SAFE_INTEGER                                | 常量表示在 JavaScript 中最大的安全整数 （maxinum safe integer)（253 - 1）                                                |
| ^         | Number.MAX_VALUE                                       | 表示在 JavaScript 里所能表示的最大数值                                                                                   |
| ^         | Number.MIN_SAFE_INTEGER                                | 代表在 JavaScript 中最小的安全的 integer 型数字 (-(253 - 1)).                                                            |
| ^         | Number.MIN_VALUE                                       | 表示在 JavaScript 中所能表示的最小的正值                                                                                 |
| ^         | Number.NEGATIVE_INFINITY                               | 表示负无穷大                                                                                                             |
| ^         | Number.NaN                                             | 表示“非数字”（Not-A-Number）。和 NaN 相同                                                                                |
| ^         | Number.POSITIVE_INFINITY                               | 表示正无穷大                                                                                                             |
| ^         | Number.prototype                                       | 表示 Number 构造函数的原型                                                                                               |
| 方法      | Number.isFinite(value)                                 | 用来检测传入的参数是否是一个有穷数（finite number）                                                                      |
| ^         | Number.isInteger(value)                                | 用来判断给定的参数是否为整数                                                                                             |
| ^         | Number.isNaN(value)                                    | 确定传递的值是否为 NaN 和其类型是 Number。它是原始的全局 isNaN()的更强大的版本                                           |
| ^         | Number.isSafeInteger(testValue)                        | 用来判断传入的参数值是否是一个“安全整数”（safe integer）                                                                 |
| ^         | Number.parseFloat(string)                              | 可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化） |
| ^         | Number.parseInt(string[, radix])                       | 依据指定基数 [ 参数 radix 的值]，把字符串 [ 参数 string 的值] 解析成整数                                                 |
| ^         | Number.prototype.toExponential(fractionDigits)         | 以指数表示法返回该数值字符串表示形式                                                                                     |
| ^         | Number.prototype.toFixed(digits)                       | 使用定点表示法来格式化一个数值                                                                                           |
| ^         | Number.prototype.toLocaleString([locales [, options]]) | 返回这个数字在特定语言环境下的表示字符串                                                                                 |
| ^         | Number.prototype.toPrecision(precision)                | 以指定的精度返回该数值对象的字符串表示                                                                                   |
| ^         | Number.prototype.toString([radix])                     | 返回指定 Number 对象的字符串表示形式                                                                                     |
| ^         | Number.prototype.valueOf()                             | 返回一个被 Number 对象包装的原始值                                                                                       |

## Number、parseInt、parseFloat 的区别

- undefined 始终解析为 NaN；
- 对于非字符串的基本类型（Boolean、null），parseInt、parseFloat 解析为 NaN，Number 会转化为 0/1；
- 对于非数字开头的字符串，parseInt、parseFloat 解析为 NaN，Number 将空字符串转化为 0，其他字符串解析为 NaN；
- 对于进制表示的字符串形式的数字，Number 能按预期解析，parseInt、parseFloat 不能按预期解析；

| 类型          | Number  | parseInt | parseFloat |
| ------------- | ------- | -------- | ---------- |
| Boolean       | 0       | NaN      | NaN        |
| null          | 0       | NaN      | NaN        |
| undefined     | NaN     | NaN      | NaN        |
| 99            | 99      | 99       | 99         |
| 3.1415        | 3.1415  | 3        | 3.1415     |
| ""            | 0       | NaN      | NaN        |
| "Hello World" | NaN     | NaN      | NaN        |
| "192.168.0.1  | NaN     | 192      | 192.168    |
| "192.168"     | 192.168 | 192      | 192.168    |
| "0192.168"    | 192.168 | 192      | 192.168    |
| "0.192.168"   | NaN     | 0        | 0.192      |
| "0b10"        | 2       | 0        | 0          |
| "0o10"        | 8       | 0        | 0          |
| "10"          | 10      | 10       | 10         |
| "0x10"        | 16      | 16       | 16         |

## 进制列表

| 进制     | 示例        |
| -------- | ----------- |
| 二进制   | 0b111110111 |
| 八进制   | 0o767       |
| 十进制   | 12345       |
| 十六进制 | 0x234       |

## 浮点类型

- 6.02e23
- 6.02E23
- 6.02E-23
- 6.02e-23
