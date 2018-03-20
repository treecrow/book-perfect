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
| exclude         | -                                                                     |

### [compilerOptions 字段列表](https://www.tslang.cn/docs/handbook/compiler-options.html)

| key              | more                                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| outDir           | 重定向输出目录                                                                                                                           |
| sourceMap        | 生成相应的 .map 文件                                                                                                                     |
| noImplicitAny    | 在表达式和声明上有隐含的 any 类型时报错                                                                                                  |
| noImplicitThis   | 当 this 表达式的值为 any 类型的时候，生成一个错误                                                                                        |
| strictNullChecks | 在严格的 null 检查模式下， null 和 undefined 值不包含在任何类型里，只允许用它们自己和 any 来赋值（有个例外， undefined 可以赋值到 void） |
| module           | 指定生成哪个模块系统代码                                                                                                                 |
| target           | 指定 ECMAScript 目标版本                                                                                                                 |
| jsx              | 在 .tsx 文件里支持 JSX： "React"或 "Preserve"                                                                                            |
