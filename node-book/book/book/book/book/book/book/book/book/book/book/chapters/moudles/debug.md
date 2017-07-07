# debug

## 使用示例

- worker.js

```javascript
var debug = require('debug')('worker');
setInterval(function(){
  debug('doing some work');
}, 1000);
```

- app.js

```javascript
var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';
debug('booting %s', name);
http.createServer(function(req, res){

  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debug('listening');
});
require('./worker');
```

- 命令行运行

```
DEBUG=http,worker node app.js
```
