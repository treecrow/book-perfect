# Capability性能优化

## 加载外部样式
```js
function loadStyle(url){
    try{
        document.createStyleSheet(url)
    }catch (e){
        var cssLink=document.createElement('link');
        cssLink.rel='stylesheet';
        cssLink.type='text/css';
        cssLink.href=url;
        var head=document.getElementsByTagName('head')[0];
        head.appendChild(cssLink);
    }
}
```

## 内存泄漏
- [JavaScript 内存泄露的4种方式及如何避免](http://www.codeceo.com/article/4-types-javascript-memory-leak.html#0-tsina-1-38992-397232819ff9a47a7b7e80a40613cfe1)
- [ 性能调优之Javascript内存泄漏]( http://caibaojian.com/javascript-neicun.html)
- [JS内存泄漏排查方法-Chrome Profiles](http://caibaojian.com/chrome-profiles.html)

## 意外的全局变量
### 未定义的变量
```js
(function(){
    function foo(arg) {
        bar = "this is a hidden global variable";
    }
    //==>相当于
    function foo(arg) {
        window.bar = "this is an explicit global variable";
    }
})();
```

### 连续赋值
```js
(function(){
    (function(){
        var x = y = 1;
    })();
    console.log(y);//全局变量 1
    console.log(x);//局部变量 error
})();
```

### 由 this 创建全局变量
```js
(function(){
    function foo() {this.variable = "potential accidental global";}
    foo(); // Foo 调用自己，this 指向了全局对象（window,而不是 undefined
})();
```

## 图片延迟加载并淡入淡出显示效果
```css
img {  opacity: 1;  transition: opacity 10s;  }
img[data-src] {  opacity: 0;  }
```
```js
[].forEach.call(document.querySelectorAll('img[data-src]'),function(img){
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});
```
