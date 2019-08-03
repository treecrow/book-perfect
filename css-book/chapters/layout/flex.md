# flex

- [Flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

## 容器的属性

| 属性            | options                                                                 | more                                                           |
| --------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| flex-direction  | row / row-reverse / column / column-reverse                             | 决定主轴的方向(即项目的排列方向)                               |
| flex-wrap       | nowrap / wrap / wrap-reverse                                            | 决定容器内项目是否可换行                                       |
| flex-flow       | `flex-flow: <flex-direction> // <flex-wrap>`                            | flex-direction 和 flex-wrap 的简写形式                         |
| justify-content | flex-start / flex-end / center / space-between / space-around           | 定义了项目在主轴的对齐方式                                     |
| align-items     | flex-start / flex-end / center / baseline / stretch                     | 定义了项目在交叉轴上的对齐方式                                 |
| align-content   | flex-start / flex-end / center / space-between / space-around / stretch | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |

## 项目的属性

| 属性        | options                                                                                | more                                                                                         |
| ----------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| order       | `<integer>`                                                                            | 定义项目的排列顺序。数值越小，排列越靠前，默认为 0                                           |
| flex-grow   | `<number>`                                                                             | 父元素会有剩余空间,子元素如何分配父元素的剩余空间,默认为 0(不索取父元素的剩余空间)           |
| flex-shrink | `<number>`                                                                             | 当父元素的宽度小于所有子元素的宽度的和时,子元素如何缩小自己的宽度的,默认值为 1,值为 0 不减小 |
| flex-basis  | <length> / auto                                                                        | 定义了在分配多余空间之前，项目占据的主轴空间（main size）                                    |
| flex        | `<'flex-grow'> <'flex-shrink'>? // <'flex-basis'> / auto (1 1 auto) / none (0 0 auto)` | flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写                                      |
| align-self  | auto / flex-start / flex-end / center / baseline / stretch                             | align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性             |

## flex 常见工具类

```css
/* 上中下弹性布局 */
.flex-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.flex-main {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

/* 水平垂直居中 */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 垂直居中 */
.flex-align-center {
  display: flex;
  align-items: center;
}

/* 行平均分布 */
.flex-between {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

/* 列平均分布 */
.flex-column-between {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

/* 水平排列 */
.flex-nowrap {
  display: flex;
  flex-flow: row nowrap;
}

/* 垂直排列 */
.flex-column-nowrap {
  display: flex;
  flex-flow: column nowrap;
}
```

## [Flexbox 打造栅格系统](http://stephenzhao.github.io/2016/08/04/css-flexbox-grid-layout)

```css
.flex {
  display: flex;
  flex-flow: row wrap;
}
.flex-cell {
  flex: 1;
}
.flex-cell.col-1 {
  flex: 0 0 8.33333%;
}
.flex-cell.col-2 {
  flex: 0 0 16.66667%;
}
.flex-cell.col-3 {
  flex: 0 0 25%;
}
.flex-cell.col-4 {
  flex: 0 0 33.33333%;
}
.flex-cell.col-5 {
  flex: 0 0 41.66667%;
}
.flex-cell.col-6 {
  flex: 0 0 50%;
}
.flex-cell.col-7 {
  flex: 0 0 58.33333%;
}
.flex-cell.col-8 {
  flex: 0 0 66.66667%;
}
.flex-cell.col-9 {
  flex: 0 0 75%;
}
.flex-cell.col-10 {
  flex: 0 0 83.33333%;
}
.flex-cell.col-11 {
  flex: 0 0 91.66667%;
}
.flex-cell.col-12 {
  flex: 0 0 100%;
}
```
