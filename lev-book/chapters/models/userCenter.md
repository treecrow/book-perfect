# user-center

## 字段
字段|含义
---|---
sceneId|-
sceneName|-
offset|-

## 方法
方法|accepts|returns|含义
---|---|---|---
isExisted|[user.email, user.phone] |(user-object)|-
register|[ user.uname, user.email, user.phone, user.passwdmd5] |(user-object, msg-string)|-
login|{ user.passwdmd5, user.phone, user.email} |(user-object)|-
loginByEmail|[email, passwd] |(user-object)|-
loginByPhone|[phone, passwd] |(user-object)|-
checkToken|[user.userid, user.userid] |(user-object)|-
updateCard|{user: object} |(user-object)|-
updatePassword|{user: object} |(user-object)|-
updateEmail|{user: object} |(user-object)|-
updatePhone|{user: object} |(user-object)|-
getMessages|{user: object} |(msg-string)|-
