# node 相关知识点整理

| web                                               | more        |
| ------------------------------------------------- | ----------- |
| [NodeJs](http://nodejs.cn/api/dns.html)           | NodeJs 文档 |
| [NodeJs 查看不同版本支持功能](http://node.green/) | -           |
| [cnode](https://cnodejs.org/)                     | NodeJs 论坛 |

## 命令列表

| 命令                          | 含义                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| -v, --version                 | print Node.js version                                                                                  |
| -e, --eval script             | evaluate script                                                                                        |
| -p, --print                   | evaluate script and print result                                                                       |
| -c, --check                   | syntax check script without executing                                                                  |
| -i, --interactive             | always enter the REPL even if stdin does not appear to be a terminal                                   |
| -r, --require                 | module to preload (option can be repeated) script read from stdin (default; interactive mode if a tty) |
| --inspect[=[host:]port]       | activate inspector on host:port (default: 127.0.0.1:9229)                                              |
| --inspect-brk[=[host:]port]   | activate inspector on host:port and break at start of user script                                      |
| --inspect-port=[host:]port    | set host:port for inspector                                                                            |
| --no-deprecation              | silence deprecation warnings                                                                           |
| --trace-deprecation           | show stack traces on deprecations                                                                      |
| --throw-deprecation           | throw an exception on deprecations                                                                     |
| --pending-deprecation         | emit pending deprecation warnings                                                                      |
| --no-warnings                 | silence all process warnings                                                                           |
| --napi-modules                | load N-API modules (no-op - option kept for compatibility)                                             |
| --abort-on-uncaught-exception | aborting instead of exiting causes a core file to be generated for analysis                            |
| --trace-warnings              | show stack traces on process warnings                                                                  |
| --redirect-warnings=file      | write warnings to file instead of stderr                                                               |
| --trace-sync-io               | show stack trace when use of sync IO is detected after the first tick                                  |
| --no-force-async-hooks-checks | disable checks for async_hooks                                                                         |
| --trace-events-enabled        | track trace events                                                                                     |
| --trace-event-categories      | comma separated list of trace event categories to record                                               |
| --track-heap-objects          | track heap object allocations for heap snapshots                                                       |
| --prof-process                | process v8 profiler output generated using --prof                                                      |
| --zero-fill-buffers           | automatically zero-fill all newly allocated Buffer and SlowBuffer instances                            |
| --v8-options                  | 打印 v8 命令行选项                                                                                     |
| --v8-pool-size=num            | set v8's thread pool size                                                                              |
| --tls-cipher-list=val         | use an alternative default TLS cipher list                                                             |
| --use-bundled-ca              | use bundled CA store (default)                                                                         |
| --use-openssl-ca              | use OpenSSL's default CA store                                                                         |
| --openssl-config=file         | load OpenSSL configuration from the specified file (overrides OPENSSL_CONF)                            |
| --icu-data-dir=dir            | set ICU data load path to dir (overrides NODE_ICU_DATA)                                                |
| --preserve-symlinks           | preserve symbolic links when resolving                                                                 |
| --experimental-modules        | experimental ES Module support and caching modules                                                     |
