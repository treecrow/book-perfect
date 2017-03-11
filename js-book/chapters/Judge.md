# judge判断


## 判断环境设备状态


### 浏览器系统类型
```js
var browser = {
    ua:navigator.userAgent.toLowerCase(),
    chrome:function(){return /chrome/.test(this.ua);},
    webkit:function(){return /webkit/.test(this.ua);},
    opera:function(){return /opera/.test(this.ua);},
    msie: function() {return /msie/.test(this.ua) && !this.opera;},
    ie6: function() {return this.msie() && /msie 6./.test(this.ua);},
    ie7: function() {return this.msie() && /msie 7.0/.test(this.ua);},
    ie9_: function() {return this.msie() && /msie [1-9]]/.test(this.ua);},
    safari: function() {return !this.chrome() && /safari/.test(this.ua);},
    safari3: function() {return !this.safari() && /version3/.test(this.ua);},
    safari4: function() {return !this.safari() && /version3/.test(this.ua);},
    //系统
    windows:function(){return /windows|win32/.test(this.ua);},
    mac:function(){return /macintosh|mac os x/.test(this.ua);},
    air:function(){return /adobeair/.test(this.ua);},
    linux:function(){return /linux/.test(this.ua);},
    wechat:function(){return this.ua.indexOf('micromessenger') > 0;},
    android:function(){return this.ua.indexOf('android') > 0;},
    ios:function(){return /(iphone|ipad|ipod|ios)/i.test(this.ua);},
    //其他
    gecko:function(){return /gecko/.test(this.ua) && this.webkit();},
    gecko3:function(){return /rv:1.9/.test(this.ua) && this.gecko();}
};
```

### 是否是浏览器环境
```js
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
```

### 是否为移动端
```js
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){}
```

### 判断手机横竖屏状态
```js
/* 判断手机横竖屏状态：移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。*/
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        alert('竖屏状态！');
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        alert('横屏状态！');
    }
    //var str=window.innerWidth > window.innerHeight ? "Horizontal" : "vertical";
}, false);
```

### 是否支持WebGL
```js
function IsWebGLEnabled() {
    if (!window.WebGLRenderingContext) {return false;}
    try {
        var canvas = document.createElement('canvas');
        if (!canvas.getContext('experimental-webgl') && !canvas.getContext('webgl')) { //experimental-webgl 实验阶段 标准未确定的时候
            this.GetWebGLErrorMessage();
            return false;
        }
    } catch (exception) {
        return false;
    }
    return true;
}
```

## 其它判断
***
### 是否为原生函数
```js
(function() {
    var toString = Object.prototype.toString;
    var fnToString = Function.prototype.toString;
    var reHostCtor = /^\[object .+?Constructor\]$/;
    var reNative = RegExp('^' +
        String(toString)
            .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
            .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );
    function isNative(value) {
        var type = typeof value;
        return type == 'function'
            ? reNative.test(fnToString.call(value))
            : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
    }
    module.exports = isNative;
}());
```

### 判断变量是否空值
```js
function isEmpty(val){
  switch (typeof val) {
    case 'undefined' :
      return true;
      break;
    case 'string'    :
      if (val.trim().length == 0) return true;
      break;
    case 'boolean'   :
      if (!val) return true;
      break;
    case 'number'    :
      if (0 === val) return true;
      break;
    case 'object'    :
      if (null === val) return true;
      if (undefined !== val.length && val.length == 0) return true;
      for (var k in val) {
        return false;
      }
      return true;
      break;
  }
  return false;
}
```
