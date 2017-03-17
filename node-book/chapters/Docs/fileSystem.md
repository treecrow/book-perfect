# fileSystem文件系统

## fs.FSWatcher 类
> 从 fs.watch() 返回的对象是该类型

#### 事件
- 'change' 事件---当一个被监视的目录或文件有变化时触发
- 'error' 事件---当发生错误时触发
#### 方法
- watcher.close()---停止监视给定的 fs.FSWatcher 的变化


## fs.ReadStream 类
> ReadStream 是一个可读流

#### 事件
- 'open'事件---当 ReadStream 文件被打开时触发
- 'close'事件---当 ReadStream 底层的文件描述符已被使用 fs.close() 方法关闭时触发
#### 属性
- readStream.bytesRead---已读取的字节数
- readStream.path---流正在读取的文件的路径，指定在 fs.createReadStream() 的第一个参数


## fs.Stats 类
> 从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步版本返回的对象都是该类型

#### 方法
- stats.isFile()
- stats.isDirectory()
- stats.isBlockDevice()
- stats.isCharacterDevice()
- stats.isSymbolicLink() (仅对 fs.lstat() 有效)
- stats.isFIFO()
- stats.isSocket()


## fs.WriteStream 类
> WriteStream 一个可写流

#### 事件
- 'open' 事件---当 WriteStream 文件被打开时触发
- 'close' 事件---当 WriteStream 底层的文件描述符已被使用 fs.close() 方法关闭时触发
#### 属性
- writeStream.bytesWritten---已写入的字节数
- writeStream.path---流正在写入的文件的路径，指定在 fs.createWriteStream() 的第一个参数

## fileSystem文件系统方法汇总
#### read
- fs.read(fd, buffer, offset, length, position, callback)---从 fd 指定的文件中读取数据
- fs.readSync(fd, buffer, offset, length, position)
- fs.readdir(path[, options], callback)---读取一个目录的内容
- fs.readdirSync(path[, options])
- fs.readFile(file[, options], callback)---读取一个文件的全部内容
- fs.readFileSync(file[, options])
- fs.readlink(path[, options], callback)---读取链接
- fs.readlinkSync(path[, options])
- fs.realpath(path[, options], callback)---获取真实路径
- fs.realpathSync(path[, options])
#### write
- fs.write(fd, buffer, offset, length[, position], callback)---写入 buffer 到 fd 指定的文件
- fs.writeSync(fd, buffer, offset, length[, position])
- fs.write(fd, data[, position[, encoding]], callback)---写入 data 到 fd 指定的文件
- fs.writeSync(fd, data[, position[, encoding]])
- fs.writeFile(file, data[, options], callback)---写入数据到文件，如果文件已经存在，则替代文件
- fs.writeFileSync(file, data[, options])
#### chmod
- fs.chmod(path, mode, callback)---改写文件的读写权限
- fs.chmodSync(path, mode)
- fs.fchmod(fd, mode, callback)---更改文件权限（文件描述符）
- fs.fchmodSync(fd, mode)
- fs.lchmod(path, mode, callback)---更改文件权限（不解析符号链接）
- fs.lchmodSync(path, mode)
#### chown
- fs.chown(path, uid, gid, callback)---更改文件所有权
- fs.chownSync(path, uid, gid)
- fs.fchown(fd, uid, gid, callback)---更改文件所有权(文件描述符)
- fs.fchownSync(fd, uid, gid)
- fs.lchown(path, uid, gid, callback)---更改文件所有权（不解析符号链接）
- fs.lchownSync(path, uid, gid)
#### utimes
- fs.futimes(fd, atime, mtime, callback)---更改一个文件所提供的文件描述符引用的文件的时间戳
- fs.futimesSync(fd, atime, mtime)
- fs.utimes(path, atime, mtime, callback)---修改文件时间戳
- fs.utimesSync(path, atime, mtime)
#### stat
- fs.stat(path, callback)---获取文件信息
- fs.statSync(path)
- fs.fstat(fd, callback)---根据文件描述符获取文件信息
- fs.fstatSync(fd)
- fs.lstat(path, callback)---获取文件信息（不解析符号链接）
- fs.lstatSync(path)
#### link
- fs.link(existingPath, newPath, callback)---创建硬链接
- fs.linkSync(existingPath, newPath)
- fs.unlink(path, callback)---删除文件操作
- fs.unlinkSync(path)
- fs.symlink(target, path[, type], callback)---创建符号链接
- fs.symlinkSync(target, path[, type])

#### rename
- fs.rename(oldPath, newPath, callback)---修改文件名称，可更改文件的存放路径
- fs.renameSync(oldPath, newPath)
#### access
- fs.access(path[, mode], callback)---测试 path 指定的文件或目录的用户权限
- fs.accessSync(path[, mode])
#### append
- fs.appendFile(file, data[, options], callback)---追加数据到一个文件，如果文件不存在则创建文件
- fs.appendFileSync(file, data[, options])
#### Stream
- fs.createReadStream(path[, options])---返回一个新建的 ReadStream 对象
- fs.createWriteStream(path[, options])---返回一个新建的 WriteStream 对象
#### fsync
- fs.fsync(fd, callback)---同步磁盘缓存
- fs.fsyncSync(fd)
- fs.fdatasync(fd, callback)
- fs.fdatasyncSync(fd)
#### dir
- fs.mkdir(path[, mode], callback)---创建文件目录
- fs.mkdirSync(path[, mode])
- fs.rmdir(path, callback)---删除文件目录
- fs.rmdirSync(path)
#### mkdtemp
- fs.mkdtemp(prefix[, options], callback)---创建一个唯一的临时目录
- fs.mkdtempSync(prefix[, options])
#### open && close
- fs.open(path, flags[, mode], callback)---打开文件
- fs.openSync(path, flags[, mode])
- fs.close(fd, callback)---关闭文件
- fs.closeSync(fd)
#### watch
- fs.watch(filename[, options][, listener])---监视 filename 的变化，filename 可以是一个文件或一个目录
- fs.watchFile(filename[, options], listener)
- fs.unwatchFile(filename[, listener])---停止监视 filename 文件的变化
#### truncate
- fs.truncate(path, len, callback)---文件内容截取操作
- fs.truncateSync(path, len)
- fs.ftruncate(fd, len, callback)---文件内容截取操作
- fs.ftruncateSync(fd, len)
#### exist
- fs.existsSync(path)---测试某个路径下的文件是否存在
#### 属性
- fs.constants---返回一个包含常用文件系统操作的常量的对象

## fs 常量
> 略
