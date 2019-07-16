# 基础知识

- [JavaScript 标准库](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

## 知识点列表

| 知识点                          | 继承链                        | 包含                                                                                                                                        |
| ------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Array](./Array.md)             | Array->Function->Object       | -                                                                                                                                           |
| [ArrayBuffer](./ArrayBuffer.md) | ArrayBuffer->Function->Object | -                                                                                                                                           |
| [DataView](./DataView.md)       | DataView->Function->Object    | -                                                                                                                                           |
| [Date](./Date.md)               | Date->Function->Object        | -                                                                                                                                           |
| [Error](./Error.md)             | Error->Function->Object       | Error + EvalError + RangeError + ReferenceError + SyntaxError + TypeError + URIError                                                        |
| [TypedArray](./TypedArray.md)   | TypedArray->Function->Object  | TypedArray + Int8Array + Uint8Array + Uint8ClampedArray + Int16Array + Uint16Array + Int32Array + Uint32Array + Float32Array + Float64Array |
| [Function](./Function.md)       | Function->Object              | Function + Arguments + this                                                                                                                 |
| [Generator](./Generator.md)     | Generator->Function->Object   | Generator + GeneratorFunction                                                                                                               |
| [Math](./Math.md)               | Math->Object                  | Math + Infinity(`没有继承关系`)                                                                                                             |
| [Intl](./Intl.md)               | Intl->Object                  | Intl + Collator + DateTimeFormat + ListFormat + NumberFormat + PluralRules + RelativeTimeFormat                                             |
| ===                             | ===                           | -                                                                                                                                           |
| [Number](./Number.md)           | Number->Function->Object      | -                                                                                                                                           |
| [String](./String.md)           | String->Function->Object      | -                                                                                                                                           |
| [RegExp](./RegExp.md)           | RegExp->Function->Object      | -                                                                                                                                           |
| [Boolean](./Boolean.md)         | Boolean->Function->Object     | -                                                                                                                                           |
| [Object](./Object.md)           | Object->Function              | -                                                                                                                                           |

| 知识点                                | more |
| ------------------------------------- | ---- |
| [async](./async.md)                   | -    |
| [Class](./Class.md)                   | -    |
| [Date](./Date.md)                     | -    |
| [Decorator](./Decorator.md)           | -    |
| [Iterator](./Iterator.md)             | -    |
| [Map](./Map.md)                       | -    |
| [Module](./Module.md)                 | -    |
| [new 操作符](./new操作符.md)          | -    |
| [Proxy](./Proxy.md)                   | -    |
| [Promise](./Promise.md)               | -    |
| [Reflect](./Reflect.md)               | -    |
| [Set](./Set.md)                       | -    |
| [Symbol](./Symbol.md)                 | -    |
| [严格模式](./严格模式.md)             | -    |
| [二进制数组](./二进制数组.md)         | -    |
| [作用域、上下文](./作用域、上下文.md) | -    |
| [创建对象模式](./创建对象模式.md)     | -    |
| [存储](./存储.md)                     | -    |
| [对象的继承](./对象的继承.md)         | -    |
| [布尔值](./布尔值.md)                 | -    |
| [数据类型](./数据类型.md)             | -    |
| [类和模块](./类和模块.md)             | -    |
| [解构赋值](./解构赋值.md)             | -    |
| [转义字符](./转义字符.md)             | -    |
| [运算符](./运算符.md)                 | -    |
| [遍历总结](./遍历总结.md)             | -    |

## todo

- 梳理对象继承关系
- 对象属性相关性质
- 对象属性的遍历
- toLocaleString、toString 比较整理
