# scene-show-service

## 字段

字段                 | 含义
------------------ | --
defaultFileUrlHead | -
sceneId            | -
sceneName          | -
offset             | -

## 方法

方法                          | accepts                                               | returns             | 含义
--------------------------- | ----------------------------------------------------- | ------------------- | -----------------------------------------------
getFontCssByTextAndFontName | {text:string, fontName:string}                        | (cssUrl-string)     | 将传入的字符压缩为css字体文件，并返回给前端前端链接
getSceneInfoByCode          | {code: string}                                        | (scene-object)      | 根据scenecodeVarchar获取CjScene
getSceneInfo                | {id: number}                                          | (scene-object)      | 验证指定id的场景的cssUrl对应的文件是否存在，不存在就重新生成
getTplScenesBySceneType     | {sceneTypeId: number}                                 | (scene-object)      | 获取指定scenetypeInt的场景模版
getUserScenes               | {userId: number}                                      | (scene-object)      | 包含author字段的场景(include并没有起作用啊)
getSceneAll                 | {id: number}                                          | (scene-object)      | 包含pages字段的场景
getScenePages               | {id: number, scaleX: number, scaleY: number}          | (pages-object)      | 获取某个场景的pages
getNearbyScenesBySceneType  | {sceneType: number, positon: object, isMore: boolean} | (scene-object))     | 根据不同sceneType返回不同CjScene列表(基于地理位置)
getScenesBySceneType        | {sceneType: number, isMore: boolean}                  | (scene-object))     | 根据不同sceneType返回不同CjScene列表
updateStat                  | {stat: object}                                        | (stat-object)       | 更新或创建cjstat
setDefaultFileUrlHead       | {url: string}                                         | (url-string)        | 修改Sceneshowservice.defaultFileUrlHead(感觉没有起到作用)
