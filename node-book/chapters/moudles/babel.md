# babel

## 模块列表

模块                  | more
------------------- | ----------------------------------------------------------------------------------------------------------------
babel-core          | -
babel-preset-es2015 | -
babel-polyfill      | Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill

## .babelrc配置文件

```javascript
{
  "presets": [ "es2015" ]
}
```

## babel-polyfill的使用

> 在文件开头引入

```javascript
import 'babel-polyfill'
```
