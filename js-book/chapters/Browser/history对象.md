# history对象

## 属性列表

| attr           | more            |
|----------------|-----------------|
| history.length | 浏览器历史列表中的元素数量   |
| history.state  | 返回当前文档状态对应的信息对象 |

## 方法列表

| method                                       | more                                                                                                    |
|----------------------------------------------|---------------------------------------------------------------------------------------------------------|
| history.back()                               | 后退一格                                                                                                    |
| history.forword()                            | 前进一格                                                                                                    |
| history.go()                                 | 后退或前进任意次                                                                                                |
| history.pushState(state object,title,URL)    | 改变当前文档url而不刷新页面，history.length长度加1。第一个参数是一个对象，该对象包含用于恢复当前文档状态的所有信息；第二个参数是一个用于标识浏览历史记录中的状态的标题，第三个参数是个URL |
| history.replaceState(state object,title,URL) | 改变当前文档url而不刷新页面，history.length不变化                                                                       |
