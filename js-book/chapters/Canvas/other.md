## 初始化
```js
var canvas=document.getElementById("canvas");
var ctx=canva.getContext("2d");
```

## 在画布上绘制图像、画布或视频
```js
var imageTarget;//这是一个图像元素(可以使vedio)
setTimeout(function(){ctx.drawImage(imageTarget,sx,sy,swidth,sheight,x,y,width,height)},0);
```

## 导出canvas绘制的图像(+下载)
```js
var imgURL=canva.toDataURL("image/png"); //导出的图像的url
var link=document.createElement("a");
link.href=imgURL;
link.download = 'canvas.png';
link.target = '_blank';
link.click();
```
