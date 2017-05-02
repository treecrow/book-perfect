# flex布局

- [Flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

## flex上中下弹性布局

```css
.flex-page{position:absolute;display:flex;overflow:hidden;width:100%;height:100%;flex-direction:column;}
.flex-main{overflow-x:hidden;overflow-y:auto;width:100%;flex:1;}
```

## flex上下左右居中

```css
.flex-center{display:flex;justify-content:center;align-items:center;}
```

## flex栅格系统: [Flexbox 打造栅格系统](http://stephenzhao.github.io/2016/08/04/css-flexbox-grid-layout)

```css
.flex{display:flex;flex-wrap:wrap;}
.flex.flex-stretch{align-items:stretch;}
.flex.flex-baseline{align-items:baseline;}
.flex.flex-top{align-items:flex-start;}
.flex.flex-middle{align-items:center;}
.flex.flex-bottom{align-items:flex-end;}
.flex.flex-left{justify-content:flex-start;}
.flex.flex-center{justify-content:center;}
.flex.flex-right{justify-content:flex-end;}
.flex.flex-between{justify-content:space-between;}
.flex.flex-around{justify-content:space-around;}
.flex-cell{flex:1;}
.flex-cell.col-1{flex:0 0 8.33333%;}
.flex-cell.col-2{flex:0 0 16.66667%;}
.flex-cell.col-3{flex:0 0 25%;}
.flex-cell.col-4{flex:0 0 33.33333%;}
.flex-cell.col-5{flex:0 0 41.66667%;}
.flex-cell.col-6{flex:0 0 50%;}
.flex-cell.col-7{flex:0 0 58.33333%;}
.flex-cell.col-8{flex:0 0 66.66667%;}
.flex-cell.col-9{flex:0 0 75%;}
.flex-cell.col-10{flex:0 0 83.33333%;}
.flex-cell.col-11{flex:0 0 91.66667%;}
.flex-cell.col-12{flex:0 0 100%;}
```
