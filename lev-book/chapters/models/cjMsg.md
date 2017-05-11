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

字段         | 含义
---------- | ------------------------
broadcast  | 是否广播（推送给所有用户，广播内容暂时无法删除）

## 消息逻辑

### 舍弃cj-message

### 用户---createMsg(sceneid,userid,xxx)

对象             | contentText
-------------- | --------------------------
owner          | 你的sceneid场景已被userid xxx
userid         | 你已成功 xxx sceneid场景
collector      | 你收藏的sceneid场景也被 userid xxx
userid = owner | -

### 用户---getMsg(userid)
> userid字段匹配的msg + broadcast=true的msg
> msgList按照创建时间排序

### 用户---deleteMsg(msgid,user)
> user是用户信息，删除消息需要后端验证,msg的userid也要匹配

### 开发者---createBdMsg(contentText, expireTime)

> 到expireTime后自动删除（如何做？轮询的方式不好）
