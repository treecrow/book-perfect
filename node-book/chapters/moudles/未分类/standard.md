# standard

## 安装

- 使用本规范最便捷的方式是全局安装，运行：

```javascript
$ npm install standard --global
```

- 或者非全局的方式，针对某个项目进行安装：

```javascript
$ npm install standard --save-dev
```

## 命令行列表

命令                                           | more
-------------------------------------------- | ----------------------
standard                                     | 检查项目内所有的 JavaScript 文件
standard `"src/util/**/*.js" "test/**/*.js"` | 检测特定的文件
standard --fix                               | 自动的代码格式化所有文件
standard --fix "server.js"                   | 自动的代码格式化指定文件

## atom对应插件

插件                  | more
------------------- | ----------------
linter-js-standard  | -
standard-formatter  | -
standardjs-snippets | 可以获得 snippets 特性

## README专属徽章

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 排除部分文件

```json
"standard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```
