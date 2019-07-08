# 单独提取 css

> 包含对 webpack 默认最小化（压缩）的重新设置

- 安装依赖

```bash
npm i -D mini-css-extract-plugin terser-webpack-plugin optimize-css-assets-webpack-plugin
```

- 相关配置

```js
// webpack
{
  module: {
    rules: [
      // sass
      {
        test: /\.(sass|scss)/,
        use: [
          PRODUCTION_ENV ? MiniCssExtractPlugin.loader : "vue-style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 2 }
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ];
  },
  plugins: [
    // 单独提取 css
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ],
    optimization: {
    // 覆盖默认的最小化程序
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // 代码分割
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        // 统一提取 css 到 style.css 文件
        extractedCSS: {
          priority: 20,
          name: "styles",
          chunks: "all",
          test: (module, chunks) => module.constructor.name === "CssModule",
          enforce: true
        },
        // ...
      }
    }
  },
}
```
