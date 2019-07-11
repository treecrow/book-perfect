# npm 命令行

| class        | 命令                                                        | more                                                                                                               |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| npm          | [npm](https://www.npmjs.cn/cli/npm)                         | -                                                                                                                  |
| 认证         | [adduser](https://www.npmjs.cn/cli/adduser)                 | 添加/登录 注册表用户帐户                                                                                           |
| ^            | [logout](https://www.npmjs.cn/cli/logout)                   | 登出注册表用户帐户                                                                                                 |
| ^            | [token](https://www.npmjs.cn/cli/token)                     | Manage your authentication tokens                                                                                  |
| ^            | token list                                                  | 查看与账号关联的 tokens                                                                                            |
| ^            | token create                                                | -                                                                                                                  |
| ^            | token delete aTokenId                                       | 删除指定 token                                                                                                     |
| 账户信息     | [whoami](https://www.npmjs.cn/cli/whoami)                   | 在标准输出上打印出 username 配置信息                                                                               |
| ^            | [profile](https://www.npmjs.cn/cli/profile)                 | 查看/修改你的注册表简介                                                                                            |
| 安装卸载     | [install](https://www.npmjs.cn/cli/install)                 | 安装包（提供 preinstall，postinstall npm-script 钩子）                                                             |
| ^            | [uninstall](https://www.npmjs.cn/cli/uninstall)             | 移除包（提供 preuninstall，postuninstall npm-script 钩子）                                                         |
| ^            | [install-ci-test](https://www.npmjs.cn/cli/install-ci-test) | Install a project with a clean slate and run tests                                                                 |
| ^            | [install-test](https://www.npmjs.cn/cli/install-test)       | 安装依赖包并运行测试                                                                                               |
| run-script   | [run-script](https://www.npmjs.cn/cli/run-script)           | Run arbitrary package scripts                                                                                      |
| ^            | [test](https://www.npmjs.cn/cli/test)                       | `npm run test`(提供 pretest，posttest npm-script 钩子)                                                             |
| ^            | [stop](https://www.npmjs.cn/cli/stop)                       | `npm run stop`(提供 prestop，poststop npm-script 钩子)                                                             |
| ^            | [start](https://www.npmjs.cn/cli/start)                     | `npm run start`(提供 prestart，poststart npm-script 钩子)                                                          |
| ^            | [restart](https://www.npmjs.cn/cli/restart)                 | `npm run restart`=`npm run stop && npm run restart && npm run start`(提供 prerestart，postrestart npm-script 钩子) |
| ^            | run env                                                     | 列出在运行时脚本可用的环境变量                                                                                     |
| 过期 && 更新 | [outdated](https://www.npmjs.cn/cli/outdated)               | 检测过期的包                                                                                                       |
| ^            | [update](https://www.npmjs.cn/cli/update)                   | 此命令将把列出的所有包更新为最新版本                                                                               |
| 发布         | [version](https://www.npmjs.cn/cli/version)                 | 发布前准备工作，更新包版本号（提供 preversion，postversion npm-script 钩子）                                       |
| ^            | [publish](https://www.npmjs.cn/cli/publish)                 | 发布模块(提供 prepublish，postpublish npm-script 钩子)                                                             | \  |
| ^            | publish --access=public                                     | ^ AND [使用 scoped npm package](http://blog.gejiawen.com/2017/08/10/working-with-scoped-packages/)                 |
| ^            | publish --tag beta                                          | -                                                                                                                  |
| ^            | [unpublish](https://www.npmjs.cn/cli/unpublish)             | 撤销发布自己发布过的某个包                                                                                         |
| ^            | [access](https://www.npmjs.cn/cli/access)                   | 设置已发布包的访问级别                                                                                             |
| 开发         | [init](https://www.npmjs.cn/cli/init)                       | 在当前目录创建一个 package.json 文件                                                                               |
| ^            | init --yes/-y                                               | 使用从当前目录中提取的信息生成默认 package.json                                                                    |
| ^            | [link](https://www.npmjs.cn/cli/link)                       | 符号链接包文件夹(模拟全局安装，用于开发包的本地测试)                                                               |
| ^            | [ls](https://www.npmjs.cn/cli/ls)                           | 查看安装过到包                                                                                                     |
| ===          | ===                                                         | ===                                                                                                                |
| ^            | [prefix](https://www.npmjs.cn/cli/prefix)                   | 显示（目录）前缀                                                                                                   |
| ^            | [config](https://www.npmjs.cn/cli/config)                   | Manage the npm configuration files                                                                                 |
| ^            | npm get                                                     | -                                                                                                                  |
| ^            | npm set                                                     | -                                                                                                                  |
| ^            | config ls -l                                                | 查看 npm 内部的一组配置参数，如果未指定其他任何配置参数，则为默认值                                                |
| ===          | ===                                                         | ===                                                                                                                |
| ^            | [help](https://www.npmjs.cn/cli/help)                       | Get help on npm                                                                                                    |
| ^            | [help-search](help-https://www.npmjs.cn/cli/search)         | Search npm help documentation                                                                                      |
| ^            | [audit](https://www.npmjs.cn/cli/audit)                     | Run a security audit                                                                                               |
| ^            | [bin](https://www.npmjs.cn/cli/bin)                         | 显示 npm 的 bin 文件夹的路径                                                                                       |
| ^            | [bugs](https://www.npmjs.cn/cli/bugs)                       | Bugs for a package in a web browser maybe                                                                          |
| ^            | [build](https://www.npmjs.cn/cli/build)                     | 构建一个包                                                                                                         |
| ^            | [cache](https://www.npmjs.cn/cli/cache)                     | Manipulates packages cache                                                                                         |
| ^            | [ci](https://www.npmjs.cn/cli/ci)                           | Install a project with a clean slate                                                                               |
| ^            | [completion](https://www.npmjs.cn/cli/completion)           | Tab Completion for npm                                                                                             |
| ^            | [dedupe](https://www.npmjs.cn/cli/dedupe)                   | Reduce duplication                                                                                                 |
| ^            | [deprecate](https://www.npmjs.cn/cli/deprecate)             | 作废指定包的指定版本                                                                                               |
| ^            | [dist-tag](https://www.npmjs.cn/cli/dist-tag/)              | Modify package distribution tags                                                                                   |
| ^            | [docs](https://www.npmjs.cn/cli/docs)                       | Docs for a package in a web browser maybe                                                                          |
| ^            | [doctor](https://www.npmjs.cn/cli/doctor)                   | Check your environments                                                                                            |
| ^            | [edit](https://www.npmjs.cn/cli/edit)                       | Edit an installed package                                                                                          |
| ^            | [explore](https://www.npmjs.cn/cli/explore)                 | Browse an installed package                                                                                        |
| ^            | [hook](https://www.npmjs.cn/cli/hook)                       | Manage registry hooks                                                                                              |
| ^            | [org](https://www.npmjs.cn/cli/org)                         | Manage orgs                                                                                                        |
| ^            | [owner](https://www.npmjs.cn/cli/owner)                     | Manage package owners                                                                                              |
| ^            | [pack](https://www.npmjs.cn/cli/pack)                       | Create a tarball from a package                                                                                    |
| ^            | [ping](https://www.npmjs.cn/cli/ping)                       | Ping npm 注册表                                                                                                    |
| ^            | [prune](https://www.npmjs.cn/cli/prune)                     | 移除无关的包                                                                                                       |
| ^            | [rebuild](https://www.npmjs.cn/cli/rebuild)                 | 重新构建包                                                                                                         |
| ^            | [repo](https://www.npmjs.cn/cli/repo)                       | 在浏览器中打开指定包的源码仓库页面                                                                                 |
| ^            | [root](https://www.npmjs.cn/cli/root)                       | 显示 npm 根目录                                                                                                    |
| ^            | [search](https://www.npmjs.cn/cli/search)                   | 搜索模块                                                                                                           |
| ^            | [shrinkwrap](https://www.npmjs.cn/cli/shrinkwrap)           | 锁定依赖包的版本                                                                                                   |
| ^            | [star](https://www.npmjs.cn/cli/star)                       | 标记你所喜欢的包                                                                                                   |
| ^            | [stars](https://www.npmjs.cn/cli/stars)                     | 查看 star 过的包                                                                                                   |
| ^            | [team](https://www.npmjs.cn/cli/team)                       | 管理组织成员和成员的资格                                                                                           |
| ^            | [view](https://www.npmjs.cn/cli/view)                       | View registry info                                                                                                 |

## npm 参数简写形式

| 简写               | 代表               |
| ------------------ | ------------------ |
| -v                 | --version          |
| -h, -?, --help, -H | --usage            |
| -s, --silent       | --loglevel silent  |
| -q, --quiet        | --loglevel warn    |
| -d                 | --loglevel info    |
| -dd, --verbose     | --loglevel verbose |
| -ddd               | --loglevel silly   |
| -g                 | --global           |
| -C                 | --prefix           |
| -l                 | --long             |
| -m                 | --message          |
| -p, --porcelain    | --parseable        |
| -reg               | --registry         |
| -f                 | --force            |
| -desc              | --description      |
| -S                 | --save             |
| -P                 | --save-prod        |
| -D                 | --save-dev         |
| -O                 | --save-optional    |
| -B                 | --save-bundle      |
| -E                 | --save-exact       |
| -y                 | --yes              |
| -n                 | --yes false        |
| ll 和 la 命令      | ls --long          |
