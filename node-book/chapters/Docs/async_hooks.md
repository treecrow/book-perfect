# async_hooks

| api                                                                      | more                                                                                                        |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| async_hooks.executionAsyncId()                                           | Return the ID of the current execution context                                                              |
| async_hooks.triggerAsyncId()                                             | Return the ID of the handle responsible for triggering the callback of the current execution scope to call. |
| async_hooks.createHook({ init, before, after, destroy, promiseResolve }) | Create a new AsyncHook instance. All of these callbacks are optional.                                       |

## asyncHooks

| api                 | more |
| ------------------- | ---- |
| asyncHook.enable()  | -    |
| asyncHook.disable() | -    |

## 钩子回调

| api                                           | more |
| --------------------------------------------- | ---- |
| init(asyncId, type, triggerAsyncId, resource) | -    |
| before(asyncId)                               | -    |
| after(asyncId)                                | -    |
| destroy(asyncId)                              | -    |
| promiseResolve(asyncId)                       | -    |

## AsyncResource 类

| api                                                   | more |
| ----------------------------------------------------- | ---- |
| new AsyncResource(type[, options])                    | -    |
| asyncResource.runInAsyncScope(fn[, thisArg, ...args]) | -    |
| asyncResource.emitDestroy()                           | -    |
| asyncResource.asyncId()                               | -    |
| asyncResource.triggerAsyncId()                        | -    |