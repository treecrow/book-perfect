# pwa

- 相关文档

  - [Progressive Web Application](https://webpack.js.org/guides/progressive-web-application/)

- 安装依赖

```bash
npm i -D http-server workbox-webpack-plugin
```

- 相关配置

```js
// package.json
{
  "scripts": {
    "build": "NODE_ENV=production webpack --config ./.config_webpack/prod.js && npm run review",
    "review": "http-server dist"
  },
}
// webpack
{
  plugins: [
    // ServiceWorkers(pwa)
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}

// app/main.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
```
