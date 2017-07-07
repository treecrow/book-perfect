# fresh

## 方法列表

方法                            | more
----------------------------- | ------------------------------------------------------------------
fresh(reqHeaders, resHeaders) | Check freshness of the response using request and response headers

## 示例

```javascript
var reqHeaders = { 'if-none-match': '"foo"' }
var resHeaders = { 'etag': '"bar"' }
fresh(reqHeaders, resHeaders)
```
