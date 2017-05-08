# editDataService

- service.editdata
- service
- editDataService

## 方法

方法                   | from              | 传入值                    | 返回值        | 含义
-------------------- | ----------------- | ---------------------- | ---------- | -------------------
updateSceneWithPages | $SceneEditService | (sceneData, pagesData) | scene      | 更新scene和pages
updateScene          | $SceneEditService | (sceneData)            | scene      | 更新scene
updateScenePages     | $SceneEditService | (pagesData)            | scene      | 更新场景pages
copySceneWithPages   | $SceneEditService | (tplId, userId)        | scene      | 根据一个模板拷贝一个新的scene
createCardScene      | $SceneEditService | (sceneId, userInfo)    | scene      | 根据用户信息生成当前用户的名片场景数据
deleteScene          | $SceneEditService | (sceneId)              | successObj | 删除scene和pages
publishScene         | $SceneEditService | (sceneId)              | scene      | 检查是否字体css
