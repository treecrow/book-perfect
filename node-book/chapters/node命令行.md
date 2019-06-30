# node 命令行

## 命令列表

| 命令                          | 含义                                                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| -v, --version                 | 打印 Node.js 版本号                                                                                      |
| -e, --eval script             | 执行脚本                                                                                                 |
| -p, --print                   | 执行脚本并打印结果                                                                                       |
| --experimental-repl-await     | 启用对 await 关键字的实验性支持                                                                          |
| -                             | -                                                                                                        |
| --                            | -                                                                                                        |
| --abort-on-uncaught-exception | aborting instead of exiting causes a core file to be generated for analysis                              |
| --completion-bash             | -                                                                                                        |
| --enable-fips                 | -                                                                                                        |
| --experimental-modules        | experimental ES Module support and caching modules                                                       |
| --experimental-vm-modules     | -                                                                                                        |
| --experimental-worker         | -                                                                                                        |
| --force-fips                  | -                                                                                                        |
| --icu-data-dir=file           | set ICU data load path to dir (overrides NODE_ICU_DATA)                                                  |
| --inspect[=[host:]port]       | activate inspector on host:port (default: 127.0.0.1:9229)                                                |
| --inspect-brk[=[host:]port]   | activate inspector on host:port and break at start of user script                                        |
| --inspect-port=[host:]port    | set host:port for inspector                                                                              |
| --loader=file                 | -                                                                                                        |
| --max-http-header-size=size   | -                                                                                                        |
| --napi-modules                | load N-API modules (no-op - option kept for compatibility)                                               |
| --no-deprecation              | silence deprecation warnings                                                                             |
| --no-force-async-hooks-checks | disable checks for async_hooks                                                                           |
| --no-warnings                 | silence all process warnings                                                                             |
| --openssl-config=file         | load OpenSSL configuration from the specified file (overrides OPENSSL_CONF)                              |
| --pending-deprecation         | emit pending deprecation warnings                                                                        |
| --preserve-symlinks           | preserve symbolic links when resolving                                                                   |
| --preserve-symlinks-main      | -                                                                                                        |
| --prof                        | -                                                                                                        |
| --prof-process                | process v8 profiler output generated using --prof                                                        |
| --redirect-warnings=file      | write warnings to file instead of stderr                                                                 |
| --throw-deprecation           | throw an exception on deprecations                                                                       |
| --title=title                 | -                                                                                                        |
| --tls-cipher-list=val         | Node.js 构造时包含了默认的 TLS 开启和关闭的加密组件，默认加密组件可以使用 --tls-cipher-list 命令进行替换 |
| --trace-deprecation           | show stack traces on deprecations                                                                        |
| --trace-event-categories      | comma separated list of trace event categories to record                                                 |
| --trace-event-file-pattern    | -                                                                                                        |
| --trace-events-enabled        | track trace events                                                                                       |
| --trace-sync-io               | show stack trace when use of sync IO is detected after the first tick                                    |
| --trace-warnings              | show stack traces on process warnings                                                                    |
| --track-heap-objects          | track heap object allocations for heap snapshots                                                         |
| --use-bundled-ca              | use bundled CA store (default)                                                                           |
| --use-openssl-ca              | use OpenSSL's default CA store                                                                           |
| --v8-options                  | 打印 v8 命令行选项                                                                                       |
| --v8-pool-size=num            | set v8's thread pool size                                                                                |
| --zero-fill-buffers           | automatically zero-fill all newly allocated Buffer and SlowBuffer instances                              |
| -c, --check                   | syntax check script without executing                                                                    |
| -h, --help                    | -                                                                                                        |
| -i, --interactive             | always enter the REPL even if stdin does not appear to be a terminal                                     |
| -r, --require                 | module to preload (option can be repeated) script read from stdin (default; interactive mode if a tty)   |
