# mysql

- 安装

```
brew install mysql
```

- 设置 MySQL 用户以及数据存放地址

```
unset TMPDIR

mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
```

- 启动mysql

```
mysql.server start
```

- 执行连接操作(登录mysql)

```
mysql -uroot -p
```

- 设置mysql为开机启动项目(额外)

```
ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
```

## 命令列表

命令                        | 含义
------------------------- | -------------
mysql --version           | 显示版本号
brew services start mysql | 带着后台服务启动mysql
mysql.server start        | 启动mysql
mysql.server restart      | 重新启动mysql
mysql_secure_installation | -
