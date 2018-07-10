# vueCli

## 文件

- @vue/cli
- @vue/cli-service

## vue 命令行

| 命令                                 | more                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| create [options] <app-name>          | 使用 vue-cli-service 创建一个新项目                                            |
| add <plugin> [pluginOptions]         | vue add专门用于安装和调用Vue CLI插件（已创建的项目中的）s                       |
| invoke <plugin> [pluginOptions]      | invoke the generator of a plugin in an already created project                 |
| inspect [options] [paths...]         | inspect the webpack config in a project with vue-cli-service                   |
| serve [options] [entry]              | serve a .js or .vue file in development mode with zero config                  |
| build [options] [entry]              | build a .js or .vue file in production mode with zero config                   |
| ui [options]                         | start and open the vue-cli ui                                                  |
| init [options] <template> <app-name> | generate a project from a remote template (legacy API, requires @vue/cli-init) |

### vue create

| option                         | more                                                                      |
| ------------------------------ | ------------------------------------------------------------------------- |
| -p, --preset <presetName>      | Skip prompts and use saved or remote preset                               |
| -d, --default                  | Skip prompts and use default preset                                       |
| -i, --inlinePreset <json>      | Skip prompts and use inline JSON string as preset                         |
| -m, --packageManager <command> | Use specified npm client when installing dependencies                     |
| -r, --registry <url>           | Use specified npm registry when installing dependencies (only for npm)    |
| -g, --git [message]            | Force / skip git intialization, optionally specify initial commit message |
| -f, --force                    | Overwrite target directory if it exists                                   |
| -c, --clone                    | Use git clone when fetching remote preset                                 |
| -x, --proxy                    | Use specified proxy when creating project                                 |
| -h, --help                     | output usage information                                                  |