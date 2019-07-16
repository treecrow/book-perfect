# [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

> Symbol()函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

> 每个从 Symbol()返回的 symbol 值都是唯一的。一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。

## api list

| class | api                          | more                                                                                                                        |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 创建  | Symbol([description])        | -                                                                                                                           |
| 属性  | Symbol.length                | 长度属性值为 0。                                                                                                            | - |
| ^     | Symbol.prototype             | 描述 symbol 构造函数的原型。                                                                                                | - |
| ^     | Symbol.iterator              | 一个返回一个对象默认迭代器的方法。使用 for...of。                                                                           | - |
| ^     | Symbol.asyncIterator         | 一个返回对象默认的异步迭代器的方法。使用 for await of。                                                                     | - |
| ^     | Symbol.match                 | 一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。使用 String.prototype.match().                | - |
| ^     | Symbol.replace               | 一个替换匹配字符串的子串的方法. 使用 String.prototype.replace().                                                            | - |
| ^     | Symbol.search                | 一个返回一个字符串中与正则表达式相匹配的索引的方法。使用 String.prototype.search().                                         | - |
| ^     | Symbol.split                 | 一个在匹配正则表达式的索引处拆分一个字符串的方法.。使用 String.prototype.split().                                           | - |
| ^     | Symbol.hasInstance           | 一个确定一个构造器对象识别的对象是否为它的实例的方法。使用 instanceof.                                                      | - |
| ^     | Symbol.isConcatSpreadable    | 一个布尔值，表明一个对象是否应该 flattened 为它的数组元素。使用 Array.prototype.concat().                                   | - |
| ^     | Symbol.unscopables           | 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。                                                              | - |
| ^     | Symbol.species               | 一个用于创建派生对象的构造器函数。                                                                                          | - |
| ^     | Symbol.toPrimitive           | 一个将对象转化为基本数据类型的方法。                                                                                        | - |
| ^     | Symbol.toStringTag           | 用于对象的默认描述的字符串值。使用 Object.prototype.toString().                                                             | - |
| ^     | Symbol.prototype.description | 一个只读属性，它会返回 Symbol 对象的可选描述的字符串                                                                        |
| 方法  | Symbol.for(key)              | 使用给定的 key 搜索现有的 symbol，如果找到则返回该 symbol。否则将使用给定的 key 在全局 symbol 注册表中创建一个新的 symbol。 | - |
| ^     | Symbol.keyFor(sym)           | 从全局 symbol 注册表中，为给定的 symbol 检索一个共享的?symbol key。                                                         | - |

## 属性名的遍历

> Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名
