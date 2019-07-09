# process_env

| key                              | more                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| process.env.npm_package_name     | 当前包名                                                         |
| process.env.npm_package_version  | 当前包版本号                                                     |
| process.env.npm_lifecycle_event  | 返回当前正在运行的脚本的名称                                     |
| process.env.npm_lifecycle_script | 返回当前正在运行的脚本的内容                                     |
| process.env.npm_execpath         | npm 命令行绝对路径                                               |
| process.env.npm_node_execpath    | npm_node 命令行绝对路径                                          |
| process.env.`npm_package_`       | 通过`npm_package_`前缀，npm 脚本可以拿到 package.json 里面的字段 |
| process.env.`npm_config_`        | npm 脚本还可以通过`npm_config_`前缀，拿到 npm 的配置变量         |

```json
{
  // nvm
  "NVM_BIN": "/Users/zhihui/.nvm/versions/node/v12.3.1/bin",
  "NVM_CD_FLAGS": "-q",
  "NVM_DIR": "/Users/zhihui/.nvm",

  // TERM
  "TERM": "xterm-256color",
  "TERM_SESSION_ID": "24DE95A5-7B26-41EA-8835-C23198381FA9",
  "TERM_PROGRAM": "vscode",
  "TERM_PROGRAM_VERSION": "1.36.0",

  // webpack-dev-server
  "_": "/Users/zhihui/Documents/github-projects/template-vue-bms/node_modules/.bin/webpack-dev-server",
  "WEBPACK_DEV_SERVER": "true",

  // zsh
  "SHELL": "/bin/zsh",
  "ZSH": "/Users/zhihui/.oh-my-zsh",

  // pwd
  "INIT_CWD": "/Users/zhihui/Documents/github-projects/template-vue-bms",
  "PWD": "/Users/zhihui/Documents/github-projects/template-vue-bms",

  "NODE": "/Users/zhihui/.nvm/versions/node/v12.3.1/bin/node",
  "TMPDIR": "/var/folders/xd/syh01_m50j92v4jcd7x6yrrc0000gn/T/",
  "Apple_PubSub_Socket_Render": "/private/tmp/com.apple.launchd.fCDkcryUuN/Render",
  "USER": "zhihui",
  "HOME": "/Users/zhihui",
  "LOGNAME": "zhihui",
  "SSH_AUTH_SOCK": "/private/tmp/com.apple.launchd.lWvPqlBdGH/Listeners",
  "__CF_USER_TEXT_ENCODING": "0x1F5:0x19:0x34",
  "PAGER": "less",
  "LSCOLORS": "Gxfxcxdxbxegedabagacad",
  "PATH": "/Users/zhihui/.nvm/versions/node/v12.3.1/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/zhihui/Documents/github-projects/template-vue-bms/node_modules/.bin:/Users/zhihui/.nvm/versions/node/v12.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/zhihui/.nvm/versions/node/v12.3.1/bin",
  "LANG": "zh_CN.UTF-8",
  "XPC_FLAGS": "0x0",
  "XPC_SERVICE_NAME": "0",
  "SHLVL": "6",
  "APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL": "true",
  "LESS": "-R",
  "LC_CTYPE": "zh_CN.UTF-8"
}
```
