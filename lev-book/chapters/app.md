# app 路由

- 其它

state    | 路径      | templateUrl             | controller | 注释
-------- | ------- | ----------------------- | ---------- | --
upload   | /upload | -                       | -          | -
tab      | /tab    | templates/tabs.html     | -          | -
tab.msgs | /msg    | templates/tab-msgs.html | MsgCtrl    | -

- articles

state              | 路径                       | templateUrl                       | controller      | 注释
------------------ | ------------------------ | --------------------------------- | --------------- | --
tab.scenes-article | /scenes/article/:sceneid | templates/tab-article.html        | ArticleShowCtrl | -
tab.scenes         | /scenes                  | templates/tab-selectEditType.html | selectEditType  | -

- showMain

state          | 路径      | templateUrl               | controller   | 注释
-------------- | ------- | ------------------------- | ------------ | --
tab.show(默认路径) | /show   | templates/tab-shows.html  | ShowMainCtrl | -
tab.nearbys    | /nearby | templates/tab-nearby.html | NearbysCtrl  | -

- showh5

state                 | 路径                        | templateUrl                | controller    | 注释
--------------------- | ------------------------- | -------------------------- | ------------- | --
tab.view-detail       | /show/:sceneid            | templates/view-detail.html | ShowH5Ctrl    | -
show-scene-bytype     | /view/:typeid/:sceneid    | templates/view-detail.html | ShowH5Ctrl    | -
tab.show-scene-bytype | /show/:typeid/:sceneid    | templates/view-detail.html | ShowH5Ctrl    | -
preview-scene-bytype  | /preview/:typeid/:sceneid | templates/view-detail.html | PreviewH5Ctrl | -
show-box-bytype       | /box/:typeid/:sceneid     | templates/view-box.html    | ViewBoxCtrl   | -

- edith5

state                | 路径                      | templateUrl                | controller   | 注释
-------------------- | ----------------------- | -------------------------- | ------------ | ------
edit-scene-bytype    | /edit/:typeid/:sceneid  | templates/tab-newh5.html   | EditH5Ctrl   | 编辑场景页面
tab.scenes-basescene | /scene/:typeid/:sceneid | templates/tab-newh5.html   | EditH5Ctrl   | -
tab.newh5-basescene  | /newh5/:typeid/:sceneid | templates/tab-newh5.html   | EditH5Ctrl   | -
tab.newh5            | /newh5                  | templates/tab-newh5.html   | EditH5Ctrl   | -
tab.scene-console    | /newh5/console/:sceneid | templates/tab-newh5.html   | EditH5Ctrl   | -
tab.newh5-select     | /newh5/select/:sceneid  | templates/tab-console.html | SelectH5Ctrl | -

- account

state                    | 路径                        | templateUrl                     | controller        | 注释
------------------------ | ------------------------- | ------------------------------- | ----------------- | ---------
tab.account              | /account                  | templates/tab-account.html      | AccountCtrl       | 我的主页
tab.account-myscene      | /account/myscenes/:userid | templates/tab-myscenes.html     | MySceneCtrl       | 我的作品
tab.account-setting      | /account/setting          | templates/tab-setting.html      | SettingController | 我的设置
tab.account-businessCard | /account/businessCard     | templates/tab-businessCard.html | BusinessCardCtrl  | 我的名片
tab.account-login        | /account/:userId          | （templates/tab-login.html）      | LoginCtrl         | 登录页面（没用了）

- follow

state                 | 路径                         | templateUrl                  | controller       | 注释
--------------------- | -------------------------- | ---------------------------- | ---------------- | ----
tab.account-myfollows | /account/myfollows/:userid | templates/tab-follows.html   | FollowsCtrl      | 我的收藏
tab.follows           | /follow                    | templates/tab-follows.html   | FollowsCtrl      | -
tab.follows-detail    | /follow/:followId          | templates/follow-detail.html | FollowDetailCtrl | -
