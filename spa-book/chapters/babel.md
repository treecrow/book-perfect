# babel

## 官方文档

- [Babel 官方文档](https://babeljs.io/)
- [options](https://babeljs.io/docs/en/options)
- [Babel 中文文档](https://www.babeljs.cn/)

## 相关文档

- [一口(很长的)气了解 babel](https://zhuanlan.zhihu.com/p/53313472)
- [babel7 中 corejs 和 corejs2 的区别](https://www.cnblogs.com/htoooth/p/9724609.html)

## 运行方式

> babel 总共分为三个阶段：解析，转换，生成。

## 配置文件

- .babelrc
- package.json 的 babel
- babel-loader 配置项中（优先级最高）

## 配套工具

| 工具                                            | more                                                                                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| babel-cli                                       | 安装了 babel-cli 就能够在命令行中使用 babel 命令来编译文件                                                                                                                                  |
| babel-node                                      | babel-node 是 babel-cli 的一部分，它不需要单独安装。 它的作用是在 node 环境中，直接运行 es2015 的代码，而不需要额外进行转码 (babel-node = babel-polyfill + babel-register)                  |
| babel-register                                  | babel-register 模块改写 require 命令，为它加上一个钩子。此后，每当使用 require 加载 .js、.jsx、.es 和 .es6 后缀名的文件，就会先用 babel 进行转码                                            |
| babel-polyfill                                  | babel 默认只转换 js 语法，而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法(比如 Object.assign)都不会转码。 |
| babel-plugin-transform-runtime && babel-runtime | 把帮助类方法从每次使用前定义改为统一 require，精简代码（babel-runtime 需要安装为依赖项，而不是开发依赖）                                                                                    |
| babel-loader                                    | webpack 打包前的 babel 转译                                                                                                                                                                 |

## [plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

| option          | defaults | more                                                                                                                           |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| corejs          | -        | -                                                                                                                              |
| helpers         | true     | oggles whether or not inlined Babel helpers (classCallCheck, extends, etc.) are replaced with calls to moduleName              |
| regenerator     | true     | Toggles whether or not generator functions are transformed to use a regenerator runtime that does not pollute the global scope |
| useBuiltIns     | -        | -                                                                                                                              |
| useESModules    | -        | -                                                                                                                              |
| absoluteRuntime | -        | -                                                                                                                              |

## [babel-preset-env](https://www.babeljs.cn/docs/babel-preset-env)

| class   | option                   | more                                                                                                         |
| ------- | ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| targets | -                        | string,array or object                                                                                       |
| ^       | targets.chrome           | -                                                                                                            |
| ^       | targets.opera            | -                                                                                                            |
| ^       | targets.edge             | -                                                                                                            |
| ^       | targets.firefox          | -                                                                                                            |
| ^       | targets.safari           | -                                                                                                            |
| ^       | targets.ie               | -                                                                                                            |
| ^       | targets.ios              | -                                                                                                            |
| ^       | targets.android          | -                                                                                                            |
| ^       | targets.node             | -                                                                                                            |
| ^       | targets.electron         | -                                                                                                            |
| ^       | targets.esmodules        | browsers supporting ES Modules                                                                               |
| ^       | targets.browsers         | A query to select browsers                                                                                   |
| orther  | -                        | -                                                                                                            |
| ^       | spec                     | 启用更符合规范的转换，但速度会更慢，默认为 false                                                             |
| ^       | loose                    | 是否使用 loose mode，默认为 false                                                                            |
| ^       | modules                  | 将 ES6 module 转换为其他模块规范，可选 "adm" / "umd" / "systemjs" / "commonjs" / "cjs" / false，默认为 false |
| ^       | debug                    | 启用 debug，默认 false                                                                                       |
| ^       | include                  | 一个包含使用的 plugins 的数组                                                                                |
| ^       | exclude                  | 一个包含不使用的 plugins 的数组                                                                              |
| ^       | useBuiltIns              | 为 polyfills 应用 @babel/preset-env ，可选 "usage" / "entry" / false，默认为 false                           |
| ^       | forceAllTransforms       | -                                                                                                            |
| ^       | configPath               | -                                                                                                            |
| ^       | ignoreBrowserslistConfig | -                                                                                                            |
| ^       | shippedProposals         | -                                                                                                            |
