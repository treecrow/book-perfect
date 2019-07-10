# [fs](http://nodejs.cn/api/fs.html)

> fs 模块提供了一个 API，用于以模仿标准 POSIX 函数的方式与文件系统进行交互。

## api list

- fs

| api                                                            | more                                             |
| -------------------------------------------------------------- | ------------------------------------------------ |
| fs.access(path[, mode], callback)                              | 测试用户对 path 指定的文件或目录的权限           |
| fs.accessSync(path[, mode])                                    | ^                                                |
| fs.constants                                                   | 返回包含文件系统操作常用常量的对象               |
| fs.open(path[, flags[, mode]], callback)                       | 打开文件                                         |
| fs.openSync(path[, flags, mode])                               | ^                                                |
| fs.read(fd, buffer, offset, length, position, callback)        | 从 fd 指定的文件中读取数据                       |
| fs.readSync(fd, buffer, offset, length, position)              | ^                                                |
| fs.readdir(path[, options], callback)                          | 读取目录的内容                                   |
| fs.readdirSync(path[, options])                                | ^                                                |
| fs.readFile(path[, options], callback)                         | 读取文件的全部内容                               |
| fs.readFileSync(path[, options])                               | ^                                                |
| fs.readlink(path[, options], callback)                         | 返回符号链接的字符串值                           |
| fs.readlinkSync(path[, options])                               | ^                                                |
| fs.write(fd, buffer[, offset[, length[, position]]], callback) | -                                                |
| fs.writeSync(fd, buffer[, offset[, length[, position]]])       | ^                                                |
| fs.write(fd, string[, position[, encoding]], callback)         | -                                                |
| fs.writeSync(fd, string[, position[, encoding]])               | ^                                                |
| fs.writeFile(file, data[, options], callback)                  | 将数据写入到一个文件，如果文件已存在则覆盖该文件 |
| fs.writeFileSync(file, data[, options])                        | ^                                                |
| fs.close(fd, callback)                                         | -                                                |
| fs.closeSync(fd)                                               | ^                                                |
| fs.realpath(path[, options], callback)                         | 获取路径对应的真实路径                           |
| fs.realpathSync(path[, options])                               | ^                                                |
| fs.realpath.native(path[, options], callback)                  | -                                                |
| fs.realpathSync.native(path[, options])                        | ^                                                |
| fs.createReadStream(path[, options])                           | 创建读取流                                       |
| fs.createWriteStream(path[, options])                          | 创建写入流                                       |
| fs.existsSync(path)                                            | 如果路径存在，则返回 true，否则返回 false        |
| fs.appendFile(path, data[, options], callback)                 | -                                                |
| fs.appendFileSync(path, data[, options])                       | -                                                |
| fs.chmod(path, mode, callback)                                 | -                                                |
| fs.chmodSync(path, mode)                                       | -                                                |
| fs.chown(path, uid, gid, callback)                             | -                                                |
| fs.chownSync(path, uid, gid)                                   | -                                                |
| fs.copyFile(src, dest[, flags], callback)                      | -                                                |
| fs.copyFileSync(src, dest[, flags])                            | -                                                |
| fs.fchmod(fd, mode, callback)                                  | -                                                |
| fs.fchmodSync(fd, mode)                                        | -                                                |
| fs.fchown(fd, uid, gid, callback)                              | -                                                |
| fs.fchownSync(fd, uid, gid)                                    | -                                                |
| fs.fdatasync(fd, callback)                                     | -                                                |
| fs.fdatasyncSync(fd)                                           | -                                                |
| fs.fstat(fd[, options], callback)                              | -                                                |
| fs.fstatSync(fd[, options])                                    | -                                                |
| fs.fsync(fd, callback)                                         | -                                                |
| fs.fsyncSync(fd)                                               | -                                                |
| fs.ftruncate(fd[, len], callback)                              | -                                                |
| fs.ftruncateSync(fd[, len])                                    | -                                                |
| fs.futimes(fd, atime, mtime, callback)                         | -                                                |
| fs.futimesSync(fd, atime, mtime)                               | -                                                |
| fs.lchmod(path, mode, callback)                                | -                                                |
| fs.lchmodSync(path, mode)                                      | -                                                |
| fs.lchown(path, uid, gid, callback)                            | -                                                |
| fs.lchownSync(path, uid, gid)                                  | -                                                |
| fs.link(existingPath, newPath, callback)                       | -                                                |
| fs.linkSync(existingPath, newPath)                             | -                                                |
| fs.lstat(path[, options], callback)                            | -                                                |
| fs.lstatSync(path[, options])                                  | -                                                |
| fs.mkdir(path[, options], callback)                            | -                                                |
| fs.mkdirSync(path[, options])                                  | -                                                |
| fs.mkdtemp(prefix[, options], callback)                        | -                                                |
| fs.mkdtempSync(prefix[, options])                              | -                                                |
| fs.rename(oldPath, newPath, callback)                          | -                                                |
| fs.renameSync(oldPath, newPath)                                | -                                                |
| fs.rmdir(path, callback)                                       | -                                                |
| fs.rmdirSync(path)                                             | -                                                |
| fs.stat(path[, options], callback)                             | -                                                |
| fs.statSync(path[, options])                                   | -                                                |
| fs.symlink(target, path[, type], callback)                     | -                                                |
| fs.symlinkSync(target, path[, type])                           | -                                                |
| fs.truncate(path[, len], callback)                             | -                                                |
| fs.truncateSync(path[, len])                                   | -                                                |
| fs.unlink(path, callback)                                      | -                                                |
| fs.unlinkSync(path)                                            | -                                                |
| fs.unwatchFile(filename[, listener])                           | -                                                |
| fs.utimes(path, atime, mtime, callback)                        | -                                                |
| fs.utimesSync(path, atime, mtime)                              | -                                                |
| fs.watch(filename[, options][, listener])                      | -                                                |
| fs.watchFile(filename[, options], listener)                    | -                                                |

- fs.Dirent 类

> 当使用 withFileTypes 选项设置为 true 调用 fs.readdir() 或 fs.readdirSync() 时，生成的数组将填充 fs.Dirent 对象，而不是字符串或 Buffer。

| class | api                        | more |
| ----- | -------------------------- | ---- |
| api   | dirent.isBlockDevice()     | -    |
| ^     | dirent.isCharacterDevice() | -    |
| ^     | dirent.isDirectory()       | -    |
| ^     | dirent.isFIFO()            | -    |
| ^     | dirent.isFile()            | -    |
| ^     | dirent.isSocket()          | -    |
| ^     | dirent.isSymbolicLink()    | -    |
| ^     | dirent.name                | -    |

- fs.FSWatcher 类

> 从 fs.watch() 返回的对象是该类型

| class | api             | more                                 |
| ----- | --------------- | ------------------------------------ |
| api   | watcher.close() | 停止监视给定的 fs.FSWatcher 的变化   |
| event | change          | 当一个被监视的目录或文件有变化时触发 |
| ^     | close           | -                                    |
| ^     | error           | 当发生错误时触发                     |

- fs.ReadStream 类

| class | api                  | more                                                              |
| ----- | -------------------- | ----------------------------------------------------------------- |
| api   | readStream.bytesRead | 已读取的字节数                                                    |
| ^     | readStream.path      | 流正在读取的文件的路径，指定在 fs.createReadStream() 的第一个参数 |
| ^     | readStream.pending   | -                                                                 |
| event | close                | 当 ReadStream 底层的文件描述符已被使用 fs.close() 方法关闭时触发  |
| ^     | open                 | 当 ReadStream 文件被打开时触发                                    |
| ^     | ready                | -                                                                 |

- fs.Stats 类

> 从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步版本返回的对象都是该类型

| class | api                       | more                                                          |
| ----- | ------------------------- | ------------------------------------------------------------- |
| api   | stats.isBlockDevice()     | 如果 fs.Stats 对象描述块设备，则返回 true。                   |
| ^     | stats.isCharacterDevice() | 如果 fs.Stats 对象描述字符设备，则返回 true                   |
| ^     | stats.isDirectory()       | 如果 fs.Stats 对象描述文件系统目录，则返回 true               |
| ^     | stats.isFIFO()            | 如果 fs.Stats 对象描述先进先出（FIFO）管道，则返回 true       |
| ^     | stats.isFile()            | 如果 fs.Stats 对象描述常规文件，则返回 true                   |
| ^     | stats.isSocket()          | 如果 fs.Stats 对象描述套接字，则返回 true                     |
| ^     | stats.isSymbolicLink()    | 如果 fs.Stats 对象描述符号链接，则返回 true                   |
| ^     | stats.dev                 | 包含该文件的设备的数字标识符。                                |
| ^     | stats.ino                 | 文件系统特定的文件索引节点编号。                              |
| ^     | stats.mode                | 描述文件类型和模式的位字段。                                  |
| ^     | stats.nlink               | 文件存在的硬链接数。                                          |
| ^     | stats.uid                 | 拥有该文件（POSIX）的用户的数字型用户标识符。                 |
| ^     | stats.gid                 | 拥有该文件（POSIX）的群组的数字型群组标识符。                 |
| ^     | stats.rdev                | 如果文件被视为特殊文件，则此值为数字型设备标识符。            |
| ^     | stats.size                | 文件的大小（以字节为单位）。                                  |
| ^     | stats.blksize             | 用于 I/O 操作的文件系统块的大小。                             |
| ^     | stats.blocks              | 为此文件分配的块数。                                          |
| ^     | stats.atimeMs             | 表明上次访问此文件的时间戳，以 POSIX 纪元以来的毫秒数表示。   |
| ^     | stats.mtimeMs             | 表明上次修改此文件的时间戳，以 POSIX 纪元以来的毫秒数表示。   |
| ^     | stats.ctimeMs             | 表明上次更改文件状态的时间戳，以 POSIX 纪元以来的毫秒数表示。 |
| ^     | stats.birthtimeMs         | 表明此文件的创建时间的时间戳，以 POSIX 纪元以来的毫秒数表示。 |
| ^     | stats.atime               | 表明上次访问此文件的时间戳。                                  |
| ^     | stats.mtime               | 表明上次修改此文件的时间戳。                                  |
| ^     | stats.ctime               | 表明上次更改文件状态的时间戳。                                |
| ^     | stats.birthtime           | 表示此文件的创建时间的时间戳。                                |

- fs.WriteStream 类

| class | api                      | more                                                               |
| ----- | ------------------------ | ------------------------------------------------------------------ |
| api   | writeStream.bytesWritten | 已写入的字节数                                                     |
| ^     | writeStream.path         | 流正在写入的文件的路径，指定在 fs.createWriteStream() 的第一个参数 |
| ^     | writeStream.pending      | -                                                                  |
| event | open                     | 当 WriteStream 文件被打开时触发                                    |
| ^     | close                    | 当 WriteStream 底层的文件描述符已被使用 fs.close() 方法关闭时触发  |
| ^     | ready                    | -                                                                  |

## FS 常量

| class              | 常量                   | 说明                                                                                                                |
| ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 文件可访问性的常量 | -                      | 以下常量适用于 fs.access()                                                                                          |
| ^                  | F_OK                   | 表明文件对调用进程可见。 这对于判断文件是否存在很有用，但对 rwx 权限没有任何说明。 如果未指定模式，则默认值为该值。 |
| ^                  | R_OK                   | 表明调用进程可以读取文件。                                                                                          |
| ^                  | W_OK                   | 表明调用进程可以写入文件。                                                                                          |
| ^                  | X_OK                   | 表明调用进程可以执行文件。 在 Windows 上无效（表现得像 fs.constants.F_OK）。                                        |
| 文件拷贝的常量     | -                      | 以下常量适用于 fs.copyFile()                                                                                        |
| ^                  | COPYFILE_EXCL          | 如果目标路径已存在，则拷贝操作将失败。                                                                              |
| ^                  | COPYFILE_FICLONE       | 拷贝操作将尝试创建写时拷贝链接。 如果底层平台不支持写时拷贝，则使用备选的拷贝机制。                                 |
| ^                  | COPYFILE_FICLONE_FORCE | 拷贝操作将尝试创建写时拷贝链接。 如果底层平台不支持写时拷贝，则拷贝操作将失败。                                     |
| 文件打开的常量     | -                      | 以下常量适用于 fs.open()                                                                                            |
| ^                  | O_RDONLY               | 表明打开文件用于只读访问。                                                                                          |
| ^                  | O_WRONLY               | 表明打开文件用于只写访问。                                                                                          |
| ^                  | O_RDWR                 | 表明打开文件用于读写访问。                                                                                          |
| ^                  | O_CREAT                | 表明如果文件尚不存在则创建该文件。                                                                                  |
| ^                  | O_EXCL                 | 表明如果设置了 O_CREAT 标志且文件已存在，则打开文件应该失败。                                                       |
| ^                  | O_NOCTTY               | 表明如果路径是终端设备，则打开该路径不应该造成该终端变成进程的控制终端（如果进程还没有终端）。                      |
| ^                  | O_TRUNC                | 表明如果文件存在且是常规文件、并且文件成功打开以进行写入访问，则其长度应截断为零。                                  |
| ^                  | O_APPEND               | 表明数据将追加到文件末尾。                                                                                          |
| ^                  | O_DIRECTORY            | 表明如果路径不是目录，则打开应该失败。                                                                              |
| ^                  | O_NOATIME              | 表明文件系统的读取访问将不再导致与文件相关联的 atime 信息的更新。 仅在 Linux 操作系统上可用。                       |
| ^                  | O_NOFOLLOW             | 表明如果路径是符号链接，则打开应该失败。                                                                            |
| ^                  | O_SYNC                 | 表明文件是为同步 I/O 打开的，写入操作将等待文件的完整性。                                                           |
| ^                  | O_DSYNC                | 表明文件是为同步 I/O 打开的，写入操作将等待数据的完整性                                                             |
| ^                  | O_SYMLINK              | 表明打开符号链接自身，而不是它指向的资源。                                                                          |
| ^                  | O_DIRECT               | 表明将尝试最小化文件 I/O 的缓存效果。                                                                               |
| ^                  | O_NONBLOCK             | 表明在可能的情况下以非阻塞模式打开文件。                                                                            |
| 文件类型的常量     | -                      | 以下常量适用于 fs.Stats 对象的 mode 属性，用于决定文件的类型                                                        |
| ^                  | S_IFMT                 | 用于提取文件类型代码的位掩码。                                                                                      |
| ^                  | S_IFREG                | 表示常规文件。                                                                                                      |
| ^                  | S_IFDIR                | 表示目录。                                                                                                          |
| ^                  | S_IFCHR                | 表示面向字符的设备文件。                                                                                            |
| ^                  | S_IFBLK                | 表示面向块的设备文件。                                                                                              |
| ^                  | S_IFIFO                | 表示 FIFO 或管道。                                                                                                  |
| ^                  | S_IFLNK                | 表示符号链接。                                                                                                      |
| ^                  | S_IFSOCK               | 表示套接字。                                                                                                        |
| 文件模式的常量     | -                      | 以下常量适用于 fs.Stats 对象的 mode 属性，用于决定文件的访问权限。                                                  |
| ^                  | S_IRWXU                | 表明所有者可读、可写、可执行。                                                                                      |
| ^                  | S_IRUSR                | 表明所有者可读。                                                                                                    |
| ^                  | S_IWUSR                | 表明所有者可写。                                                                                                    |
| ^                  | S_IXUSR                | 表明所有者可执行。                                                                                                  |
| ^                  | S_IRWXG                | 表明群组可读、可写、可执行。                                                                                        |
| ^                  | S_IRGRP                | 表明群组可读。                                                                                                      |
| ^                  | S_IWGRP                | 表明群组可写。                                                                                                      |
| ^                  | S_IXGRP                | 表明群组可执行。                                                                                                    |
| ^                  | S_IRWXO                | 表明其他人可读、可写、可执行。                                                                                      |
| ^                  | S_IROTH                | 表明其他人可读。                                                                                                    |
| ^                  | S_IWOTH                | 表明其他人可写。                                                                                                    |
| ^                  | S_IXOTH                | 表明其他人可执行。                                                                                                  |

## 文件系统标志

| 标志  | more                                                                         |
| ----- | ---------------------------------------------------------------------------- |
| 'a'   | 打开文件用于追加。如果文件不存在，则创建该文件。                             |
| 'ax'  | 与 'a' 相似，但如果路径已存在则失败。                                        |
| 'a+'  | 打开文件用于读取和追加。如果文件不存在，则创建该文件。                       |
| 'ax+' | 与 'a+' 相似，但如果路径已存在则失败。                                       |
| 'as'  | 以同步模式打开文件用于追加。如果文件不存在，则创建该文件。                   |
| 'as+' | 以同步模式打开文件用于读取和追加。如果文件不存在，则创建该文件。             |
| 'r'   | 打开文件用于读取。如果文件不存在，则出现异常。                               |
| 'r+'  | 打开文件用于读取和写入。如果文件不存在，则出现异常。                         |
| 'rs+' | 以同步模式打开文件用于读取和写入。指示操作系统绕过本地的文件系统缓存。       |
| 'w'   | 打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。       |
| 'wx'  | 与 'w' 相似，但如果路径已存在则失败。                                        |
| 'w+'  | 打开文件用于读取和写入。如果文件不存在则创建文件，如果文件已存在则截断文件。 |
| 'wx+' | 与 'w+' 相似，但如果路径已存在则失败。                                       |
