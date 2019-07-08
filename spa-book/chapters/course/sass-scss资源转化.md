# sass/scss 资源转化

- 安装相关依赖

```bash
npm i -D sass-loader dart-sass postcss-loader css-loader
```

- 相关配置

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.(sass|scss)/,
      sideEffects: true,
      use: [
        // ...
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
}

// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {}
  }
};
```
