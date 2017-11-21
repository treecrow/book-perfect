# babel

## 相关文档

| 文档                                                                              | more |
|---------------------------------------------------------------------------------|------|
| [如何写好.babelrc？Babel的presets和plugins配置解析](https://zhuanlan.zhihu.com/p/24224107) | -    |
| [Node.js神器之babel-preset-env](http://blog.ttionya.com/article-1695.html)         | -    |

## 相关模块列表

| 模块             | more                                                                                                             |
|----------------|------------------------------------------------------------------------------------------------------------------|
| babel-cli      | 命令行转码工具                                                                                                          |
| babel-polyfill | Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill |
| babel-register | 当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码（只适合在开发环境使用）                                                    |
| babel-core     | 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块                                                                         |

## 命令行转码babel-cli

```
$ npm install --global babel-cli
```

| 命令                                         | more                |
|--------------------------------------------|---------------------|
| babel src -d lib                           | -                   |
| babel src -d lib -s                        | -s 参数生成source map文件 |
| babel src --out-dir/-d lib                 | 整个目录转码              |
| babel xxx                                  | 转码结果输出到标准输出         |
| babel example.js --out-file/-o compiled.js | 转码结果写入一个文件          |
| babel-node                                 | 提供一个支持ES6的REPL环境    |
| babel-node xxx                             | 运行某个es6文件           |

## 配置文件.babelrc

> 用来设置转码规则和插件

### 字段

| 属性                                  | more      |
|-------------------------------------|-----------|
| presets[preset1,[preset2, options]] | 设定转码规则    |
| plugins[plugin1,[plugin2, options]] | 设置babel插件 |

### 可选的转码规则

| moudle                                                              | 名字    | more                                                  |
|---------------------------------------------------------------------|-------|-------------------------------------------------------|
| [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/)     | env   | 根据配置的目标运行环境（environment）自动启用需要的 babel 插件（整合了 es6、7、8） |
| [babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) | react | react是一个比较特别的官方推荐的presets。加入了flow，jsx等语法              |

### options(for env)

| 字段          | 字段       | more                                                                                                                |
|-------------|----------|---------------------------------------------------------------------------------------------------------------------|
| targets     | -        | 用于指明支持的环境版本                                                                                                         |
| -           | node     | 设置为 true 或 "current" 可以根据当前 Node.js 版本进行动态转换。也可以设置为具体的数字表示需要支持的最低的 Node.js 版本                                       |
| -           | browsers | 需要使用 browserslist 的配置方法，但是其设置会被 targets.[chrome, opera, edge, firefox, safari, ie, ios, android, node, electron] 覆盖 |
| -           | uglify   | 会把代码完全转换为 ES5 以支持压缩 JS 代码                                                                                           |
| spec        | -        | -                                                                                                                   |
| loose       | -        | -                                                                                                                   |
| modules     | -        | -                                                                                                                   |
| debug       | -        | -                                                                                                                   |
| include     | -        | 白名单，一定会执行的转换，其项是数组                                                                                                  |
| exclude     | -        | 黑名单，一定不会执行的转换，其项是数组                                                                                                 |
| useBuiltIns | -        | 可以根据之前的配置自行添加 polyfill，默认不开启。安装 babel-polyfill 后只要引入一次就行                                                            |

## 浏览器环境

```
$ npm install babel-core@5
```

```html
<script src="node_modules/babel-core/browser.js"></script>
<script type="text/babel">
// Your ES6 code
</script>
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.4.4/babel.min.js"></script>
<script type="text/babel">
// Your ES6 code
</script>
```

## babel-polyfill的使用

> 在文件开头引入

```javascript
import 'babel-polyfill'
```
