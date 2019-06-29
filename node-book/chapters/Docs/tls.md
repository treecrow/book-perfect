
## - tls.Server类
#### 事件
- 'tlsClientError'
- 'newSession'
- 'OCSPRequest'
- 'resumeSession'
- 'secureConnection'
#### 方法
- server.addContext(hostname, context)
- server.address()
- server.close([callback])
- server.connections
- server.getTicketKeys()
- server.listen(port[, hostname][, callback])
- server.setTicketKeys(keys)
## - tls.TLSSocket类
#### 创建- tls.TLSSocket实例
```js
new - tls.TLSSocket(socket[, options])
```
#### 事件
- 'OCSPResponse'
- 'secureConnect'
#### 方法
- tlsSocket.address()
- tlsSocket.authorized
- tlsSocket.authorizationError
- tlsSocket.encrypted
- tlsSocket.getCipher()
- tlsSocket.getEphemeralKeyInfo()
- tlsSocket.getPeerCertificate([ detailed ])
- tlsSocket.getProtocol()
- tlsSocket.getSession()
- tlsSocket.getTLSTicket()
- tlsSocket.localAddress
- tlsSocket.localPort
- tlsSocket.remoteAddress
- tlsSocket.remoteFamily
- tlsSocket.remotePort
- tlsSocket.renegotiate(options, callback)
- tlsSocket.setMaxSendFragment(size)

## tls
- tls.connect(port[, host][, options][, callback])
- tls.connect(path[, options][, callback])
- tls.connect(options[, callback])
- tls.createSecureContext(options)
- tls.createServer([options][, secureConnectionListener])
- tls.getCiphers()
