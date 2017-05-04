# configService

- service.config
- factory
- configService

## 属性

属性                | 含义                  | 值
----------------- | ------------------- | -------------------------------
WEBSERVER         | -                   | "<http://m.levmob.com/>"
your_demain       | -                   | levmob.com
lastpagelink      | -                   | levmob.com
lastpagetext      | -                   | leweixiu
PREFIX_URL        | -                   | "<http://m.levmob.com/>"
PREFIX_HOST       | -                   | "<http://m.levmob.com/api.php>"
API_HOSTADDRESS   | -                   | "<http://m.levmob.com/>"
FONTURL           | 规定字体上传和渲染需要的路径      | "<http://m.levmob.com/>"
UPLOADTOURL       | 文件上传路径              | "<http://m.levmob.com/Uploads>"
UPLOADS_FILES_URL | 文件上传成功之后的回掉拼接的url   | "<http://m.levmob.com/Uploads>"
cateList          | 所有类型的CjCate         | -
tplList           | tplType类型的CjCate    | -
bgList            | bgType类型的CjCate     | -
sceneList         | scene_type类型的CjCate | -
musTypes          | musType类型的CjCate    | -

## 方法

方法           | from   | 传入值 | 返回值  | 含义
------------ | ------ | --- | ---- | --------------------------
getScale     | -      | -   | -    | -
getScaleX    | -      | -   | -    | -
getScaleY    | -      | -   | -    | -
mobilecheck  | -      | -   | -    | -
isWeixin     | -      | -   | -    | -
isAndroid    | -      | -   | -    | -
tabletCheck  | -      | -   | -    | -
getCate      | CjCate | -   | -    | 获取列表 --场景类型，背景类型，音乐类型，模板类型
getTplType   | CjCate | -   | -    | 获取tplType类型的cjCate列表
getBgType    | CjCate | -   | -    | 获取bgType类型的cjCate列表
getSceneType | CjCate | -   | then | 获取scene_type类型的cjCate列表
getMusicType | CjCate | -   | -    | 获取musType类型的cjCate列表
