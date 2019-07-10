# [tls](http://nodejs.cn/api/tls.html)

> 安全传输层

## api list

- tls

| api                                                     | more                                                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| tls.checkServerIdentity(hostname, cert)                 | Verifies the certificate cert is issued to hostname.                                             |
| tls.connect(options[, callback])                        | tls.connect() returns a tls.TLSSocket object.                                                    |
| tls.connect(path[, options][, callback])                | Same as tls.connect() except that path can be provided as an argument instead of an option.      |
| tls.connect(port[, host][, options][, callback])        | Same as tls.connect() except that port and host can be provided as arguments instead of options. |
| tls.createSecureContext(options)                        | creates a credentials object.                                                                    |
| tls.createServer([options][, secureconnectionlistener]) | Creates a new tls.Server                                                                         |
| tls.getCiphers()                                        | Returns an array with the names of the supported SSL ciphers.                                    |
| tls.DEFAULT_ECDH_CURVE                                  | The default curve name to use for ECDH key agreement in a tls server.                            |

- tls.Server 类

| calss | api                                  | more                                                                                                                  |
| ----- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| api   | server.setTicketKeys(keys)           | Changes to the ticket keys are effective only for future server connections                                           |
| ^     | server.addContext(hostname, context) | adds a secure context that will be used if the client request's SNI name matches the supplied hostname (or wildcard). |
| ^     | server.listen()                      | Starts the server listening for encrypted connections                                                                 |
| ^     | server.getTicketKeys()               | Returns the session ticket keys.                                                                                      |
| ^     | server.address()                     | Returns the bound address, the address family name, and port of the server as reported by the operating system.       |
| ^     | server.close([callback])             | stops the server from accepting new connections.                                                                      |
| event | tlsClientError                       | an error occurs before a secure connection is established.                                                            |
| ^     | newSession                           | 在创建一个新的 TLS 会话时触发                                                                                         |
| ^     | OCSPRequest                          | client sends a certificate status request                                                                             |
| ^     | resumeSession                        | the client requests to resume a previous TLS session                                                                  |
| ^     | secureConnection                     | after the handshaking process for a new connection has successfully completed.                                        |

- tls.TLSSocket 类

| calss | api                                        | more                                                                                                                                                                                                            |
| ----- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 构造  | new tls.TLSSocket(socket[, options])       | 创建 tls.TLSSocket 实例                                                                                                                                                                                         |
| api   | tlsSocket.address()                        | Returns the bound address, the address family name, and port of the underlying socket as reported by the operating system                                                                                       |
| ^     | tlsSocket.authorized                       | Returns the reason why the peer's certificate was not been verified                                                                                                                                             |
| ^     | tlsSocket.authorizationError               | Returns true if the peer certificate was signed by one of the CAs specified when creating the tls.TLSSocket instance, otherwise false                                                                           |
| ^     | tlsSocket.disableRenegotiation()           | Disables TLS renegotiation for this TLSSocket instance                                                                                                                                                          |
| ^     | tlsSocket.encrypted                        | Always returns true. This may be used to distinguish TLS sockets from regular net.Socket instances.                                                                                                             |
| ^     | tlsSocket.getCipher()                      | Returns an object representing the cipher name                                                                                                                                                                  |
| ^     | tlsSocket.getEphemeralKeyInfo()            | Returns an object representing the type, name, and size of parameter of an ephemeral key exchange in Perfect Forward Secrecy on a client connection                                                             |
| ^     | tlsSocket.getFinished()                    | Returns: <Buffer> / <undefined> The latest Finished message that has been sent to the socket as part of a SSL/TLS handshake, or undefined if no Finished message has been sent yet.                             |
| ^     | tlsSocket.getPeerCertificate([ detailed ]) | Returns an object representing the peer's certificate                                                                                                                                                           |
| ^     | tlsSocket.getPeerFinished()                | Returns: <Buffer> / <undefined> The latest Finished message that is expected or has actually been received from the socket as part of a SSL/TLS handshake, or undefined if there is no Finished message so far. |
| ^     | tlsSocket.getProtocol()                    | Returns a string containing the negotiated SSL/TLS protocol version of the current connection.                                                                                                                  |
| ^     | tlsSocket.getSession()                     | Returns the TLS session data or undefined if no session was negotiated                                                                                                                                          |
| ^     | tlsSocket.getTLSTicket()                   | For a client, returns the TLS session ticket if one is available, or undefined. For a server, always returns undefined.                                                                                         |
| ^     | tlsSocket.isSessionReused()                | Returns: <boolean> true if the session was reused, false otherwise.                                                                                                                                             |
| ^     | tlsSocket.localAddress                     | Returns the string representation of the local IP address.                                                                                                                                                      |
| ^     | tlsSocket.localPort                        | Returns the numeric representation of the local port.                                                                                                                                                           |
| ^     | tlsSocket.remoteAddress                    | Returns the string representation of the remote IP address.                                                                                                                                                     |
| ^     | tlsSocket.remoteFamily                     | Returns the string representation of the remote IP family.                                                                                                                                                      |
| ^     | tlsSocket.remotePort                       | Returns the numeric representation of the remote port.                                                                                                                                                          |
| ^     | tlsSocket.renegotiate(options, callback)   | The tlsSocket.renegotiate() method initiates a TLS renegotiation process                                                                                                                                        |
| ^     | tlsSocket.setMaxSendFragment(size)         | The tlsSocket.setMaxSendFragment() method sets the maximum TLS fragment size                                                                                                                                    |
| event | OCSPResponse                               | if the requestOCSP option was set when the tls.TLSSocket was created and an OCSP response has been received                                                                                                     |
| ^     | secureConnect                              | after the handshaking process for a new connection has successfully completed                                                                                                                                   |
