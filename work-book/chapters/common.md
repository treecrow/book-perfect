# 通用代码

## url

- 获取 url 参数信息

```javascript
function getSearchObj(param) {
  var searchArr = window.location.search.substring(1).split('&'),
    obj = {};
  for (var i = 0, len = searchArr.length; i < len; i++) {
    var arr = searchArr[i].split('=');
    obj[arr[0]] = arr[1];
  }
  return param ? obj[param] : obj;
}
```

## 验证

- 验证是否是手机号

```javascript
function isPhoneNum(num) {
  var reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return reg.test(num);
}
```

- 验证是否是电话

```javascript
function isTelNum(num) {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(num);
}
```

- 姓名验证

```javascript
function isName(name) {
  var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  return reg.test(name);
}
```

- 密码验证(6-20位数字字母混合密码)

```javascript
function isPwd(pwd) {
  var reg = /^[a-zA-Z0-9!@#$%^&*()-+=~:()><,.'?\"]{6,20}$/;
  return reg.test(pwd);
}
```