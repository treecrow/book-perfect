# Canvas

```javascript
// 获取上下文对象(CanvasRenderingContext2D对象)
var ctx = canvasEle.getContext("2d");
```

## api列表

| calss     | api                                 | more                                                                 |
|-----------|-------------------------------------|----------------------------------------------------------------------|
| 路径        | -                                   | -                                                                    |
| ~         | ctx.beginPath()                     | 开始路径                                                                 |
| ~         | ctx.moveTo()                        | 确定新路径的起点                                                             |
| ~         | ctx.lineTo()                        | 确定线段的终点（起点为当前点）                                                      |
| ~         | ctx.arc(x,y,radius,a,b,anclockwise) | 在当前子路径中添加一条弧。它首先将当前点和弧形的起点用一条直线连接，然后用圆的一部分来连接弧形的起点和终点                |
| ~         | ctx.arcTo(x1,y1,x2,y2,r)            | 在画布上创建介于两个切线之间的弧/曲线                                                  |
| ~         | ctx.bezierCurveTo()                 | 在当前子路径中添加一个新的点，并利用三次贝塞尔曲线将它和当前点项链                                    |
| ~         | ctx.quadraticCurveTo()              | 与 bezierCurveTo() 方法类似，不过它使用的是二次贝塞尔曲线而不是三次，并且只有一个控制点                 |
| ~         | ctx.rect()                          | 勾勒一个矩形路径                                                             |
| ~         | ctx.closePath()                     | 将路径的起点和终点真正的连接起来                                                     |
| 画图        | -                                   | -                                                                    |
| ~         | ctx.fillRect()                      | 填充一个矩形                                                               |
| ~         | ctx.clearRect()                     | 与fillRect()方法类似，但它忽略当前填充样式，采用透明的黑色像素（空白画布的默认颜色）来填充矩形                 |
| ~         | ctx.strokeRect()                    | 勾勒一个矩形                                                               |
| ~         | ctx.strokeText()                    | 在每个字形外边绘制轮廓                                                          |
| ~         | ctx.fillText()                      | 绘制实心文本                                                               |
| ~         | ctx.fill()                          | 填充路径闭合的区域（没有闭合就假设路径的起点和终点是连接起来的）                                     |
| ~         | ctx.stroke()                        | 画出路径                                                                 |
| 图形状态      | -                                   | -                                                                    |
| ~         | ctx.save()                          | 将当前图形状态压入用于已保存状态的栈上                                                  |
| ~         | ctx.restore()                       | 从栈中弹出并恢复最近一次保存的状态                                                    |
| 坐标轴       | -                                   | -                                                                    |
| ~         | ctx.setTransform()                  | 对默认坐标系进行变换                                                           |
| ~         | ctx.translate()                     | 简单的将坐标原点进行上下左右移动                                                     |
| ~         | ctx.rotate()                        | 根据指定角度将坐标轴进行顺时针旋转                                                    |
| ~         | ctx.scale()                         | 对X轴或者Y轴上的距离进行延长和缩短                                                   |
| fillStyle | -                                   | -                                                                    |
| ~         | ctx.createPattern()                 | 创建CanvasPattern对象，用于设置fillStyle属性。接受两个参数，第一个参数是一个媒体对象，第二个参数指定图片重复的模式 |
| ~         | ctx.createLinearGradient()          | 创建CanvasGradient对象，用于设置fillStyle属性。                                  |
| ~         | ctx.createRadialGradient()          | 创建CanvasGradient对象，用于设置fillStyle属性。                                  |
| ~         | bgfade.addColorStop()               | CanvasGradient对象接口，定义渐变色                                             |
| 其它        | -                                   | -                                                                    |
| ~         | ctx.clip()                          | 定义一个裁剪区域                                                             |
| ~         | ctx.drawImage()                     | 将源图片的像素内容复制到画布上                                                      |

## 图形属性

| class | attr                         | more                                |
|-------|------------------------------|-------------------------------------|
| 路径    | -                            | -                                   |
| ~     | ctx.fillStyle                | 填充时候的颜色，渐变或图案等样式                    |
| ~     | ctx.strokeStyle              | 勾勒线段时的颜色、渐变或图案等样式                   |
| 文本    | -                            | -                                   |
| ~     | ctx.font                     | 绘制文本时候的CSS字体                        |
| ~     | ctx.textAlign                | 文本应当参照X轴坐标如何进行水平对齐                  |
| ~     | ctx.textBaseline             | 文本应当参照Y轴坐标如何进行垂直对齐                  |
| 线段    | -                            | -                                   |
| ~     | ctx.lineWidth                | 外框线的宽度                              |
| ~     | ctx.lineCap                  | 一个未封闭的子路径段的端点如何“封顶”                 |
| ~     | ctx.lineJoin                 | 子路径顶点如何连接                           |
| ~     | ctx.miterLimit               | 紧急斜接顶点的最大长度（lineJoin属性值为miter的时候有效） |
| 阴影    | -                            | -                                   |
| ~     | ctx.shadowColor              | 指定下拉阴影的颜色                           |
| ~     | ctx.shadowOffsetX            | 阴影的水平偏移量                            |
| ~     | ctx.shadowOffsetY            | 阴影的垂直偏移量                            |
| ~     | ctx.shadowBlur               | 阴影的清晰或模糊程度                          |
| 其它    | -                            | -                                   |
| ~     | ctx.globalAlpha              | 绘制像素时候要添加的透明度                       |
| ~     | ctx.globalCompositeOperation | 如何合并新的像素点和下面的像素点                    |

## canvasEle

### 属性列表

| attr   | more                                    |
|--------|-----------------------------------------|
| width  | 对应画布对象的宽度以及高度属性决定了画布的尺寸(重置画布的尺寸会清空整个画布) |
| height | ~                                       |
