# npm 命令行

| class      | 命令                                                        | more                                                                                                               |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| npm        | [npm](https://www.npmjs.cn/cli/npm)                         | -                                                                                                                  |
| run-script | [run-script](https://www.npmjs.cn/cli/run-script)           | Run arbitrary package scripts                                                                                      |
| ^          | [test](https://www.npmjs.cn/cli/test)                       | `npm run test`(提供 pretest，posttest npm-script 钩子)                                                             |
| ^          | [stop](https://www.npmjs.cn/cli/stop)                       | `npm run stop`(提供 prestop，poststop npm-script 钩子)                                                             |
| ^          | [start](https://www.npmjs.cn/cli/start)                     | `npm run start`(提供 prestart，poststart npm-script 钩子)                                                          |
| ^          | [restart](https://www.npmjs.cn/cli/restart)                 | `npm run restart`=`npm run stop && npm run restart && npm run start`(提供 prerestart，postrestart npm-script 钩子) |
| ^          | npm run env                                                 | 列出在运行时脚本可用的环境变量                                                                                     |
| install    | [install](https://www.npmjs.cn/cli/install)                 | 安装包（提供 preinstall，postinstall npm-script 钩子）                                                             |
| ^          | [install-ci-test](https://www.npmjs.cn/cli/install-ci-test) | Install a project with a clean slate and run tests                                                                 |
| ^          | [install-test](https://www.npmjs.cn/cli/install-test)       | 安装依赖包并运行测试                                                                                               |
| ^          | [uninstall](https://www.npmjs.cn/cli/uninstall)             | 移除包（提供 preuninstall，postuninstall npm-script 钩子）                                                         |
| publish    | [publish](https://www.npmjs.cn/cli/publish)                 | 发布模块(提供 prepublish，postpublish npm-script 钩子)                                                             |
| ^          | [unpublish](https://www.npmjs.cn/cli/unpublish)             | 撤销发布自己发布过的某个包                                                                                         |
| ===        | ===                                                         | ===                                                                                                                |
| ^          | [version](https://www.npmjs.cn/cli/version)                 | 查看包版本号（提供 preversion，postversion npm-script 钩子）                                                       |
| ^          | [help](https://www.npmjs.cn/cli/help)                       | Get help on npm                                                                                                    |
| ^          | [help-search](help-https://www.npmjs.cn/cli/search)         | Search npm help documentation                                                                                      |
| ^          | [adduser](https://www.npmjs.cn/cli/adduser)                 | 添加注册表用户帐户                                                                                                 |
| ^          | [access](https://www.npmjs.cn/cli/access)                   | Set access level on published packages                                                                             |
| ^          | [audit](https://www.npmjs.cn/cli/audit)                     | Run a security audit                                                                                               |
| ^          | [bin](https://www.npmjs.cn/cli/bin)                         | 显示 npm 的 bin 文件夹的路径                                                                                       |
| ^          | [bugs](https://www.npmjs.cn/cli/bugs)                       | Bugs for a package in a web browser maybe                                                                          |
| ^          | [build](https://www.npmjs.cn/cli/build)                     | 构建一个包                                                                                                         |
| ^          | [cache](https://www.npmjs.cn/cli/cache)                     | Manipulates packages cache                                                                                         |
| ^          | [ci](https://www.npmjs.cn/cli/ci)                           | Install a project with a clean slate                                                                               |
| ^          | [completion](https://www.npmjs.cn/cli/completion)           | Tab Completion for npm                                                                                             |
| ^          | [config](https://www.npmjs.cn/cli/config)                   | Manage the npm configuration files                                                                                 |
| ^          | [dedupe](https://www.npmjs.cn/cli/dedupe)                   | Reduce duplication                                                                                                 |
| ^          | [deprecate](https://www.npmjs.cn/cli/deprecate)             | 作废指定包的指定版本                                                                                               |
| ^          | [dist-tag](https://www.npmjs.cn/cli/dist-tag/)              | Modify package distribution tags                                                                                   |
| ^          | [docs](https://www.npmjs.cn/cli/docs)                       | Docs for a package in a web browser maybe                                                                          |
| ^          | [doctor](https://www.npmjs.cn/cli/doctor)                   | Check your environments                                                                                            |
| ^          | [edit](https://www.npmjs.cn/cli/edit)                       | Edit an installed package                                                                                          |
| ^          | [explore](https://www.npmjs.cn/cli/explore)                 | Browse an installed package                                                                                        |
| ^          | [hook](https://www.npmjs.cn/cli/hook)                       | Manage registry hooks                                                                                              |
| ^          | [init](https://www.npmjs.cn/cli/init)                       | create a package.json file                                                                                         |
| ^          | [link](https://www.npmjs.cn/cli/link)                       | 符号链接包文件夹                                                                                                   |
| ^          | [logout](https://www.npmjs.cn/cli/logout)                   | Log out of the registry                                                                                            |
| ^          | [ls](https://www.npmjs.cn/cli/ls)                           | 查看安装过到包                                                                                                     |
| ^          | [org](https://www.npmjs.cn/cli/org)                         | Manage orgs                                                                                                        |
| ^          | [outdated](https://www.npmjs.cn/cli/outdated)               | 检测模块是否有过期的                                                                                               |
| ^          | [owner](https://www.npmjs.cn/cli/owner)                     | Manage package owners                                                                                              |
| ^          | [pack](https://www.npmjs.cn/cli/pack)                       | Create a tarball from a package                                                                                    |
| ^          | [ping](https://www.npmjs.cn/cli/ping)                       | Ping npm 注册表                                                                                                    |
| ^          | [prefix](https://www.npmjs.cn/cli/prefix)                   | 显示（目录）前缀                                                                                                   |
| ^          | [profile](https://www.npmjs.cn/cli/profile)                 | Change settings on your registry profile                                                                           |
| ^          | [prune](https://www.npmjs.cn/cli/prune)                     | 移除无关的包                                                                                                       |
| ^          | [rebuild](https://www.npmjs.cn/cli/rebuild)                 | 重新构建包                                                                                                         |
| ^          | [repo](https://www.npmjs.cn/cli/repo)                       | 在浏览器中打开指定包的源码仓库页面                                                                                 |
| ^          | [root](https://www.npmjs.cn/cli/root)                       | 显示 npm 根目录                                                                                                    |
| ^          | [search](https://www.npmjs.cn/cli/search)                   | 搜索模块                                                                                                           |
| ^          | [shrinkwrap](https://www.npmjs.cn/cli/shrinkwrap)           | 锁定依赖包的版本                                                                                                   |
| ^          | [star](https://www.npmjs.cn/cli/star)                       | 标记你所喜欢的包                                                                                                   |
| ^          | [stars](https://www.npmjs.cn/cli/stars)                     | 查看 star 过的包                                                                                                   |
| ^          | [team](https://www.npmjs.cn/cli/team)                       | Manage organization teams and team memberships                                                                     |
| ^          | [token](https://www.npmjs.cn/cli/token)                     | Manage your authentication tokens                                                                                  |
| ^          | [update](https://www.npmjs.cn/cli/update)                   | 更新模块                                                                                                           |
| ^          | [view](https://www.npmjs.cn/cli/view)                       | View registry info                                                                                                 |
| ^          | [whoami](https://www.npmjs.cn/cli/whoami)                   | 显示 npm 用户名                                                                                                    |
