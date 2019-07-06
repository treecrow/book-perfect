# vue-loader

- [官方文档](https://vue-loader.vuejs.org/zh/)

## 相关文档

- [vue2.0-cli stylus 变量无法全局访问，求指导](https://segmentfault.com/q/1010000009420382)

## api 列表

| key                              | 默认值                                  | 解释                                                                                                            |
| -------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| transformAssetUrls               | 太多，略                                | 在模板编译过程中，编译器可以将某些特性转换为 require 调用                                                       |
| compiler                         | `require('vue-template-compiler')`      | 覆写用来编译单文件组件中 <template> 块的默认编译器                                                              |
| compilerOptions                  | {}                                      | 模板编译器的选项                                                                                                |
| transpileOptions                 | {}                                      | 为渲染函数的生成码配置从 ES2015+ 到 ES5 的转译选项                                                              |
| optimizeSSR                      | -                                       | 开启 Vue 2.4 服务端渲染的编译优化之后，渲染函数将会把返回的 vdom 树的一部分编译为字符串，以提升服务端渲染的性能 |
| hotReload                        | -                                       | 是否使用 webpack 的模块热替换                                                                                   |
| productionMode                   | `process.env.NODE_ENV === 'production'` | 强制指定为生产环境，即禁止 loader 注入只在开发环境有效的代码                                                    |
| shadowMode                       | false                                   | 编译用于 Shadow DOM 内部的组件                                                                                  |
| cacheDirectory / cacheIdentifier | undefined                               | 当这两个选项同时被设置时，开启基于文件系统的模板编译缓存                                                        |
| prettify                         | -                                       | -                                                                                                               |
