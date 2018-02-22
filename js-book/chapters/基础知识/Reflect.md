# Reflect

## Reflect 对象的设计目的

1. 将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty），放到 Reflect 对象上
2. 修改某些 Object 方法的返回结果，让其变得更合理
3. 让 Object 操作都变成函数行为
4. Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法

## 静态方法列表

| 方法                                           | more                                                                                               |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Reflect.apply(target, thisArg, args)           | 等同于 Function.prototype.apply.call(func, thisArg, args)，用于绑定 this 对象后执行给定函数        |
| Reflect.construct(target, args)                | 等同于 new target(...args)，这提供了一种不使用 new，来调用构造函数的方法                           |
| Reflect.get(target, name, receiver)            | 查找并返回 target 对象的 name 属性，如果没有该属性，则返回 undefined                               |
| Reflect.set(target, name, value, receiver)     | 设置 target 对象的 name 属性等于 value                                                             |
| Reflect.defineProperty(target, name, desc)     | 基本等同于 Object.defineProperty，用来为对象定义属性                                               |
| Reflect.deleteProperty(target, name)           | 等同于 delete obj[name]，用于删除对象的属性                                                        |
| Reflect.has(target, name)                      | 对应 name in obj 里面的 in 运算符                                                                  |
| Reflect.ownKeys(target)                        | 用于返回对象的所有属性，基本等同于 Object.getOwnPropertyNames 与 Object.getOwnPropertySymbols 之和 |
| Reflect.isExtensible(target)                   | 对应 Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展                                   |
| Reflect.preventExtensions(target)              | 对应 Object.preventExtensions 方法，用于让一个对象变为不可扩展                                     |
| Reflect.getOwnPropertyDescriptor(target, name) | 基本等同于 Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者           |
| Reflect.getPrototypeOf(target)                 | 用于读取对象的`__proto__`属性，对应 Object.getPrototypeOf(obj)                                     |
| Reflect.setPrototypeOf(target, prototype)      | 用于读取对象的`__proto__`属性，对应 Object.getPrototypeOf(obj)                                     |
