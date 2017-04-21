# app 路由

state                    | 路径                         | templateUrl                     | controller
------------------------ | -------------------------- | ------------------------------- | ----------------
upload                   | /upload                    | -                               | -
tab                      | /tab                       | templates/tabs.html             | -
tab.show(默认路径)           | /show                      | templates/tab-shows.html        | ShowMainCtrl
tab.scenes               | /scenes                    | templates/tab-scenes.html       | ArticleEditCtrl
tab.scenes-article       | /scenes/article/:sceneid   | templates/tab-article.html      | ArticleShowCtrl
tab.follows              | /follow                    | templates/tab-follows.html      | FollowsCtrl
tab.msgs                 | /msg                       | templates/tab-msgs.html         | MessageCtrl
tab.follows-detail       | /follow/:followId          | templates/follow-detail.html    | FollowDetailCtrl
tab.view-detail          | /show/:sceneid             | templates/view-detail.html      | ShowH5Ctrl
show-scene-bytype        | /view/:typeid/:sceneid     | templates/view-detail.html      | ShowH5Ctrl
tab.view-box             | /view/:sceneid             | templates/view-box.html         | ViewBoxCtrl
show-box-bytype          | /box/:typeid/:sceneid      | -                               | ViewBoxCtrl
edit-scene-bytype        | /edit/:typeid/:sceneid     | templates/tab-newh5.html        | EditH5Ctrl
tab.newh5                | /newh5                     | templates/tab-newh5.html        | EditH5Ctrl
tab.scene-console        | /newh5/console/:sceneid    | templates/tab-newh5.html        | EditH5Ctrl
tab.newh5-select         | /newh5/select/:sceneid     | templates/tab-console.html      | SelectH5Ctrl
tab.laya                 | /laya                      | templates/test.html             | LayaCtrl
tab.account              | /account                   | templates/tab-account.html      | AccountCtrl
tab.account-myscene      | /account/myscenes/:userid  | templates/tab-myscenes.html     | MySceneCtrl
tab.account-myfollows    | /account/myfollows/:userid | templates/tab-follows.html      | FollowsCtrl
tab.account-businessCard | /account/businessCard      | templates/tab-businessCard.html | AccountCtrl
tab.account-setting      | /account/setting           | templates/tab-setting.html      | myController
tab.account-login        | /account/:userId           | templates/tab-login.html        | LoginCtrl
