# dns域名服务器

## dns方法
- dns.getServers()
- dns.lookup(hostname[, options], callback)
  > Supported getaddrinfo flags
- dns.lookupService(address, port, callback)
- dns.resolve(hostname[, rrtype], callback)
- dns.resolve4(hostname, callback)
- dns.resolve6(hostname, callback)
- dns.resolveCname(hostname, callback)
- dns.resolveMx(hostname, callback)
- dns.resolveNaptr(hostname, callback)
- dns.resolveNs(hostname, callback)
- dns.resolveSoa(hostname, callback)
- dns.resolveSrv(hostname, callback)
- dns.resolvePtr(hostname, callback)
- dns.resolveTxt(hostname, callback)
- dns.reverse(ip, callback)
- dns.setServers(servers)

## 错误码
>略

## Implementation considerations
- dns.lookup()
- dns.resolve(), dns.resolve*() and dns.reverse()
