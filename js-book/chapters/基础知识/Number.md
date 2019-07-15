# [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

## 继承链

> Number->Function->Object

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

## 特殊数值列表

| 分类 | 数值         | 含义                         |
| ---- | ------------ | ---------------------------- |
| Math | -            | -                            |
| ~    | Math.PI      | π 值                         |
| ~    | Math.E       | 自然对数的底数,即常量 e 的值 |
| ~    | Math.LN10    | 10 的自然对数                |
| ~    | Math.LN2     | 2 的自然对数                 |
| ~    | Math.LOG2E   | 以 2 为底 e 的对数           |
| ~    | Math.LOG10E  | 以 10 为底 e 的对数          |
| ~    | Math.SQRT1_2 | 1/2 的平方根                 |
| ~    | Math.SQRT2   | 2 的平方根                   |

## 方法列表

| 分类 | 方法                    | 含义                                                                                                     |
| ---- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| Math | -                       | -                                                                                                        |
| ~    | Math.pow(num,power)     | num 的 power 次幂                                                                                        |
| ~    | Math.round(num)         | 四舍五入                                                                                                 |
| ~    | Math.cell(num)          | 向上取整                                                                                                 |
| ~    | Math.floor(num)         | 向下取整                                                                                                 |
| ~    | Math.abs(num)           | 求绝对值                                                                                                 |
| ~    | Math.max(x,y,z)         | 返回最大值                                                                                               |
| ~    | Math.min(x,y,z)         | 返回最小值                                                                                               |
| ~    | Math.random()           | 生成一个 d 大于等于 0，小于 1.0 的伪随机数                                                               |
| ~    | Math.sqrt(num)          | num 的平方根                                                                                             |
| ~    | Math.pow(3,1/3)         | 3 的立方根                                                                                               |
| ~    | Math.log(10)            | 10 的自然对数                                                                                            |
| ~    | Math.log(100)/Math.LN10 | 以 10 为底 100 的对数                                                                                    |
| ~    | Math.log(512)/Math.LN2  | 以 2 为底 512 的对数                                                                                     |
| ~    | Math.exp(num)           | e 的 num 次幂                                                                                            |
| ~    | Math.sin(x)             | 三角函数                                                                                                 |
| ~    | Math.asin(x)            | -                                                                                                        |
| ~    | Math.cos(x)             | -                                                                                                        |
| ~    | Math.acos(x)            | -                                                                                                        |
| ~    | Math.tan(x)             | -                                                                                                        |
| ~    | Math.atan(x)            | -                                                                                                        |
| ~    | Math.atan2(y,x)         | -                                                                                                        |
| ~    | Math.sinh(x)            | 返回 x 的双曲正弦                                                                                        |
| ~    | Math.cosh(x)            | 返回 x 的双曲余弦                                                                                        |
| ~    | Math.tanh(x)            | 返回 x 的双曲正切                                                                                        |
| ~    | Math.asinh(x)           | 返回 x 的反双曲正弦                                                                                      |
| ~    | Math.acosh(x)           | 返回 x 的反双曲余弦                                                                                      |
| ~    | Math.atanh(x)           | 返回 x 的反双曲正切                                                                                      |
| ~    | Math.trunc(num)         | 用于去除一个数的小数部分，返回整数部分                                                                   |
| ~    | Math.sign(num)          | 判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值                                       |
| ~    | Math.cbrt(num)          | 用于计算一个数的立方根                                                                                   |
| ~    | Math.clz32(num)         | JavaScript 的整数使用 32 位二进制形式表示，Math.clz32 方法返回一个数的 32 位无符号整数形式有多少个前导 0 |
| ~    | Math.imul(num)          | 返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数                             |
| ~    | Math.fround(num)        | 返回一个数的 32 位单精度浮点数形式                                                                       |
| ~    | Math.hypot(num)         | 返回所有参数的平方和的平方根                                                                             |
| ~    | Math.expm1(num)         | Math.expm1(x)返回 ex - 1，即 Math.exp(x) - 1                                                             |
| ~    | Math.log1p(num)         | Math.log1p(x)方法返回 1 + x 的自然对数，即 Math.log(1 + x)                                               |
| ~    | Math.log10(num)         | Math.log10(x)返回以 10 为底的 x 的对数                                                                   |
| ~    | Math.log2(num)          | Math.log2(x)返回以 2 为底的 x 的对数                                                                     |
