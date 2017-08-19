# webpack

--------------------------------------------------------------------------------

## webpack 字段列表

字段        | more
--------- | -----------------------
entry     | 声明入口文件
output    | -
resolve   | -
module    | -
plugins   | -
devtool   | -
devServer | -
target    | webpack可以编译为多个平台，默认 web

### entry

### output

字段                                    | more
------------------------------------- | ----------------------------------------------------------------------------------
auxiliaryComment                      |
chunkFilename                         | 非主入口的文件名
chunkLoadTimeout                      | 设置模块请求失败的时间
crossOriginLoading                    | 是否允许跨域加载
devtoolFallbackModuleFilenameTemplate | 和output.devtoolModuleFilenameTemplate一样，但是用在有重复module标识符的时候
devtoolLineToLine                     | 为所有模块启用行映射模式
devtoolModuleFilenameTemplate         | 在生成的SourceMap里的函数sources数组的文件名模板
filename                              | 主入口的文件名
hashDigest                            |
hashDigestLength                      |
hashFunction                          |
hashSalt                              |
hotUpdateChunkFilename                | 热替换chunks的文件名. 在output.path目录里
hotUpdateFunction                     | 热替换时候一步更新js的jsonp方法
hotUpdateMainFilename                 | 热替换主文件的的名字。在output.path目录里
jsonpFunction                         | webpack异步加载的JSONP函数
library                               | 如果设置了此项, 将会把bundle打包成lib
libraryExport                         |
libraryTarget                         | 格式化导出的库
path                                  |
pathinfo                              | 包含了一些module的信息的注解
publicPath                            | 指定了一个在浏览器中被引用的URL地址
sourceMapFilename                     | js文件的SourceMap的文件名
sourcePrefix                          | 在代码的每一行前面加上此前缀.默认: "\t"
strictModuleExceptionHandling         |
umdNamedDefine                        | 如果 output.libraryTarget 被设置为 umd 且 output.library 被 设置, 设置该项为 true 将为AMD module 命名

### module

字段      | 字段2             | more
------- | --------------- | ---------------------------------
noParse | -               | 一个正则表达式或者一组正则，不会匹配到的路径 它不匹配整个解析请求
rules   | -               | -
rule    | enforce         | -
~       | exclude         | 不满足的条件
~       | include         | 必须满足条件
~       | issuer          | -
~       | loader          | 用 "!" 隔开多个loader
~       | loaders         | 多个loader
~       | oneOf           | -
~       | options / query | -
~       | parser          | -
~       | resource        | -
~       | resourceQuery   | -
~       | rules           | -
~       | test            | 必须满足的条件
~       | use             | -

### resolve

> 影响解析模块的选项

字段                     | more
---------------------- | ----------------
alias                  | 模块被其他模块名和路径替代
aliasFields            | -
cacheWithContext       | -
descriptionFiles       | -
enforceExtension       | -
enforceModuleExtension | -
extensions             | 解析模块的拓展名的数组
mainFields             | -
mainFiles              | -
modules                | -
unsafeCache            | 启用不安全的缓存来解析一部分文件
plugins                | -
symlinks               | -
cachePredicate         | -

### externals

> 指定的依赖不会被webpack解析，但会成为bundle里的依赖

### target

> 编译到的目标使用环境

环境            | more
------------- | ---------------------------------------------------------------------
"web"         | 浏览器环境(默认)
"webworker"   | WebWorker
"node"        | node (使用 require 加载 chunk)
"async-node"  | node (使用 fs 和 vm 来加载异步chunk)
"node-webkit" | webkit, 使用jsonp加载chunk 但同样支持 node.js module 加， equire("nw.gui") (实验性)
"electron"    | Electron – 支持 require 带有Electron特性 modules.

### plugins

> 给编译器添加额外的插件

插件                                                                                                   | more
---------------------------------------------------------------------------------------------------- | -----------
[webpack.DefinePlugin]()                                                                             | -
[webpack.optimize.UglifyJsPlugin]()                                                                  | -
[webpack.LoaderOptionsPlugin]()                                                                      | -
[webpack.optimize.CommonsChunkPlugin]()                                                              | 代码分割
[extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin)            | 提取代码
[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)                           | 生成入口 html文件
[clean-webpack-plugin](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder) | 清空文件夹

#### html-webpack-plugin

配置项            | more
-------------- | --------------------------------------------------------------
title          | html文件的title
filename       | html文件名
template       | html文件的模板
inject         | bundle 出来的文件 插入到 html 文件到哪里
favicon        | favicon 图标路径
minify         | html 文件如何压缩
hash           | 是否向插入 html 文件中的js和css文件添加hash后缀(此处添加后，bundle出来的文件就不需要添加了)
cache          | if true (default) try to emit the file only if it was changed.
showErrors     | errors 的细节是否展示到 html 文件中
chunks         | 可以只添加部分 chunks
chunksSortMode | 控制 chunks 插入的顺序
excludeChunks  | 跳过某些 chunks
xhtml          | 是否为xhtml形式

### devtool

> 选择开发工具来提高debug效率

工具                      | more
----------------------- | -----------------------------------------------------------------------------------------------------------------------
eval                    | 文档上解释的很明白，每个模块都封装到 eval 包裹起来，并在后面添加 //# sourceURL
source-map              | 这是最原始的 source-map 实现方式，其实现是打包代码同时创建一个新的 sourcemap 文件， 并在打包文件的末尾添加 //# sourceURL 注释行告诉 JS 引擎文件在哪儿
hidden-source-map       | 文档上也说了，就是 soucremap 但没注释，没注释怎么找文件呢？貌似只能靠后缀，譬如 xxx/bundle.js 文件，某些引擎会尝试去找 xxx/bundle.js.map
inline-source-map       | 为每一个文件添加 sourcemap 的 DataUrl，注意这里的文件是打包前的每一个文件而不是最后打包出来的，同时这个 DataUrl 是包含一个文件完整 souremap 信息的 Base64 格式化后的字符串，而不是一个 url。
eval-source-map         | 这个就是把 eval 的 sourceURL 换成了完整souremap 信息的 DataUrl
cheap-source-map        | 不包含列信息，不包含 loader 的sourcemap，（譬如 babel 的 sourcemap）
cheap-module-source-map | 不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的。

### devServer

> devServer

字段                  | more
------------------- | --------------------------------------------------------------------
allowedHosts        | -
bonjour             | -
clientLogLevel      | -
color - CLI only    | -
compress            | -
contentBase         | 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
disableHostCheck    | -
filename 🔑         | -
headers 🔑          | -
historyApiFallback  | -
host                | -
hot                 | -
hotOnly             | -
https               | -
info - CLI only     | -
inline              | -
lazy 🔑             | -
noInfo 🔑           | -
open                | -
openPage            | -
overlay             | -
pfx                 | -
pfxPassphrase       | -
port                | -
proxy               | -
progress - CLI only | -
public              | -
publicPath 🔑       | -
quiet 🔑            | -
setup               | -
socket              | -
staticOptions       | -
stats 🔑            | -
stdin - CLI only    | -
useLocalIp          | -
watchContentBase    | -
watchOptions 🔑     | -

### node

> 包含了许多node的polyfills或者mock

字段                | more
----------------- | ----
node.console      |
node.process      |
node.global       |
`node.__filename` |
`node.__dirname`  |
node.Buffer       |
node.setImmediate |

--------------------------------------------------------------------------------

## 命令行

### webpack 命令行

### webpack-dev-server 命令行
