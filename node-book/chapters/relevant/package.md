# package

## [package.json 字段全解](http://blog.csdn.net/woxueliuyun/article/details/39294375)

| 字段                 | more                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| name                 | 包名                                                                                                                            |
| version              | 包的版本号                                                                                                                      |
| description          | 包的描述                                                                                                                        |
| homepage             | 包的官网 url                                                                                                                    |
| author               | 包的作者姓名                                                                                                                    |
| contributors         | 包的其他贡献者姓名                                                                                                              |
| dependencies         | 可选字段，依赖包列表                                                                                                            |
| repository           | 可选字段。包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上                                                         |
| main                 | 可选字段。 main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js |
| keywords             | 关键字                                                                                                                          |
| devDependencies      | 可选字段。如果只需要下载使用某些模块，而不下载这些模块的测试和文档框架，放在这个下面比较不错                                    |
| peerDependencies     | 可选字段。兼容性依赖。如果你的包是插件，适合这种方式                                                                            |
| bundledDependencies  | 可选字段。发布包时同时打包的其他依赖                                                                                            |
| optionalDependencies | 可选字段。如果你想在某些依赖即使没有找到，或则安装失败的情况下，npm 都继续执行。那么这些依赖适合放在这里                        |
| license              | 可选字段                                                                                                                        |
| bugs                 | 可选字段，问题追踪系统的 URL 或邮箱地址                                                                                         |
| files                | 可选字段，项目包含的一组文件。如果是文件夹，文件夹下的文件也会被包含                                                            |
| bin                  | 可选字段。很多的包都会有执行文件需要安装到 PATH 中去                                                                            |
| directories          | 用于指示包的目录结构                                                                                                            |
| directories.lib      | 指示库文件的位置                                                                                                                |
| scripts              | 可选字段，object。Key 是生命周期事件名，value 是在事件点要跑的命令                                                              |
| config               | 可选字段，object。Config 对象中的值在 Scripts 的整个周期中皆可用，专门用于给 Scripts 提供配置参数                               |
| engines              | 可选字段。既可以指定 node 版本,也可以指定 npm 版本                                                                              |
| engineStrick         | 可选字段，布尔值。如果你肯定你的程序只能在制定的 engine 上运行，设置为 true                                                     |
| os                   | 可选字段。指定模块可以在什么操作系统上运行                                                                                      |
| cpu                  | 可选字段。指定 CPU 型号                                                                                                         |
| preferGlobal         | 可选字段，布尔值。如果你的包是个命令行应用程序，需要全局安装，就可以设为 true                                                   |
| private              | 可选字段，布尔值。如果 private 为 true，npm 会拒绝发布。这可以防止私有 repositories 不小心被发布出去                            |
| publishConfig        | 可选字段。发布时使用的配置值放这                                                                                                |
| options              | 可选字段。定义一些字段，可以在 scripts 中通过 $npm_package_options_someFail 的方式饮用                                          |
