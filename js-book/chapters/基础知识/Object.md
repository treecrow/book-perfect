# [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

> Object 构造函数创建一个对象包装器

## api list

| class | api                                           | more                                                                                                                                         |
| ----- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 属性  | Object.prototype                              | 表示 Object 的原型对象                                                                                                                       |
| ^     | `Object.prototype`.constructor                | 返回创建实例对象的 Object 构造函数的引用                                                                                                     |
| 方法  | `创建对象`                                    | -                                                                                                                                            |
| ^     | {}                                            | 对象直接量（Object.prototype 作为新对象的原型）                                                                                              |
| ^     | new Object()                                  | 创建一个空对象，和{}一样（使用构造函数的 prototype 属性作为新对象的原型）                                                                    |
| ^     | Object.create(proto, [propertiesObject])      | 创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`                                                                                |
| ^     | Object.create(Object.prototype)               | 创建一个普通的空对象                                                                                                                         |
| ^     | Object.create(null)                           | 创建一个没有原型的新对象                                                                                                                     |
| ^     | `原型`                                        | -                                                                                                                                            |
| ^     | Object.getPrototypeOf(object)                 | 返回指定对象的原型（内部[[Prototype]]属性的值)                                                                                               |
| ^     | Object.setPrototypeOf(obj, prototype)         | 设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null                                                                    |
| ^     | `Object.prototype`.isPrototypeOf(object)      | 用于测试一个对象是否存在于另一个对象的原型链上                                                                                               |
| ^     | `冻结 封闭 扩展`                              | -                                                                                                                                            |
| ^     | Object.freeze(obj)                            | 可以冻结一个对象。一个被冻结的对象再也不能被修改                                                                                             |
| ^     | Object.isFrozen(obj)                          | 判断一个对象是否被冻结                                                                                                                       |
| ^     | Object.seal(obj)                              | 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置                                                                                   |
| ^     | Object.isSealed(obj)                          | 判断一个对象是否被密封                                                                                                                       |
| ^     | Object.preventExtensions(obj)                 | 让一个对象变的不可扩展，也就是永远不能再添加新的属性。                                                                                       |
| ^     | Object.isExtensible(obj)                      | 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。                                                                                 |
| ^     | `iterable`                                    | -                                                                                                                                            |
| ^     | Object.entries(obj)                           | 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性） |
| ^     | Object.keys(obj)                              | 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致                       |
| ^     | Object.values(obj)                            | 返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 for...in 循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )              |
| ^     | Object.fromEntries(iterable)                  | 把键值对列表转换为一个对象                                                                                                                   |
| ^     | `属性`                                        | -                                                                                                                                            |
| ^     | Object.defineProperties(obj, props)           | 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。                                                                                   |
| ^     | Object.defineProperty(obj, prop, descriptor)  | 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象                                                                  |
| ^     | Object.getOwnPropertyNames(obj)               | 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组                                       |
| ^     | Object.getOwnPropertySymbols(obj)             | 返回一个给定对象自身的所有 Symbol 属性的数组。                                                                                               |
| ^     | Object.getOwnPropertyDescriptors(obj)         | 用来获取一个对象的所有自身属性的描述符                                                                                                       |
| ^     | Object.getOwnPropertyDescriptor(obj, prop)    | 返回指定对象上一个自有属性对应的属性描述符                                                                                                   |
| ^     | `Object.prototype`.hasOwnProperty(prop)       | 会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是是否有指定的键）                                                               |
| ^     | `Object.prototype`.propertyIsEnumerable(prop) | 返回一个布尔值，表示指定的属性是否可枚举                                                                                                     |
| ^     | `字符串`                                      | -                                                                                                                                            |
| ^     | `Object.prototype`.toLocaleString()           | 返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用                                 |
| ^     | `Object.prototype`.toString()                 | 返回一个表示该对象的字符串                                                                                                                   |
| ^     | `Object.prototype`.valueOf()                  | 返回指定对象的原始值                                                                                                                         |
| ^     | `其他`                                        | -                                                                                                                                            |
| ^     | Object.assign(target, ...sources)             | 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。                                                                 |
| ^     | Object.is(value1, value2)                     | 判断两个值是否是相同的值                                                                                                                     |
| 其他  | delete obj.key                                | 删除属性                                                                                                                                     |
| ^     | "key" in obj                                  | in 运算符的左侧是属性名（字符串），右侧是对象。如果对象的自有属性或继承属性中包含这个属性则返回 true                                         |
| ^     | for...in                                      | 枚举属性                                                                                                                                     |

## 属性遍历的次序规则

- 首先遍历所有属性名为数值的属性，按照数字排序。
- 其次遍历所有属性名为字符串的属性，按照生成时间排序。
- 最后遍历所有属性名为 Symbol 值的属性，按照生成时间排序。
