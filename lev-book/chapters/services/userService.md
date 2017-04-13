# userService

## 方法
方法|对应后端方法|传入值|返回值|含义
---|---|---|---|---
save|-|传入值|返回值|与updateLocal功能重复
updateLocal|-|传入值|返回值|-
getUserToken|-|-|user|-
isExisted|isExisted|userInfo|bool|-
register|register|userInfo|then|-
createUser|-|传入值|返回值|与register功能重复
login|login,loginByEmail,loginByPhone|userLogin|then|-
logout|-|-|-|-
checkToken|checkToken|userInfo|bool|-
setActiveMailCode|setActiveMailCode|userInfo|then|-
setActivePhoneCode|setActivePhoneCode|userInfo|then|-
activeByMail|activeByMail|userInfo|then|-
activeByPhone|activeByPhone|userInfo|then|-
changUserName|changUserName|userInfo|-|-
updateCard|updateCard|userInfo|then|-
updatePassword|updatePassword|userInfo|then|-
updateEmail|updateEmail|userInfo|then|-
updatePhone|updatePhone|userInfo|then|-
findById|-|传入值|返回值|-
findByEmail|-|传入值|返回值|-
findByPhoneNo|-|传入值|返回值|-
findByUserPasswd|-|传入值|返回值|-
checkEmail|-|传入值|返回值|-
checkPhoneNo|-|传入值|返回值|-
getMessage|-|传入值|返回值|-
savecomment|-|传入值|返回值|-


