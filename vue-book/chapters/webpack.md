# [webpack](https://webpack.js.org/)

## 相关模块

| 分类             | 模块                               | 变量名            | more                                                       |
| ---------------- | ---------------------------------- | ----------------- | ---------------------------------------------------------- |
| webpack          | webpack-serve                      | webpackServe      | -                                                          |
| ~                | webpack-dev-server                 | WebpackDevServer  |
| webpack 自身插件 | webpack.DefinePlugin               | -                 | 定义全局变量                                               |
| ~                | webpack.HotModuleReplacementPlugin | -                 | 热重载                                                     |
| ~                | webpack.NamedModulesPlugin         | -                 | 纠正热重载时引入文件名称                                   |
| ~                | webpack.NoEmitOnErrorsPlugin       | -                 | 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误 |
| ~                | webpack.HashedModuleIdsPlugin      | -                 | hash 值基于相关模块的路径                                  |
| ~                | webpack.ModuleConcatenationPlugin  | -                 | 将所有模块的作用域连接成一个闭包                           |
| ~                | webpack.CommonsChunkPlugin         | -                 | 提取第三方库和公共模块                                     |
| 其它插件         | copy-webpack-plugin                | CopyWebpackPlugin | 拷贝文件                                                   |
| ~                | vue-loader/lib/plugin              | VueLoaderPlugin   | vue-loader                                                 |
| ~                | html-webpack-plugin                | HtmlWebpackPlugin | 生成入口页面                                               |
| ~                | extract-text-webpack-plugin        | ExtractTextPlugin | 抽离css样式                                                |
| ~                | optimize-css-assets-webpack-plugin | OptimizeCSSPlugin | 压缩提取出的css,并解决 css 代码重复问题                    |
| ~                | uglifyjs-webpack-plugin            | UglifyJsPlugin    | 压缩 js                                                    |
| ~                | webpack-dashboard                  | -                 | -                                                          |
| 工具             | webpack-merge                      | webpackMerge      | 整合 webpack 配置项                                        |

## webpack-dev-server

| option               | type    | describe                                                                       |
| -------------------- | ------- | ------------------------------------------------------------------------------ |
| bonjour              | boolean | Broadcasts the server via ZeroConf networking on start                         |
| lazy                 | boolean | Lazy                                                                           |
| inline               | boolean | Inline mode (set to false to disable including client scripts like livereload) |
| progress             | boolean | Print compilation progress in percentage                                       |
| hot-only             | boolean | Do not refresh page if HMR fails                                               |
| stdin                | boolean | close when stdin ends                                                          |
| open                 | string  | Open the default browser, or optionally specify a browser name                 |
| useLocalIp           | boolean | Open default browser with local IP                                             |
| open-page            | string  | Open default browser with the specified page                                   |
| color/colors         | boolean | Enables/Disables colors on the console                                         |
| info                 | boolean | Info                                                                           |
| quiet                | boolean | Quiet                                                                          |
| client-log-level     | string  | Log level in the browser (info, warning, error or none)                        |
| https                | boolean | HTTPS                                                                          |
| key                  | string  | Path to a SSL key.                                                             |
| cert                 | string  | Path to a SSL certificate.                                                     |
| cacert               | string  | Path to a SSL CA certificate.                                                  |
| pfx                  | string  | Path to a SSL pfx file.                                                        |
| pfx-passphrase       | string  | Passphrase for pfx file.                                                       |
| content-base         | string  | A directory or URL to serve HTML content from.                                 |
| watch-content-base   | boolean | Enable live-reloading of the content-base.                                     |
| history-api-fallback | boolean | Fallback to /index.html for Single Page Applications.                          |
| compress             | boolean | Enable gzip compression                                                        |
| port                 | -       | The port                                                                       |
| disable-host-check   | boolean | Will not check the host                                                        |
| socket               | String  | Socket to listen                                                               |
| public               | string  | The public hostname/ip address of the server                                   |
| host                 | string  | The hostname/ip address the server will bind to                                |
| allowed-hosts        | string  | A comma-delimited string of hosts that are allowed to access the dev server    |