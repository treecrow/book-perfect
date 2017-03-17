# vm虚拟机

## vm.Script类
#### 创建vm.Script类
```js
new vm.Script(code, options)
```
- script.runInContext(contextifiedSandbox[, options])
- script.runInNewContext([sandbox][, options])
- script.runInThisContext([options])

## vm
- vm.createContext([sandbox])
- vm.isContext(sandbox)
- vm.runInContext(code, contextifiedSandbox[, options])
- vm.runInDebugContext(code)
- vm.runInNewContext(code[, sandbox][, options])
- vm.runInThisContext(code[, options])
