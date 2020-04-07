# dom

## 获取点击元素 index

```html
<div class="dot">
  <span class=""></span>
  <span class=""></span>
  <span class=""></span>
  <span class=""></span>
  <span class="cur"></span>
</div>
```

```js
var dotObj = document.querySelectorAll(".dot span");
for (var i = 0; i < imgSize; i++) {
  dotObj[i].onclick = function(e) {
    var index = Array.prototype.indexOf.call(dotObj, this);
    console.log(index);
  };
}
```

## 反转 dom 元素顺序

```js
// 采用直接的DOM操作
var ul = document.getElementById("target");
var list = ul.getElementByTagName("li");
var length = list.length;
while (length--) {
  ul.appendchild(ul.childNodes[length]);
}

// 采用文档碎片fragment方法
var ul = document.getElementById("target");
var list = ul.getElementByTagName("li");
var fragment = document.createDocumentFragment();
for (var i = list.length; i >= 0; i--) {
  fragment.appendChild(list[i]);
}
ul.innerHTML(fragment);

// 采用数组的reverse方法
var ul = document.getElementById("target");
var chil_arr = Array.prototype.slice.call(ul.getElementByTagName("li"), 0);
var str = "";
chil_arr.reverse();
for (var i = 0; i < chil_arr.length; i++) {
  str += chil_arr[i].outerHTML;
}
ul.innerHTML(str);
```

## 怎样添加、移除、移动、复制、创建、查找节点

```js
// 创建新节点
document.createDocumentFragment(); //创建一个DOM片段
document.createElement(); //创建一个具体的元素
document.createTextNode(); //创建一个文本节点
// 添加、移除、替换、插入
someNode.appendChild();
someNode.removeChild();
someNode.replaceChild();
someNode.insertBefore();

// 查找
document.querySelector();
document.querySelectorAll();
document.getElementsByTagName(); //通过标签名称
document.getElementsByName(); //通过元素的Name属性的值
document.getElementById(); //通过元素Id，唯一性
```
