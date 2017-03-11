# Correspond通信

##  XMLHttpRequest
### GET
```js
var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api?username=admin&password=root', true);
    xhr.send(null);
```

### POST
```js
var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api', true);
    // 默认Content-Type=text/plain;charset=UTF-8
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({username: 'admin', password: 'root'}));

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.log('执行出错');
        }
    };
```

### FormData
```js
(function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                alert(xhr.responseText);
            }
            else{
                alert(xhr.status);
            }
        }
    };
    xhr.open("post","example.php",true);
    xhr.send(new FormData(document.getElementById("user-info")));
})();
```

## fetch
```js
var options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'admin', password: 'root' }),
    credentials: 'include'
  };

fetch('/api', options).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Oops, error: ', error));
```

## WebSocket
```js
var socket=new WebSocket("ws://www.example.com/server.php");
socket.send("Hello World!");
socket.onmessage=function(event){
    var data=event.data;
    //处理数据
};
socket.onclose=function(event){
    alert("i'm die!");
};
```

- [前端跨域整理](https://zhuanlan.zhihu.com/p/23393862)
