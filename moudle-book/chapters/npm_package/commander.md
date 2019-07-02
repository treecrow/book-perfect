# [commander](https://github.com/tj/commander.js#readme)

## api list

| class | api                                                      | more                                                                                                                             |
| ----- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 构建  | const program = commander)                               | create a local Command object to use.                                                                                            |
| ^     | const program = new commander.Command()                  | create a local Command object to use.                                                                                            |
| 设置  | program.version()                                        | You may specify custom flags by passing an additional parameter to the version method using the same syntax as the option method |
| ^     | program.usage()                                          | Set / get the command usage str.                                                                                                 |
| ^     | program.option(flags, description [,fn][,defaultvalues]) | Options are defined with the .option() method, also serving as documentation for the options.                                    |
| ^     | program.command()                                        | Add command name                                                                                                                 |
| ^     | program.action()                                         | Register callback fn for the command.                                                                                            |
| ^     | program.on()                                             | --help 、 option:verbose 、 `command:*`                                                                                          |
| ^     | program.parse(process.argv)                              | Parse argv, settings options and invoking commands when defined.                                                                 |
| ^     | program.outputHelp(cb)                                   | Output help information without exiting. Optional callback cb allows post-processing of help text before it is displayed.        |
| ^     | program.help()                                           | Output help information and exit immediately. Optional callback cb allows post-processing of help text before it is displayed    |
| 获取  | program.`__option__`                                     | Boolean or value                                                                                                                 |
| ^     | program.opts()                                           | Return an object containing options as key-value pairs                                                                           |
| ===   | ===                                                      | ===                                                                                                                              |
| ^     | program.arguments()                                      | Define argument syntax for the top-level command.                                                                                |
| ^     | program.parseExpectedArgs()                              | Parse expected args.                                                                                                             |
| ^     | program.allowUnknownOption()                             | Allow unknown options on the command line.                                                                                       |
| ^     | program.parseOptions()                                   | Parse options from argv returning argv void of these options.                                                                    |
| ^     | program.description()                                    | Set the description to str.                                                                                                      |
| ^     | program.alias()                                          | Set an alias for the command                                                                                                     |
| ^     | program.name()                                           | Get the name of the command                                                                                                      |
