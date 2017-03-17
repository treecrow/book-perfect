# process进程

## 事件
- 'beforeExit'
- 'disconnect'
- 'exit'
- 'message'
- 'rejectionHandled'
- 'uncaughtException'---Warning: Using 'uncaughtException' correctly
- 'unhandledRejection'
- 'warning'
  - Emitting custom warnings
  - Emitting custom deprecation warnings
- Signal Events
## 方法
- process.abort()
- process.chdir(directory)
- process.cwd()
- process.cpuUsage([previousValue])
- process.disconnect()
- process.emitWarning(warning[, name][, ctor])
- process.exit([code])
- process.getegid()
- process.geteuid()
- process.getgid()
- process.getgroups()
- process.getuid()
- process.hrtime([time])
- process.initgroups(user, extra_group)
- process.kill(pid[, signal])
- process.memoryUsage()
- process.nextTick(callback[, ...args])
- process.send(message[, sendHandle[, options]][, callback])
- process.setgroups(groups)
- process.setegid(id)
- process.seteuid(id)
- process.setgid(id)
- process.setuid(id)
- process.umask([mask])
- process.uptime()
## 属性
- process.arch
- process.argv
- process.argv0
- process.config
- process.connected
- process.env
  - Avoiding duplicate warnings
- process.execArgv
- process.execPath
- process.exitCode
- process.mainModule
- process.pid
- process.platform
- process.release
- process.stderr
- process.stdin
- process.stdout
  - TTY Terminals and process.stdout
- process.title
- process.version
- process.versions

## Exit Codes
> 略
