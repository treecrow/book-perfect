# [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

> typeof 操作符返回一个字符串，表示未经计算的操作数的类型

## typeof 可以检测的类型

- number
- string
- boolean
- undefind
- symbol
- function
- object

## 示例

| 类型                                          | 结果                     |
| --------------------------------------------- | ------------------------ |
| Undefined                                     | "undefined"              |
| Null                                          | "object"（见下文）       |
| Boolean                                       | "boolean"                |
| Number                                        | "number"                 |
| String                                        | "string"                 |
| Symbol （ECMAScript 6 新增）                  | "symbol"                 |
| 宿主对象（由 JS 环境提供）                    | Implementation-dependent |
| 函数对象（[[Call]] 在 ECMA-262 条款中实现了） | "function"               |
| 任何其他对象                                  | "object"                 |
