## 解析html字符串
```js
//IE8+
var parseHTML = function(str) {
    var el = document.createElement('div');
    el.innerHTML = str;
    return el.children;
};
parseHTML(htmlString);
//IE9+
var parseHTML = function(str) {
    var tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children;
};
parseHTML(htmlString);
```
