# Canvas

```javascript
// 获取上下文对象(CanvasRenderingContext2D对象)
var ctx = canvasEle.getContext("2d");
```

## api列表

| calss | api                | more                                                  |
|-------|--------------------|-------------------------------------------------------|
| 路径    | -                  | -                                                     |
| ~     | ctx.beginPath()    | 开始路径                                                  |
| ~     | ctx.moveTo()       | 确定新路径的起点                                              |
| ~     | ctx.lineTo()       | 确定线段的终点（起点为当前点）                                       |
| ~     | ctx.arc()          | 在当前子路径中添加一条弧。它首先将当前点和弧形的起点用一条直线连接，然后用圆的一部分来连接弧形的起点和终点 |
| ~     | ctx.arcTo()        | -                                                     |
| ~     | ctx.closePath()    | 将路径的起点和终点真正的连接起来                                      |
| 画图    | -                  | -                                                     |
| ~     | ctx.fillRect()     | 填充一个矩形                                                |
| ~     | ctx.fill()         | 填充路径闭合的区域（没有闭合就假设路径的起点和终点是连接起来的）                      |
| ~     | ctx.stroke()       | 画出路径                                                  |
| 图形状态  | -                  | -                                                     |
| ~     | ctx.save()         | 将当前图形状态压入用于已保存状态的栈上                                   |
| ~     | ctx.restore()      | 从栈中弹出并恢复最近一次保存的状态                                     |
| 坐标轴   | -                  | -                                                     |
| ~     | ctx.setTransform() | 对默认坐标系进行变换                                            |
| ~     | ctx.translate()    | 简单的将坐标原点进行上下左右移动                                      |
| ~     | ctx.rotate()       | 根据指定角度将坐标轴进行顺时针旋转                                     |
| ~     | ctx.scale()        | 对X轴或者Y轴上的距离进行延长和缩短                                    |

## 图形属性

| attr                         | more              |
|------------------------------|-------------------|
| ctx.fillStyle                | 填充时候的颜色，渐变或图案等样式  |
| ctx.font                     | 绘制文本时候的CSS字体      |
| ctx.globalAlpha              | 绘制像素时候要添加的透明度     |
| ctx.globalCompositeOperation | 如何合并新的像素点和下面的像素点  |
| ctx.lineCap                  | 如何渲染线段的末端         |
| ctx.lineJoin                 | 如何渲染顶端            |
| ctx.lineWidth                | 外框线的宽度            |
| ctx.miterLimit               | 紧急斜接顶点的最大长度       |
| ctx.textAlign                | 文本水平对齐方式          |
| ctx.textBaseline             | 文本垂直对齐方式          |
| ctx.shadowBlur               | 阴影的清晰或模糊程度        |
| ctx.shadowColor              | 下拉阴影的颜色           |
| ctx.shadowOffsetX            | 阴影的水平偏移量          |
| ctx.shadowOffsetY            | 阴影的垂直偏移量          |
| ctx.strokeStyle              | 勾勒线段时的颜色、渐变或图案等样式 |

## canvasEle

### 属性列表

| attr   | more                                    |
|--------|-----------------------------------------|
| width  | 对应画布对象的宽度以及高度属性决定了画布的尺寸(重置画布的尺寸会清空整个画布) |
| height | ~                                       |
