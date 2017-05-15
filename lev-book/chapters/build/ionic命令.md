# ionic

## 安装

```
npm install -g ionic cordova
```

## 命令列表

命令                                 | 作用
---------------------------------- | --------------------------------------------------------------------------------------
ionic serve                        | 启动一个本地的server，在浏览器中打开，并可监视文件变化，随时刷新浏览器.可以在主目录下的ionic.project文件的watchPatterns中配置要监视的文件夹
ionic serve --lab                  | 测试app在安卓和ios中的效果
ionic serve --address 68.54.96.105 | 指明一个使用的ip地址
ionic platform add ios android     | 添加平台


## 命令

命令                | 含义
----------------- | -----------------------------------------------------------------------------
generate(g)       | 生成页面或组件：ionic g page myPage
g provider MyData | -
plugin            | Add a Cordova plugin
resources         | ionic会将本地的资源文件（支持png、psd和ai，尺寸越大越好）上传到它的服务器进行处理
share             | Share an app with a client, co-worker, friend, or customer
login             | Login to your Ionic account
io                | Integrate your app with Ionic Cloud services
security          | Store your app's credentials for the Ionic Cloud
push              | Upload APNS and GCM credentials to Ionic Push
package           | Use Ionic Package to build your app
config            | Set configuration variables for your ionic app
add               | Add an Ion, bower component, or addon to the project
remove            | Remove an Ion, bower component, or addon from the project
list              | List Ions, bower components, or addons in the project
help              | Provides help for a certain command
link              | Sets your Ionic App ID for your project
hooks             | Manage your Ionic Cordova hooks
state             | Saves or restores state of your Ionic Application using the package.json file
docs              | Opens up the documentation for Ionic

### 添加/删除/模拟/构建

命令                                              | 含义
----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
start appName --v2                              | ionic start myApp blank（空项目） #ionic start myApp tabs（带导航条） #ionic start myApp sidemenu（带侧滑菜单） # -v---表示用ionic2
serv --address 68.52.96.10                      | 指明一个外部的ip地址，可以让外部用户查看
serve --lab                                     | 在浏览器中打开ios和andriod的显示界面
run xxx [options]                               | 使用设备运行应用，如果无设备可用将自动使用模拟器： #-l(livereload)---实时刷新变化。#-c---打印app里的console #-s---打印设备的console #-p---指定设备的端口 #-i---指定livereload的重刷端口 #--debug //debug #--release //release
emulate xxx [options]/ ionic run xxx --emulator | 模拟器中运行xxx
build xxx                                       | 打包xxx
upload                                          | 上传自己的项目到ionic服务器，上传完成后会有一个项目
lib                                             | 获取Ionic 库的版本号或者更新ionic库
lib update                                      | 更新ionic库
platform update xxx                             | 更新更新包
info                                            | 查看关于ionic的系统消息
setup                                           | 给项目配置一个构建工具(beta) ：ionic setup sass

- [怎么用ionic命令行调试你的ionic app](http://www.tuicool.com/articles/aaiUVzi)
