# [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

> tsconfig.json 文件中指定了用来编译这个项目的根文件和编译选项

## config list

- files

> 指定一个包含相对或绝对文件路径的列表

- include

> 指定一个文件 glob 匹配模式列表

- exclude

> 指定一个文件 glob 匹配模式列表

- compilerOptions

| class      | key                                | more                                                                                                                                                                                         |
| ---------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 语法检测   | strict                             | 启用所有严格类型检查选项。启用 --strict 相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， --strictNullChecks 和 --strictFunctionTypes 和--strictPropertyInitialization。        |
| ^          | noImplicitAny                      | 在表达式和声明上有隐含的 any 类型时报错。                                                                                                                                                    |
| ^          | noImplicitThis                     | 当 this 表达式的值为 any 类型的时候，生成一个错误。                                                                                                                                          |
| ^          | alwaysStrict                       | 以严格模式解析并为每个源文件生成 "use strict"语句                                                                                                                                            |
| ^          | strictNullChecks                   | 在严格的 null 检查模式下， null 和 undefined 值不包含在任何类型里，只允许用它们自己和 any 来赋值（有个例外， undefined 可以赋值到 void）                                                     |
| ^          | strictFunctionTypes                | 禁用函数参数双向协变检查。                                                                                                                                                                   |
| ^          | strictPropertyInitialization       | 确保类的非 undefined 属性已经在构造函数里初始化。若要令此选项生效，需要同时启用--strictNullChecks                                                                                            |
| ^          | noFallthroughCasesInSwitch         | 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）                                                                                                                  |
| ^          | noStrictGenericChecks              | 禁用在函数类型里对泛型签名进行严格检查。                                                                                                                                                     |
| ^          | noUnusedLocals                     | 若有未使用的局部变量则抛错。                                                                                                                                                                 |
| ^          | noUnusedParameters                 | 若有未使用的参数则抛错。                                                                                                                                                                     |
| ^          | noImplicitUseStrict                | 模块输出中不包含 "use strict"指令。                                                                                                                                                          |
| javascript | allowJs                            | 允许编译 javascript 文件。                                                                                                                                                                   |
| ^          | checkJs                            | 在 .js 文件中报告错误。与 --allowJs 配合使用。                                                                                                                                               |
| ^          | maxNodeModuleJsDepth               | node_modules 依赖的最大搜索深度并加载 JavaScript 文件。仅适用于 --allowJs。                                                                                                                  |
| react      | jsx                                | 在 .tsx 文件里支持 JSX： "React"或 "Preserve"                                                                                                                                                |
| ^          | jsxFactory                         | 指定生成目标为 react JSX 时，使用的 JSX 工厂函数，比如 React.createElement 或 h。                                                                                                            |
| ^          | reactNamespace                     | 当目标为生成 "react" JSX 时，指定 createElement 和 \*\*spread 的调用对象                                                                                                                     |
| 声明文件   | declarationDir                     | 生成声明文件的输出路径。                                                                                                                                                                     |
| ^          | skipDefaultLibCheck                | 忽略 库的默认声明文件的类型检查。                                                                                                                                                            |
| ^          | skipLibCheck                       | 跳过所有声明文件的类型检查（\*.d.ts）                                                                                                                                                        |
| ^          | types                              | 要包含的类型声明文件名列表。查看 @types，--typeRoots 和--types 章节了解详细信息。                                                                                                            |
| ^          | typeRoots                          | 要包含的类型声明文件路径列表。查看 @types，--typeRoots 和--types 章节了解详细信息。                                                                                                          |
| 错误       | locale                             | 显示错误信息时使用的语言，比如：en-us。                                                                                                                                                      |
| ^          | pretty                             | 给错误和消息设置样式，使用颜色和上下文。                                                                                                                                                     |
| ^          | noErrorTruncation                  | 不截短错误消息。                                                                                                                                                                             |
| ^          | allowUnreachableCode               | 不报告执行不到的代码错误。                                                                                                                                                                   |
| ^          | allowUnusedLabels                  | 不报告未使用的标签错误。                                                                                                                                                                     |
| 输出文件   | noEmit                             | 不生成输出文件                                                                                                                                                                               |
| ^          | emitBOM                            | 在输出文件的开头加入 BOM 头（UTF-8 Byte Order Mark）。                                                                                                                                       |
| ^          | noEmitHelpers                      | 不在输出文件中生成用户自定义的帮助函数代码，如 \*\*extends。                                                                                                                                 |
| ^          | noEmitOnError                      | 报错时不生成输出文件。                                                                                                                                                                       |
| ^          | outFile                            | 将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和 ///<reference`>和 import 的文件顺序决定的。查看输出文件顺序文件了解详情。                                                   |
| ^          | outDir                             | 重定向输出目录。                                                                                                                                                                             |
| 编译       | lib                                | 编译时引入的 ES 功能库                                                                                                                                                                       |
| ^          | target                             | 指定 ECMAScript 目标版本 "ES3"（默认）， "ES5"， "ES6"/ "ES2015"， "ES2016"， "ES2017"或 "ESNext"。                                                                                          |
| ^          | module                             | 生成的模块形式：none、commonjs、amd、system、umd、es6、es2015 或 esnext                                                                                                                      |
| ^          | moduleResolution                   | 决定如何处理模块。或者是 "Node"对于 Node.js/io.js，或者是 "Classic"（默认）                                                                                                                  |
| ===        | ===                                | ===                                                                                                                                                                                          |
| ^          | `allowSyntheticDefaultImports`     | 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。                                                                                                               |
| ^          | baseUrl                            | 解析非相对模块名的基准目录。查看 模块解析文档了解详情。                                                                                                                                      |
| ^          | charset                            | 输入文件的字符集。                                                                                                                                                                           |
| ^          | declaration                        | 生成相应的 .d.ts 文件                                                                                                                                                                        | 成相应的 .d.ts 文件。 |
| ^          | diagnostics                        | 显示诊断信息。                                                                                                                                                                               |
| ^          | disableSizeLimit                   | 禁用 JavaScript 工程体积大小的限制                                                                                                                                                           |
| ^          | emitDecoratorMetadata              | 给源码里的装饰器声明加上设计类型元数据。查看 issue #2577 了解更多信息。                                                                                                                      |
| ^          | experimentalDecorators             | 启用实验性的 ES 装饰器。                                                                                                                                                                     |
| ^          | extendedDiagnostics                | 显示详细的诊段信息。                                                                                                                                                                         |
| ^          | `forceConsistentCasingInFileNames` | 禁止对同一个文件的不一致的引用                                                                                                                                                               |
| ^          | help                               | 打印帮助信息。                                                                                                                                                                               |
| ^          | importHelpers                      | 从 tslib 导入辅助工具函数（比如 **extends， **rest 等）                                                                                                                                      |
| ^          | inlineSourceMap                    | 生成单个 sourcemaps 文件，而不是将每 sourcemaps 生成不同的文件。                                                                                                                             |
| ^          | inlineSources                      | 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性。                                                                                                 |
| ^          | `isolatedModules`                  | 将每个文件作为单独的模块（与“ts.transpileModule”类似）。                                                                                                                                     |
| ^          | listEmittedFiles                   | 打印出编译后生成文件的名字。                                                                                                                                                                 |
| ^          | listFiles                          | 编译过程中打印文件名。                                                                                                                                                                       |
| ^          | mapRoot                            | 为调试器指定指定 sourcemap 文件的路径，而不是使用生成时的路径。当 .map 文件是在运行时指定的，并不同于 js 文件的地址时使用这个标记。指定的路径会嵌入到 sourceMap 里告诉调试器到哪里去找它们。 |
| ^          | newLine                            | (platform specific) 当生成文件时指定行结束符： "crlf"（windows）或 "lf"（unix）。                                                                                                            |
| ^          | noImplicitReturns                  | 不是函数的所有返回路径都有返回值时报错。                                                                                                                                                     |
| ^          | noLib                              | 不包含默认的库文件（ lib.d.ts）。                                                                                                                                                            |
| ^          | noResolve                          | 不把 /// <reference`>或模块导入的文件加到编译文件列表。                                                                                                                                      |
| ^          | paths                              | 模块名到基于 baseUrl 的路径映射的列表。查看 模块解析文档了解详情。                                                                                                                           |
| ^          | preserveConstEnums                 | 保留 const 和 enum 声明。查看 const enums documentation 了解详情。                                                                                                                           |
| ^          | preserveSymlinks                   | 不把符号链接解析为其真实路径；将符号链接文件视为真正的文件。                                                                                                                                 |
| ^          | preserveWatchOutput                | 保留 watch 模式下过时的控制台输出。                                                                                                                                                          |
| ^          | project                            | 编译指定目录下的项目。这个目录应该包含一个 tsconfig.json 文件来管理编译。查看 tsconfig.json 文档了解更多信息。                                                                               |
| ^          | removeComments                     | 删除所有注释，除了以 /!\*开头的版权信息。                                                                                                                                                    |
| ^          | rootDir                            | (common root directory is computed from the list of input files) 仅用来控制输出的目录结构 --outDir。                                                                                         |
| ^          | rootDirs                           | 根（root）文件夹列表，表示运行时组合工程结构的内容。查看 模块解析文档了解详情。                                                                                                              |
| ^          | sourceMap                          | 生成相应的 .map 文件。                                                                                                                                                                       |
| ^          | sourceRoot                         | 指定 TypeScript 源文件的路径，以便调试器定位。当 TypeScript 文件的位置是在运行时指定时使用此标记。路径信息会被加到 sourceMap 里。                                                            |
| ^          | stripInternal                      | 不对具有 /\*\_ @internal \_/ JSDoc 注解的代码生成代码。                                                                                                                                      |
| ^          | suppressExcessPropertyErrors       | 阻止对对象字面量的额外属性检查。                                                                                                                                                             |
| ^          | suppressImplicitAnyIndexErrors     | 阻止 --noImplicitAny 对缺少索引签名的索引对象报错。查看 issue #1232 了解详情。                                                                                                               |
| ^          | traceResolution                    | 生成模块解析日志信息                                                                                                                                                                         |
| ^          | version                            | 打印编译器版本号。                                                                                                                                                                           |
| ^          | watch                              | 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。监视文件和目录的具体实现可以通过环境变量进行配置。详情请看配置 Watch。                                                         |
