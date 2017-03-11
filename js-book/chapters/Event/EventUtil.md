## EventUtil

```js
var EventUtil={
    //添加事件处理函数
    addHandler:function(element,type,handler){
        if(element.addEventListener){ //DOM2
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){ //IE
            element.attachEvent('on' + type, handler);
        }else{ // DOM0
            element['on' + type] =handler;
        }
    },
    //删除事件处理函数
    removeHandler:function(element,type,hander){
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    //获取事件对象
    getEvent:function(event){
        return event?event:window.event;
    },
    //获取目标元素
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    //取消默认事件
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    //停止冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
};
```
