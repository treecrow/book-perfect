# [axios](https://github.com/axios/axios)

## api

| 分类                   | method                             | more |
| ---------------------- | ---------------------------------- | ---- |
| Request method aliases | axios.request(config)              | -    |
| ~                      | axios.get(url[, config])           | -    |
| ~                      | axios.delete(url[, config])        | -    |
| ~                      | axios.head(url[, config])          | -    |
| ~                      | axios.options(url[, config])       | -    |
| ~                      | axios.post(url[, data[, config]])  | -    |
| ~                      | axios.put(url[, data[, config]])   | -    |
| ~                      | axios.patch(url[, data[, config]]) | -    |
| Concurrency            | axios.all(iterable)                | -    |
| ~                      | axios.spread(callback)             | -    |
| Creating an instance   | axios.create([config])             | -    |

## Request Config

| key                | more                         |
| ------------------ | ---------------------------- |
| url                | -                            |
| method             | -                            |
| baseURL            | -                            |
| transformRequest   | -                            |
| transformResponse  | -                            |
| headers            | -                            |
| params             | -                            |
| paramsSerializer   | -                            |
| data               | -                            |
| timeout            | -                            |
| withCredentials    | -                            |
| adapter            | -                            |
| auth               | -                            |
| responseType       | -                            |
| responseEncoding   | -                            |
| xsrfCookieName     | -                            |
| xsrfHeaderName     | -                            |
| onUploadProgress   | -                            |
| onDownloadProgress | -                            |
| maxContentLength   | -                            |
| validateStatus     | 设置返回状态码触发错误的范围 |
| maxRedirects       | -                            |
| socketPath         | -                            |
| httpAgent          | -                            |
| httpsAgent         | -                            |
| proxy              | -                            |
| cancelToken        | -                            |

## Response Schema

| key        | more |
| ---------- | ---- |
| data       | -    |
| status     | -    |
| statusText | -    |
| headers    | -    |
| config     | -    |
| request    | -    |