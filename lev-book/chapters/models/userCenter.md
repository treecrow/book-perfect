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
isExisted|{user: object} |(user-object)|-
register|{user: object} |(user-object,msg-string)|-
login|{user: object} |(user-object)|-
loginByEmail|{email: string, passwd: string} |(user-object)|-
loginByPhone|{phone: string, passwd: string} |(user-object)|-
checkToken|{user: object} |(user-object)|-
updateCard|{user: object} |(user-object)|-
updatePassword|{user: object} |(user-object)|-
updateEmail|{user: object} |(user-object)|-
updatePhone|{user: object} |(user-object)|-
getMessages|{user: object} |(msg-string)|-
