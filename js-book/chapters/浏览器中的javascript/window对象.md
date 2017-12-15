# window对象

## 属性列表

| class | attr               | more         |
|-------|--------------------|--------------|
| 滚动条   | window.pageXOffset | 浏览器窗口的滚动条的位置 |
| ~     | window.pageYOffset | ~            |
| ~     | window.scrollX     | 获取浏览器窗口滚动的距离 |
| ~     | window.scrollY     | ~            |
| 视口    | window.innerWidth  | 浏览器视口的尺寸     |
| ~     | window.innerHeight | ~            |

## 方法列表

| class  | method                | more                                |
|--------|-----------------------|-------------------------------------|
| 延时函数   | window.setTimeout()   | -                                   |
| ~      | window.setInterval()  | -                                   |
| 对话框    | window.alert()        | 向用户展示一条消息并等待用户关闭对话框                 |
| ~      | window.confirm()      | 显示一条消息，要求用户单击"确定"或"取消"按钮，并返回一个bool值 |
| ~      | window.prompt()       | 显示一个消息，等待用户输入字符串，并返回那个字符串           |
| 打开关闭窗口 | window.open(url,name) | 在新标签页打开url文档                        |
| ~      | window.close()        | 关闭相应窗口                              |
| 滚动     | window.scroll(x,y)    | 滚动到指定位置                             |
| ~      | window.scrollTo(x,y)  | ~                                   |
| ~      | window.scrollBy(x,y)  | 参数是相对的，在当前滚动条的偏移量上增加                |
| 文本选择   | window.getSelection() | 返回一个选择对象                            |

## 事件

| event                     | more |
|---------------------------|------|
| window.error=function(){} | -    |
