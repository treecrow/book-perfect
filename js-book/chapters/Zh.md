# 未分类的代码


## 下载在线资源
```js
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

## 链接的绝对地址
```js
function getAbsoluteUrl(url){
    var a=document.createElement('a');
    a.href=url;
    var result= a.href;
    a=null;
    return result;
}
```

## 查询字符串
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

## Cookie
```js
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





