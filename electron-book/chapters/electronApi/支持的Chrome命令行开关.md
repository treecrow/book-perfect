# 支持的Chrome命令行开关

> 您可以在app 模块的ready事件生效之前，使用app.commandLine.appendSwitch将它们附加到您的应用程序的主要脚本中

| switch                                  | more                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------------- |
| --ignore-connections-limit=domains      | 忽略由,分割的domains列表的连接限制.                                                      |
| --disable-http-cache                    | 禁用HTTP请求的磁盘缓存.                                                                  |
| --disable-http2                         | 禁用HTTP/2和SPDY/3.1协议.                                                                |
| --lang                                  | 设置系统语言环境                                                                         |
| --inspect=port and --inspect-brk=port   | 调试相关的标识                                                                           |
| --remote-debugging-port=port            | 在指定端口开启HTTP远程调试.                                                              |
| --disk-cache-size=size                  | 强制磁盘缓存使用的最大磁盘空间（以字节为单位）。                                         |
| --js-flags=flags                        | 指定传递给Node JS引擎的标志. 如果你想在主进程中启用flags, 则必须在启动Electron时传递     |
| --proxy-server=address:port             | 使用指定的覆盖系统设置的代理服务器. 这个开关只影响HTTP协议请求, 包括HTTPS和WebSocket请求 |
| --proxy-bypass-list=hosts               | 指示 Electron绕过给定的分号分隔的代理服务器主机列表                                      |
| --proxy-pac-url=url                     | 在指定url中使用PAC脚本.                                                                  |
| --no-proxy-server                       | 不要使用代理服务器，并始终直接连接. 覆盖传递的任何其他代理服务器标志                     |
| --host-rules=rules                      | 以逗号分隔的rules列表，用于控制主机名的映射方式                                          |
| --host-resolver-rules=rules             | 与--host-rules类似, 但是这些rules仅适用于主机解析器.                                     |
| --auth-server-whitelist=url             | 启用了集成身份验证的以逗号分隔的服务器列表。                                             |
| --auth-negotiate-delegate-whitelist=url | 需要身份验证的服务器的逗号分隔列表. 没有*前缀则url必须完全匹配.                          |
| --ignore-certificate-errors             | 忽略证书相关的错误.                                                                      |
| --ppapi-flash-path=path                 | 设置pepper flash插件的path属性.                                                          |
| --ppapi-flash-version=version           | 设置pepper flash插件的version属性.                                                       |
| --log-net-log=path                      | 启用需要保存的网络日志事件并将其写入path路径下.                                          |
| --disable-renderer-backgrounding        | 防止Chromium降低不可见的页面渲染进程的优先级.                                            |
| --enable-logging                        | 在控制台打印Chromium日志.                                                                |
| --v=log_level                           | 给定默认的最大的有效V-logging等级; 0是默认值。 通常V-logging等级为正值.                  |
| --vmodule=pattern                       | 给定每个模块最大的V-logging等级, 覆盖--v设定的值                                         |

