# typeScript

- [官方文档](https://www.typescriptlang.org/)
- [typeScript 中文网](https://www.tslang.cn/docs/home.html)
- [在线练习](http://www.typescriptlang.org/play/index.html)

## 文档

| 知识点                         | more |
| ------------------------------ | ---- |
| [范型](./范型.md)              | -    |
| [高级类型](./高级类型.md)      | -    |
| [函数](./函数.md)              | -    |
| [接口](./接口.md)              | -    |
| [类](./类.md)                  | -    |
| [类型兼容性](./类型兼容性.md)  | -    |
| [类型推论](./类型推论.md)      | -    |
| [枚举](./枚举.md)              | -    |
| [命名空间](./命名空间.md)      | -    |
| [模块](./模块.md)              | -    |
| [模块解析](./模块解析.md)      | -    |
| [声明合并](./声明合并.md)      | -    |
| [tsc 命令行](./tsc命令行.md)   | -    |
| [tsconfig.json](./tsconfig.md) | -    |

## 基础类型列表

| 类型              | 示例                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| 布尔值            | `let isDone: boolean = false;`                                                                             |
| 数字              | `let decLiteral: number = 6;`                                                                              |
| 字符串            | `let name: string = "bob";`                                                                                |
| 数组              | `let list: number[] = [1, 2, 3];`                                                                          |
| ^                 | `let list: Array<number> = [1, 2, 3];`                                                                     |
| 元组(Tuple)       | `let x: [string, number];`                                                                                 |
| 枚举              | `enum Color {Red=1, Green, Blue}`                                                                          |
| Any               | `let notSure: any = 4;`                                                                                    |
| Void              | `let unusable: void = undefined;` `function warnUser(): void {console.log("This is my warning message");}` |
| Null 和 Undefined | `let u: undefined = undefined;` `let n: null = null;`                                                      |
| Never             | `function error(message: string): never {throw new Error(message);}`                                       |
| Object            | ``                                                                                                         |
