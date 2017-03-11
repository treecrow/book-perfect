### 只允许执行一次的once 函数
```js
function once(fn, context) {
    let result;
    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}
```
