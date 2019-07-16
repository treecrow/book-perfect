# [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

> 用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

## api list

| class         | api                                                       | more                                                                                                                       |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 创建          | let p = new Proxy(target, handler)                        | -                                                                                                                          |
| ^             | Proxy.revocable(target, handler)                          | 创建一个可撤销的代理对象                                                                                                   |
| handler(参数) | handler.apply:(target, thisArg, argumentsList)=>{}        | 用于拦截函数的调用                                                                                                         |
| ^             | handler.construct:(target, args)=>{}                      | 用于拦截 new 操作符. 为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象自身必须具有[[Construct]]内部方法 |
| ^             | handler.defineProperty:(target, property, descriptor)=>{} | 用于拦截对对象的 Object.defineProperty() 操作                                                                              |
| ^             | handler.deleteProperty:(target, property)=>{}             | 用于拦截对对象属性的 delete 操作                                                                                           |
| ^             | handler.get:(target, property, receiver)=>{}              | 用于拦截对象的读取属性操作                                                                                                 |
| ^             | handler.getOwnPropertyDescriptor:(target, prop)=>{}       | Object.getOwnPropertyDescriptor() 的钩子                                                                                   |
| ^             | handler.getPrototypeOf:target=>{}                         | 一个代理方法，当读取代理对象的原型时，该方法就会被调用。                                                                   |
| ^             | handler.has:(target, prop)=>{}                            | 针对 in 操作符的代理方法                                                                                                   |
| ^             | handler.isExtensible:target=>{}                           | 用于拦截对对象的 Object.isExtensible()                                                                                     |
| ^             | handler.ownKeys:target=>{}                                | 用于拦截 Reflect.ownKeys()                                                                                                 |
| ^             | handler.preventExtensions:target=>{}                      | 用于设置对 Object.preventExtensions()的拦截                                                                                |
| ^             | handler.set:(target, property, value, receiver)=>{}       | 用于拦截设置属性值的操作                                                                                                   |
| ^             | handler.setPrototypeOf:(target, prototype)=>{}            | 主要用来拦截 Object.setPrototypeOf()                                                                                       |
