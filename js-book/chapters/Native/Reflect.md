# [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

> Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。

## api list

| class | api                                                     | more                                                                                                |
| ----- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 方法  | Reflect.apply(target, thisArgument, argumentsList)      | 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。  |
| ^     | Reflect.construct(target, argumentsList[, newTarget])   | 对构造函数进行 new 操作，相当于执行 new target(...args)。                                           |
| ^     | Reflect.defineProperty(target, propertyKey, attributes) | 和 Object.defineProperty() 类似。                                                                   |
| ^     | Reflect.deleteProperty(target, propertyKey)             | 作为函数的 delete 操作符，相当于执行 delete target[name]。                                          |
| ^     | Reflect.get(target, propertyKey[, receiver])            | 获取对象身上某个属性的值，类似于 target[name]。                                                     |
| ^     | Reflect.getOwnPropertyDescriptor(target, propertyKey)   | 类似于 Object.getOwnPropertyDescriptor()。                                                          |
| ^     | Reflect.getPrototypeOf(target)                          | 类似于 Object.getPrototypeOf()。                                                                    |
| ^     | Reflect.has(target, propertyKey)                        | 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。                                         |
| ^     | Reflect.isExtensible(target)                            | 类似于 Object.isExtensible().                                                                       |
| ^     | Reflect.ownKeys(target)                                 | 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受 enumerable 影响). |
| ^     | Reflect.preventExtensions(target)                       | 类似于 Object.preventExtensions()。返回一个 Boolean。                                               |
| ^     | Reflect.set(target, propertyKey, value[, receiver])     | 将值分配给属性的函数。返回一个 Boolean，如果更新成功，则返回 true。                                 |
| ^     | Reflect.setPrototypeOf(target, prototype)               | 类似于 Object.setPrototypeOf()。                                                                    |
