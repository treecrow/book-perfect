# cli

> python 命令行

## 命令列表

| 命令                                         | more                                                                                                                             |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| -h                                           | 打印帮助信息并退出 (also --help)                                                                                                 |
| -m mod                                       | 以脚本形式运行库模块 (terminates option list)                                                                                    |
| -V                                           | 打印 python 版本号（also --version）                                                                                             |
| -v                                           | 跟踪导入语句 also PYTHONVERBOSE=x can be supplied multiple times to increase verbosity                                           |
| =====                                        | =====                                                                                                                            |
| -b                                           | issue warnings about str(bytes_instance), str(bytearray_instance) and comparing bytes/bytearray with str. (-bb: issue errors)    |
| -B                                           | don't write .pyc files on import; also PYTHONDONTWRITEBYTECODE=x                                                                 |
| -c cmd                                       | program passed in as string (terminates option list)                                                                             |
| -d                                           | debug output from parser; also PYTHONDEBUG=x                                                                                     |
| -E                                           | ignore PYTHON\* environment variables (such as PYTHONPATH)                                                                       |
| -i                                           | inspect interactively after running script; forces a prompt even if stdin does not appear to be a terminal; also PYTHONINSPECT=x |
| -I                                           | isolate Python from the user's environment (implies -E and -s)                                                                   |
| -O                                           | remove assert and **debug**-dependent statements; add .opt-1 before .pyc extension; also PYTHONOPTIMIZE=x                        |
| -OO                                          | do -O changes and also discard docstrings; add .opt-2 before .pyc extension                                                      |
| -q                                           | don't print version and copyright messages on interactive startup                                                                |
| -s                                           | don't add user site directory to sys.path; also PYTHONNOUSERSITE                                                                 |
| -S                                           | don't imply 'import site' on initialization                                                                                      |
| -u                                           | force the stdout and stderr streams to be unbuffered; this option has no effect on stdin; also PYTHONUNBUFFERED=x                |
| -W arg                                       | warning control; arg is action:message:category:module:lineno also PYTHONWARNINGS=arg                                            |
| -x                                           | skip first line of source, allowing use of non-Unix forms of #!cmd                                                               |
| -X opt                                       | set implementation-specific option                                                                                               |
| --check-hash-based-pycs always/default/never | control how Python invalidates hash-based .pyc files                                                                             |
| file                                         | program read from script file                                                                                                    |
| -                                            | program read from stdin (default; interactive mode if a tty)                                                                     |
| arg ...                                      | arguments passed to program in sys.argv[1:]                                                                                      |
