# [Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

> Function 构造函数 创建一个新的Function对象。 在 JavaScript 中, 每个函数实际上都是一个Function对象。

## api list

| class | api                                                    | more                                                                                                                      |
| ----- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| -     | new Function ([arg1[, arg2[, ...argN]],] functionBody) | 创建一个新的 Function 对象                                                                                                |
| 属性  | Function.length                                        | 属性指明函数的形参个数                                                                                                    |
| ^     | Function.prototype                                     | 存储了 Function 的原型对象                                                                                                |
| ^     | Function.name                                          | 返回函数实例的名称                                                                                                        |
| 方法  | Function.prototype.apply()                             | 调用一个具有给定 this 值的函数，以及作为一个数组（或类似数组对象）提供的参数。                                            |
| ^     | Function.prototype.call()                              | 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数                                                            |
| ^     | Function.prototype.bind()                              | 创建一个新的函数，在 bind()被调用时，这个新函数的 this 被 bind 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用 |
| ^     | Function.prototype.toString()                          | 返回一个表示当前函数源代码的字符串                                                                                        |

## [Arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

> arguments 是一个对应于传递给函数的参数的类数组对象

| api                   | more                                                        |
| --------------------- | ----------------------------------------------------------- |
| arguments.callee      | 指向当前执行的函数                                          |
| arguments.length      | 指向传递给当前函数的参数数量。                              |
| arguments[@@iterator] | 返回一个新的 Array 迭代器对象，该对象包含参数中每个索引的值 |

## this

| 使用方式                       | more                         |
| ------------------------------ | ---------------------------- |
| 嵌套函数作为某个对象的方法调用 | this 指向调用它的对象        |
| 嵌套函数作为函数调用           | this 指向调用它的对象        |
| call, apply, with              | 指的 This 是谁就是谁         |
| new 关键字                     | this 指向 new 出来的那个对象 |
