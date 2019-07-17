# [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

> Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值

## api list

| class | api                                        | more                                                                                                |
| ----- | ------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 创建  | new Map([iterable])                        | -                                                                                                   |
| 属性  | Map.prototype                              | 表示 Map 构造函数的原型对象                                                                         |
| ^     | Map.prototype.size                         | 可访问属性，用于返回 一个 Map 对象的成员数量                                                        |
| 方法  | Map.prototype.clear()                      | 移除 Map 对象中的所有元素                                                                           |
| ^     | Map.prototype.delete(key)                  | 用于移除 Map 对象中指定的元素                                                                       |
| ^     | Map.prototype.entries()                    | 返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同。 |
| ^     | Map.prototype.forEach(callback[, thisArg]) | 将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。                             |
| ^     | Map.prototype.get(key)                     | 返回某个 Map 对象中的一个指定元素                                                                   |
| ^     | Map.prototype.has(key)                     | 返回一个 bool 值，用来表明 map 中是否存在指定元素                                                   |
| ^     | Map.prototype.keys()                       | 返回一个新的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的 key 值                          |
| ^     | Map.prototype.set(key,value)               | 为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对                                 |
| ^     | Map.prototype.values()                     | 返回一个新的 Iterator 对象。它包含按顺序插入 Map 对象中每个元素的 value 值                          |
| ^     | Map.prototype[Symbol.iterator]()           | @@iterator 属性的初始值与 entries 属性的初始值是同一个函数对象                                      |

## [WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

> WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

| class | api                              | more                                                                    |
| ----- | -------------------------------- | ----------------------------------------------------------------------- |
| 创建  | new WeakMap([iterable])          | -                                                                       |
| 属性  | WeakMap.prototype                | 表现为 WeakMap 的构造器                                                 |
| 方法  | WeakMap.prototype.delete(key)    | 从一个 WeakMap 对象中删除指定的元素                                     |
| ^     | WeakMap.prototype.get(key)       | 返回 WeakMap 指定的元素                                                 |
| ^     | WeakMap.prototype.has(key)       | 根据 WeakMap 对象的元素中是否存在 key 键返回一个 boolean 值             |
| ^     | WeakMap.prototype.set(key,value) | 为 WeakMap 对象添加或更新一个指定了键（key）和值（value）的（新）键值对 |
