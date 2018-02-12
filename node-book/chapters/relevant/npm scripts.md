# npm scripts

## 简写

命令          | more
----------- | ------------------------------------------------------
npm start   | 相当于 `npm run start`
npm stop    | 相当于 `npm run stop`
npm test    | 相当于 `npm run test`
npm restart | 相当于 `npm run stop && npm run restart && npm run start`
npm run xxx | 其他的都不能忽略run

## 执行顺序

命令                                       | more
---------------------------------------- | -------------------------
npm run script1.js & npm run script2.js  | 并行执行
npm run script1.js && npm run script2.js | 继发执行（即只有前一个任务成功，才执行下一个任务）

## 钩子

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

## 配置环境

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