# scene-edit-service

## 字段

字段        | 含义
--------- | --
sceneId   | -
sceneName | -
offset    | -

## 方法

方法                   | accepts                                                      | returns        | 含义
-------------------- | ------------------------------------------------------------ | -------------- | -------------
createSceneWithPages | {scene: object, pages: array}                                | (scene-object) | 新建scene和pages
createScene          | {scene: object}                                              | (scene-object) | 新建scene
createScenePages     | {pages: array}                                               | (scene-object) | 新建pages
updateSceneWithPages | {scene: object, pages: array，scaleX: number, scaleY: number} | (scene-object) | 更新scene和pages
updateScene          | {scene: object}                                              | (scene-object) | 更新scene
updateScenePages     | {scene: object, scaleX: number, scaleY: number}              | (scene-object) | 更新场景pages
deleteScene          | {scene: object}                                              | (scene-object) | 删除scene和pages
deleteScenePages     | {pages: object}                                              | (scene-object) | 删除pages
copySceneWithPages   | {sceneId: number, userId: number}                            | (scene-object) | 复制scene和pages
createCardScene      | {sceneId: number, user: object}                              | (scene-object) | 创建用户名片scene
publishScene         | {sceneId: number}                                            | (scene-object) | 发布场景
