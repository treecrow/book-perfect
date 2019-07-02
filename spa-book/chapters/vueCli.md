# [vueCli](https://cli.vuejs.org/)

## 命令行

- @vue/cli---全局
- @vue/cli-service---项目

### vue 命令行

| 命令                                   | option                         | more                                                                           |
| -------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------ |
| create [options] <app-name>            | -                              | 使用 vue-cli-service 创建一个新项目                                            |
| ~                                      | -p, --preset <presetName>      | Skip prompts and use saved or remote preset                                    |
| ~                                      | -d, --default                  | Skip prompts and use default preset                                            |
| ~                                      | -i, --inlinePreset <json>      | Skip prompts and use inline JSON string as preset                              |
| ~                                      | -m, --packageManager <command> | Use specified npm client when installing dependencies                          |
| ~                                      | -r, --registry <url>           | Use specified npm registry when installing dependencies (only for npm)         |
| ~                                      | -g, --git [message]            | Force / skip git intialization, optionally specify initial commit message      |
| ~                                      | -f, --force                    | Overwrite target directory if it exists                                        |
| ~                                      | -c, --clone                    | Use git clone when fetching remote preset                                      |
| ~                                      | -x, --proxy                    | Use specified proxy when creating project                                      |
| ~                                      | -h, --help                     | output usage information                                                       |
| add <plugin> [pluginOptions]           | -                              | vue add专门用于安装和调用Vue CLI插件（已创建的项目中的）                       |
| invoke <plugin> [pluginOptions]        | -                              | invoke the generator of a plugin in an already created project                 |
| inspect [options] [paths...]           | -                              | inspect the webpack config in a project with vue-cli-service                   |
| serve [options] [entry]                | -                              | serve a .js or .vue file in development mode with zero config                  |
| build [options] [entry]                | -                              | build a .js or .vue file in production mode with zero config                   |
| ui [options]                           | -                              | start and open the vue-cli ui                                                  |
| `init [options] <template> <app-name>` | -                              | generate a project from a remote template (legacy API, requires @vue/cli-init) |

### vue-cli-service 命令行

| 命令    | options       | more                                                                                   |
| ------- | ------------- | -------------------------------------------------------------------------------------- |
| serve   | -             | -                                                                                      |
| ~       | --open        | open browser on server start                                                           |
| ~       | --copy        | copy url to clipboard on server start                                                  |
| ~       | --mode        | specify env mode (default: development)                                                |
| ~       | --host        | specify host (default: 0.0.0.0)                                                        |
| ~       | --port        | specify port (default: 8080)                                                           |
| ~       | --https       | use https (default: false)                                                             |
| build   | -             | -                                                                                      |
| ~       | --mode        | specify env mode (default: production)                                                 |
| ~       | --dest        | specify output directory (default: dist)                                               |
| ~       | --modern      | build app targeting modern browsers with auto fallback                                 |
| ~       | --target      | app / lib / wc / wc-async (default: app)                                               |
| ~       | --name        | name for lib or web-component mode (default: "name" in package.json or entry filename) |
| ~       | --no-clean    | do not remove the dist directory before building the project                           |
| ~       | --report      | generate report.html to help analyze bundle content                                    |
| ~       | --report-json | generate report.json to help analyze bundle content                                    |
| ~       | --watch       | watch for changes                                                                      |
| inspect | -             | 打印 webpack config                                                                    |
| ~       | --mode        | specify env mode (default: development)                                                |

## vue.config.js config

| config                | Default | more |
| --------------------- | ------- | ---- |
| baseUrl               | -       | -    |
| outputDir             | -       | -    |
| assetsDir             | -       | -    |
| pages                 | -       | -    |
| lintOnSave            | -       | -    |
| runtimeCompiler       | -       | -    |
| transpileDependencies | -       | -    |
| productionSourceMap   | -       | -    |
| configureWebpack      | -       | -    |
| chainWebpack          | -       | -    |
| css.modules           | -       | -    |
| css.extract           | -       | -    |
| css.sourceMap         | -       | -    |
| css.loaderOptions     | -       | -    |
| devServer             | -       | -    |
| devServer.proxy       | -       | -    |
| parallel              | -       | -    |
| pwa                   | -       | -    |
| pluginOptions         | -       | -    |