# configService

- service.config
- factory
- configService

## 属性

### 路径

属性                | 含义                | 值
----------------- | ----------------- | -------------------------------
WEBSERVER         | -                 | "<http://m.levmob.com/>"
your_demain       | -                 | levmob.com
lastpagelink      | -                 | levmob.com
lastpagetext      | -                 | leweixiu
PREFIX_URL        | -                 | "<http://m.levmob.com/>"
PREFIX_HOST       | -                 | "<http://m.levmob.com/api.php>"
API_HOSTADDRESS   | -                 | "<http://m.levmob.com/>"
FONTURL           | 规定字体上传和渲染需要的路径    | "<http://m.levmob.com/>"
UPLOADTOURL       | 文件上传路径            | "<http://m.levmob.com/Uploads>"
UPLOADS_FILES_URL | 文件上传成功之后的回掉拼接的url | "<http://m.levmob.com/Uploads>"

### 位置(这几个属性不建议直接调用，最好通过相应方法获取)

属性         | 含义   | 值
---------- | ---- | ------
currentIp  | ip地址 | ''
currentPos | 位置   | object
geoPoint   | 经纬度  | 数组

### CjCate

属性            | 含义                             | 值
------------- | ------------------------------ | -
cateList      | 所有类型的CjCate                    | -
tplList       | tplType类型的CjCate               | -
bgList        | bgType类型的CjCate                | -
sceneList     | scene_type类型的CjCate            | -
musTypes      | musType类型的CjCate               | -
TPL_ARTICLE   | 一个scene_tpl_article类型的CjCate   | -
TPL_LONGPAGE  | 一个scene_tpl_longpage类型的CjCate  | -
TPL_MULTIPAGE | 一个scene_tpl_multipage类型的CjCate | -
TPL_LEVXIUAD  | 一个scene_tpl_levxiu类型的CjCate    | -

## 方法

方法           | from                                                                 | 传入值 | 返回值  | 含义
------------ | -------------------------------------------------------------------- | --- | ---- | --------------------------
getScale     | -                                                                    | -   | -    | 获得缩放比例
getScaleX    | -                                                                    | -   | -    | 获得缩放比例
getScaleY    | -                                                                    | -   | -    | 获得缩放比例
mobilecheck  | -                                                                    | -   | -    | 验证是否是手机
isWeixin     | -                                                                    | -   | -    | 验证是否是微信环境
isAndroid    | -                                                                    | -   | -    | 验证是否是安卓系统
tabletCheck  | -                                                                    | -   | -    | 验证是否是平板设备
getCate      | CjCate                                                               | -   | -    | 获取列表 --场景类型，背景类型，音乐类型，模板类型
getTplType   | CjCate                                                               | -   | -    | 获取tplType类型的cjCate列表
getBgType    | CjCate                                                               | -   | -    | 获取bgType类型的cjCate列表
getSceneType | CjCate                                                               | -   | then | 获取scene_type类型的cjCate列表
getMusicType | CjCate                                                               | -   | -    | 获取musType类型的cjCate列表
getIp        | <http://m.levmob.com/ip>                                             | -   | then | 获取ip地址
getPos       | navigator.geolocation.getCurrentPosition 或 <http://m.levmob.com/pos> | -   | then | 获取地理位置（currentPos）
