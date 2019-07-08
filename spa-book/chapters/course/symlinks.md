# symlinks

> 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。 可以提高解析速度

- 相关配置

```js
// webpack
{
  resolve: {
    // 默认不使用 npm link，提高解析速度
    symlinks: false
  }
}
```
