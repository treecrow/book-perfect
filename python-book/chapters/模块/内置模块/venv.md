# [venv](https://docs.python.org/zh-cn/3/library/venv.html)

> 创建虚拟环境

- [关于 Python3 中 venv 虚拟环境](https://www.cnblogs.com/zhaof/p/7299025.html)

## 命令列表

| 命令                   | more                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| venv ENV_DIR           | Creates virtual Python environments in one or more target directories.                                       |
| -h, --help             | show this help message and exit                                                                              |
| --system-site-packages | Give the virtual environment access to the system site-packages dir.                                         |
| --symlinks             | Try to use symlinks rather than copies, when symlinks are not the default for the platform.                  |
| --copies               | Try to use copies rather than symlinks, even when symlinks are the default for the platform.                 |
| --clear                | Delete the contents of the environment directory if it already exists, before environment creation.          |
| --upgrade              | Upgrade the environment directory to use this version of Python, assuming Python has been upgraded in-place. |
| --without-pip          | Skips installing or upgrading pip in the virtual environment (pip is bootstrapped by default)                |
| --prompt PROMPT        | Provides an alternative prompt prefix for this environment.                                                  |
