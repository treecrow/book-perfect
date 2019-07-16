# [全局对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

> 介绍所有的 JavaScript 标准的内置对象，以及它们的方法和属性

- 内置对象列表

| class    | 内置对象                               | 继承链                        | 包含                                                                                                                                        |
| -------- | -------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Function | [Array](./global/Array.md)             | Array->Function->Object       | -                                                                                                                                           |
| ^        | [ArrayBuffer](./global/ArrayBuffer.md) | ArrayBuffer->Function->Object | -                                                                                                                                           |
| ^        | [Boolean](./global/Boolean.md)         | Boolean->Function->Object     | -                                                                                                                                           |
| ^        | [DataView](./global/DataView.md)       | DataView->Function->Object    | -                                                                                                                                           |
| ^        | [Date](./global/Date.md)               | Date->Function->Object        | -                                                                                                                                           |
| ^        | [Error](./global/Error.md)             | Error->Function->Object       | Error + EvalError + RangeError + ReferenceError + SyntaxError + TypeError + URIError                                                        |
| ^        | [TypedArray](./global/TypedArray.md)   | TypedArray->Function->Object  | TypedArray + Int8Array + Uint8Array + Uint8ClampedArray + Int16Array + Uint16Array + Int32Array + Uint32Array + Float32Array + Float64Array |
| ^        | [Generator](./global/Generator.md)     | Generator->Function->Object   | Generator + GeneratorFunction                                                                                                               |
| ^        | [Map](./global/Map.md)                 | Map->Function->Object         | Map + WeakMap                                                                                                                               |
| ^        | [Number](./global/Number.md)           | Number->Function->Object      | Number                                                                                                                                      |
| ^        | [RegExp](./global/RegExp.md)           | RegExp->Function->Object      | -                                                                                                                                           |
| ^        | [Set](./global/Set.md)                 | Set->Function->Object         | Set + WeakSet                                                                                                                               |
| ^        | [String](./global/String.md)           | String->Function->Object      | -                                                                                                                                           |
| ^        | [Symbol](./global/Symbol.md)           | Symbol->Function->Object      | -                                                                                                                                           |
| ^        | [Object](./global/Object.md)           | Object->Function              | -                                                                                                                                           |
| ^        | [Promise](./global/Promise.md)         | Promise->Function->Object     | -                                                                                                                                           |
| ^        | [Function](./global/Function.md)       | Function->Object              | Function + Arguments + this                                                                                                                 |
| Global   | [Math](./global/Math.md)               | Math->Object                  |                                                                                                                                             |
| ^        | [Intl](./global/Intl.md)               | Intl->Object                  | Intl + Collator + DateTimeFormat + ListFormat + NumberFormat + PluralRules + RelativeTimeFormat                                             |
| ^        | [JSON](./global/JSON.md)               | JSON->Object                  | -                                                                                                                                           |
| ^        | [Reflect](./global/Reflect.md)         | Reflect->Object               | -                                                                                                                                           |
| ^        | [WebAssembly](./global/WebAssembly.md) | WebAssembly->Object           | -                                                                                                                                           |
| orther   | [Proxy](./global/Proxy.md)             | -                             | -                                                                                                                                           |
| direct   | [direct](./global/direct.md)           | -                             | 全局变量/方法，直接使用                                                                                                                     |
