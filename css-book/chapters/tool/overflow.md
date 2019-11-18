# overflow

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

/* 两行... */
.overflow-2 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```
