# error-inject

> 这都可以成为一个模块？？？

## 使用示例

```javascript
var inject = require('error-inject');

var rs = fs.createReadStream('index.js');
inject(rs, error);

function error(err) {
  console.error(err);
}
```
