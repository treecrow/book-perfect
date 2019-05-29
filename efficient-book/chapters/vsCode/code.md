# code

- [Launching from the command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
- [vsCode 命令行工具](https://code.visualstudio.com/docs/editor/command-line)

| 分类   | 命令                             | more                                                                                      |
| ------ | -------------------------------- | ----------------------------------------------------------------------------------------- |
| 打开   | code .                           | 打开当前路径所在文件                                                                      |
| ~      | code folder                      | 打开文件夹(多个文件夹对应打开多个项目)                                                    |
| ~      | code file                        | 打开／创建 文件                                                                           |
| 扩展   | code --install-extension <ext>   | 安装扩展程序。提供完整的扩展名 publisher.extension 作为参数。使用--force 参数来避免提示。 |
| ~      | code --uninstall-extension <ext> | 卸载扩展程序。提供完整的扩展名 publisher.extension 作为参数。                             |
| ~      | code --disable-extensions        | 禁用所有已安装的扩展 扩展程序仍将在“ 扩展”视图的“ 已禁用”部分中显示，但永远不会激活它们。 |
| ~      | code --list-extensions           | 列出已安装的扩展。                                                                        |
| ~      | code --show-versions             | 使用时显示已安装扩展的版本 --list-extensions                                              |
| ~      | code --enable-proposed-api <ext> | 为扩展启用建议的 api 功能。提供完整的扩展名 publisher.extension 作为参数。                |
| orther | code -h                          | 帮助                                                                                      |
| ~      | code -v                          | 查看 vsCode 版本号                                                                        |
| ~      | code -n                          | 打开一个新的 VS Code 会话窗口                                                             |
| ~      | code -r xxx                      | 强制在上一个激活窗口中打开文件或文件夹(原项目不在)                                        |
| ~      | code -g                          | -                                                                                         |
| ~      | code -d                          | 打开对比编辑器，需要两个文件路径作为参数                                                  |
| ~      | code --locale <zh-TW>            | 设置 VS 代码会话的显示语言（区域设置）。（例如，en-US 或 zh-TW）                          |
| ~      | code --extensions-dir <dir>      | 设置扩展的根路径。                                                                        |
| ~      | code --user-data-dir <dir>       | 指定保留用户数据的目录，在以 root 身份运行时非常有用。                                    |
| ~      | code -s, --status                | 打印过程使用和诊断信息。                                                                  |
| ~      | code -p, --performance           | 从启用 Developer：Startup Performance 命令开始。                                          |
| ~      | code --disable-gpu               | 禁用 GPU 硬件加速。                                                                       |
| ~      | code --verbose                   | 打印详细输出（隐含--wait）。                                                              |
| ~      | code --prof-startup              | 启动期间运行 CPU Profiler。                                                               |
| ~      | code --upload-logs               | 将日志从当前会话上载到安全端点。                                                          |
| ~      | code --add <dir>                 | 将文件夹添加到多根工作空间的最后一个活动窗口。                                            |
