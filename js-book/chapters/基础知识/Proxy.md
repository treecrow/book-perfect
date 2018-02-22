# Proxy

> Proxy 在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

## api 列表

| api                                    | more                                                                                                                                                                                           |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| var proxy = new Proxy(target, handler) | Proxy 对象的所有用法，都是上面这种形式，不同的只是 handler 参数的写法。其中，new Proxy()表示生成一个 Proxy 实例，target 参数表示所要拦截的目标对象，handler 参数也是一个对象，用来定制拦截行为 |
| Proxy.revocable()                      | Proxy.revocable 方法返回一个对象，该对象的 proxy 属性是 Proxy 实例，revoke 属性是一个函数，可以取消 Proxy 实例                                                                                 |

## Proxy 支持的拦截操作

| 操作                                      | more                                                                                                                                                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| get(target, propKey, receiver)            | 拦截对象属性的读取，比如 proxy.foo 和 proxy['foo']。                                                                                                                                                                |
| set(target, propKey, value, receiver)     | 拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v，返回一个布尔值。                                                                                                                                        |
| has(target, propKey)                      | 拦截 propKey in proxy 的操作，返回一个布尔值。                                                                                                                                                                      |
| deleteProperty(target, propKey)           | 拦截 delete proxy[propKey]的操作，返回一个布尔值。                                                                                                                                                                  |
| ownKeys(target)                           | 拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys()的返回结果仅包括目标对象自身的可遍历属性。 |
| getOwnPropertyDescriptor(target, propKey) | 拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。                                                                                                                                          |
| defineProperty(target, propKey, propDesc) | 拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。                                                                                                  |
| preventExtensions(target)                 | 拦截 Object.preventExtensions(proxy)，返回一个布尔值。                                                                                                                                                              |
| getPrototypeOf(target)                    | 拦截 Object.getPrototypeOf(proxy)，返回一个对象。                                                                                                                                                                   |
| isExtensible(target)                      | 拦截 Object.isExtensible(proxy)，返回一个布尔值。                                                                                                                                                                   |
| setPrototypeOf(target, proto)             | 拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。                                                                                                        |
| apply(target, object, args)               | 拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。                                                                                                             |
| construct(target, args)                   | 拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args)。                                                                                                                                                    |
