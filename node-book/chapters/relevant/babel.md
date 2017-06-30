# babel

## 相关模块列表

模块             | more
-------------- | ----------------------------------------------------------------------------------------------------------------
babel-core     | 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
babel-polyfill | Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill
babel-register | 当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码（只适合在开发环境使用）

## 配置文件.babelrc

> 用来设置转码规则和插件

### 字段

属性      | more
------- | ---------
presets | 设定转码规则
plugins | 设置babel插件

### 转码规则

moudle               | 规则               | 对应的名字
-------------------- | ---------------- | -------
babel-preset-es2015  | ES2015转码规则       | es2015
babel-preset-react   | react转码规则        | react
babel-preset-stage-0 | ES7不同阶段语法提案的转码规则 | stage-0
babel-preset-stage-1 | ES7不同阶段语法提案的转码规则 | stage-1
babel-preset-stage-2 | ES7不同阶段语法提案的转码规则 | stage-2
babel-preset-stage-3 | ES7不同阶段语法提案的转码规则 | stage-3

### 插件

moudle                                    | 作用                        | 对应的名字
----------------------------------------- | ------------------------- | ----------------------------
babel-plugin-transform-async-to-generator | 转化async为ES2015 generators | transform-async-to-generator

## 命令行转码babel-cli

```
$ npm install --global babel-cli
```

命令                                         | more
------------------------------------------ | -------------------
babel xxx                                  | 转码结果输出到标准输出
babel example.js --out-file/-o compiled.js | 转码结果写入一个文件
babel src --out-dir/-d lib                 | 整个目录转码
babel src -d lib -s                        | -s 参数生成source map文件
babel-node                                 | 提供一个支持ES6的REPL环境
babel-node xxx                             | 运行某个es6文件

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
