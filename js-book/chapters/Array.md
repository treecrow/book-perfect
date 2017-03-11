# Array

## API
### 位置方法
- arr.indexOf()
- arr.lastIndexOf()

### 排序
- arr.reverse()
- arr.sort()

### 队列方法
- arr.unshift()
- arr.push()
- arr.shift()
- arr.pop()

### 操作方法
- arr.concat()
- arr.slice(起始位，结束位)
> 不会改变原数组
- arr.splice(起始位，要删除的个数，要插入的项)
> 会改变原数组
- arr.fill()
- arr.copeWithin()

### 迭代方法
- arr.every()
- arr.some()
- arr.filter()
- arr.map()
- arr.forEach()
- arr.find()
- arr.findIndex()

### 归并方法
- arr.reduce()
- arr.reduceRight()

### 遍历
- arr.keys()
- arr.values()
- arr.entries()

### 判断
- arr.includes()
- Array.isArray()

### 转换
- Array.from()
- Array.of()

## 交集、补集、并集
### 两个数组的交集
```js
function intersection(arr1, arr2){
 return arr1.filter(item => arr2.includes(item));
}
```

### 两个数组的补集
```js
function difference(arr1, arr2){
  return arr1.concat(arr2).filter((item)=> {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}
```

### 两个数组的并集
```js
function union(arr1, arr2){
  return [... new Set([...arr1, ...arr2])];
}
```

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



## 其它
### 去除数组中的错误项（清楚数组中为null、undefind、0、空字符的元素）
```js
function removeError(arr){
  return arr.filter(item => !!item);
}
```

### 将多维数组转变为一维数组
```js
function flatten(arr){return [].concat(...arr);}
```

### 反转矩阵数组
```js
function turnMatrix(arr) {
  var ret=[];
  var i,j;
  if(arr.length==0){return [];}
  if(arr[0].length==0){return [[]];}
  for(var i=0;i<arr[0].length;i++){ret.push([]);}
  for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){ret[j].push(arr[i][j]);}
  }
  return ret;
}
```
