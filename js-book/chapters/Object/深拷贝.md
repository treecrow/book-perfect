# 深拷贝

## JSON.parse方式

```javascript
function jsonCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

## deepCopy1(空数组不会转化为空对象)

```javascript
function deepCopy1(obj) {
    let result = obj.constructor === Array ? [] : {};
    Object.entries(obj).forEach(([key, value])=> {
        result[key] = typeof value !== 'object' ? value : deepCopy1(value);
    });
    return result;
}
```

## deepCopy2(使用ES6的...考虑到了数组和对象的区别)

```javascript
function deepCopy2(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    return {...obj};
  }
  if (Array.isArray(obj)) {
    return [...obj];
  }
  return obj;
}
```
