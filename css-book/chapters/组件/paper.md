# paper(纸张)

```css
/*使用after/before设置纸张的样子*/
.paper {
  width: 50%;
  height: 200px;
  background: darkcyan;
  margin: 40px auto;
  position: relative;
}
.paper:after,
.paper:before {
  position: absolute;
  top: 80%;
  bottom: 15px;
  left: 10px;
  z-index: -1;
  width: 50%;
  background: #777;
  box-shadow: 0 15px 10px #777;
  content: "";
  transform: rotate(-2deg);
}
.paper:after {
  right: 10px;
  left: auto;
  transform: rotate(2deg);
}
```
