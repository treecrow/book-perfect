# [loaders](https://webpack.js.org/loaders/)

## loader list (官方推荐)

| class              | loader                                 | more                                                                                                   |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Files              | -                                      | -                                                                                                      |
| ^                  | raw-loader                             | Loads raw content of a file (utf-8)                                                                    |
| ^                  | val-loader                             | Executes code as module and consider exports as JS code                                                |
| ^                  | url-loader                             | Works like the file loader, but can return a data URL if the file is smaller than a limit              |
| ^                  | file-loader                            | Emits the file into the output folder and returns the (relative) URL                                   |
| ^                  | ref-loader                             | Create dependencies between any files manually                                                         |
| JSON               | -                                      | -                                                                                                      |
| ^                  | json-loader                            | Loads a JSON file (included by default)                                                                |
| ^                  | json5-loader                           | Loads and transpiles a JSON 5 file                                                                     |
| ^                  | cson-loader                            | Loads and transpiles a CSON file                                                                       |
| Transpiling        | -                                      | -                                                                                                      |
| ^                  | script-loader                          | Executes a JavaScript file once in global context (like in script tag), requires are not parsed        |
| ^                  | babel-loader                           | Loads ES2015+ code and transpiles to ES5 using Babel                                                   |
| ^                  | buble-loader                           | Loads ES2015+ code and transpiles to ES5 using Bublé                                                   |
| ^                  | traceur-loader                         | Loads ES2015+ code and transpiles to ES5 using Traceur                                                 |
| ^                  | ts-loader or awesome-typescript-loader | Loads TypeScript 2.0+ like JavaScript                                                                  |
| ^                  | coffee-loader                          | Loads CoffeeScript like JavaScript                                                                     |
| ^                  | fengari-loader                         | Loads Lua code using fengari                                                                           |
| Templating         | -                                      | -                                                                                                      |
| ^                  | html-loader                            | Exports HTML as string, require references to static resources                                         |
| ^                  | pug-loader                             | Loads Pug and Jade templates and returns a function                                                    |
| ^                  | markdown-loader                        | Compiles Markdown to HTML                                                                              |
| ^                  | react-markdown-loader                  | Compiles Markdown to a React Component using the markdown-parse parser                                 |
| ^                  | posthtml-loader                        | Loads and transforms a HTML file using PostHTML                                                        |
| ^                  | handlebars-loader                      | Compiles Handlebars to HTML                                                                            |
| ^                  | markup-inline-loader                   | Inline SVG/MathML files to HTML. It’s useful when applying icon font or applying CSS animation to SVG. |
| ^                  | twig-loader                            | Compiles Twig templates and returns a function                                                         |
| Styling            | -                                      | -                                                                                                      |
| ^                  | style-loader                           | Add exports of a module as style to DOM                                                                |
| ^                  | css-loader                             | Loads CSS file with resolved imports and returns CSS code                                              |
| ^                  | less-loader                            | Loads and compiles a LESS file                                                                         |
| ^                  | sass-loader                            | Loads and compiles a SASS/SCSS file                                                                    |
| ^                  | postcss-loader                         | Loads and transforms a CSS/SSS file using PostCSS                                                      |
| ^                  | stylus-loader                          | Loads and compiles a Stylus file                                                                       |
| Linting && Testing | -                                      | -                                                                                                      |
| ^                  | mocha-loader                           | Tests with mocha (Browser/NodeJS)                                                                      |
| ^                  | eslint-loader                          | PreLoader for linting code using ESLint                                                                |
| ^                  | jshint-loader                          | PreLoader for linting code using JSHint                                                                |
| ^                  | jscs-loader                            | PreLoader for code style checking using JSCS                                                           |
| ^                  | coverjs-loader                         | PreLoader to determine the testing coverage using CoverJS                                              |
| Frameworks         | -                                      | -                                                                                                      |
| ^                  | vue-loader                             | Loads and compiles Vue Components                                                                      |
| ^                  | polymer-loader                         | Process HTML & CSS with preprocessor of choice and require() Web Components like first-class modules   |
| ^                  | angular2-template-loader               | Loads and compiles Angular Components                                                                  |

## 其他 loader

| plugin        | more                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| expose-loader | 将第三方库（本文指的是 jQuery）暴露给全局变量环境中，这样一来，无论是调试页面，还是依赖它的其他 js 文件，都能很方便的使用到它的 API |
