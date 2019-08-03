# display

## display: block;和 display: inline;的区别

| 区别项         | display: block;                     | display: inline;                                |
| -------------- | ----------------------------------- | ----------------------------------------------- |
| margin/padding | 可以应用 margin/padding             | margin/padding 在竖直方向上无效，水平方向上有效 |
| width/height   | 有效，宽度默认 100%。高度包含子元素 | 无效                                            |
| vertical-align | 无效                                | 有效                                            |
| 换行           | 独占一行                            | 不会在元素前后进行换行                          |
| 浮动或绝对定位 | 无影响                              | 转换成 display: block;                          |

## display: none;与 visibility: hidden;的区别

## 区别

| 区别     | display: none；                          | visibility: hidden;                                            |
| -------- | ---------------------------------------- | -------------------------------------------------------------- |
| 渲染树   | 从渲染树中消失，渲染的时候不占据任何空间 | 不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见 |
| 继承性   | 非继承属性，通过修改子孙节点属性无法显示 | 继承属性，通过设置 visibility: visible;可以让子孙节点显式      |
| 文档重排 | 会                                       | 不会，只会造成本元素的重绘                                     |
| 读屏器   | 不会读取                                 | 会读取                                                         |

## 隐藏元素

```css
.display-none {
  display: none;
}
```
