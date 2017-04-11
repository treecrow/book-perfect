# scene-edit-service

## 字段
字段|含义
---|---
sceneId|-
sceneName|-
offset|-

## 方法
方法|accepts|returns|含义
---|---|---|---
createSceneWithPages|{scene: object, pages: array} |(scene-object)|-
updateSceneWithPages|{scene: object, pages: array} |(scene-object)|-
createScene|{scene: object} |(scene-object,msg-string)|-
updateScene|(scene: object) |(scene-object)|-
deleteScene|(scene: object) |(scene-object)|-
createScenePages|(pages: array) |(scene-object)|-
updateScenePages|(scene: object, scaleX: number, scaleY: number) |(scene-object)|-
deleteScenePages|(pages: array) |(scene-object)|-
createScenePage|(pages: object) |(pages-object)|-
updateScenePage|(pages: object) |(pages-object|-
deleteScenePage|(pages: object) |(pages-object|-
