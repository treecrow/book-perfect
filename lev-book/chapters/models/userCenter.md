# user-center

## 字段

字段        | 含义
--------- | --
sceneId   | -
sceneName | -
offset    | -

## 方法

方法                 | accepts                                                   | returns                   | 含义
------------------ | --------------------------------------------------------- | ------------------------- | --
isExisted          | [user.email, user.phone]                                  | (user-object)             | -
registerByEmail    | [user.uname, user.email, user.password]                   | (user-object, msg-string) | -
registerByPhone    | [user.uname, user.phone, user.password, user.activeCode]  | (user-object, msg-string) | -
login              | [user.password, user.phone, user.email]                   | (user-object)             | -
loginByEmail       | [email, password ]                                        | (user-object)             | -
loginByPhone       | [phone, password ]                                        | (user-object)             | -
checkToken         | [user.userid, user.token]                                 | (user-object)             | -
setActivePhoneCode | [phone]                                                   | (user-object)             | -
updateUserName     | [user.userid, user.token, user.uname]                  | (user-object)             | -
updateCard         | [user.userid, user.token, user.uname, user.heading] | (user-object)             | -
updatePassword     | [user.userid, user.token, user.password]               | (user-object)             | -
updateEmail        | [user.userid, user.token, user.email]                  | (user-object)             | -
updatePhone        | [user.userid, user.token, user.phone]                  | (user-object)             | -
getMessages        | {user: object}                                            | (msg-string)              | -
