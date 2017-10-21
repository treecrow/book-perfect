# Math方法大全（大杂烩）

## 获得某个区间的一个随机数

```javascript
function getRandom(istart, iend){
  var iChoice = istart - iend +1;
  return Math.floor(Math.random() * iChoice + istart;
}
```

## 生成指定位数数字验证码

```javascript
function genIndentCode(len) {
  let result = '';
  while (len > 0) {
    len--;
    result += Math.floor(Math.random() * 10);
  }
  return result;
}
```

## 根据坐标点确定点相对于x轴的夹角

```javascript
function getAngle(dx, dy) {
  var angel=Math.atan2(dy, dx) * 180 / Math.PI;
  return angel>0?angel:360+angel;
}
```

## 简单的求阶乘的函数

```javascript
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
```

## 简化分数

```javascript
function reduceFraction(a,x,y){
    if(x%y==0){a+=x/y; return [a,0,0];}
    while(x>y){x-=y;a++;}
    if(x>1){
        for(var i=2;i<x;i++){while(x%i==0 && y%i==0){x/=i;y/=i;}}
    }
    return [a,x,y];
}
```
