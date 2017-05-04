# Data日期

## 获取时间日期对象

```javascript
let dt = new Date();
```

## 常用方法:

```javascript
let dt = new Date();
let result = {
  //日期格式化
  toDateString: dt.toDateString(),
  toLocaleDateString: dt.toLocaleDateString(),
  toTimeString: dt.toTimeString(),
  toLocaleTimeString: dt.toLocaleTimeString(),
  toString: dt.toString(),
  toUTCString: dt.toUTCString(),
  toLocaleString: dt.toLocaleString(),

  //get方法
  getFullYear: dt.getFullYear(),
  getMonth: dt.getMonth(),
  getDate: dt.getDate(),
  getHours: dt.getHours(),
  getMinutes: dt.getMinutes(),
  getSeconds: dt.getSeconds(),
  getMilliseconds: dt.getMilliseconds(),
  getDay: dt.getDay(),

  getUTCFullYear: dt.getUTCFullYear(),
  getUTCMonth: dt.getUTCMonth(),
  getUTCDate: dt.getUTCDate(),
  getUTCHours: dt.getUTCHours(),
  getUTCMinutes: dt.getUTCMinutes(),
  getUTCSeconds: dt.getUTCSeconds(),
  getUTCMilliseconds: dt.getUTCMilliseconds(),
  getUTCDay: dt.getUTCDay(),

  //其它
  getTime: dt.getTime(),
  valueOf: dt.valueOf(),
  getTimezoneOffset: dt.getTimezoneOffset(),
  'Date.now': Date.now(),
  'Date.parse': Date.parse('May 25, 2004'),
  'Date.UTC': Date.UTC(2005, 4, 5, 17, 55, 55),
};
console.log(JSON.stringify(result, null, 2));
```

> 获取的结果:

```javascript
{
  "toDateString": "Sun Mar 12 2017",
  "toLocaleDateString": "2017/3/12",
  "toTimeString": "20:13:12 GMT+0800 (CST)",
  "toLocaleTimeString": "下午8:13:12",
  "toString": "Sun Mar 12 2017 20:13:12 GMT+0800 (CST)",
  "toUTCString": "Sun, 12 Mar 2017 12:13:12 GMT",
  "toLocaleString": "2017/3/12 下午8:13:12",
  "getFullYear": 2017,
  "getMonth": 2,
  "getDate": 12,
  "getHours": 20,
  "getMinutes": 13,
  "getSeconds": 12,
  "getMilliseconds": 333,
  "getDay": 0,
  "getUTCFullYear": 2017,
  "getUTCMonth": 2,
  "getUTCDate": 12,
  "getUTCHours": 12,
  "getUTCMinutes": 13,
  "getUTCSeconds": 12,
  "getUTCMilliseconds": 333,
  "getUTCDay": 0,
  "getTime": 1489320792333,
  "valueOf": 1489320792333,
  "getTimezoneOffset": -480,
  "Date.now": 1489320792338,
  "Date.parse": 1085414400000,
  "Date.UTC": 1115315755000
}
```

## set方法:

```javascript
let dt = new Date();
dt.setFullYear(2014);
dt.setMonth(11);
dt.setDate(25);
dt.setHours(15);
dt.setMinutes(30);
dt.setSeconds(40);
dt.setMilliseconds(333);
console.log(dt); //Thu Dec 25 2014 15:30:40 GMT+0800 (CST)
```
