# webpack-dev-server

| option               | type    | describe                                                                       |
| -------------------- | ------- | ------------------------------------------------------------------------------ |
| bonjour              | boolean | Broadcasts the server via ZeroConf networking on start                         |
| lazy                 | boolean | Lazy                                                                           |
| inline               | boolean | Inline mode (set to false to disable including client scripts like livereload) |
| progress             | boolean | Print compilation progress in percentage                                       |
| hot-only             | boolean | Do not refresh page if HMR fails                                               |
| stdin                | boolean | close when stdin ends                                                          |
| open                 | string  | Open the default browser, or optionally specify a browser name                 |
| useLocalIp           | boolean | Open default browser with local IP                                             |
| open-page            | string  | Open default browser with the specified page                                   |
| color/colors         | boolean | Enables/Disables colors on the console                                         |
| info                 | boolean | Info                                                                           |
| quiet                | boolean | Quiet                                                                          |
| client-log-level     | string  | Log level in the browser (info, warning, error or none)                        |
| https                | boolean | HTTPS                                                                          |
| key                  | string  | Path to a SSL key.                                                             |
| cert                 | string  | Path to a SSL certificate.                                                     |
| cacert               | string  | Path to a SSL CA certificate.                                                  |
| pfx                  | string  | Path to a SSL pfx file.                                                        |
| pfx-passphrase       | string  | Passphrase for pfx file.                                                       |
| content-base         | string  | A directory or URL to serve HTML content from.                                 |
| watch-content-base   | boolean | Enable live-reloading of the content-base.                                     |
| history-api-fallback | boolean | Fallback to /index.html for Single Page Applications.                          |
| compress             | boolean | Enable gzip compression                                                        |
| port                 | -       | The port                                                                       |
| disable-host-check   | boolean | Will not check the host                                                        |
| socket               | String  | Socket to listen                                                               |
| public               | string  | The public hostname/ip address of the server                                   |
| host                 | string  | The hostname/ip address the server will bind to                                |
| allowed-hosts        | string  | A comma-delimited string of hosts that are allowed to access the dev server    |
