# [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

> String 类型相关知识点

## api 列表

| 分类     | api                                            | more                                                                                         |
| -------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 转化     | -                                              | -                                                                                            |
| ~        | otherType.toString()                           | 不能将 null 和 undefined 转换为字符串，但是可以转进制字符串                                  |
| ~        | numType.toString(2/8/16)                       | 将数字转换为 2/8/16 进制，默认十进制                                                         |
| ~        | buffer.toString([encoding], [start], [end])    | 转换成字符串后的字符编码，默认为 ‘utf8′(我还知道有'hex')                                     |
| ~        | String()                                       | 可以将 null 和 undefined 转换为字符串，但是没法转进制字符串                                  |
| 查找     | -                                              | -                                                                                            |
| ~        | str.indexOf()                                  | 返回某个指定的字符串值在字符串中首次出现的位置                                               |
| ~        | str.lastIndexOf()                              | 返回一个指定的字符串值最后出现的位置                                                         |
| ~        | str.charAt()                                   | 返回字符串给定位置的字符                                                                     |
| ~        | str.at()                                       | 返回字符串给定位置的字符,可以识别 Unicode 编号大于 0xFFFF 的字符，返回正确的字符             |
| 操作     | -                                              | -                                                                                            |
| ~        | str.substr(start [, length ])                  | 在字符串中抽取从 start 下标开始的指定数目的字                                                |
| ~        | str.substring(start [,stop])                   | 用于提取字符串中介于两个指定下标之间的字符                                                   |
| ~        | str.slice(start [,stop])                       | 用于提取字符串中介于两个指定下标之间的字符                                                   |
| ~        | str.slice(-num)                                | 提取字符串后面 num 个字符                                                                    |
| ~        | str.split()                                    | 用于把一个字符串分割成字符串数组                                                             |
| ~        | str.concat()                                   | 将两个或多个字符串，并返回一个新的单字符串                                                   |
| ~        | str.repeat(n)                                  | 返回一个新字符串，表示将原字符串重复 n 次                                                    |
| ~        | str.padStart(len,str)                          | 如果某个字符串不够指定长度，会在头部或尾部补全                                               |
| ~        | str.padEnd(len,str)                            | ~                                                                                            |
| ~        | String.raw()                                   | 用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串         |
| 大小写   | -                                              | -                                                                                            |
| ~        | str.toLowerCase()                              | 把字符串转换为小写                                                                           |
| ~        | str.toLocaleLowerCase()                        | -                                                                                            |
| ~        | str.toUpperCase()                              | 把字符串转换为大写                                                                           |
| ~        | str.toLocaleUpperCase()                        | -                                                                                            |
| 判断     | -                                              | -                                                                                            |
| ~        | str.includes()                                 | 返回布尔值，表示是否找到了参数字符串                                                         |
| ~        | str.startsWith()                               | 返回布尔值，表示参数字符串是否在源字符串的头部                                               |
| ~        | str.endsWith()                                 | 返回布尔值，表示参数字符串是否在源字符串的尾部                                               |
| ~        | localeCompare()                                | 用本地特定的顺序来比较两个字符串                                                             |
| 码点     | -                                              | -                                                                                            |
| ~        | str.charCodeAt()                               | 返回一个字符的码点                                                                           |
| ~        | String.fromCharCode()                          | 从码点返回对应字符                                                                           |
| ~        | str.codePointAt()                              | 能够正确处理 4 个字节储存的字符，返回一个字符的码点                                          |
| ~        | String.fromCodePoint()                         | 从码点返回对应字符,可以识别大于 0xFFFF 的字符                                                |
| ~        | unicode.normalize()                            | 用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化                              |
| 模式匹配 | -                                              | -                                                                                            |
| ~        | str.match(pattern(非全局模式))                 | 返回一个数组，包含所有匹配的内容，同时包含 index、input 属性（pattern 自动转换为正则表达式） |
| ~        | str.match(pattern(全局模式))                   | 返回一个数组，包含所有匹配的内容（pattern 自动转换为正则表达式）                             |
| ~        | str.match()                                    | 返回 [""]                                                                                    |
| ~        | str.replace(regexp/substr, newSubstr/function) | 用另一个字符串替换匹配的部分并返回，第二个参数可以是 \$ 或者函数                             |
| ~        | str.search(pattern)                            | 返回首次匹配成功的位置 (pattern 自动转换为正则表达式 && 不支持全局搜索）                     |
| ~        | str.split(separator[, limit])                  | 字符串从匹配的地方拆分为数组                                                                 |
| ~        | str.matchAll()                                 | matchAll 方法返回一个正则表达式在当前字符串的所有匹配                                        |

## 字符串的遍历

> 字符串的遍历就用 for...of，可以识别大于 0xFFFF 的码点

## 字符的 Unicode 表示法

```javascript
"z" === "z"; // true
"\172" === "z"; // true
"\x7A" === "z"; // true
"\u007A" === "z"; // true
"\u{7A}" === "z"; // true
```

## 模板字符串

```javascript
$("#result").append(
  "There are <b>" +
    basket.count +
    "</b> " +
    "items in your basket, " +
    "<em>" +
    basket.onSale +
    "</em> are on sale!"
);
// ==>
$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

## 标签模板

> 略
