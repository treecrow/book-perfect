# [pm2](https://github.com/Unitech/pm2)

> node 进程管理工具,利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单

## Commands

| class         | command                                                 | more                                                                                       |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| pm2           | updatePM2                                               | 更新内存中的 PM2 （更新了 pm2 版本后调用）                                                 |
| ^             | update                                                  | ^                                                                                          |
| 启动/关闭     | start [options][name/namespace/file/ecosystem/id...]    | 启动指定应用                                                                               |
| ^             | stop [options] <id/name/namespace/all/json/stdin...>    | 停止指定应用                                                                               |
| ^             | restart [options] <id/name/namespace/all/json/stdin...> | 停止->启动指定应用                                                                         |
| ^             | reload <name/all>                                       | 零停机更新指定应用                                                                         |
| ^             | delete/del <name/id/script/all/json/stdin...>           | 删除指定应用，如果修改应用配置行为，最好先删除应用后，重新启动方才生效，如修改脚本入口文件 |
| ^             | kill                                                    | 杀掉 pm2 管理的所有进程(等同于 pm2 delete all)                                             |
| 查看-仪表盘   | monit                                                   | 监控各个应用进程 cpu 和 memory 使用情况(命令行仪表盘)                                      |
| ^             | plus/register [options][command] [option]               | web 仪表盘                                                                                 |
| 查看-全局     | list/ls                                                 | 列出所有正在运行的 pm2 进程                                                                |
| ^             | l                                                       | ^                                                                                          |
| ^             | ps                                                      | ^                                                                                          |
| ^             | status                                                  | ^                                                                                          |
| ^             | jlist                                                   | 列出所有正在运行的 pm2 进程(压缩 json 格式)                                                |
| ^             | prettylist                                              | 列出所有正在运行的 pm2 进程(展开 json 格式)                                                |
| 查看-指定应用 | show <name/id>                                          | 显示指定应用详情                                                                           |
| ^             | describe <name/id>                                      | 查看某个进程/应用具体情况                                                                  |
| 查看-日志     | logs [options][id/name]                                 | 查看指定应用的日志，即标准输出和标准错误，并实时输出新的 log                               |
| ^             | flush [api]                                             | 清空所有日志                                                                               |
| ^             | reloadLogs                                              | 重走程序生成日志（日志累加不清空）                                                         |
| 开机启动      | dump/save [options]                                     | 转储所有进程以便稍后重新恢复它们                                                           |
| ^             | startup [platform]                                      | 设置开机自动启动                                                                           |
| ^             | unstartup [platform]                                    | 取消开机自动启动                                                                           |
| 配置          | scale <app_name> <number>                               | 调整工作线程数量                                                                           |
| ^             | reset <name/id/all>                                     | 重置重启数量                                                                               |
| ^             | ping                                                    | ping 一下 pm2 守护进程，如果没有启动会启动它                                               |
| 影响-应用     | sendSignal <signal> <pm2_id/name>                       | 发送系统信号到一个进程/应用                                                                |
| git           | pull <name> [commit_id]                                 | 给指定的应用运行 `git pull`                                                                |
| ^             | forward <name>                                          | updates repository to the next commit for a given app                                      |
| ===           | ===                                                     | ===                                                                                        |
| ^             | trigger <proc_name> <action_name> [params]              | trigger process action                                                                     |
| ^             | deploy <file/environment>                               | deploy your json                                                                           |
| ^             | startOrRestart <json>                                   | start or restart JSON file                                                                 |
| ^             | startOrReload <json>                                    | start or gracefully reload JSON file                                                       |
| ^             | pid [app_name]                                          | return pid of [app_name] or all                                                            |
| ^             | create                                                  | return pid of [app_name] or all                                                            |
| ^             | startOrGracefulReload <json>                            | start or gracefully reload JSON file                                                       |
| ^             | profile:mem [time]                                      | Sample PM2 heap memory                                                                     |
| ^             | profile:cpu [time]                                      | Profile PM2 cpu                                                                            |
| ^             | id <name>                                               | get process id by name                                                                     |
| ^             | inspect <name>                                          | inspect a process                                                                          |
| ^             | install/module:install [options] <module/git:/>         | install or update a module and run it forever                                              |
| ^             | module:update <module/git:/>                            | update a module and run it forever                                                         |
| ^             | module:generate [app_name]                              | Generate a sample module in current folder                                                 |
| ^             | uninstall/module:uninstall <module>                     | stop and uninstall a module                                                                |
| ^             | package [target]                                        | Check & Package TAR type module                                                            |
| ^             | publish/module:publish [options][folder]                | Publish the module you are currently on                                                    |
| ^             | set [key][value]                                        | sets the specified config <key> <value>                                                    |
| ^             | multiset <value>                                        | multiset eg "key1 val1 key2 val2                                                           |
| ^             | get [key]                                               | get value for <key>                                                                        |
| ^             | conf [key][value]                                       | get / set module config values                                                             |
| ^             | config <key> [value]                                    | get / set module config values                                                             |
| ^             | unset <key>                                             | clears the specified config <key>                                                          |
| ^             | report                                                  | give a full pm2 report for https://github.com/Unitech/pm2/issues                           |
| ^             | link [options][secret] [public][name]                   | link with the pm2 monitoring dashboard                                                     |
| ^             | unlink                                                  | unlink with the pm2 monitoring dashboard                                                   |
| ^             | monitor [name]                                          | monitor target process                                                                     |
| ^             | unmonitor [name]                                        | unmonitor target process                                                                   |
| ^             | open                                                    | open the pm2 monitoring dashboard                                                          |
| ^             | login                                                   | Login to pm2 plus                                                                          |
| ^             | logout                                                  | Logout from pm2 plus                                                                       |
| ^             | cleardump                                               | Create empty dump file                                                                     |
| ^             | send <pm_id> <line>                                     | send stdin to <pm_id>                                                                      |
| ^             | attach <pm_id> [comman]                                 | attach stdin/stdout to application identified by <pm_id>                                   |
| ^             | resurrect                                               | resurrect previously dumped processes                                                      |
| ^             | logrotate                                               | copy default logrotate configuration                                                       |
| ^             | ecosystem/init [mode]                                   | generate a process conf file. (mode = null or simple)                                      |
| ^             | desc <name/id>                                          | (alias) describe all parameters of a process                                               |
| ^             | info <name/id>                                          | (alias) describe all parameters of a process                                               |
| ^             | env <id>                                                | list all environment variables of a process id                                             |
| ^             | sysmonit                                                | start system monitoring daemon                                                             |
| ^             | slist/sysinfos [options]                                | list system infos in JSON                                                                  |
| ^             | imonit                                                  | launch legacy termcaps monitoring                                                          |
| ^             | dashboard/dash                                          | launch dashboard with monitoring and logs                                                  |
| ^             | backward <name>                                         | downgrades repository to the previous commit for a given app                               |
| ^             | deepUpdate                                              | performs a deep update of PM2                                                              |
| ^             | serve/expose [options][path] [port]                     | serve a directory over http via port                                                       |
| ^             | autoinstall                                             | -                                                                                          |
| ^             | examples                                                | display pm2 usage examples                                                                 |

## Options

| class        | option                              | more                                                                                       |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------------ |
| pm2 本身信息 | -V, --version                       | pm2 版本号                                                                                 |
| ^            | -v --version                        | ^                                                                                          |
| ^            | -h, --help                          | 打印使用信息                                                                               |
| script       | --interpreter <interpreter>         | 设置一个用于运行程序的解释器, default: node                                                |
| ^            | -- --xx xxx                         | 传递额外的参数给启动程序                                                                   |
| -            | --env <environment_name>            | specify which set of environment variables from ecosystem file must be injected            |
| 应用         | -n --name <name>                    | 应用的名称                                                                                 |
| 启动方式     | -i --instances <number>             | 启用多少个实例，可用于负载均衡。如果-i 0 或者-i max，则根据当前机器核数确定实例数目。      |
| ^            | --no-daemon                         | 如果 pm2 进程守护没有启动的话会启动 pm2 进程守护                                           |
| ^            | --watch [paths]                     | 监听应用目录的变化，一旦发生变化，自动重启                                                 |
| ^            | --no-vizion                         | 以没有版本控制的方式启动一个应用                                                           |
| 日志         | -l --log [path]                     | 整合标准输出和错误输出日志文件的路径                                                       |
| ^            | -o --output <path>                  | 标准输出日志文件的路径                                                                     |
| ^            | -e --error <path>                   | 错误输出日志文件的路径                                                                     |
| ^            | --time                              | 日志是否打印时间                                                                           |
| ^            | --log-date-format <date format>     | 个性化的日志时间格式                                                                       |
| 重启         | --max-memory-restart <memory>       | 内存超出指定值（bytes）则重启应用                                                          |
| ^            | --restart-delay <delay>             | 重启之间延迟的时间（milliseconds）                                                         |
| ^            | --no-autorestart                    | 不允许自动重启                                                                             |
| ^            | -c --cron <cron_pattern>            | 基于 cron 表达式重启应用                                                                   |
| jsonConfig   | --only <application-name>           | 使用 pm2 json 配置文件,只启动指定的一个应用                                                |
| ===          | ===                                 | ===                                                                                        |
| ^            | -s --silent                         | hide all messages                                                                          |
| ^            | --ext <extensions>                  | watch only this file extensions                                                            |
| ^            | -m --mini-list                      | display a compacted list without formatting                                                |
| ^            | --interpreter-args <arguments>      | set arguments to pass to the interpreter (alias of --node-args)                            |
| ^            | --node-args <node_args>             | space delimited arguments to pass to node                                                  |
| ^            | --log-type <type>                   | specify log output style (raw by default, json optional)                                   |
| ^            | --disable-logs                      | disable all logs storage                                                                   |
| ^            | -a --update-env                     | force an update of the environment with restart/reload (-a <=> apply)                      |
| ^            | -f --force                          | force actions                                                                              |
| ^            | --parallel <number>                 | number of parallel actions (for restart/reload)                                            |
| ^            | --shutdown-with-message             | shutdown an application with process.send('shutdown') instead of process.kill(pid, SIGINT) |
| ^            | -p --pid <pid>                      | specify pid file                                                                           |
| ^            | -k --kill-timeout <delay>           | delay before sending final SIGKILL signal to process                                       |
| ^            | --listen-timeout <delay>            | listen timeout on application reload                                                       |
| ^            | --exp-backoff-restart-delay <delay> | specify a delay between restarts (in milliseconds)                                         |
| ^            | -x --execute-command                | execute a program using fork system                                                        |
| ^            | --max-restarts [count]              | only restart the script COUNT times                                                        |
| ^            | -u --user <username>                | define user when generating startup script                                                 |
| ^            | --uid <uid>                         | run target script with <uid> rights                                                        |
| ^            | --gid <gid>                         | run target script with <gid> rights                                                        |
| ^            | --namespace <ns>                    | start application within specified namespace                                               |
| ^            | --cwd <path>                        | run target script as <username>                                                            |
| ^            | --hp <home path>                    | define home path when generating startup script                                            |
| ^            | --wait-ip                           | override systemd script to wait for full internet connectivity to launch pm2               |
| ^            | --service-name <name>               | define service name when generating startup script                                         |
| ^            | -w --write                          | write configuration in local folder                                                        |
| ^            | --source-map-support                | force source map support                                                                   |
| ^            | --disable-source-map-support        | force source map support                                                                   |
| ^            | --wait-ready                        | ask pm2 to wait for ready event from your app                                              |
| ^            | --merge-logs                        | merge logs from different instances but keep error and out separated                       |
| ^            | --ignore-watch <folders/files>      | List of paths to ignore (name or regex)                                                    |
| ^            | --watch-delay <delay>               | specify a restart delay after changing files (--watch-delay 4 (in sec) or 4000ms)          |
| ^            | --no-color                          | skip colors                                                                                |
| ^            | --no-treekill                       | Only kill the main process, not detached children                                          |
| ^            | --no-pmx                            | start an app without pmx                                                                   |
| ^            | --no-automation                     | start an app without pmx                                                                   |
| ^            | --trace                             | enable transaction tracing with km                                                         |
| ^            | --disable-trace                     | disable transaction tracing with km                                                        |
| ^            | --attach                            | attach logging after your start/restart/stop/reload                                        |
| ^            | --v8                                | enable v8 data collecting                                                                  |
| ^            | --event-loop-inspector              | enable event-loop-inspector dump in pmx                                                    |
| ^            | --deep-monitoring                   | enable all monitoring tools (equivalent to --v8 --event-loop-inspector --trace)            |

## [config list](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/#attributes-available)

| class             | key                | more                                                                                                           |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| 通用              | name               | 应用进程名称                                                                                                   |
| ^                 | script             | 启动脚本路径                                                                                                   |
| ^                 | cwd                | 应用启动的路径                                                                                                 |
| ^                 | args               | 传递给脚本的参数                                                                                               |
| ^                 | interpreter        | 指定的脚本解释器                                                                                               |
| ^                 | interpreter_args   | 传递给解释器的参数                                                                                             |
| ^                 | node_args          | ^                                                                                                              |
| Advanced features | instances          | 应用启动实例个数，仅在 cluster 模式有效                                                                        |
| ^                 | exec_mode          | 应用启动模式，支持 fork 和 cluster 模式                                                                        |
| ^                 | watch              | 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启                                                       |
| ^                 | ignore_watch       | 忽略监听的文件夹，支持正则表达式                                                                               |
| ^                 | max_memory_restart | 最大内存限制数，超出自动重启                                                                                   |
| ^                 | env                | 环境变量，object 类型，如{"NODE_ENV":"production", "ID": "42"}                                                 |
| ^                 | `env_`             | 环境变量                                                                                                       |
| ^                 | source_map_support | 是否支持 source map 文件                                                                                       |
| ^                 | instance_var       | -                                                                                                              |
| Log files         | log_date_format    | 指定日志日期格式，如 YYYY-MM-DD HH:mm:ss；                                                                     |
| ^                 | error_file         | 记录标准错误流，\$HOME/.pm2/logs/XXXerr.log)，代码错误可在此文件查找                                           |
| ^                 | out_file           | 记录标准输出流，\$HOME/.pm2/logs/XXXout.log)，如应用打印大量的标准输出，会导致 pm2 日志过大                    |
| ^                 | combine_logs       | 是否合并日志（如果合并日志的话，不同进程公用一个日志文件）                                                     |
| ^                 | merge_logs         | ^                                                                                                              |
| ^                 | pid_file           | pid file path (default to \$HOME/.pm2/pid/app-pm_id.pid)                                                       |
| Control flow      | min_uptime         | 应用运行少于时间被认为是异常启动                                                                               |
| ^                 | listen_timeout     | 如果应用程序未侦听，则强制重新加载之前的时间（毫秒）                                                           |
| ^                 | kill_timeout       | 发送最终 SIGKILL 之前的时间（毫秒）                                                                            |
| ^                 | wait_ready         | Instead of reload waiting for listen event, wait for process.send(‘ready’)                                     |
| ^                 | max_restarts       | 最大异常重启次数，即小于 min_uptime 运行时间重启次数                                                           |
| ^                 | restart_delay      | 异常重启情况下，延时重启时间                                                                                   |
| ^                 | autorestart        | 默认为 true, 发生异常的情况下自动重启                                                                          |
| ^                 | cron_restart       | crontab 时间格式重启应用，目前只支持 cluster 模式                                                              |
| ^                 | vizion             | true by default. if false, PM2 will start without vizion features (versioning control metadatas)               |
| ^                 | post_update        | a list of commands which will be executed after you perform a Pull/Upgrade operation from Keymetrics dashboard |
| ^                 | force              | 默认 false，如果 true，可以重复启动一个脚本。pm2 不建议这么做                                                  |
| Deployment        | key                | SSH key path                                                                                                   |
| ^                 | user               | SSH user                                                                                                       |
| ^                 | host               | SSH host                                                                                                       |
| ^                 | ssh_options        | SSH options with no command-line flag, see ‘man ssh’                                                           |
| ^                 | ref                | GIT remote/branch                                                                                              |
| ^                 | repo               | GIT remote                                                                                                     |
| ^                 | path               | path in the server                                                                                             |
| ^                 | pre-setup          | Pre-setup command or path to a script on your local machine                                                    |
| ^                 | post-setup         | Post-setup commands or path to a script on the host machine                                                    |
| ^                 | pre-deploy-local   | pre-deploy action                                                                                              |
| ^                 | post-deploy        | post-deploy action                                                                                             |

---

# pm2-dev

## Commands

| command                | more                                                |
| ---------------------- | --------------------------------------------------- |
| start <file/json_file> | start target config file/script in development mode |

## Options

| option                      | more                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| -V, --version               | output the version number                                                                                       |
| --raw                       | raw log output                                                                                                  |
| --timestamp                 | print timestamp                                                                                                 |
| --node-args <node_args>     | space delimited arguments to pass to node in cluster mode - e.g. --node-args="--debug=7001 --trace-deprecation" |
| --ignore [files]            | files to ignore while watching                                                                                  |
| --post-exec [cmd]           | execute extra command after change detected                                                                     |
| --silent-exec               | do not output result of post command                                                                            |
| --test-mode                 | debug mode for test suit                                                                                        |
| --interpreter <interpreter> | the interpreter pm2 should use for executing app (bash, python...)                                              |
| --env [name]                | select env\_[name] env variables in process config file                                                         |
| --auto-exit                 | exit if all processes are errored/stopped or 0 apps launched                                                    |
| -h, --help                  | output usage information                                                                                        |
