# scene-show-service

## 字段
字段|含义
---|---
defaultFileUrlHead|-
sceneId|-
sceneName|-
offset|-

## 方法
方法|accepts|returns|含义
---|---|---|---
setDefaultFileUrlHead|{url: string} |(url-string)|-
register|{stat: object} |(stat-object)|-
updateStat|{stat: object} |(stat-object)|-
getSceneInfo|{id: number} |(scene-object)|-
getSceneInfoByCode|{code: string} |(scene-object)|-
getScenePages|{id: number, scaleX: number, scaleY: number} |(pages-object)|-
getSceneAll|{id: number} |(scene-object)|-
getFollowScenes|{userId: number} |(scene-object)|-
getUserScenes|{userId: number} |(scene-object)|-
getTplScenesBySceneType|{sceneTypeId: number} |(scene-object)|-
getScenesBySceneType|{sceneType: number, isMore: boolean} |(scene-object))|-
