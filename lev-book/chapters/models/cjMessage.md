# cj-message（已读model）

## 字段

字段       | 含义
-------- | ------
id       | 已读消息id
userid   | 用户id
newidInt | -

## 我设想的字段

字段     | 含义
------ | ------
id     | id
userid | 用户id
msgid  | 已读消息id

## 获取用户信息列表

语法                                                     | 作用                     | 返回消息
------------------------------------------------------ | ---------------------- | -----------------------------------------------------
cjMsg.find({where: {broadcast: true}})                 | 获取广播msg                | msg.contentText
cjMsg.find({where: {userid: curUserid}})               | 获取我触发的msg列表            | 你+msg.action+了场景+msg.sceneidBigint
cjMsg.find({where: {sceneidBigint: mySceneid}})        | 获取我的作品相关的msg列表（需要遍历）   | 你的场景+msg.sceneidBigint+已经被用户+msg.userid+msg.action
cjMsg.find({where: {sceneidBigint: collectorSceneid}}) | 获取我收藏的场景相关的msg列表（需要遍历） | 你收藏的的场景+msg.sceneidBigint+已经被用户+msg.userid+msg.action
cjMessage.find({where: {userid: curUserid}})           | 获取当前用户所有已读消息列表         | -

### 进一步处理

1. msgList 去重
2. 通过messageList过滤msgList
3. msgList

## 方法列表

方法                          | 作用
--------------------------- | ----------
getMsg(userid)              | 获取某个用户的msg
createReadmsg(userid,msgid) | 创建已读消息
