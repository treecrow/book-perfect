# url相关操作

## 获取域名主机
```js
function getHost(url){
  if (typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  let host = "null",
    regex = /^\w+\:\/\/([^\/]*).*/,
    match = url.match(regex);
  if (typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
}
```

## 获取域名主机
```js
function isUrl(strUrl){
    let regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    return regular.test(strUrl);
}
```

## 解析URL中的查询字符串
```js
function isUrl(strUrl){
    let regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    return regular.test(strUrl);
}
```

## 解析URL中的查询字符串
```js
function getQuerys(url){
  if (typeof url == "undefined" || null == url) {
    url = window.location.href.split("?");
  }
  let querystr = url.split("?")[1];
  if (!querystr) return null;
  let queryArr = querystr.split("&"),
    result = [];
  for (let queryItem of queryArr) {
    let queryPairs = queryItem.split("=");
    result.push([queryPairs[0], queryPairs[1]]);
  }
  return result;
}
```
