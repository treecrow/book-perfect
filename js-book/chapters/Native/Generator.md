# [Generator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)

> 生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议

## api list

| class | api                                                        | more                                                                                  |
| ----- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 创建  | `function* gen() { yield 1;yield 2;yield 3;}let g = gen()` | -                                                                                     |
| 方法  | Generator.prototype.next(value)                            | 返回一个包含属性 done 和 value 的对象。该方法也可以通过接受一个参数用以向生成器传值。 |
| ^     | Generator.prototype.return(value)                          | 返回给定的值并结束生成器                                                              |
| ^     | Generator.prototype.throw(exception)                       | 用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象。     |

## [GeneratorFunction](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)

> GeneratorFunction 构造器生成新的生成器函数 对象。在 JavaScript 中，生成器函数实际上都是 GeneratorFunction 的实例对象

| class                  | api                                                             | more                                                       |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------- |
| 获取 GeneratorFunction | `Object.getPrototypeOf(function*(){}).constructor`              | GeneratorFunction 并不是一个全局对象，需要通过前面语法获取 |
| 创建                   | new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody) | 生成新的生成器函数 对象                                    |
| 属性                   | GeneratorFunction.length                                        | GeneratorFunction 构造函数的 length 属性值为 1。           |
| ^                      | GeneratorFunction.prototype                                     | 允许向所有生成器函数对象添加属性。                         |
