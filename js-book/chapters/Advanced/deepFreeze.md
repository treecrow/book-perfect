### 彻底冻结对象的函数
```js
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key] === 'object') {
            deepFreeze(obj[key]);
        }
    });
}
```
