# [gulp](https://gulpjs.com/)

> 用自动化构建工具增强你的工作流程！

## api list

| api                                  | more                                                                                                                                                       |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gulp.src(globs[, options])           | Creates a stream for reading Vinyl objects from the file system.                                                                                           |
| gulp.dest(directory, [options])      | Creates a stream for writing Vinyl objects to the file system                                                                                              |
| gulp.symlink(directory, [options])   | Creates a stream for linking Vinyl objects to the file system.                                                                                             |
| gulp.lastRun(task, [precision])      | Retrieves the last time a task was successfully completed during the current running process.                                                              |
| gulp.series(...tasks)                | Combines task functions and/or composed operations into larger operations that will be executed one after another, in sequential order                     |
| gulp.parallel(...tasks)              | Combines task functions and/or composed operations into larger operations that will be executed simultaneously.                                            |
| gulp.watch(globs, [options], [task]) | Allows watching globs and running a task when a change occurs                                                                                              |
| gulp.task([taskName], taskFunction)  | Defines a task within the task system                                                                                                                      |
| gulp.registry([registryInstance])    | Allows custom registries to be plugged into the task system, which can provide shared tasks or augmented functionality.                                    |
| gulp.tree()                          | Fetches the current task dependency tree - in the rare case that it is needed.                                                                             |
| new Vinyl([options])                 | A virtual file format. When a file is read by src(), a Vinyl object is generated to represent the file - including the path, contents, and other metadata. |
| Vinyl.isVinyl()                      | Determines if an object is a Vinyl instance                                                                                                                |
| Vinyl.isCustomProp()                 | Determines if a property is internally managed by Vinyl                                                                                                    |
