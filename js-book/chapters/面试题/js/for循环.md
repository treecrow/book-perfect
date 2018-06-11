# for 循环

## 下面这段代码想要循环延时输出结果 0 1 2 3 4,请问输出结果是否正确,如果不正确,请说明为什么,并修改循环内的代码使其输出正确结果

```js
for (var i = 0; i < 5; ++i) {
  setTimeout(function() {
    console.log(i + " ");
  }, 100);
}

for (let i = 0; i < 5; ++i) {
  setTimeout(function() {
    console.log(i + " ");
  }, 100);
}

for (var i = 0; i < 5; ++i) {
  (function(i) {
    setTimeout(function() {
      console.log(i + " ");
    }, 100);
  })(i);
}
```

## 现有一个 Page 类,其原型对象上有许多以 post 开头的方法(如 postMsg);另有一拦截函数 chekc,只返回 ture 或 false.请设计一个函数,该函数应批量改造原 Page 的 postXXX 方法,在保留其原有功能的同时,为每个 postXXX 方法增加拦截验证功能,当 chekc 返回 true 时继续执行原 postXXX 方法,返回 false 时不再执行原 postXXX 方法

```js
function Page() {}

Page.prototype = {
  constructor: Page,

  postA: function(a) {
    console.log("a:" + a);
  },
  postB: function(b) {
    console.log("b:" + b);
  },
  postC: function(c) {
    console.log("c:" + c);
  },
  check: function() {
    return Math.random() > 0.5;
  }
};

function checkfy(obj) {
  for (var key in obj) {
    if (key.indexOf("post") === 0 && typeof obj[key] === "function") {
      (function(key) {
        var fn = obj[key];
        obj[key] = function() {
          if (obj.check()) {
            fn.apply(obj, arguments);
          }
        };
      })(key);
    }
  }
} // end checkfy()

checkfy(Page.prototype);

var obj = new Page();

obj.postA("checkfy");
obj.postB("checkfy");
obj.postC("checkfy");
```
