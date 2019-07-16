# geolocation 对象

## 方法列表

| method                                              | more                                           |
|-----------------------------------------------------|------------------------------------------------|
| geolocation.getCurrentPosition(successBack,errBack) | 获取用户当前位置                                       |
| geolocation.watchPosition(successBack,errBack)      | 获取当前位置，同时不断的监视当前位置，一旦用户位置发生改变，就会调用指定的回调函数      |
| geolocation.clearWatch()                            | 停止监视用户位置。传递给此方法的参数应当是调用watchPosition()方法获得的返回值 |
