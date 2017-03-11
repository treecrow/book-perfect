### 解析URL中的查询字符串
```js
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
```js
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
```js
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```
