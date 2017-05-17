# ionic

## 安装

```
npm install -g ionic cordova
```

## 命令列表

- 添砖加瓦

命令                                    | 作用
------------------------------------- | -----------
ionic start ionic-template tabs       | 创建一个ionic项目
ionic cordova platform add android    | 添加安卓平台
ionic cordova platform remove android | 移除安卓平台
ionic cordova plugin                  | 管理插件
ionic cordova plugin add xxx --save   | 安装xxx插件

- 调试

命令                                           | 作用
-------------------------------------------- | --------------------------------------------------------------------------------------
ionic cordova prepare                        | -
ionic cordova compile                        | 编译本机代码
ionic cordova emulate                        | 仿真测试？
ionic cordova build android --prod --release | 创建app（编译项目到指定到平台）
ionic run android --prod --release           | 在一个连接的设备商运行app
ionic run android --device                   | 安卓手机调试
ionic run android -l -c -s                   | 安卓手机调试
ionic serve                                  | 启动一个本地的server，在浏览器中打开，并可监视文件变化，随时刷新浏览器.可以在主目录下的ionic.project文件的watchPatterns中配置要监视的文件夹
ionic serve --lab                            | 测试app在安卓和ios中的效果
ionic serve --address 68.54.96.105           | 指明一个使用的ip地址

- ionic账号

命令                      | 作用
----------------------- | --------------
ionic signup            | 创建ionic账号
ionic login             | 用ionic账号登录
ionic link              | 将本地的应用连接到ionic
ionic cordova resources | -
ionic package list      | -
ionic package info      | -
ionic package build     | -
ionic package download  | -
ionic upload            | -

- 其它

命令              | 作用
--------------- | --------------
ionic docs      | 打开ionic文档网站
ionic info      | 查看关于ionic的系统消息
ionic generate  | -
ionic telemetry | -

- [怎么用ionic命令行调试你的ionic app](http://www.tuicool.com/articles/aaiUVzi)
