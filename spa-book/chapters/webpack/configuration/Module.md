# [Module](https://webpack.js.org/configuration/module/)

> 决定如何处理项目中不同类型的模块

| option                        | more                                                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| module.noParse                | 阻止 Webpack 处理与给定正则表达式匹配的任何文件                                                          |
| module.rules                  | An array of Rules which are matched to requests when modules are created                                 |
| module.someRule.test          | Rule.test is a shortcut to Rule.resource.test                                                            |
| module.someRule.exclude       | 同样是一个字符串或者字符串数组，指定目录中的文件不需要走这个规则                                         |
| module.someRule.include       | 是一个字符串或者字符串数组，指定目录中的文件需要走这个规则                                               |
| module.someRule.resource      | 就是对 text/include/exclude 的一个对象包装，和他们单独写没有区别                                         |
| module.someRule.issuer        | 和 resource 有异曲同工的作用，不过区别在于它是将这个 rule 应用于哪个文件以及这个文件所导入的所有依赖文件 |
| module.someRule.resourceQuery | 和 resource 用法一样，不过针对的是匹配结果'?'后面的路径参数，可以调用 resource 中的 text 等              |
| module.someRule.oneOf         | 表示对该资源只应用第一个匹配的规则                                                                       |
| module.someRule.use           | 是对 useEntry 的集合，并且对每一个入口指定使用一个 loader                                                |
| module.someRule.loaders       | Rule.loaders is an alias to Rule.use                                                                     |
| module.someRule.loader        | Rule.loader is a shortcut to Rule.use: [ { loader } ]                                                    |
| module.someRule.enforce       | -                                                                                                        |
| module.someRule.options       | -                                                                                                        |
| module.someRule.parser        | -                                                                                                        |
| module.someRule.rules         | -                                                                                                        |
| module.someRule.sideEffects   | -                                                                                                        |
| module.someRule.type          | -                                                                                                        |
