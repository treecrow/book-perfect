# [InquirerJs](https://github.com/SBoudrias/Inquirer.js)

## api list

| api                                              | more                                          |
| ------------------------------------------------ | --------------------------------------------- |
| inquirer.prompt(questions) -> promise            | Launch the prompt interface (inquiry session) |
| inquirer.registerPrompt(name, prompt)            | Register prompt plugins under name.           |
| inquirer.createPromptModule() -> prompt function | Create a self contained inquirer module       |
| new inquirer.Separator()                         | A separator can be added to any choices array |

## Question

| option      | type                                 | more                                                                                                                                                                                                            |
| ----------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String                               | 问题的 name（问题具柄）                                                                                                                                                                                         |
| message     | String/Function                      | 问题的描述                                                                                                                                                                                                      |
| type        | String                               | 提问问题的形式（输入、选择、判断等）                                                                                                                                                                            |
| default     | String/Number/Boolean/Array/Function | 问题的默认值（默认答案）                                                                                                                                                                                        |
| choices     | Array/Function                       | 答案列表                                                                                                                                                                                                        |
| validate    | Function                             | 结合问题和回答，验证答案是否符合问题的要求                                                                                                                                                                      |
| filter      | Function                             | 过滤答案                                                                                                                                                                                                        |
| transformer | Function                             | Receive the user input, answers hash and option flags, and return a transformed value to display to the user. The transformation only impacts what is shown while editing. It does not modify the answers hash. |
| when        | Function, Boolean                    | Receive the current user answers hash and should return true or false depending on whether or not this question should be asked. The value can also be a simple boolean.                                        |
| pageSize    | Number                               | Change the number of lines that will be rendered when using list, rawList, expand or checkbox.                                                                                                                  |
| prefix      | String                               | Change the default prefix message.                                                                                                                                                                              |
| suffix      | String                               | Change the default suffix message.                                                                                                                                                                              |

## Answers

| key            | more                                                           |
| -------------- | -------------------------------------------------------------- |
| name           | -                                                              |
| confirm        | (Boolean)                                                      |
| input          | User input (filtered if filter is defined) (String)            |
| number         | User input (filtered if filter is defined) (Number)            |
| rawlist / list | Selected choice value (or name if no value specified) (String) |
