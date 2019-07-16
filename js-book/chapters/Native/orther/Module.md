# Module

> 在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案

## export 命令

| 语句                                                 | more                     |
| ---------------------------------------------------- | ------------------------ |
| export var myVar1 = ..                               | -                        |
| export function myFunc (){}                          | -                        |
| export MyClass {}                                    | -                        |
| export default 123                                   | -                        |
| export default function(){}                          | -                        |
| export default class {}                              | -                        |
| export { MY_CONST, myFunc }                          | -                        |
| export { MY_CONST as THE_CONST, myFunc as theFunc }  | 导出时修改名字           |
| export \* from 'src/other_module'                    | 导出从其他地方导入的模块 |
| export { foo, bar } from 'src/other_module'          | ~                        |
| export { foo as myFoo, bar } from 'src/other_module' | ~                        |

## import 命令

| 语句                                                     | more                                        |
| -------------------------------------------------------- | ------------------------------------------- |
| `import theDefault, { named1，named2 } from 'src/mylib'` | 逗号分开了默认导出和其他导出                |
| import theDefault from 'src/mylib'                       | 获取 lib.js 中由 'export default'导出的内容 |
| import { named1，named2 } from 'src/mylib'               | -                                           |
| import { named1 as myNamed1, named2 } from 'src/mylib'   | 重命名: import named1 as myNamed1           |
| import \* as lib from 'src/mylib'                        | -                                           |
| import 'src/mylib'                                       | 只加载，不会影响当前文件                    |
