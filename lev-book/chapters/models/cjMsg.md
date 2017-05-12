# cj-msg

## 字段

字段            | 含义
------------- | ----
id            | 消息id
sceneidBigint | 场景id
nameVarchar   | -
urlVarchar    | -
contentText   | 消息内容
createtime    | 创建时间

## 我设想的字段列表

字段          | 含义
----------- | ------------------------
id          | 消息id
createtime  | 创建时间
broadcast   | 是否广播（推送给所有用户，广播内容暂时无法删除）
contentText | 消息内容
userid      | 消息触发者
uname       | 用户名
action      | 触发行为
sceneid     | 场景id
scenename   | 场景名称

## 方法列表

方法                                               | 作用
------------------------------------------------ | ------------------
createMsg(userid,uname,action,sceneid,scenename) | 创建普通msg
createPublicMsg(userid,contentText)              | 创建广播msg(需验证userid）
