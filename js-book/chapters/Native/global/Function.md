# [Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

> Function 构造函数 创建一个新的 Function 对象。 在 JavaScript 中, 每个函数实际上都是一个 Function 对象。

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

---

## [函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions)

- 定义函数方法列表

| 类型                 | 语句                                                                         |
| -------------------- | ---------------------------------------------------------------------------- |
| 函数声明 (函数语句)  | function name([param[, param[, ... param]]]) { statements }                  |
| 函数表达式           | var myFunction = function name([param[, param[, ... param]]]) { statements } |
| 函数生成器声明       | `function* name([param[, param[, ...param]]]) { statements }`                |
| 函数生成器表达式     | `function* [name]([param] [, param] [..., param]) { statements }`            |
| 箭头函数表达式       | ([param][, param]) => { statements } param => expression                     |
| Function 构造函数    | new Function (arg1, arg2, ... argN, functionBody)                            |
| 生成器函数的构造函数 | new GeneratorFunction (arg1, arg2, ... argN, functionBody)                   |

- [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

  - 更短的函数
  - 不绑定 this,通过 call 或 apply 调用无效, 不绑定 arguments
  - 箭头函数不能用作构造器，和 new 一起用会抛出错误, 箭头函数没有 prototype 属性
  - yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作生成器。

- [默认参数值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [方法的定义](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)

- [Arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

| api                   | more                                                        |
| --------------------- | ----------------------------------------------------------- |
| arguments.callee      | 指向当前执行的函数(严格模式无效)                            |
| arguments.length      | 指向传递给当前函数的参数数量。                              |
| arguments[@@iterator] | 返回一个新的 Array 迭代器对象，该对象包含参数中每个索引的值 |

- [getter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get)
- [setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/set)

## [闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

> 闭包是函数和声明该函数的词法环境的组合,这个环境包含了这个闭包创建时所能访问的所有局部变量
