# queryStrigs查询字符串

```js
const querystring = require('querystring');
```

- querystring.stringify(obj[, sep[, eq[, options]]])---通过遍历对象的自有属性，从一个给定的 obj 产生一个 URL 查询字符串
- querystring.parse(str[, sep[, eq[, options]]])---把一个 URL 查询字符串（str）解析成一个键值对的集合
- querystring.escape(str)---给定的 str 执行 URL 百分号编码
- querystring.unescape(str)---对给定的 str 上的 URL 百分号编码的字符执行解码
