# Worker对

## Worker对象

### api列表

| api                  | more                               |
|----------------------|------------------------------------|
| new Worker(url)      | 创建一个新的worker,接受一个参数，指定包含js代码文件的URL |
| worker.postMessage() | 传递参数                               |
| worker.terminate()   | 强制一个Woker进程结束运行                    |

### 事件

| event   | more |
|---------|------|
| message | -    |
| error   | -    |

## WorkerGlobalScope 对象

> 大于核心的javascript全局对象，小于整个客户端的Window对象

### api列表

| api                   | more                                                                 |
|-----------------------|----------------------------------------------------------------------|
| scope.postMessage()   | 传递参数                                                                 |
| scope.close()         | 将自己的进程终结                                                             |
| scope.importScripts() | 加载任何需要的库代码，加载的代码里同样可以使用importScripts()加载其它库代码（同步方法，所有的代码载入并运行返程才会返回） |

### 事件

| event   | more |
|---------|------|
| message | -    |