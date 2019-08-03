# imgBox

## 图片居中铺满父元素

```css
.cover-img-box {
  width: 200px;
  height: 100px;
}

.cover-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## 图片居中顶到父元素

```css
.reach-img-box {
  width: 100px;
  height: 100px;
  border: 1px dashed #ccc;
}

.reach-img-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```