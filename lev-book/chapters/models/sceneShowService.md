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
setDefaultFileUrlHead|{url: string} |(url-string)|修改PREFIX_FILE_HOST
getFontCssByTextAndFontName|{text:string, fontName:string}|(cssUrl-string)|将传入的字符压缩为css字体文件，并返回给前端前端链接
getTplScenesBySceneType|{sceneTypeId: number} |(scene-object)|根据场景类型获取模板列表
getSceneInfoByCode|{code: string} |(scene-object)|根据scenecodeVarchar获取一个场景
getUserScenes|{userId: number} |(scene-object)|通过useridInt获取CjScene
getBestScenes|-|(scenes-object)|getBestScenes获取CjScene
getNewScenes|-|(scenes-object)|getNewScenes获取CjScene
getSceneAll|{id: number} |(scene-object)|根据ID获取CjScene（对应的pages已经处理过）
getSceneInfo|{id: number} |(scene-object)|根据ID获取CjScene(验证场景的cssUrl是否存在，不存在就重新生成)
getScenesBySceneType|{sceneType: number, isMore: boolean} |(scene-object))|根据不同sceneType返回不同CjScene列表
getScenePages|{id: number, scaleX: number, scaleY: number} |(pages-object)|获取CjScenepage
updateStat|{stat: object} |(stat-object)|更新或创建cjstat
followScene|{userId: number ,sceneId: number}|(authorInfo-object)|更新或创建cjfollow
getFollowScenes|{userId: number} |(scene-object)|通过userid获取CjFollow
