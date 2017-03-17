## CLI命令行选项

### 选项
选项|含义
---|---
-v, --version|打印 node 的版本号
-h, --help|打印 node 的命令行选项
-e, --eval "script"|把跟随的参数作为 JavaScript 来执行
-p, --print "script"|与 -e 相同，但会打印结果
-c, --check|在不执行的情况下，对脚本进行语法检查
-i, --interactive|打开 REPL，即使 stdin 看起来不像终端
-r, --require module|在启动时预加载指定的模块
--no-deprecation|静默废弃的警告
--trace-deprecation|打印废弃的堆栈跟踪
--throw-deprecation|抛出废弃的错误
--no-warnings|静默一切进程警告（包括废弃警告）
--trace-warnings|打印进程警告的堆栈跟踪（包括废弃警告）
--trace-sync-io|每当事件循环的第一帧之后检测到同步 I/O 时，打印堆栈跟踪
--zero-fill-buffers|自动用 0 填充所有新分配的 Buffer 和 SlowBuffer 实例
--preserve-symlinks|当解析和缓存模块时，命令模块加载器保持符号连接
--track-heap-objects|为堆快照追踪堆栈对象的分配
--prof-process|处理 v8 分析器的输出，通过使用 v8 选项 --prof 生成
--v8-options|打印 v8 命令行选项
--tls-cipher-list=list|指定备用的默认 TLS 加密列表
--enable-fips|启动时启用符合 FIPS 标准的加密
--force-fips|启动时强制使用符合 FIPS 标准的加密
--openssl-config=file|启动时加载 OpenSSL 配置文件
--icu-data-dir=file|指定 ICU 数据的加载路径

### 环境变量
*REPL相关*

环境变量|含义
---|---
NODE_REPL_HISTORY=file|当给定了一个有效的路径，则 REPL 的历史记录将被保存到指定的文件，而不是用户目录下的 .node_repl_history 文件。 设为 "" 将禁用 REPL 历史记录。 值两头的空格键会被去掉
NODE_REPL_HISTORY_SIZE|默认为 1000。控制历史记录的最大行数。必须是正数
NODE_REPL_MODE|可以是 sloppy、strict 或 magic。 默认为 magic，在严格模式中会自动运行 "strict mode only" 声明

*其它*

环境变量|含义
---|---
NODE_DEBUG=module[,…]|以 ',' 分隔的应该打印调试信息的核心模块列表
NODE_PATH=path[:…]|以 ':' 分隔的有模块搜索路径作前缀的目录列表
NODE_DISABLE_COLORS=1|当设为 1 时，不会在 REPL 中使用颜色
NODE_ICU_DATA=file|ICU（Intl 对象）数据的数据路径
NODE_TTY_UNSAFE_ASYNC=1|当设为 1 时，当输出到一个支持异步输入输出的平台的 TTY 时，写入到 stdout 和 stderr 会是非阻塞与异步的
NODE_EXTRA_CA_CERTS=file|当设置了此选项时，根 CA 证书（如 VeriSign）会被 file 指定的证书扩展
