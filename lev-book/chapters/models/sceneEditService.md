# scene-edit-service

## 字段

字段        | 含义
--------- | --
sceneId   | -
sceneName | -
offset    | -

## 方法

方法                   | accepts                                         | returns        | 含义
-------------------- | ----------------------------------------------- | -------------- | -------------------------
copySceneWithPages   | {sceneId: number, userId: number}               | (scene-object) | 复制一个场景，生成新的scene,包括页面数据
createCardScene      | {sceneId: number, user: object}                 | (scene-object) | 创建用户名片场景
createSceneWithPages | {scene: object, pages: array}                   | (scene-object) | 根据页面编辑后数据生成新的scene,包括页面数据
updateSceneWithPages | {scene: object, pages: array}                   | (scene-object) | 根据页面编辑后数据更新scene,包括页面数据
createScene          | {scene: object}                                 | (scene-object) | 根据页面编辑后数据生成新的scene
updateScene          | {scene: object}                                 | (scene-object) | 修改场景信息
deleteScene          | {scene: object}                                 | (scene-object) | 删除场景信息
createScenePages     | {pages: array}                                  | (scene-object) | 新建场景页面信息
updateScenePages     | {scene: object, scaleX: number, scaleY: number} | (scene-object) | 修改场景页面信息
deleteScenePages     | {pages: object}                                 | (scene-object) | 删除多个页面信息
createScenePage      | {pages: object}                                 | (pages-object) | 新增加场景一个页面信息
updateScenePage      | {pages: object}                                 | (pages-object) | 修改场景一个页面信息
deleteScenePage      | {pages: object}                                 | (pages-object) | 删除场景一个页面信息
publishScene         | {sceneId: number}                               | (scene-object) | 发布场景
