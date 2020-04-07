# Path(路径)

| class        | path                                         | more                                                                                                              |
| ------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 根目录       | /Applications                                | 应用程序目录，默认所有的 GUI 应用程序都安装在这里                                                                 |
| ~            | /Library                                     | 系统的数据文件、帮助文件、文档等等                                                                                |
| ~            | /Network                                     | 网络节点存放目录                                                                                                  |
| ~            | /System                                      | 只包含一个名为 Library 的目录，这个子目录中存放了系统的绝大部分组件，如各种 framework，以及内核模块，字体文件等等 |
| ~            | /Volumes                                     | 文件系统挂载点存放目录                                                                                            |
| ~            | /cores                                       | 内核转储文件存放目录。当一个进程崩溃时，如果系统允许则会产生转储文件                                              |
| ~            | /private                                     | 里面的子目录存放了/tmp, /var, /etc 等链接目录的目标目录                                                           |
| ~            | /etc                                         | 标准 unix 系统配置文件存放目录                                                                                    |
| ~            | /tmp                                         | 临时文件存放目录，其权限为所有人任意读写。此目录实际为指向/private/tmp 的链接                                     |
| ~            | /var                                         | 存放经常变化的文件，如日志文件。此目录实际为指向/private/var 的链接                                               |
| ~            | /dev                                         | 设备文件存放目录，如代表硬盘的/dev/disk0                                                                          |
| ~            | /Users                                       | 存放用户的个人资料和配置。每个用户有自己的单独目录                                                                |
| ~            | /usr                                         | 第三方程序安装目录                                                                                                |
| 登陆用户目录 | ~/.bash_history                              | bash 运行命令缓存                                                                                                 |
| ~            | ~/.zsh_history                               | zsh 运行命令缓存                                                                                                  |
| ~            | ~/.oh-my-zsh                                 | oh-my-zsh 主题                                                                                                    |
| ~            | ~/.nvm                                       | -                                                                                                                 |
| ~            | ~/.ssh                                       | -                                                                                                                 |
| 环境变量     | /etc/profile                                 | 系统级别环境变量，系统启动后就会加载                                                                              |
| ^            | /etc/paths                                   | ^                                                                                                                 |
| ^            | /etc/bashrc                                  | ^                                                                                                                 |
| ^            | ~/.bash_profile                              | 用户级别的环境变量                                                                                                |
| ^            | ~/.zshrc                                     | zsh 配置文件,zsh shell 打开时载入                                                                                 |
| 命令         | /sbin                                        | 传统 unix 管理类命令存放目录(超级用户指令)                                                                        |
| ~            | /bin                                         | 传统 unix 命令的存放目录(普通命令)                                                                                |
| ~            | /usr/sbin                                    | 后期安装的超级用户指令列表                                                                                        |
| ~            | /usr/bin                                     | 后期安装的普通命令列表                                                                                            |
| ~            | /usr/local/sbin                              | 个人安装的超级用户指令                                                                                            |
| ~            | /usr/local/bin                               | 个人安装的普通命令                                                                                                |
| ~            | /Users/zhihui/.nvm/versions/node/v12.3.1/bin | node 命令                                                                                                         |
| 安装包       | /usr/local/Cellar/                           | brew 安装路径                                                                                                     |
| orther       | -                                            | -                                                                                                                 |
| ^            | /usr/local/etc/my.cnf                        | mysql 配置文件                                                                                                    |