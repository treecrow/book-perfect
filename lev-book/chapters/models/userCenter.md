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
register|[user.uname, user.email, user.phone, user.passwdmd5] |(user-object, msg-string)|-
login|[user.passwdmd5, user.phone, user.email] |(user-object)|-
loginByEmail|[email, passwd ] |(user-object)|-
loginByPhone|[phone, passwd ] |(user-object)|-
checkToken|[user.userid, user.token] |(user-object)|-
setActiveMailCode|[email]|(user-object)|-
setActivePhoneCode|[phone]|(user-object)|-
activeByMail|[user.email, user.userActivationKey]|(user-object)|-
activeByPhone|[user.phone, user.userActivationKey]|(user-object)|-
updateUserName|[user.userid, user.token, user.uname] |(user-object)|-
updateCard|[user.userid, user.token, user.uname, user.headimg] |(user-object)|-
updatePassword|[user.userid, user.token, user.passwd] |(user-object)|-
updateEmail|[user.userid, user.token, user.email] |(user-object)|-
updatePhone|[user.userid, user.token, user.phone]|(user-object)|-
getMessages|{user: object} |(msg-string)|-
