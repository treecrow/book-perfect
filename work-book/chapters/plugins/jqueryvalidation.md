# jqueryvalidation

## 相关文档

* [jqueryvalidation](https://jqueryvalidation.org/)

## 方法列表

| method                           | more                                     |
| -------------------------------- | ---------------------------------------- |
| $.validator.addMethod()          | Add a custom validation method           |
| $.validator.format()             | Replaces {n} placeholders with arguments |
| $.validator.setDefaults()        | Modify default settings for validation   |
| $.validator.addClassRules()      | Add a compound class method              |
| var Validator = $form.validate() | 校验选中的表单                           |
| $form.valid()                    | 检测选中的表单（或元素）是否通过校验     |
| $form.rules()                    | 读取、添加、删除校验规则                 |
| Validator.form()                 | Validates the form.                      |
| Validator.element()              | Validates a single element.              |
| Validator.resetForm()            | Resets the controlled form.              |
| Validator.showErrors()           | Show the specified messages.             |
| Validator.numberOfInvalids()     | Returns the number of invalid fields.    |
| Validator.destroy()              | Destroys this instance of validator.     |

## 内置的校验方法

| method      | more                                                  |
| ----------- | ----------------------------------------------------- |
| required    | Makes the element required                            |
| remote      | Requests a resource to check the element for validity |
| minlength   | Makes the element require a given minimum length      |
| maxlength   | Makes the element require a given maximum length      |
| rangelength | Makes the element require a given value range         |
| min         | Makes the element require a given minimum             |
| max         | Makes the element require a given maximum             |
| range       | Makes the element require a given value range         |
| step        | Makes the element require a given step                |
| email       | Makes the element require a valid email               |
| url         | Makes the element require a valid url                 |
| date        | Makes the element require a date                      |
| dateISO     | Makes the element require an ISO date                 |
| number      | Makes the element require a decimal number            |
| digits      | Makes the element require digits only                 |
| equalTo     | Requires the element to be the same as another one    |

## 扩展选择器

| 选择器     | more                                     |
| ---------- | ---------------------------------------- |
| :blank     | Selects all elements with a blank value  |
| :filled    | Selects all elements with a filled value |
| :unchecked | Selects all elements that are unchecked  |
