# mysqladmin

> 运维和管理工具

## 命令列表

> `mysqladmin [OPTIONS] command command....`

| class   | 命令                                           | more                                                                                                                                             |
| ------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| OPTIONS | -V, --version                                  | 版本号                                                                                                                                           |
| ^       | -u, --user=name                                | User for login if not current user.                                                                                                              |
| ^       | -p, --password[=name]                          | Password to use when connecting to server. If password is not given it's asked from the tty.                                                     |
| ^       | --bind-address=name                            | IP address to bind to.                                                                                                                           |
| ^       | -c, --count=#                                  | Number of iterations to make. This works with -i (--sleep) only.                                                                                 |
| ^       | -#, --debug[=#]                                | This is a non-debug version. Catch this and exit.                                                                                                |
| ^       | --debug-check                                  | This is a non-debug version. Catch this and exit.                                                                                                |
| ^       | --debug-info                                   | This is a non-debug version. Catch this and exit.                                                                                                |
| ^       | -f, --force                                    | Don't ask for confirmation on drop database; with multiple commands, continue even if an error occurs.                                           |
| ^       | -C, --compress                                 | Use compression in server/client protocol.                                                                                                       |
| ^       | --character-sets-dir=name                      | Directory for character set files.                                                                                                               |
| ^       | --default-character-set=name                   | Set the default character set.                                                                                                                   |
| ^       | -?, --help                                     | Display this help and exit.                                                                                                                      |
| ^       | -h, --host=name                                | Connect to host.                                                                                                                                 |
| ^       | -b, --no-beep                                  | Turn off beep on error.                                                                                                                          |
| ^       | -P, --port=#                                   | Port number to use for connection or 0 for default to, in order of preference, my.cnf, \$MYSQL_TCP_PORT, /etc/services, built-in default (3306). |
| ^       | --protocol=name                                | The protocol to use for connection (tcp, socket, pipe,memory).                                                                                   |
| ^       | -r, --relative                                 | Show difference between current and previous values when used with -i. Currently only works with extended-status.                                |
| ^       | -s, --silent                                   | Silently exit if one can't connect to server.                                                                                                    |
| ^       | -S, --socket=name                              | The socket file to use for connection.                                                                                                           |
| ^       | -i, --sleep=#                                  | Execute commands repeatedly with a sleep between.                                                                                                |
| ^       | --ssl-mode=name                                | SSL connection mode.                                                                                                                             |
| ^       | --ssl-ca=name                                  | CA file in PEM format.                                                                                                                           |
| ^       | --ssl-capath=name                              | CA directory.                                                                                                                                    |
| ^       | --ssl-cert=name                                | X509 cert in PEM format.                                                                                                                         |
| ^       | --ssl-cipher=name                              | SSL cipher to use.                                                                                                                               |
| ^       | --ssl-key=name                                 | X509 key in PEM format.                                                                                                                          |
| ^       | --ssl-crl=name                                 | Certificate revocation list.                                                                                                                     |
| ^       | --ssl-crlpath=name                             | Certificate revocation list path.                                                                                                                |
| ^       | --tls-version=name                             | TLS version to use, permitted values are: TLSv1, TLSv1.1,TLSv1.2, TLSv1.3                                                                        |
| ^       | --ssl-fips-mode=name                           | SSL FIPS mode (applies only for OpenSSL); permitted values are: OFF, ON, STRICT                                                                  |
| ^       | --tls-ciphersuites=name                        | TLS v1.3 cipher to use.                                                                                                                          |
| ^       | --server-public-key-path=name                  | File path to the server public RSA key in PEM format.                                                                                            |
| ^       | --get-server-public-key                        | Get server public key                                                                                                                            |
| ^       | -v, --verbose                                  | Write more information.                                                                                                                          |
| ^       | -E, --vertical                                 | Print output vertically. Is similar to --relative, but prints output vertically.                                                                 |
| ^       | -w, --wait[=#]                                 | Wait and retry if connection is down.                                                                                                            |
| ^       | --connect-timeout=#                            | -                                                                                                                                                |
| ^       | --shutdown-timeout=#                           | -                                                                                                                                                |
| ^       | --plugin-dir=name                              | Directory for client-side plugins.                                                                                                               |
| ^       | --default-auth=name                            | Default authentication client-side plugin to use.                                                                                                |
| ^       | --enable-cleartext-plugin                      | Enable/disable the clear text authentication plugin.                                                                                             |
| ^       | --show-warnings                                | Show warnings after execution                                                                                                                    |
| command | -                                              | -                                                                                                                                                |
| ^       | start                                          | -slave Start slave                                                                                                                               |
| ^       | stop                                           | -slave Stop slave                                                                                                                                |
| ^       | password [new-password]                        | Change old password to new-password in current format                                                                                            |
| ^       | create databasename                            | Create a new database                                                                                                                            |
| ^       | shutdown                                       | Take server down                                                                                                                                 |
| ^       | debug                                          | Instruct server to write debug information to log                                                                                                |
| ^       | drop databasename                              | Delete a database and all its tables                                                                                                             |
| ^       | extended-status                                | Gives an extended status message from the server                                                                                                 |
| ^       | flush-hosts                                    | Flush all cached hosts                                                                                                                           |
| ^       | flush-logs                                     | Flush all logs                                                                                                                                   |
| ^       | flush-status                                   | Clear status variables                                                                                                                           |
| ^       | flush-tables                                   | Flush all tables                                                                                                                                 |
| ^       | flush-threads                                  | Flush the thread cache                                                                                                                           |
| ^       | flush-privileges                               | Reload grant tables (same as reload)                                                                                                             |
| ^       | kill id,id,...                                 | Kill mysql threads                                                                                                                               |
| ^       | ping                                           | Check if mysqld is alive                                                                                                                         |
| ^       | processlist                                    | Show list of active threads in server                                                                                                            |
| ^       | reload                                         | Reload grant tables                                                                                                                              |
| ^       | refresh                                        | Flush all tables and close and open logfiles                                                                                                     |
| ^       | status                                         | Gives a short status message from the server                                                                                                     |
| ^       | variables                                      | Prints variables available                                                                                                                       |
| ^       | version                                        | Get version info from server                                                                                                                     |
| example | mysqladmin -u 用户名 -p 旧密码 password 新密码 | 修改密码                                                                                                                                         |
| ^       | mysqladmin -u root -p shutdown                 | 关闭目前运行的 MySQL 服务器                                                                                                                      |
