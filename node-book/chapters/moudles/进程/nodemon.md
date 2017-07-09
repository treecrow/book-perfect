# nodemon

## 命令行列表

命令                        | more
------------------------- | ---------------------------------------------------
nodemon                   | 会启动当前目录下 package.json 对应的 main 文件
nodemon -h／--help         | -
nodemon server.js         | 用nodemon 启动 server.js
nodemon server.coffee     | 支持 coffee-script
rs                        | 重启进程
nodemon --config `<file>` | 指明 nodemon 的配置文件 nodemon.json（配置文件可以指明nodemon的所有配置）
nodemon -w/--watch dir    | 指明监视的文件或文件夹，可以同时设置多个监视
nodemon -e／--ext          | 指明需要静听的文件类型（根据扩展名）
nodemon --ignore          | 忽略监听某些文件／文件夹
nodemon -L                | -
nodemon --delay           | 延时重启（默认1 s）
