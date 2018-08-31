# tool

> css 原子工具类样式

## 隐藏元素

```css
.display-none {
  display: none;
}
```

## align

```css
.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.align-justify {
  text-align: justify;
}
.align-justify:after {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 0;
  content: "";
}
```

## border

```css
.border-rounded {
  border-radius: 5px;
}
.border-pill {
  border-radius: 200px;
}
.border-circle {
  border-radius: 50%;
}
```

## float

```css
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.float-clear:after,
.float-clear:before {
  display: table;
  content: " ";
}
.float-clear:after {
  clear: both;
}
```

## font(字体样式)

```css
.font-bold {
  font-weight: 700;
}
.font-normal {
  font-weight: 400;
  font-style: normal;
}
.font-italic {
  font-style: italic;
}
.font-lowercase {
  text-transform: lowercase;
}
.font-uppercase {
  text-transform: uppercase;
}
.font-capitalize {
  text-transform: capitalize;
}
.font-smooth {
  font-smoothing: grayscale;
}
/*3D字体*/
.font-3d {
  text-shadow: -1px 1px 0 #ddd, -2px 2px 0 #c8c8c8, -3px 3px 0 #ccc, -4px 4px 0
      #b8b8b8, -4px 4px 0 #bbb, 0 1px 1px rgba(0, 0, 0, 0.4),
    0 2px 2px rgba(0, 0, 0, 0.3), -1px 3px 3px rgba(0, 0, 0, 0.2),
    -1px 5px 5px rgba(0, 0, 0, 0.1), -2px 8px 8px rgba(0, 0, 0, 0.1),
    -2px 13px 13px rgba(0, 0, 0, 0.1);
}
```

## overflow

```css
.overflow-hidden {
  overflow: hidden;
}
.overflow-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
/*水平滚动条*/
.overflow-scrollX {
  overflow: auto;
  resize: both;
}
.overflow-scrollY {
  overflow-y: scroll;
  height: 300px;
  resize: both;
}
```

## wrap(文本换行)

```css
.wrap-break {
  word-wrap: break-word;
  hyphens: auto;
}
.wrap-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrap-nowrap {
  white-space: nowrap;
}
```
