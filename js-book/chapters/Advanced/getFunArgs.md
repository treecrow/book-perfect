### 获取函数参数名

```js
function getFunArgs(func) {
    // 首先匹配函数括弧里的参数
    var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];

    // 分解参数成数组
    return args.split(",").map(function(arg) {
        // 去空格和内联注释
        return arg.replace(/\/\*.*\*\//, "").trim();
    }).filter(function(arg) {
        // 确保没有undefineds
        return arg;
    });
}
```
