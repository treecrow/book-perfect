# cj-follow

## 字段

字段         | 含义
---------- | --------
id         | 收藏id
userid     | 收藏者id
sceneid    | 被收藏的场景id
followtime | 收藏时间
scenedata  | -

## 方法

方法                       | accepts           | returns          | 含义
------------------------ | ----------------- | ---------------- | -----------------------------
followScene              | [userId, sceneId] | (follow-object)  | 设置或创建CjFollow
unfollowScene            | [userId, sceneId] | (follow-object)  | 删除收藏的场景
getFollowScenes          | [userId]          | (follows-object) | 通过userid获取CjFollow
getFollowScenesId        | [userId]          | (follows-object) | 通过用户id 获取用户收藏的所有的场景id
checkThisSceneIsFollowed | [userId, sceneId] | (follow-object)  | 用户点击到 详情页时 查询表里是否已经收藏 返回相应的结果
