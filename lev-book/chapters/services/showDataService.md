# showDataService

- service.showdata
- service
- showDataService

## 方法

方法                          | from                    | 传入值                 | 返回值  | 含义
--------------------------- | ----------------------- | ------------------- | ---- | -----------------------------------------------
getcomment                  | 伪造数据                    | （sceneid）           | 评论列表 | 获取某个场景的评论列表
getFontCssByTextAndFontName | $SceneShowService       | （text, fontName）    | then | 根据内容和字体名称获取CSS
getTplScenesBySceneType     | $SceneShowService       | （sceneTypeId）       | then | 根据场景类型 例如文章 ：885 获取模板列表
getSceneWithPages           | $SceneShowService       | （sceneId）           | then | 根据ID获取CjScene（对应的pages已经处理过,什么鬼玩意，不可能有__data属性）
followIt                    | $CjFollow               | (userId, sceneId)   | then | 收藏场景
unFollowIt                  | $CjFollow               | (userId, sceneId)   | then | 取消收藏场景
checkThisSceneIsFollowed    | $CjFollow               | (userId, sceneId)   | then | 查看该场景是否已经被收藏
getScenesBySceneType        | $SceneShowService       | (sceneType, isMore) | then | 根据场景类型获取场景列表
getNearByScenesBySceneType  | $SceneShowService       | (sceneType, isMore) | then | 根据场景类型获取场景列表
getScenesOfUserFollows      | $CjFollow               | （userId）            | then | 获取某个用户收藏的场景列表
getSceneIdOfUserFollows     | $CjFollow               | （userId）            | then | 此为获取用户 收藏的所有场景id 用于前端渲染时判断 是否 已经收藏场景
getUserScenes               | $SceneShowService       | （userId）            | then | 通过useridInt获取CjScene
getScenePages               | $SceneShowService       | (sceneId)           | then | 获取单个场景的所有页面数据
findScenes                  | $SceneShowService       | -                   | then | 获取所有场景列表
getSceneInfo                | $SceneShowService       | (sceneId)           | then | 验证指定id的场景的cssUrl对应的文件是否存在，不存在就重新生成,返回对应scene
getAuthorBySceneId          | userService             | {scene}             | then | 获取场景作者信息
showCountCtrl               | $SceneShowService       | {scene}             | -    | 场景对应的CjStat展示次数+1
loveScene                   | $SceneShowService       | {scene}             | -    | 场景对应的CjStat喜欢次数+1
getSceneInfoByCode          | $SceneShowService       | (sceneCode)         | then | 根据scenecode 获取场景信息（本文件调用）
getScenePagesWithAd         | this.getSceneInfoByCode | (sceneId)           | then | 获取带广告的场景页面数据(没有被调用)

方法                     | from              | 传入值 | 返回值 | 含义
---------------------- | ----------------- | --- | --- | ----------------------
getUserScenes          | $SceneShowService | -   | -   | - getScenesBySceneType
$SceneShowService      | -                 | -   | -   | 根据场景类型获取场景列表
getScenePagesWithScale | $SceneShowService | -   | -   | 获取单个场景的所有页面数据
getStatBySceneId       | $SceneShowService | -   | -   | -
loveScene              | $SceneShowService | -   | -   | -
setShowPassword        | -                 | -   | -   | 设置查看密码或回答问题的开关
