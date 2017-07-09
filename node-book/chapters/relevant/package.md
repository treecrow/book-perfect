# package

## [package.json字段全解](http://blog.csdn.net/woxueliuyun/article/details/39294375)

字段                   | more
-------------------- | ---------------------------------------------------------------------------
name                 | 模块名
version              | 模块版本号
repository           | 可选字段。用于指示代码存放的位置
description          | 模块描述
keywords             | 模块关键字
dependencies         | 可选字段，指示当前包所依赖的其他包
devDependencies      | 可选字段。如果只需要下载使用某些模块，而不下载这些模块的测试和文档框架，放在这个下面比较不错
peerDependencies     | 可选字段。兼容性依赖。如果你的包是插件，适合这种方式
bundledDependencies  | 可选字段。发布包时同时打包的其他依赖
optionalDependencies | 可选字段。如果你想在某些依赖即使没有找到，或则安装失败的情况下，npm都继续执行。那么这些依赖适合放在这里
license              | 可选字段
homepage             | 模块的主页
bugs                 | 可选字段，问题追踪系统的URL或邮箱地址
author               | 模块作者
contributors         | 模块的贡献者
files                | 可选字段，项目包含的一组文件。如果是文件夹，文件夹下的文件也会被包含
main                 | 可选字段。这个字段的值是你程序主入口模块的ID。如果其他用户需要你的包，当用户调用require()方法时，返回的就是这个模块的导出（exports）
bin                  | 可选字段。很多的包都会有执行文件需要安装到PATH中去
directories          | 用于指示包的目录结构
directories.lib      | 指示库文件的位置
scripts              | 可选字段，object。Key是生命周期事件名，value是在事件点要跑的命令
config               | 可选字段，object。Config对象中的值在Scripts的整个周期中皆可用，专门用于给Scripts提供配置参数
engines              | 可选字段。既可以指定node版本,也可以指定npm版本
engineStrick         | 可选字段，布尔值。如果你肯定你的程序只能在制定的engine上运行，设置为true
os                   | 可选字段。指定模块可以在什么操作系统上运行
cpu                  | 可选字段。指定CPU型号
preferGlobal         | 可选字段，布尔值。如果你的包是个命令行应用程序，需要全局安装，就可以设为true
private              | 可选字段，布尔值。如果private为true，npm会拒绝发布。这可以防止私有repositories不小心被发布出去
publishConfig        | 可选字段。发布时使用的配置值放这

## npm scripts

### 简写

命令          | more
----------- | ------------------------------------------------------
npm start   | 相当于 `npm run start`
npm stop    | 相当于 `npm run stop`
npm test    | 相当于 `npm run test`
npm restart | 相当于 `npm run stop && npm run restart && npm run start`
npm run xxx | 其他的都不能忽略run

### 执行顺序

命令                                       | more
---------------------------------------- | -------------------------
npm run script1.js & npm run script2.js  | 并行执行
npm run script1.js && npm run script2.js | 继发执行（即只有前一个任务成功，才执行下一个任务）

### 钩子

命令            | more
------------- | ------------------------------------------------------------------------------------
npm run build | 相当于 `npm run prebuild && npm run build && npm run postbuild`(如果 build 有pre和post两个钩子)

- npm 默认的钩子列表

钩子                         | more
-------------------------- | ----
prepublish，postpublish     | -
preinstall，postinstall     | -
preuninstall，postuninstall | -
preversion，postversion     | -
pretest，posttest           | -
prestop，poststop           | -
prestart，poststart         | -
prerestart，postrestart     | -

### 配置环境

```json
“dev-mac”: " (export) NODE_ENV=development && xxx",
“dev-win”: " set NODE_ENV=development && xxx",
```

## 变量

> npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量

变量                              | more
------------------------------- | ----
process.env.npm_package_name    | -
process.env.npm_package_version | -
