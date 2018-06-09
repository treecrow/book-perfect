# display

## display: block;和display: inline;的区别

| 区别项         | display: block;                    | display: inline;                               |
| -------------- | ---------------------------------- | ---------------------------------------------- |
| margin/padding | 可以应用margin/padding             | margin/padding在竖直方向上无效，水平方向上有效 |
| width/height   | 有效，宽度默认100%。高度包含子元素 | 无效                                           |
| vertical-align | 无效                               | 有效                                           |
| 换行           | 独占一行                           | 不会在元素前后进行换行                         |
| 浮动或绝对定位 | 无影响                             | 转换成 display: block;                         |