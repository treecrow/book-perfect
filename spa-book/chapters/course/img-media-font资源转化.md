# img、media、font 资源转化

- 安装依赖

```bash
npm i -D file-loader url-loader
```

- 相关配置

```js
// webpack.config.js
module: {
  // ...
  rules: [
    // img
    {
      test: /\.(jpe?g|png|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 4096,
            fallback: {
              loader: "file-loader",
              options: {
                name: `img/${contenthashName}.[ext]`
              }
            }
          }
        }
      ]
    },
    // media
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 4096,
            fallback: {
              loader: "file-loader",
              options: {
                name: `media/${contenthashName}.[ext]`
              }
            }
          }
        }
      ]
    },
    // font
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 4096,
            fallback: {
              loader: "file-loader",
              options: {
                name: `font/${contenthashName}.[ext]`
              }
            }
          }
        }
      ]
    }
  ];
}
```
