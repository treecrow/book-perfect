# BFC

> 一个独立的布局环境，我们可以理解为一个箱子（实际上是看不见摸不着的），箱子里面物品的摆放是不受外界的影响的。转换为BFC的理解则是：BFC中的元素的布局是不受外界的影响（我们往往利用这个特性来消除浮动元素对其非浮动的兄弟元素和其子元素带来的影响。）并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。

## 相关文档

- [深入理解BFC和Margin Collapse](http://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html)

## margin 折叠的条件

- 必须是处于常规文档流（非float和绝对定位）的块级盒子,并且处于同一个BFC当中。
- 没有线盒，没有空隙（clearance，下面会讲到），没有padding和border将他们分隔开
- 都属于垂直方向上相邻的外边距

## 解决 margin 折叠的方法

- 创建了新的BFC的元素（例如浮动元素或者'overflow'值为'visible'以外的元素）与它的子元素的外边距不会折叠
- 浮动元素不与任何元素的外边距产生折叠（包括其父元素和子元素）
- 绝对定位元素不与任何元素的外边距产生折叠
- inline-block元素不与任何元素的外边距产生折叠

## 左边固定宽度，右边随浏览器宽度适应

```css
.bfc-left {
  float: left;
  width: 200px;
  height: 100vh;
  background-color: #0f0;
}
.bfc-right {
  overflow: hidden;
}
```