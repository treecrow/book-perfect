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
