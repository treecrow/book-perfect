# url方法大全

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

### 下载在线资源

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

### 链接的绝对地址

```javascript
function getAbsoluteUrl(url){
    var a=document.createElement('a');
    a.href=url;
    var result= a.href;
    a=null;
    return result;
}
```

### 解析URL中的查询字符串

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

### 将location对象的各个查询字符串参数（search部分）整合起来

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

### 获取查询字符串中对应键的值

```javascript
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```
