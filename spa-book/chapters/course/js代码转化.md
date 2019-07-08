# js 代码转化

- 安装依赖

```bash
npm i -D @babel/cli @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/plugin-syntax-dynamic-import babel-loader
npm i -S core-js @babel/runtime
```

- 相关依赖

| 依赖                                                                                         | 环境        | 功能                                                                                                            |
| -------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| @babel/cli                                                                                   | development | 安装了 babel-cli 就能够在命令行中使用 babel 命令来编译文件                                                      |
| @babel/core                                                                                  | development | Babel compiler core.                                                                                            |
| [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)                            | development | 个智能预设，允许您使用最新的 JavaScript，而无需微观管理您的目标环境需要哪些语法转换（以及可选的浏览器 polyfill) |
| core-js                                                                                      | production  | @babel/preset-env 配置 polyfill 需要安装 core-js 并指定 corejs 版本                                             |
| [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) | development | 把帮助类方法从每次使用前定义改为统一 require，精简代码（babel-runtime 需要安装为依赖项，而不是开发依赖）        |
| @babel/runtime                                                                               | production  | ^                                                                                                               |
| @babel/plugin-syntax-dynamic-import                                                          | development | 动态导入，webpack 做按需加载的时候需要                                                                          |
| babel-loader                                                                                 | development | webpack 打包前的 babel 转译                                                                                     |

- 相关文档

  - [一口(很长的)气了解 babel](https://zhuanlan.zhihu.com/p/53313472)
  - [babel7 中 corejs 和 corejs2 的区别](https://www.cnblogs.com/htoooth/p/9724609.html)

- 相关配置

```js
// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
        },
        corejs: "3",
        useBuiltIns: "usage" // 只包含你所需要的 polyfill
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
```
