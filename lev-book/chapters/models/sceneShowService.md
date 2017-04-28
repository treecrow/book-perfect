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
setDefaultFileUrlHead       | {url: string}                                         | (url-string)        | 修改Sceneshowservice.defaultFileUrlHead(感觉没有起到作用)
getFontCssByTextAndFontName | {text:string, fontName:string}                        | (cssUrl-string)     | 将传入的字符压缩为css字体文件，并返回给前端前端链接
getTplScenesBySceneType     | {sceneTypeId: number}                                 | (scene-object)      | 根据scenetypeInt获取CjScene
getSceneInfoByCode          | {code: string}                                        | (scene-object)      | 根据scenecodeVarchar获取CjScene
getUserScenes               | {userId: number}                                      | (scene-object)      | 通过useridInt获取CjScene
getNewScenes                | -                                                     | (scenes-object)     | 获取所有场景列表
getBestScenes               | -                                                     | (scenes-object)     | 与getNewScenes功能重复（没有纠正属性）
getSceneAll                 | {id: number}                                          | (scene-object)      | 根据ID获取CjScene（对应的pages已经处理过，不可能有__data属性）
getSceneInfo                | {id: number}                                          | (scene-object)      | 验证指定id的场景的cssUrl对应的文件是否存在，不存在就重新生成
getNearbyScenesBySceneType  | {sceneType: number, positon: object, isMore: boolean} | (scene-object))     | 根据不同sceneType返回不同CjScene列表(基于地理位置)
getScenesBySceneType        | {sceneType: number, isMore: boolean}                  | (scene-object))     | 根据不同sceneType返回不同CjScene列表
getScenePages               | {id: number, scaleX: number, scaleY: number}          | (pages-object)      | 获取CjScenepage
updateStat                  | {stat: object}                                        | (stat-object)       | 更新或创建cjstat
followScene                 | {userId: number ,sceneId: number}                     | (authorInfo-object) | 更新或创建cjfollow
getFollowScenes             | {userId: number}                                      | (scene-object)      | 通过userid获取CjFollow

## getScenesBySceneType返回的数据：

```javascript
{ sceneidBigint: 8833633,
    scenecodeVarchar: '7QUVPWIE81',
    scenenameVarchar: '文章标题',
    scenetypeInt: 885,
    useridInt: 79,
    hitcountInt: 0,
    createtimeTime: '2017-04-25T11:29:42.000Z',
    musicurlVarchar: 'syspic/mp3/yq0KA1RHT4aAHL1bAAqqmzRHCqE496.mp3',
    videocodeVarchar: null,
    showstatusInt: 1,
    thumbnailVarchar: 'syspic/img/464e290046b4a13990f53f8eb8af7847.png',
    movietypeInt: 0,
    descVarchar: '<div style="text-align: center;"><span style="color: inherit; background-color: initial; font-size: medium; font-family: HYLiuZiHeiJ;">人生就是一场修行</span></div>',
    ipVarchar: '192.168.96.122',
    deleteInt: 0,
    shenhe: 1,
    tagidInt: 0,
    sourceidInt: 0,
    biztypeInt: 1,
    eqidInt: null,
    eqcode: '',
    datacountInt: 0,
    musictypeInt: 3,
    usecountInt: 0,
    fromsceneidBigint: 0,
    publishtime: 4294967295,
    updatetime: 4294967295,
    rank: 0,
    isadvanceduser: 0,
    hideeqad: 0,
    lastpageid: null,
    isTpl: 0,
    isPublic: 0,
    isPayxd: 0,
    property: '{"triggerLoop":true,"slideNumber":true,"autoFlipTime":3,"eqAdType":1,"hideEqAd":false}',
    applypromotion: 0,
    accesscode: null,
    applytemplate: 0,
    adWzi: '1',
    price: 0,
    isShow: 0,
    isPayloadlog: 0,
    viCurrentTimes: 6,
    viBeyondTime: 1491533891,
    viTimeout: null,
    viHittimesSet: 0,
    viScenecode: null,
    loadinglogo: null,
    accesscodeVarchar: null,
    loadinglogoVarchar: null,
    groupidInt: 0,
    cssUrl: 'ViewFont/8833633/ShuiYueTi.css,ViewFont/8833633/shuiYueTi.css',
    cover: '/syspic/img/464e290046b4a13990f53f8eb8af7847.png',
    musicsrc: '/syspic/mp3/yq0KA1RHT4aAHL1bAAqqmzRHCqE496.mp3',
    imgsrc: '/syspic/img/464e290046b4a13990f53f8eb8af7847.png',
    name: '文章标题',
    sceneid: 8833633 },
```
