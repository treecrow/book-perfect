# String

## API
### 转化
- otherType.toString()
- String()
- str.toLowerCase()
- str.toLocaleLowerCase()
- str.toUpperCase()
- str.toLocaleUpperCase()
- fromCharCode()

### 操作方法
- str.concat()
- str.slice()
> 不改变原来字符串
- str.substr()
> 不改变原来字符串
- str.substring()
> 不改变原来字符串

### 查找
- str.indexOf()
- str.lastIndexOf()
- str.charAt()
- str.charCodeAt()

### 模式匹配方法
- str.match()
- str.search()
- str.replace()
- str.split()

### 比较
- localeCompare()

## 方法
### 过滤非中文
```js
function onlyChinese(str) {
   return str.replace(/[^\u4e00-\u9fa5]/g, "");
 }
```

### 获得文件扩展名
```js
function etFileExtension(filename) {
   return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
 }
```

### 去除字符串开始与结束的引号
```js
function stripQuotes(str) {
   let a = str.charCodeAt(0),
     b = str.charCodeAt(str.length - 1);
   return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
 }
```

### 检测字符串中特定的字符的个数
```js
function getCharNum(str) {
   return str.split(/[aeiou]/ig).length - 1;
 }
```

### 是否是手机号
```js
function isPhoneNum(num) {
   let reg = /^1[3|4|5|7|8][0-9]{9}$/;
   return reg.test(num);
 }
```

### 验证是不是单个字符
```js
function isSingleChar(value) {
   return Object.prototype.toString.call(value) === '[object String]' && value.length === 1;
 }
```

### 判断字符首位是否是空字符
```js
function isSpace(value) {
   let characterCode = value.charCodeAt(0);
   return (characterCode > 8 && characterCode < 14) || characterCode === 32;
 }
```
