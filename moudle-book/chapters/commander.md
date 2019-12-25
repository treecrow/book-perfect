# [commander](https://github.com/tj/commander.js#readme)

## api list

| class | api                                                      | more                                                                                                                             |
| ----- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 构建  | const program = commander)                               | create a local Command object to use.                                                                                            |
| ^     | const program = new commander.Command()                  | create a local Command object to use.                                                                                            |
| 设置  | program.version()                                        | You may specify custom flags by passing an additional parameter to the version method using the same syntax as the option method |
| ^     | program.usage()                                          | Set / get the command usage str.                                                                                                 |
| ^     | program.option(flags, description [,fn][,defaultvalues]) | 标识、描述[,中间处理程序][,默认值]                                                                                               |
| ^     | program.command(flags, description[,config])             | Add command name                                                                                                                 |
| ^     | program.description()                                    | Set the description to str.                                                                                                      |
| ^     | program.action((cmdParam,otherCmdParams,cmdOptions)=>{}) | Register callback fn for the command.                                                                                            |
| ^     | program.on()                                             | --help 、 option:verbose 、 `command:*`                                                                                          |
| ^     | program.parse(process.argv)                              | Parse argv, settings options and invoking commands when defined.                                                                 |
| ^     | program.outputHelp(cb)                                   | Output help information without exiting. Optional callback cb allows post-processing of help text before it is displayed.        |
| ^     | program.help()                                           | Output help information and exit immediately. Optional callback cb allows post-processing of help text before it is displayed    |
| 获取  | program.opts()                                           | 返回一个键之对，包含 options 相关值                                                                                              |
| ^     | program.`__option__`                                     | 返回指定 option 的值（Boolean or value）                                                                                         |
| ===   | ===                                                      | ===                                                                                                                              |
| ^     | program.arguments()                                      | Define argument syntax for the top-level command.                                                                                |
| ^     | program.parseExpectedArgs()                              | Parse expected args.                                                                                                             |
| ^     | program.allowUnknownOption()                             | Allow unknown options on the command line.                                                                                       |
| ^     | program.parseOptions()                                   | Parse options from argv returning argv void of these options.                                                                    |
| ^     | program.alias()                                          | Set an alias for the command                                                                                                     |
| ^     | program.name()                                           | Get the name of the command                                                                                                      |

## command

- 可变参数

```js
program.command("rmdir <dir> [otherDirs...]").action((dir, otherDirs) => {
  console.log("rmdir %s", dir);
  if (otherDirs) {
    otherDirs.forEach(function(oDir) {
      console.log("rmdir %s", oDir);
    });
  }
});
```

## option

- 默认值

```js
// 默认值为 blue
program.option(
  "-c, --cheese <type>",
  "add the specified type of cheese",
  "blue"
);

// no- 默认值为 true
program.option("-n, --no-sauce", "Remove sauce");

// 默认为 undefined， -c 为 true, -c xxxx 为 xxxx
program.option("-c, --cheese [type]", "Add cheese with optional type");
```

## <> vs []

- <> 必传
- [] 选传
