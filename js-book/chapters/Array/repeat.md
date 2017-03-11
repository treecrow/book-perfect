## 重复项

### 去除数组重复项
```js
function unique(arr){
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) == index;
  });
}
function unique1(arr){
  return Array.from(new Set(arr));
}
function unique2(arr){
  return [...new Set(arr)];
}
```

### 判断数组中是否有重复项
```js
function judgeRepeat(arr){
 return arr.every((item, index, arr) => {
   return arr.indexOf(item) == arr.lastIndexOf(item);
 });
}
```
