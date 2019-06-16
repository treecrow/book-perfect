# [pip](https://pypi.org/)

## 命令列表

| class    | 命令                        | more                                                                                                                                |
| -------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Commands | install                     | 安装 python 模块                                                                                                                    |
| ^        | uninstall                   | 卸载 python 模块                                                                                                                    |
| ^        | pip list                    | 通过 pip 来查看安装的依赖库及其版本                                                                                                 |
| ^        | pip freeze                  | ^                                                                                                                                   |
| ^        | download                    | Download packages.                                                                                                                  |
| ^        | show                        | Show information about installed packages.                                                                                          |
| ^        | check                       | Verify installed packages have compatible dependencies.                                                                             |
| ^        | config                      | Manage local and global configuration.                                                                                              |
| ^        | search                      | Search PyPI for packages.                                                                                                           |
| ^        | wheel                       | Build wheels from your requirements.                                                                                                |
| ^        | hash                        | Compute hashes of package archives.                                                                                                 |
| ^        | completion                  | A helper command used for command completion.                                                                                       |
| ^        | help                        | Show help for commands.                                                                                                             |
| Options  | -h, --help                  | Show help.                                                                                                                          |
| ^        | --isolated                  | Run pip in an isolated mode, ignoring environment variables and user configuration.                                                 |
| ^        | -v, --verbose               | Give more output. Option is additive, and can be used up to 3 times.                                                                |
| ^        | -V, --version               | Show version and exit.                                                                                                              |
| ^        | -q, --quiet                 | Give less output. Option is additive, and can be used up to 3 times (corresponding to WARNING, ERROR, and CRITICAL logging levels). |
| ^        | --log <path>                | Path to a verbose appending log.                                                                                                    |
| ^        | --proxy <proxy>             | Specify a proxy in the form [user:passwd@]proxy.server:port.                                                                        |
| ^        | --retries <retries>         | Maximum number of retries each connection should attempt (default 5 times).                                                         |
| ^        | --timeout <sec>             | Set the socket timeout (default 15 seconds).                                                                                        |
| ^        | --exists-action <action>    | Default action when a path already exists: (s)witch, (i)gnore, (w)ipe, (b)ackup, (a)bort.                                           |
| ^        | --trusted-host <hostname>   | Mark this host as trusted, even though it does not have valid or any HTTPS.                                                         |
| ^        | --cert <path>               | Path to alternate CA bundle.                                                                                                        |
| ^        | --client-cert <path>        | Path to SSL client certificate, a single file containing the private key and the certificate in PEM format.                         |
| ^        | --cache-dir <dir>           | Store the cache data in <dir>.                                                                                                      |
| ^        | --no-cache-dir              | Disable the cache.                                                                                                                  |
| ^        | --disable-pip-version-check | Don't periodically check PyPI to determine whether a new version of pip is available for download. Implied with --no-index.         |
| ^        | --no-color                  | Suppress colored output                                                                                                             |
