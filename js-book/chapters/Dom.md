# Dom操作


## 元素位置
### 相对于父级relative元素的偏移量（IE8+）
```js
function getPos (el) {
  return {
    left: el.offsetLeft, 
    top: el.offsetTop
  };
}
```

### 元素相对于整个文档左上角的位置（IE8+）
```js
function getPos (el) {
  let rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}
```

### 元素滚动条位置
```js
function getPos (el) {
  let rect = el.getBoundingClientRect();
  return {
    left: el.scrollLeft,
    top: el.scrollTop
  };
}
```

### 元素是否在可见视窗内(viewport)
```js
function isInViewport ( el ) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
```

### 浏览器窗体在显示屏中的位置
```js
function getBowerSize(){
  return {
    left: (typeof window.screenLeft=="number")?window.screenLeft:window.screenX,
    top: (typeof window.screenTop=="number")?window.screenTop:window.screenY
  };
}
```

## 元素的尺寸
### 元素的尺寸（包括边框，不包括外边距，IE8+）
```js
function getSize () {
  return {
    width:  el.offsetWidth,
    height: el.offsetHeight
  };
}
```

### 元素的外尺寸（包括外边距）
```js
//IE8+
function outerSize(el) {
  let width = el.pffsetWidth, 
    height = el.offsetHeight,
    style = el.currentStyle || getComputedStyle(el);
    
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  
  return {
    width,
    height
  };
}
```

### 元素的内尺寸（不包括边框）
```js
function innerSize(el) {
  return {
    width: el.clientWidth,
    height: el.clientHeight
  };
}
```

### 元素内容的真实尺寸(元素的内容区域加上内边距加上溢出尺寸)
```js
function contentSize(el) {
  return {
    width: el.scrollWidth,
    height: el.scrollHeight
  };
}
```

### 元素的左上边框厚度(border-width)
```js
function getBorderWidth (el){
  return {
    left: el.clientLeft,
    top: el.clientTop
  };
}
```

### 浏览器窗体外部尺寸，示整个浏览器窗体的大小包括任务栏
```js
function getBowerOutSize(){
  return {
    width: window.outerWidth,
    height: window.outerHeight
  };
}
```

### 浏览器窗体内部尺寸,获取window窗体的内部宽高，不包括用户界面元素（不含浏览器的边框，但包含滚动条）
```js
function getBowerInSize(){
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
```

### 显示屏尺寸
```js
function getScreenSize(){
  return {
    //显示器屏幕的宽高
    width: screen.width,
    height: screen.height,
    //显示器可用宽高
    availWidth: screen.availWidth,
    availHeight: screen.availHeight
  };
}
```

## 元素的属性、样式
### 兼容的获取元素最终的样式
```js
function getStyle(ele) {
  let style = null;
  if(window.getComputedStyle) {
    style = window.getComputedStyle(ele, null);
  }else{
    style = ele.currentStyle;
  }
  return style;
}
```

### 设置元素样式
> 一次性设置样式，减少浏览器开销（并不会完全覆盖元素原有的样式，只是改变了有变化的样式）

```js
myDiv.style.cssText="width:200px;height:70px;display:bolck";
```

### 设置元素属性
```js
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "q");
input.setAttribute("class","bordercss");
input.setAttribute("data-fuck","yes");
```

## 节点的操作
### 清除childNodes中的空格文本节点(感觉有点问题)
```js
function delSpace(ele){
    var eleChild=ele.childNodes;//得到参数元素的所有子元素
    for(var i=0;i<eleChild.length;i++){
        if(eleChild.nodeName == "#text" && !/\S/.test(eleChild.nodeValue)){
            ele.removeChild(eleChild);
        }
    }
}
```

### 获取指定类型的节点
```js
function getTypeElement(es, type){
    var esLen = es.length,
        i = 0,
        eArr = [],
        esI = null;
    for(; i < esLen ; i++){
        esI = es[i];
        if(esI.nodeName.replace("#", "").toLocaleLowerCase() == type){
            eArr.push(esI);
        }
    }
    return eArr;
}
```

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
