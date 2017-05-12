# app 路由

- 其它

state  | 路径      | templateUrl         | controller | 注释
------ | ------- | ------------------- | ---------- | ------
upload | /upload | -                   | -          | 上传文件路径
tab    | /tab    | templates/tabs.html | -          | 底部标签切换

- showMain (showMain.js)

state          | 路径      | templateUrl               | controller   | 注释
-------------- | ------- | ------------------------- | ------------ | --
tab.show(默认路径) | /show   | templates/tab-shows.html  | ShowMainCtrl | 首页
tab.nearbys    | /nearby | templates/tab-nearby.html | NearbysCtrl  | 附近

- articles（selectEditType.js）

state              | 路径                       | templateUrl                       | controller      | 注释
------------------ | ------------------------ | --------------------------------- | --------------- | --
tab.scenes-article | /scenes/article/:sceneid | templates/tab-article.html        | ArticleShowCtrl | -
tab.scenes         | /scenes                  | templates/tab-selectEditType.html | selectEditType  | 创作

- controller (controller.js)

state    | 路径   | templateUrl             | controller | 注释
-------- | ---- | ----------------------- | ---------- | --
tab.msgs | /msg | templates/tab-msgs.html | MsgCtrl    | 消息

- account (account.js)

state                    | 路径                        | templateUrl             | controller        | 注释
------------------------ | ------------------------- | ----------------------- | ----------------- | ------
tab.account              | /account                  | tab-account.html        | AccountCtrl       | 我的主页
-                        | -                         | view-detai.html(client) | VerifyCtrl(?)     | 邮箱激活链接
tab.account-myscene      | /account/myscenes/:userid | tab-myscenes.html       | MySceneCtrl       | 我的作品
-                        | -                         | page.material.html      | PageMaterialCtrl  | 素材库页面
tab.account-setting      | /account/setting          | tab-setting.html        | SettingController | 我的设置
-                        | -                         | register.html           | RegisterCtrl      | 注册页面
tab.account-businessCard | /account/businessCard     | tab-businessCard.html   | BusinessCardCtrl  | 我的名片
-                        | -                         | tab-login.html          | LoginCtrl         | 登录页面

- showh5 （showh5.js）

state                 | 路径                        | templateUrl                | controller    | 注释
--------------------- | ------------------------- | -------------------------- | ------------- | -----------
-                     | -                         | templates/page.main.html   | PageMainCtrl  | 名片相册的单个滑动页面
tab.view-detail       | /show/:sceneid            | templates/view-detail.html | ShowH5Ctrl    | -
show-scene-bytype     | /view/:typeid/:sceneid    | templates/view-detail.html | ShowH5Ctrl    | 场景展示页面
tab.show-scene-bytype | /show/:typeid/:sceneid    | templates/view-detail.html | ShowH5Ctrl    | -
preview-scene-bytype  | /preview/:typeid/:sceneid | templates/view-detail.html | PreviewH5Ctrl | -
show-box-bytype       | /box/:typeid/:sceneid     | templates/view-box.html    | ViewBoxCtrl   | -

- edith5 (edith5.js)

state                | 路径                      | templateUrl                | controller       | 注释
-------------------- | ----------------------- | -------------------------- | ---------------- | ------
-                    | -                       | -                          | StyleConsoleCtrl | -
-                    | -                       | -                          | CompStyleCtrl    | -
tab.newh5-select     | /newh5/select/:sceneid  | templates/tab-console.html | SelectH5Ctrl     | -
-                    | -                       | templates/page.editor.html | EditPageCtrl     | -
edit-scene-bytype    | /edit/:typeid/:sceneid  | templates/tab-newh5.html   | EditH5Ctrl       | 编辑场景页面
tab.scenes-basescene | /scene/:typeid/:sceneid | templates/tab-newh5.html   | EditH5Ctrl       | -
tab.newh5-basescene  | /newh5/:typeid/:sceneid | templates/tab-newh5.html   | EditH5Ctrl       | -
tab.newh5            | /newh5                  | templates/tab-newh5.html   | EditH5Ctrl       | -
tab.scene-console    | /newh5/console/:sceneid | templates/tab-newh5.html   | EditH5Ctrl       | -

- follow (follow.js)

state                 | 路径                         | templateUrl                  | controller       | 注释
--------------------- | -------------------------- | ---------------------------- | ---------------- | ----
-                     | -                          | -                            | MySceneCtrl1...  | -
tab.account-myfollows | /account/myfollows/:userid | templates/tab-follows.html   | FollowsCtrl      | 我的收藏
tab.follows           | /follow                    | templates/tab-follows.html   | FollowsCtrl      | -
tab.follows-detail    | /follow/:followId          | templates/follow-detail.html | FollowDetailCtrl | -
