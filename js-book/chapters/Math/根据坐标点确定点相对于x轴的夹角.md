## 根据坐标点确定点相对于x轴的夹角
```js
function getAngle(dx, dy) {
  var angel=Math.atan2(dy, dx) * 180 / Math.PI;
  return angel>0?angel:360+angel;
}
```
