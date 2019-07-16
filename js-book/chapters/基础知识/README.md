# 基础知识

- [JavaScript 标准库](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

## 知识点列表

| class     | 知识点                          | 继承链                        | 包含                                                                                                                                        |
| --------- | ------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Function  | [Array](./Array.md)             | Array->Function->Object       | -                                                                                                                                           |
| ^         | [ArrayBuffer](./ArrayBuffer.md) | ArrayBuffer->Function->Object | -                                                                                                                                           |
| ^         | [Boolean](./Boolean.md)         | Boolean->Function->Object     | -                                                                                                                                           |
| ^         | [DataView](./DataView.md)       | DataView->Function->Object    | -                                                                                                                                           |
| ^         | [Date](./Date.md)               | Date->Function->Object        | -                                                                                                                                           |
| ^         | [Error](./Error.md)             | Error->Function->Object       | Error + EvalError + RangeError + ReferenceError + SyntaxError + TypeError + URIError                                                        |
| ^         | [TypedArray](./TypedArray.md)   | TypedArray->Function->Object  | TypedArray + Int8Array + Uint8Array + Uint8ClampedArray + Int16Array + Uint16Array + Int32Array + Uint32Array + Float32Array + Float64Array |
| ^         | [Generator](./Generator.md)     | Generator->Function->Object   | Generator + GeneratorFunction                                                                                                               |
| ^         | [Map](./Map.md)                 | Map->Function->Object         | Map + WeakMap                                                                                                                               |
| ^         | [Number](./Number.md)           | Number->Function->Object      | Number                                                                                                                                      |
| ^         | [RegExp](./RegExp.md)           | RegExp->Function->Object      | -                                                                                                                                           |
| ^         | [Set](./Set.md)                 | Set->Function->Object         | Set + WeakSet                                                                                                                               |
| ^         | [String](./String.md)           | String->Function->Object      | -                                                                                                                                           |
| ^         | [Symbol](./Symbol.md)           | Symbol->Function->Object      | -                                                                                                                                           |
| ^         | [Object](./Object.md)           | Object->Function              | -                                                                                                                                           |
| ^         | [Promise](./Promise.md)         | Promise->Function->Object     | -                                                                                                                                           |
| ^         | [Function](./Function.md)       | Function->Object              | Function + Arguments + this                                                                                                                 |
| Global    | [Math](./Math.md)               | Math->Object                  |                                                                                                                                             |
| ^         | [Intl](./Intl.md)               | Intl->Object                  | Intl + Collator + DateTimeFormat + ListFormat + NumberFormat + PluralRules + RelativeTimeFormat                                             |
| ^         | [JSON](./JSON.md)               | JSON->Object                  | -                                                                                                                                           |
| ^         | [Reflect](./Reflect.md)         | Reflect->Object               | -                                                                                                                                           |
| ^         | [WebAssembly](./WebAssembly.md) | WebAssembly->Object           | -                                                                                                                                           |
| orther    | [Proxy](./Proxy.md)             | -                             | -                                                                                                                                           |
| `_direct` | [`_direct`](./_direct.md)       | -                             | 全局变量/方法，直接使用                                                                                                                     |

## todo

- 梳理对象继承关系
- 对象属性相关性质
- 对象属性的遍历
- toLocaleString、toString 比较整理
