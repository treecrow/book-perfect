# Symbol

> ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

> 基本上，它是一种类似于字符串的数据类型

## api 列表

| api                   | more                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Symbol()              | -                                                                                                                                                  |
| Symbol(str)           | Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分                            |
| Symbol.for(str)       | 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值 |
| Symbol.keyFor(symbol) | 返回一个已登记的 Symbol 类型值的 key                                                                                                               |

## 内置的 Symbol 值

| symbol                    | more                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Symbol.hasInstance        | 对象的 Symbol.hasInstance 属性，指向一个内部方法。当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法                        |
| Symbol.isConcatSpreadable | 表示该对象用于 Array.prototype.concat()时，是否可以展开                                                                                             |
| Symbol.species            | 指向一个构造函数,创建衍生对象时，会使用该属性                                                                                                       |
| Symbol.match              | 指向一个函数。当执行 str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值                                                            |
| Symbol.replace            | 对象的 Symbol.replace 属性，指向一个方法，当该对象被 String.prototype.replace 方法调用时，会返回该方法的返回值                                      |
| Symbol.search             | 指向一个方法，当该对象被 String.prototype.search 方法调用时，会返回该方法的返回值                                                                   |
| Symbol.split              | 指向一个方法，当该对象被 String.prototype.split 方法调用时，会返回该方法的返回值                                                                    |
| Symbol.iterator           | 指向该对象的默认遍历器方法                                                                                                                          |
| Symbol.toPrimitive        | 指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值                                                                |
| Symbol.toStringTag        | 指向一个方法。在该对象上面调用 Object.prototype.toString 方法时，如果这个属性存在，它的返回值会出现在 toString 方法返回的字符串之中，表示对象的类型 |
| Symbol.unscopables        | 指向一个对象。该对象指定了使用 with 关键字时，哪些属性会被 with 环境排除                                                                            |
| Symbol.unscopables        | 指向一个对象。该对象指定了使用 with 关键字时，哪些属性会被 with 环境排除                                                                            |

## 属性名的遍历

> Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名
