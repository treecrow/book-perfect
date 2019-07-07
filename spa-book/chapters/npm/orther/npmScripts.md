# npm scripts

## 执行顺序

| 命令 | more                                 |
| ---- | ------------------------------------ |
| &    | 并行执行                             |
| &&   | 链式任务（一个任务接着一个任务运行） |
| <    | 将文件内容输入到一个命令             |
| >    | 将命令输出重定向到文件               |
| \    | 将一个命令的输出重定向到另一个命令   |

## 钩子

| 命令          | more                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------- |
| npm run build | 相当于 `npm run prebuild && npm run build && npm run postbuild`(如果 build 有 pre 和 post 两个钩子) |

* npm 默认的钩子列表

| 钩子                                          | more                    |
| --------------------------------------------- | ----------------------- |
| prestart，start, poststart(npm start)         | -                       |
| prestop，stop, poststop(npm stop)             | -                       |
| prerestart，restart, postrestart(npm restart) | -                       |
| pretest，test, posttest(npm test)             | -                       |
| prepublish，postpublish                       | -                       |
| preinstall，postinstall                       | -                       |
| preuninstall，postuninstall                   | -                       |
| preversion，postversion                       | -                       |
| npm run                                       | 查看可以运行的 npm 命令 |
| npm run env                                   | 列出所有环境变量        |

## 配置环境

```json
“dev-mac”: " (export) NODE_ENV=development && xxx",
“dev-win”: " set NODE_ENV=development && xxx",
```

## 变量

> npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量

| 变量                            | more                                                             |
| ------------------------------- | ---------------------------------------------------------------- |
| process.env.npm_package_name    | -                                                                |
| process.env.npm_package_version | -                                                                |
| process.env.npm_lifecycle_event | 返回当前正在运行的脚本名称                                       |
| `process.env.npm_package_`      | 通过`npm_package_`前缀，npm 脚本可以拿到 package.json 里面的字段 |
| `npm_config_`                   | npm 脚本还可以通过`npm_config_`前缀，拿到 npm 的配置变量         |
