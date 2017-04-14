# sceneDataService_nouse
- service.scenedata
- factory
- sceneDataService

## 方法
方法|from|传入值|返回值|含义
---|---|---|---|---
getBestScenes|Scene(不知道是哪里的)|-|-|-
findScenes|CjScene|-|-|获取所有的 SCENE,每次10个，下次调用继续10个
getSceneInfo|CjScene|-|-|获取一个场景 ， 根据 ID
getSceneInfoByCode|CjScene|-|-|获取一个场景 ， 根据 ID
getScenePages|CjScenepage|-|-|根据场景ID 获取 当前场景的所有页
createScene|CjScene|-|-|插入一个新场景记录
replaceOrCreate|CjScenepage|-|-|-
updateOrAddOnePage|CjScenepage|-|-|-
loveScene|CjStat|-|-|-
findScenesBySceneType|CjScene|-|-|根据场景类型获取场景
findScenesByUserId|CjScene|-|-|根据用户ＩＤ获取场景
totalScenesByUserId|CjScene|-|-|根据用户ＩＤ获取场景总数
getMsgBySceneId|CjMsg|-|-|根据场景ID 获取消息
getPageTagLabel|-|-|-|-
getStatBySceneId|CjStat|-|-|-
