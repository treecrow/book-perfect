## 柯里化函数

### 组合两个函数
```js
function curry2(f,g){
    return function(x){
        return f(g(x));
    }
}
//使用
var first = arr => arr[0];
var reverse = arr => arr.reverse();
var last = curry2(first, reverse);
last([1,2,3,4,5]); //=》5
```

### 组合多个函数
> 第一个函数运行的结果传给第二个

```js
function composFn(...fns) {
    return (x) => fns.reduce((pre, cur) => cur(pre), x);
}
```