# http

> 可以嵌套多个 server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type 定义，日志自定义，是否使用 sendfile 传输文件，连接超时时间，单连接请求数等。

| key                | 默认值     | more                                                           |
| ------------------ | ---------- | -------------------------------------------------------------- |
| default_type       | text/plain | 默认文件类型                                                   |
| access_log         | -          | 是否接受日志服务                                               |
| log_format         | -          | 自定义日志格式                                                 |
| sendfile           | off        | 允许 sendfile 方式传输文件                                     |
| sendfile_max_chunk | 0          | 每个进程每次调用传输数量不能大于设定的值，默认为 0，即不设上限 |
| keepalive_timeout  | 75s        | 连接超时时间                                                   |
| error_page         | -          | 错误页                                                         |
