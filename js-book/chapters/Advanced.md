# Advanced

## 深拷贝
### JSON.parse方式
```js
function jsonCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

### deepCopy1(空数组不会转化为空对象)
```js
function deepCopy1(obj) {
    let result = obj.constructor === Array ? [] : {};
    Object.entries(obj).forEach(([key, value])=> {
        result[key] = typeof value !== 'object' ? value : deepCopy1(value);
    });
    return result;
}
```

### deepCopy2(使用ES6的...考虑到了数组和对象的区别)
```js
function deepCopy2(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    return {...obj};
  }
  if (Array.isArray(obj)) {
    return [...obj];
  }
  return obj;
}
```

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

## 其它
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

### 节流函数: [JavaScript 节流函数 Throttle 详解](http://web.jobbole.com/86710/)
```js
function throttle(fn, delay, atleast) {
   let timer = null,
     previous = null;
   return function () {
     let now = +new Date();
     if (!previous) previous = now;
     if (atleast && now - previous > atleast) {
       fn();
       previous = now;
       clearTimeout(timer);
     } else {
       clearTimeout(timer);
       timer = setTimeout(function () {
         fn();
       }, delay);
     }
   }
 }
```

### 获取函数参数名
```js
function getArgs(func) {
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
