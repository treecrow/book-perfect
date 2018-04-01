# tsconfig.json

> tsconfig.json 文件中指定了用来编译这个项目的根文件和编译选项

## 相关文档

* [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

## tsconfig 选项

| option          | more                                                                  |
| --------------- | --------------------------------------------------------------------- |
| compilerOptions | [编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html) |
| files           | 指定一个包含相对或绝对文件路径的列表                                  |
| include         | -                                                                     |
| exclude         | 要排除的文件                                                          |

### [compilerOptions 字段列表](https://www.tslang.cn/docs/handbook/compiler-options.html)

| key                              | more                                                                                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| outDir                           | 重定向输出目录                                                                                                                           |
| module                           | 指定生成哪个模块系统代码                                                                                                                 |
| target                           | 指定 ECMAScript 目标版本                                                                                                                 |
| lib                              | 编译过程中需要引入的库文件的列表                                                                                                         |
| sourceMap                        | 生成相应的 .map 文件                                                                                                                     |
| allowJs                          | 允许编译 javascript 文件                                                                                                                 |
| jsx                              | 在 .tsx 文件里支持 JSX： "React"或 "Preserve"                                                                                            |
| moduleResolution                 | 决定如何处理模块。或者是 "Node"对于 Node.js/io.js，或者是 "Classic"（默认）                                                              |
| rootDir                          | 仅用来控制输出的目录结构                                                                                                                 |
| forceConsistentCasingInFileNames | 禁止对同一个文件的不一致的引用                                                                                                           |
| noImplicitReturns                | 不是函数的所有返回路径都有返回值时报错                                                                                                   |
| noImplicitThis                   | 当 this 表达式的值为 any 类型的时候，生成一个错误                                                                                        |
| noImplicitAny                    | 在表达式和声明上有隐含的 any 类型时报错                                                                                                  |
| strictNullChecks                 | 在严格的 null 检查模式下， null 和 undefined 值不包含在任何类型里，只允许用它们自己和 any 来赋值（有个例外， undefined 可以赋值到 void） |
| suppressImplicitAnyIndexErrors   | 阻止 --noImplicitAny 对缺少索引签名的索引对象报错                                                                                        |
| noUnusedLocals                   | 若有未使用的局部变量则抛错                                                                                                               |
| outFile                          | 将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和 ///<reference``>和 import 的文件顺序决定的                              |
| experimentalDecorators           | 启用实验性的 ES 装饰器                                                                                                                   |
