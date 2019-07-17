# [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

> 允许你存储任何类型的唯一值，无论是原始值或者是对象引用

## api list

| class | api                                        | more                                                                                                                                                  |
| ----- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 创建  | new Set([iterable])                        | -                                                                                                                                                     |
| 属性  | Set.prototype                              | 表示 Set 构造器的原型                                                                                                                                 |
| ^     | Set.prototype.size                         | 将会返回 Set 对象中元素的个数                                                                                                                         |
| ^     | get Set[@@species]                         | Set[@@species] 访问器属性返回 Set 的构造函数                                                                                                          |
| 方法  | Set.prototype.add(value)                   | 用来向一个 Set 对象的末尾添加一个指定的值                                                                                                             |
| ^     | Set.prototype.clear()                      | 用来清空一个 Set 对象中的所有元素                                                                                                                     |
| ^     | Set.prototype.delete(value)                | 从一个 Set 对象中删除指定的元素                                                                                                                       |
| ^     | Set.prototype.entries()                    | 返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序 |
| ^     | Set.prototype.forEach(callback[, thisArg]) | 方法会根据集合中元素的插入顺序，依次执行提供的回调函数                                                                                                |
| ^     | Set.prototype.has(value)                   | 返回一个布尔值来指示对应的值 value 是否存在 Set 对象中                                                                                                |
| ^     | Set.prototype.values()                     | 返回一个 Iterator 对象，该对象按照原 Set 对象元素的插入顺序返回其所有元素。                                                                           |
| ^     | Set.prototype[Symbol.iterator]()           | The initial value of the @@iterator property is the same function object as the initial value of the values property.                                 |

## [WeakSet](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

> WeakSet 对象允许你将弱保持对象存储在一个集合中

- WeakSet 与 Set 区别。
  - WeakSet 的成员只能是对象，而不能是其他类型的值
  - WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用

## api list

| class | api                             | more                                                                                          |
| ----- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 创建  | new WeakSet([iterable])         | -                                                                                             |
| 属性  | WeakSet.prototype               | WeakSet 实例的所有继承属性和继承方法都在该对象上.                                             |
| 方法  | WeakSet.prototype.add(value)    | 在该 WeakSet 对象中添加一个新元素 value.                                                      |
| ^     | WeakSet.prototype.delete(value) | 从该 WeakSet 对象中删除 value 这个元素, 之后 WeakSet.prototype.has(value) 方法便会返回 false. |
| ^     | WeakSet.prototype.has(value)    | 返回一个布尔值, 表示给定的值 value 是否存在于这个 WeakSet 中.                                 |
