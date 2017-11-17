# 未分类的代码

## 代码列表

| 代码                                  | more |
|-------------------------------------|------|
| 浏览器系统类型                             | -    |
| 是否支持WebGL                           | -    |
| 判断手机横竖屏状态                           | -    |
| 是否为移动端                              | -    |
| 是否是浏览器环境                            | -    |
| 是否为原生函数                             | -    |
| Cookie 操作                           | -    |
| 异步加载js                              | -    |
| 获取域名主机                              | -    |
| 下载在线资源                              | -    |
| 判断是否时url                            | -    |
| 链接的绝对地址                             | -    |
| 解析URL中的查询字符串                        | -    |
| 将location对象的各个查询字符串参数（search部分）整合起来 | -    |
| 获取查询字符串中对应键的值                       | -    |

## 浏览器系统类型

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

## 是否支持WebGL

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

## 判断手机横竖屏状态

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

## 是否为移动端

```js
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){}
```

## 是否是浏览器环境

```js
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
```

## 是否为原生函数

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

## Cookie

```javascript
var Cookie={
    //获取cookie
    get:function(name){
        var cookieName=encodeURIComponent(name)+"=";//传入的参数编码后加上“=”
        var cookieStart=document.cookie.indexOf(cookieName);//找到传入参数在cookie中对应的位置
        var cookieValue=null;
        if(cookieStart>-1){//如果cookie中存在name
            var cookieEnd=document.cookie.indexOf(";",cookieStart);//得到name的值在cookie中结束的位置
            if(cookieEnd==-1){cookieEnd=document.cookie.length;}//如果不存在";"(cookie中的最后一个参数)，则name在cookie中结束的位置就是整个cookie结束的位置
            cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));//substring截取的是name在cookie中对应值的区域，返回name的cookie值
        }
        return cookieValue;
    },
    //添加cookie
    set:function(name,value,expires,path,domain,secure){
        var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(expires instanceof Date){cookieText+="; expires="+expires.toGMTString();}
        if(path){cookieText+="; path"+path;}
        if(domain){cookieText+="; domain="+domain;}
        if(secure){cookieText+="; secure";}
        document.cookie=cookieText;
    },
    //删除cookie
    del:function(name){
        this.set(name,"",new Date(0));
    }
};
```

## 异步加载js

```javascript
function loadScript(url, callback) {
  var script = document.createElement_x("script")
  script.type = "text/javascript";
  if (script.readyState) { //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others: Firefox, Safari, Chrome, and Opera 
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}
```

## 获取域名主机

```javascript
function getHost(url){
  if (typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  let host = "null",
    regex = /^\w+\:\/\/([^\/]*).*/,
    match = url.match(regex);
  if (typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
}
```

## 下载在线资源

```javascript
let downLoad=document.getElementById('link');
  downLoad.addEventListener('click',function(){
    let objURL = URL.createObjectURL( obj ),
      link = document.createElement( 'a' );
    link.href = objURL;
    link.download = 'output.stl';
    link.target = '_blank';
    link.click();
    link=null;
  });
```

## 判断是否时url

```javascript
function isUrl(strUrl){
    let regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    return regular.test(strUrl);
}
```

## 链接的绝对地址

```javascript
function getAbsoluteUrl(url){
    var a=document.createElement('a');
    a.href=url;
    var result= a.href;
    a=null;
    return result;
}
```

## 解析URL中的查询字符串

```javascript
function getQuerys(url){
  if (typeof url == "undefined" || null == url) {
    url = window.location.href.split("?");
  }
  let querystr = url.split("?")[1];
  if (!querystr) return null;
  let queryArr = querystr.split("&"),
    result = [];
  for (let queryItem of queryArr) {
    let queryPairs = queryItem.split("=");
    result.push([queryPairs[0], queryPairs[1]]);
  }
  return result;
}
```

## 将location对象的各个查询字符串参数（search部分）整合起来

```javascript
function getQueryStringArgs(){
    var qs=location.search.length>0?location.search.substring(1):'';//获取查询字符串并去掉开头的问号
    var items=qs.length>0?qs.split('&'):[];
    var name=value=null,args={};
    for(var i=0;i<items.length;i++){
        var item=items[i].split("=");
        if(item[0]){args[decodeURIComponent(item[0])]=decodeURIComponent(item[1]);}
    }
    return args;
}
```

## 获取查询字符串中对应键的值

```javascript
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```
