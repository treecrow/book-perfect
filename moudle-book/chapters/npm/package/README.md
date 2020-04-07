# package

## 相关文档

- [Working with package.json](https://www.npmjs.cn/getting-started/using-a-package.json/)
- [package.json](https://www.npmjs.cn/files/package.json/)

## 字段列表

| key                     | more                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| name                    | 模块名字                                                                                                        |
| version                 | 模块版本号                                                                                                      |
| keywords                | 模块关键字                                                                                                      |
| description             | 模块描述(不填写则使用 README.md 中的描述)                                                                       |
| private                 | 如果你在包的 package.json 中设置"private": true，则 npm 会拒绝发布它                                            |
| bin                     | 可选字段。很多的包都会有执行文件需要安装到 PATH 中去                                                            |
| repository              | 指明你的代码被托管在何处，这对那些想要参与到这个项目中的人来说很有帮助                                          |
| author                  | Your Name <email@example.com> (http://example.com)                                                              |
| license                 | 项目许可证                                                                                                      |
| bugs                    | 项目 bug 提交的页面                                                                                             |
| homepage                | 项目主页                                                                                                        |
| [scripts](./scripts.md) | scripts 字段是一个由脚本命令组成的字典，这些命令运行在包的各个生命周期中                                        |
| dependencies            | 指定了依赖的包名和其版本范围的映射                                                                              |
| devDependencies         | 可选字段，开发环境下的依赖包，格式同 dependencies 属性                                                          |
| config                  | config 字段是一个对象，可以用来配置包脚本中的跨版本参数                                                         |
| files                   | 可选字段，项目包含的一组文件                                                                                    |
| readmeFilename          | 项目文档（默认为 README.md）                                                                                    |
| main                    | 可选字段，建议必填。这个字段的值是你程序主入口模块的 ID                                                         |
| browserslist            | 浏览器兼容情况                                                                                                  |
| ===                     | ===                                                                                                             |
| directories             | CommonJS Packages 规范说明了几种你可以用 directories 对象来标示你的包结构的方法                                 |
| directories.lib         | 告诉你库文件夹的位置，目前没有什么地方需要用到 lib 文件夹，但是这是重要的元信息                                 |
| directories.bin         | 如果你在 directories.bin 中指定一个 bin 目录，在这个目录中的所有文件都会被当做在 bin 来使用                     |
| directories.man         | directories.man 指定的文件夹里都是 man 文件，系统通过遍历这个文件夹来生成一个 man 的数组                        |
| directories.doc         | 把 markdown 文件放在这。也许某一天这些文件将被漂亮地展示出来，不过这仅仅是也许                                  |
| directories.example     | 把示例脚本放在这。也许某一天会被用到                                                                            |
| directories.test        | -                                                                                                               |
| contributors            | -                                                                                                               |
| man                     | 指定一个单一的文件名或一个文件名数组来让 man 程序使用                                                           |
| peerDependencies        | 可选字段。兼容性依赖。如果你的包是插件，适合这种方式                                                            |
| bundledDependencies     | 可选字段。发布包时同时打包的其他依赖                                                                            |
| optionalDependencies    | 可选字段。如果你想在某些依赖即使没有找到，或则安装失败的情况下，npm 都继续执行。那么这些依赖适合放在这里        |
| engines                 | 可选字段。既可以指定 node 版本，也可以指定 npm 版本                                                             |
| engineStrict            | -                                                                                                               |
| os                      | 指定模块运行的操作系统                                                                                          |
| cpu                     | 如果你的代码只能运行在特定的 cpu 架构上，你可以指明                                                             |
| preferGlobal            | 如果你的包是一个需要进行全局安装的命令行应用，需要设置 preferGlobal 为 true，如果这个包被本地安装会报出一个警告 |
| publishConfig           | 这是一个在 publish-time 时会用到的配置集合                                                                      |
