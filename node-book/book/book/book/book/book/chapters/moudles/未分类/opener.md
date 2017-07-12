# opener

## 命令行方式

```
npm install opener -g

opener http://google.com
opener ./my-file.txt
opener firefox
opener npm run lint
```

## 程序方式（返回 child process）

```javascript
var opener = require("opener");

opener("http://google.com");
opener("./my-file.txt");
opener("firefox");
opener("npm run lint");
```
