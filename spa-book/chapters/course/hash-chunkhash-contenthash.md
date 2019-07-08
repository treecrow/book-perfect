# hash-chunkhash-contenthash

- 相关文档

  - [webpack 中的 hash、chunkhash、contenthash 区别](https://juejin.im/post/5a4502be6fb9a0450d1162ed)

- hash、chunkhash、contenthash 区别

| flag        | more                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| hash        | 所有文件 hash 部分一样，只要有一个文件改变，项目中所有打包文件 hash 部分都要变化                                      |
| chunkhash   | 只要我们不改动公共库的代码，就可以保证其哈希值不会受影响                                                              |
| contenthash | 某个 css 文件被其他文件引用，即使 css 文件所处的模块里就算其他文件内容改变，只要 css 文件内容不变，那么不会重复构建。 |

- 相关配置

```js
// webpack
const PRODUCTION_ENV = process.env.NODE_ENV === "production"; // 生产环境
const chunkhashName = PRODUCTION_ENV ? "[name].[chunkhash]" : "[name]";
const contenthashName = PRODUCTION_ENV ? "[name].[contenthash]" : "[name]";
module.exports = {
  // ...
  output: {
    path: DIST_PATH,
    filename: `js/${chunkhashName}.js`,
    chunkFilename: `js/${chunkhashName}.js`,
    publicPath: ""
  },
  // css、img、font 等静态资源在生产环境中等 loader 配置里面使用 contenthash
  module: {
    rules: [
      // ...
    ]
  },
  plugins: [
    // ...
    // 单独提取 css
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ]
};
```
