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
getFontCssByTextAndFontName|{text:string, fontName:string}|(cssUrl-string)|将传入的字符压缩为css字体文件，并返回给前端响应链接
setDefaultFileUrlHead|{url: string} |(url-string)|-
getTplScenesBySceneType|{sceneTypeId: number} |(scene-object)|根据场景类型 获取模板列表
getScenesBySceneType|{sceneType: number, isMore: boolean} |(scene-object))|与getTplScenesBySceneType方法类似，感觉像是测试用例
getSceneInfo|{id: number} |(scene-object)|//根据ID获取一个场景
getSceneInfoByCode|{code: string} |(scene-object)|// 根据scenecodeVarchar获取一个场景
updateStat|{stat: object} |(stat-object)|更新或创建cjstat
getScenePages|{id: number, scaleX: number, scaleY: number} |(pages-object)|根据sceneidBigint返回对应的page（包装过的）
getSceneAll|{id: number} |(scene-object)|根据sceneId获取所有相应的scene（包含了page信息）
getFollowScenes|{userId: number} |(scene-object)|根据userId获取相应的CjFollow
getUserScenes|{userId: number} |(scene-object)|根据userId获取相应的CjScene
followScene|{userId: number ,sceneId: number}|(authorInfo-object)|更新或创建cjfollow
getBestScenes|-|(scenes-object)|这个是获取哪个场景，返回的是场景列表（非单个场景）
getNewScenes|-|(scenes-object)|与getNewScenes方法类似，返回的场景进行了包装
