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
