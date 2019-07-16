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
| [Math](./Math.md)               | Math->Object                  |                                                                                                                                             |
| [Intl](./Intl.md)               | Intl->Object                  | Intl + Collator + DateTimeFormat + ListFormat + NumberFormat + PluralRules + RelativeTimeFormat                                             |
| [JSON](./JSON.md)               | JSON->Object                  | -                                                                                                                                           |
| [Map](./Map.md)                 | Map->Function->Object         | Map + WeakMap                                                                                                                               |
| [Number](./Number.md)           | Number->Function->Object      | Number + NaN(`没有继承关系`) + Infinity(`没有继承关系`)                                                                                     |
| [Object](./Object.md)           | Object->Function              | -                                                                                                                                           |
| ===                             | ===                           | -                                                                                                                                           |
| [String](./String.md)           | String->Function->Object      | -                                                                                                                                           |
| [RegExp](./RegExp.md)           | RegExp->Function->Object      | -                                                                                                                                           |
| [Boolean](./Boolean.md)         | Boolean->Function->Object     | -                                                                                                                                           |

## todo

- 梳理对象继承关系
- 对象属性相关性质
- 对象属性的遍历
- toLocaleString、toString 比较整理
