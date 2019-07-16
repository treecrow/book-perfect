# [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

> JSON 对象包含两个方法: 用于解析 JavaScript Object Notation (JSON) 的 parse() 方法，以及将对象/值转换为 JSON 字符串的 stringify() 方法。除了这两个方法, JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用

## api list

| class | api                                        | more                                                                                                                                                                                 |
| ----- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 方法  | JSON.parse(text[, reviver])                | 用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)。                                                    |
| ^     | JSON.stringify(value[, replacer [, space]) | 将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串，如果指定了 replacer 是一个函数，则可以选择性的替换值，或者如果指定了 replacer 是一个数组，可选择性的仅包含数组指定的属性。 |
