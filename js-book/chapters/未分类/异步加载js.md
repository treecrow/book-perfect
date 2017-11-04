# 异步加载js

## 方法1

```html
<script type="text/javascript" src="demo_async.js" async="async"></script> 
```

## 方法2

```javascript
function loadScript(url, callback) {
  var script = document.createElement_x("script")
  script.type = "text/javascript";
  if (script.readyState) { //IE 
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others: Firefox, Safari, Chrome, and Opera 
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}
```