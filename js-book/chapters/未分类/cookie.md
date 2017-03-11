### Cookie
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
