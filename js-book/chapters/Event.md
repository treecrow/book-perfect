# event事件


## 跨浏览器的事件处理函数
*******************************
### EventUtil
```js
var EventUtil={
    //添加事件处理函数
    addHandler:function(element,type,handler){
        if(element.addEventListener){ //DOM2
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){ //IE
            element.attachEvent('on' + type, handler);
        }else{ // DOM0
            element['on' + type] =handler;
        }
    },
    //删除事件处理函数
    removeHandler:function(element,type,hander){
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    //获取事件对象
    getEvent:function(event){
        return event?event:window.event;
    },
    //获取目标元素
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    //取消默认事件
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    //停止冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
};
```
## 手势

### 判断滑动方向:
[移动应用滑动屏幕方向判断解决方案](http://www.cnblogs.com/tqlin/archive/2013/03/04/2942789.html)
```js
//返回角度
function getAngle(dx, dy) {
    var angel=Math.atan2(dy, dx) * 180 / Math.PI;
    return angel>0?angel:360+angel;
}
//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;

    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {return result;}//如果滑动距离太短
    //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    var angle = getAngle(dx, dy);
    if (angle >= 45 && angle < 135) {result = 1;}//向上
    else if (angle >= 225 && angle < 315) {result = 2;}//向下
    else if ((angle >= 135 && angle < 225)) {result = 3;}//向左
    else if ((angle >= 0 && angle < 45) || (angle >= 315 && angle <= 360)) {result = 4;}//向左
    return result;
}
//滑动处理
var startX, startY;
document.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;
}, false);
document.addEventListener('touchend', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
            alert("没滑动");
            break;
        case 1:
            alert("向上");
            break;
        case 2:
            alert("向下");
            break;
        case 3:
            alert("向左");
            break;
        case 4:
            alert("向右");
            break;
        default:
    }
}, false);
```

## 鼠标
### 鼠标位置
```js
//相对于window，为鼠标相对于window的偏移。在iphone上，这对值返回的位置就等同于下面要提到的pageX/Y
console.log("clientX:"+event.clientX);
console.log("clientY:"+event.clientY);
//表示鼠标相对于当前被点击元素padding box的左上偏移值
console.log("offsetX:"+event.offsetX);
console.log("offsetY:"+event.offsetY); 
//为鼠标相对于document的坐标
console.log("pageX:"+event.pageX);
console.log("pageY:"+event.pageY);
//鼠标相对于显示器屏幕的偏移坐标
console.log("screenX:"+event.screenX);
console.log("screenY:"+event.screenY);
//相当于clientX/clientY
console.log("x:"+event.x);
console.log("y:"+event.y);
```

### 鼠标点击的信息
```js
//获取鼠标点击的信息（mousedown和mouseup事件）
var getButton=function(event){
    if(document.implementation.hasFeature("MouseEvents","2.0")){
        return event.button;
    }else{
        switch (event.button){
            case 0:
            case 1:
            case 3:
            case 5:
            case 7:
                return 0;
            case 2:
            case 6:
                return 2;
            case 4:
                return 1;
        }
    }
};
```

### 判断鼠标滚轮滚动方向
```js
function scrollFunc (e) {
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {alert("滑轮向上滚动");}
        if (e.wheelDelta < 0) {alert("滑轮向下滚动");}
    }
    //Firefox
    else if (e.detail) {
        if (e.detail> 0) {alert("滑轮向上滚动");}
        if (e.detail< 0) {alert("滑轮向下滚动");}
    }
};
```

### 在文本框获得焦点时选择其所有文本
```js
textbox.addEventListener('focus',function(event){
    var target=event.target;
    target.select();
});
```

## 键盘
*******************************
### 取得字符编码（keypress事件）
```js
var etCharCode=function(event){
    if(typeof event.charCode == "number"){
        return event.charCode;
    }else{
        return event.keyCode;
    }
};
```
### ENTER 键可以让光标移到下一个输入框
```js
//enter=>tab
if(event.keyCode===13){event.keyCode=9;}
```

## 剪切板(选择、复制、粘贴)
### 禁止粘贴/复制
```js
//禁止复制事件
someTarget.oncopy = function(){return false;};
//禁止粘贴
someTarget.onpaste = function(){return false;};
```

### 取消选择
```js
(window.getSelection && window.getSelection().removeAllRanges()) || (document.selection && document.selection.empty && document.selection.empty());
```

### 取得选择的文本
```js
function getSelectedText(textbox){ 
  //IE9+
  if(typeof textbox.selectionStart =="number"){
    return textbox.values.substring(textbox.selectionStart,textbox.selectionEnd);
  }else{ //IE8-
    return document.selection.createRange().text;
  }
}
```

### 选择部分文本
```js
function selectText(textbox,startIndex,stopIndex){
    if(textbox.setSelectionRange){
        textbox.setSelectionRange(startIndex,stopIndex);
    }else if(textbox.createTextRange){
        var range=textbox.createTextRange(); //创建一个范围
        range.collapse(true); //将范围折叠到文本框的开始位置
        range.moveStart("character",startIndex);
        range.moveEnd("character",stopIndex-startIndex);
        range.select();
    }
    textbox.focus();//要看到选中效果，需要文本框获得焦点
}
```

### [获取和设置剪切板的文本](http://www.jstips.co/en/copy-to-clipboard/)
```js
var EventUtil={
    //获取剪切板的文本
    getClipboardText:function(event){
        var clipboardData=(event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    //设置剪切板的文本
    setClipboardText:function(event,value){
        if(event.clipboardData){
            return event.clipboardData.setData("text/plain",value);
        }else if(window.clipboardData){
            return window.clipboardData.setData("text",value);
        }
    }
};
```

### 设置剪切板的文本
```js
document.querySelector('#input').select();
document.execCommand('copy');
```

### [复制内容加版权声明代码]( http://caibaojian.com/js-copy-with-copyright.html)
```js
$("body").on('copy', function (e) {
  if (typeof window.getSelection == "undefined") return;
  var body = document.getElementsByTagName('body')[0];
  var selection = window.getSelection();
  if (("" + selection).length < 30) return;
  var newdiv = document.createElement('div');
  newdiv.style.position = 'absolute';
  newdiv.style.left = '-99999px';
  body.appendChild(newdiv);
  newdiv.appendChild(selection.getRangeAt(0).cloneContents());
  if (selection.getRangeAt(0).commonAncestorContainer.nodeName == "PRE") {
    newdiv.innerHTML = "<pre>" + newdiv.innerHTML + "</pre>";
  }
  newdiv.innerHTML += "<br /><br />原文: <a href='"
    + document.location.href + "'>"
    + document.location.href + "</a> &copy; caibaojian.com";
  selection.selectAllChildren(newdiv);
  window.setTimeout(function () { body.removeChild(newdiv); }, 200);
});
```
