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
