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
