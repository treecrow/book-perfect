# [Example](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

> 一个 TypedArray 对象描述一个底层的二进制数据缓存区的一个类似数组(array-like)视图

## TypedArray()指的是以下的其中之一

| api                                                                                                                       | more               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [Int8Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)                 | 有符号字节         |
| [Uint8Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)               | 无符号字节         |
| [Uint8ClampedArray()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | -                  |
| [Int16Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)               | 有符号 16 位短整数 |
| [Uint16Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)             | 无符号 16 位短整数 |
| [Int32Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)               | 有符号 32 位整数   |
| [Uint32Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)             | 无符号 32 位整数   |
| [Float32Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)           | -                  |
| [Float64Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)           | -                  |

## api list

| class | api                                                                              | more                                                                                                                                              |
| ----- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 属性  | TypedArray.BYTES_PER_ELEMENT                                                     | 代表了强类型数组中每个元素所占用的字节数                                                                                                          |
| ^     | TypedArray.name                                                                  | 是描述类型数组构造名的字符串值                                                                                                                    |
| ^     | TypedArray.prototype                                                             | 表示 TypedArray 构造器的原型                                                                                                                      |
| ^     | TypedArray.prototype.buffer                                                      | 表示由 TypedArray 在构造期间引用的 ArrayBuffer                                                                                                    |
| ^     | TypedArray.prototype.byteLength                                                  | 表示类型化数组的长度（字节数）                                                                                                                    |
| ^     | TypedArray.prototype.byteOffset                                                  | 表示类型化数组距离其 ArrayBuffer 起始位置的偏移（字节数）                                                                                         |
| ^     | TypedArray.prototype.length                                                      | 表示类型化数组的长度（元素数）                                                                                                                    |
| 创建  | new TypedArray()                                                                 | -                                                                                                                                                 |
| ^     | new TypedArray(length)                                                           | -                                                                                                                                                 |
| ^     | new TypedArray(typedArray)                                                       | -                                                                                                                                                 |
| ^     | new TypedArray(object)                                                           | -                                                                                                                                                 |
| ^     | new TypedArray(buffer [, byteOffset [, length]])                                 | -                                                                                                                                                 |
| 方法  | TypedArray.from(source[, mapFn[, thisArg]])                                      | 从一个类数组或者可迭代对象中创建一个新类型数组。 这个方法和 Array.from()类似                                                                      |
| ^     | TypedArray.of(element0[, element1[, ...[, elementN]]])                           | 创建一个具有可变数量参数的新类型数组 。此方法几乎与 Array.of() 相同                                                                               |
| ^     | TypedArray.prototype.copyWithin(target, start[, end = this.length])              | 将数组中的元素序列复制到以 target 起始的位置                                                                                                      |
| ^     | TypedArray.prototype.entries()                                                   | 返回新的 Array Iterator 对象，包含数组每个下标处的键值对                                                                                          |
| ^     | TypedArray.prototype.every(callback[, thisArg])                                  | 测试类型化数组的所有元素是否都能够通过由提供函数实现的测试                                                                                        |
| ^     | TypedArray.prototype.fill(value[, start = 0[, end = this.length]])               | 将类型化数组中的从起始索引到终止索引内的全部元素                                                                                                  |
| ^     | TypedArray.prototype.filter(callback[, thisArg])                                 | 创建新的类型化数组，含有所有通过了测试的元素，测试由提供的函数实现                                                                                |
| ^     | TypedArray.prototype.find(callback[, thisArg])                                   | 如果某个元素满足所提供的测试函数，find()方法返回类型化数组中的 值。否则返回 undefined                                                             |
| ^     | TypedArray.prototype.findIndex(callback[, thisArg])                              | 如果某个元素满足所提供的测试函数，findIndex()方法返回类型化数组中的 下标。否则返回 -1。 TypedArray 是这里的 类型化数组类型 之一。                 |
| ^     | TypedArray.prototype.forEach(callback[, thisArg])                                | 对类型化数组的每个元素调用提供的函数                                                                                                              |
| ^     | TypedArray.prototype.includes(searchElement[, fromIndex])                        | 判断类型化数组中是否含有特定元素，并相应返回 true 或者 false ，这个方法的算法和 Array.prototype.includes()相同                                    |
| ^     | TypedArray.prototype.indexOf(searchElement[, fromIndex = 0])                     | 返回在类型数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。 方法具有与 Array.prototype.indexOf() 相同的算法                              |
| ^     | TypedArray.prototype.join([separator = ','])                                     | 将数组中所有元素连接为一个字符串。这个方法的算法和 Array.prototype.join()相同                                                                     |
| ^     | TypedArray.prototype.keys()                                                      | 返回新的 Array Iterator 对象，包含数组中每个下标的键                                                                                              |
| ^     | TypedArray.prototype.lastIndexOf(searchElement[, fromIndex = typedarray.length]) | 返回在类型数组中可以找到给定元素的最后一个索引，如果不存在，则返回-1。 方法具有与 Array.prototype.lastIndexOf() 相同的算法                        |
| ^     | TypedArray.prototype.map(callback[, thisArg])                                    | 对类型化数组的每个元素调用提供的函数，并使用结果来创建新的类型化数组。 这个方法的算法和 Array.prototype.map()相同                                 |
| ^     | TypedArray.prototype.reduce(callback[, initialValue])                            | 接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值. 这个方法和 Array.prototype.reduce()使用了同样的算法 |
| ^     | TypedArray.prototype.reduceRight(callback[, initialValue])                       | 在累加器和类型化数组的每个元素上（从右到左）调用函数，使其归约为单一的值。这个方法的算法和 Array.prototype.reduceRight()相同                      |
| ^     | TypedArray.prototype.reverse()                                                   | 原地翻转类型化数组。类型化数组的第一个元素变为最后一个，最后一个变为第一个。这个方法的算法和 Array.prototype.reverse()相同                        |
| ^     | TypedArray.prototype.set(`array|typedarray` [,offset])                           | 用于从指定数组中读取值，并将其存储在类型化数组中                                                                                                  |
| ^     | TypedArray.prototype.slice([begin[, end])                                        | 返回一个 typed array 的部分类型数组对象，数组内容采用浅拷贝方式. 方法采用与 Array.prototype.slice()相同的算法                                     |
| ^     | TypedArray.prototype.some(callback[, thisArg])                                   | 检测 TypedArray 的一些元素是否通过所提供函数的测试. 这个方法和 Array.prototype.some() 相同                                                        |
| ^     | TypedArray.prototype.sort([compareFunction])                                     | 原地排序类型化数组的元素，并且返回类型化数组。这个方法的算法和 Array.prototype.sort()相同                                                         |
| ^     | TypedArray.prototype.subarray([begin [,end]])                                    | 返回一个新的、基于相同 ArrayBuffer、元素类型也相同的的 TypedArray                                                                                 |
| ^     | TypedArray.prototype.toLocaleString([locales [, options]])                       | 返回一个字符串，表明该类型化数组的元素                                                                                                            |
| ^     | TypedArray.prototype.toString()                                                  | 返回一个表示指定数组及其元素的字符串                                                                                                              |
| ^     | TypedArray.prototype.values()                                                    | 返回新的 Array Iterator 对象，包含数组中每个下标处的值                                                                                            |

## 类型化数组与常规数组的区别

| 序号 | 类型化数组                                                                                 |
| ---- | ------------------------------------------------------------------------------------------ |
| 1    | 类型化数组中的元素都是数字。使用构造函数在创建类型化数组的时候决定了数组中数字的类型和大小 |
| 2    | 类型化数组有固定的长度                                                                     |
| 3    | 在创建类型化数组的时候，数组中的元素总是默认初始化为 0                                     |
