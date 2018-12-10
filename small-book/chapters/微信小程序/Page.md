# Page

| 分类             | api                                          | more                                                                                     |
| ---------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ~                | Page(Object)                                 | -                                                                                        |
| 初始数据         | data                                         | 页面的初始数据                                                                           |
| Page.prototype   | this.route                                   | 到当前页面的路径，类型为String                                                           |
| ~                | this.setData(Object data, Function callback) | 用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）            |
| 页面事件处理函数 | onPullDownRefresh                            | 页面相关事件处理—监听用户下拉动作                                                       |
| ~                | onReachBottom                                | 页面上拉触底事件的处理函数                                                               |
| ~                | onPageScroll                                 | 页面滚动触发事件的处理函数                                                               |
| ~                | onShareAppMessage                            | 用户点击右上角转发                                                                       |
| ~                | onTabItemTap                                 | 当前是 tab 页时，点击 tab 时触发                                                         |
| 其他             | Any                                          | 开发者可以添加任意的函数或数据到 Object 参数中，在页面的函数中用 this 可以访问           |
| 生命周期回调函数 | onLoad                                       | 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数 |
| ~                | onShow                                       | 生命周期回调—监听页面显示                                                               |
| ~                | onReady                                      | 生命周期回调—监听页面初次渲染完成                                                       |
| ~                | onHide                                       | 生命周期回调—监听页面隐藏                                                               |
| ~                | onUnload                                     | 生命周期回调—监听页面卸载                                                               |