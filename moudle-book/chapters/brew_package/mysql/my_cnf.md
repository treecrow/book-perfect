# my_cnf

> mysql 配置文件 (/usr/local/etc/my.cnf)

## 配置列表

| config                  | more                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| port                    | 指定了 Mysql 开放的端口                                                                                                           |
| basedir                 | 指定 Mysql 安装的绝对路径                                                                                                         |
| datadir                 | 指定 Mysql 数据存放的绝对路径                                                                                                     |
| socket                  | 套接字文件                                                                                                                        |
| plugin_dir              | mysql 中 plugin 插件所在的路径                                                                                                    |
| log-error               | mysql 生成的错误日志存放的路径，它是一个文本文件，遇到有什么问题想查看日志时可以到这个文件里去找线索                              |
| symbolic-links          | 符号连接，如果设置为 1，则 mysql 数据库和表里的数据支持储存在 datadir 目录之外的路径下，默认都是 0（较新版本的 mysql 下默认是 1） |
| local-infile            | 设置为 0 表示关闭服务器从本地 load 的功能，设置为 1 则打开；                                                                      |
| max-connections         | 设置 Mysql 的最大连接数                                                                                                           |
| query_cache_limit       | 指定单个查询可以使用的缓冲区的大小，一般默认值是 1M                                                                               |
| query_cache_size        | 查询的缓存大小设置                                                                                                                |
| query_cache_type        | 设置缓存的类型                                                                                                                    |
| join_buffer_size        | 查询语句中如果较多次使用 join 查询时，可适当增大该参数，默认 2M，如果几乎不怎么用 join 进行查询，可不予理会                       |
| max_heap_table_size     | 指定用户可创建内存表的大小                                                                                                        |
| low_priority_updates    | 设置服务器降低写操作的优先级，设置为 1 表示以读为主                                                                               |
| max_allowd_packet       | 设置一次消息传输的最大值                                                                                                          |
| max_seeks_for_key       | 设置基于 key 查询允许的最大查找次数                                                                                               |
| sort_buffer_size        | 通过增加该值的大小可以提高查询中使用“group by”和“order by”的性能                                                                  |
| read_buffer_size        | 设置服务器读缓冲区的大小                                                                                                          |
| max_connect_errors      | 客户端连接服务器在没有成功时就被阻断了，累计后超过这个设置的值时，服务器将阻止该客户端后续的所有访问                              |
| myisam_sort_buffer_size | 服务器重建索引时允许建立的最大临时文件的大小                                                                                      |
| tmp_table_size          | 设置临时内部堆积表（Heap）的大小                                                                                                  |
| read_rnd_buffer_size    | 设置服务器随机读取缓冲区的大小                                                                                                    |
| open_file_limit         | 控制文件打开的个数                                                                                                                |
| bind-address            | -                                                                                                                                 |
| secure_file_priv        | -                                                                                                                                 |
