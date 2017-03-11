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
