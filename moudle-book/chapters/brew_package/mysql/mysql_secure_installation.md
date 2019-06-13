# mysql_secure_installation

> 安全安装（用于生产环境设置）

- [MySQL 安全配置向导 mysql_secure_installation 详解](https://www.jb51.net/article/47727.htm)

## 命令列表

> `mysql_secure_installation [OPTIONS]`

| 命令                    | more                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| -?, --help              | Display this help and exit.                                                                                                                      |
| -h, --host=name         | Connect to host.                                                                                                                                 |
| -p, --password[=name]   | Password to connect to the server. If password is not given it's asked from the tty.                                                             |
| -P, --port=#            | Port number to use for connection or 0 for default to, in order of preference, my.cnf, \$MYSQL_TCP_PORT, /etc/services, built-in default (3306). |
| --protocol=name         | The protocol to use for connection (tcp, socket, pipe, memory).                                                                                  |
| -S, --socket=name       | Socket file to be used for connection.                                                                                                           |
| --ssl-mode=name         | SSL connection mode.                                                                                                                             |
| --ssl-ca=name           | CA file in PEM format.                                                                                                                           |
| --ssl-capath=name       | CA directory.                                                                                                                                    |
| --ssl-cert=name         | X509 cert in PEM format.                                                                                                                         |
| --ssl-cipher=name       | SSL cipher to use.                                                                                                                               |
| --ssl-key=name          | X509 key in PEM format.                                                                                                                          |
| --ssl-crl=name          | Certificate revocation list.                                                                                                                     |
| --ssl-crlpath=name      | Certificate revocation list path.                                                                                                                |
| --tls-version=name      | TLS version to use, permitted values are: TLSv1, TLSv1.1, TLSv1.2, TLSv1.3                                                                       |
| --ssl-fips-mode=name    | SSL FIPS mode (applies only for OpenSSL); permitted values are: OFF, ON, STRICT                                                                  |
| --tls-ciphersuites=name | TLS v1.3 cipher to use.                                                                                                                          |
| -u, --user=name         | User for login if not root.                                                                                                                      |
| -D, --use-default       | Execute with no user interactivity                                                                                                               |
