# cluster

> 集群

## api list

- cluster

| class | api                             | more |
| ----- | ------------------------------- | ---- |
| api   | cluster.disconnect([callback])  | -    |
| ^     | cluster.fork([env])             | -    |
| ^     | cluster.setupMaster([settings]) | -    |
| ^     | cluster.isMaster                | -    |
| ^     | cluster.isWorker                | -    |
| ^     | cluster.schedulingPolicy        | -    |
| ^     | cluster.settings                | -    |
| ^     | cluster.worker                  | -    |
| ^     | cluster.workers                 | -    |
| event | disconnect                      | -    |
| ^     | exit                            | -    |
| ^     | fork                            | -    |
| ^     | listening                       | -    |
| ^     | message                         | -    |
| ^     | online                          | -    |
| ^     | setup                           | -    |

- Worker 类

| class | api                                            | more |
| ----- | ---------------------------------------------- | ---- |
| api   | worker.disconnect()                            | -    |
| ^     | worker.isConnected()                           | -    |
| ^     | worker.isDead()                                | -    |
| ^     | worker.kill([signal='SIGTERM'])                | -    |
| ^     | worker.send(message[, sendHandle][, callback]) | -    |
| ^     | worker.exitedAfterDisconnect                   | -    |
| ^     | worker.id                                      | -    |
| ^     | worker.process                                 | -    |
| event | -                                              | -    |
| ^     | disconnect                                     | -    |
| ^     | error                                          | -    |
| ^     | exit                                           | -    |
| ^     | listening                                      | -    |
| ^     | message                                        | -    |
| ^     | online                                         | -    |
