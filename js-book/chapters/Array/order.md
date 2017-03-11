## 顺序

### 按大小排列数组
```js
function sortToLarge(arr){return arr.sort((x,y)=>{ return x-y;}); }
function sortToSmall(arr){return arr.sort((x,y)=>{ return y-x;}); }
```

### 取得数组的最大值/最小值
```js
function getMax(arr){return Math.max.(...arr);}
function getMin(arr){return Math.min.(...arr);}
```

### 打乱数组顺序
```js
function disorder(arr){
  return arr.sort(() => {
    return Math.random() - 0.5;
  });
}
```

### 从数组中随机取出几个元素
```js
function getRandom(arr, count){
 let result = arr.concat().sort(() => {
   return Math.random() - 0.5;
 });
 return result.slice(-count);
}
```
