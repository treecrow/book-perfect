# nodemailer

## 特性

- 支持 Unicode，包括 emoji
- 支持 html
- 支持添加附件
- html 中支持嵌套图片
- TLS/STARTTLS 通信保证了安全
- 支持不同对传输方法，包括内建对 SMTP -

## 相关文档

文档                                                           | more
------------------------------------------------------------ | ----
[官方文档](https://nodemailer.com/about/)                        | -
[nodemailer 初试](http://www.cnblogs.com/yyrdl/p/4852071.html) | -

## 插件列表

插件                   | more
-------------------- | --------------------------
nodemailer-smtp-pool | 使用SMTP发送邮件,使用该插件可以配置SMTP服务

## api列表

### nodemailer.createTransport(transport[,defaults])

> 生成发送体

对象       | 分类           | 字段                | more
-------- | ------------ | ----------------- | --------------------------------------------------------------------------------------------------------
options  | -            | -                 | 定义连接数据
～        | 普通选项         | port              | the port to connect to
～        | ～            | host              | the hostname or IP address to connect to
～        | ～            | auth              | 定义的验证数据
～        | ～            | authMethod        | 定义优先的验证方法
～        | TLS选项        | secure            | if true the connection will use TLS when connecting to server
～        | ～            | tls               | 定义额外的 node TLSSocket 选项
～        | ～            | ignoreTLS         | if this is true and secure is false then TLS is not used
～        | ～            | requireTLS        | if this is true and secure is false then Nodemailer tries to use STARTTLS
～        | Connection选项 | name              | optional hostname of the client, used for identifying to the server, defaults to hostname of the machine
～        | ～            | localAddress      | is the local interface to bind to for network connections
～        | ～            | connectionTimeout | how many milliseconds to wait for the connection to establish
～        | ～            | greetingTimeout   | how many milliseconds to wait for the greeting after connection is established
～        | ～            | socketTimeout     | how many milliseconds of inactivity to allow
～        | Debug选项      | logger            | -
～        | ～            | debug             | -
～        | Security选项   | disableFileAccess | if true, then does not allow to use files as content
～        | ～            | disableUrlAccess  | if true, then does not allow to use Urls as content
～        | Pooling选项    | pool              | -
～        | Proxy选项      | proxy             | all SMTP based transports allow to use proxies for making TCP connections to servers
defaults | -            | -                 | 一些默认数据，会与邮件实体合并

### transporter.verify((error,success)=>{})

> 验证 SMTP 配置是否正确

### transporter.sendMail(messageObj,(error, info)=>{})

> 发送邮件

对象         | 分类         | 字段                | more
---------- | ---------- | ----------------- | ----------------------------------------
messageObj | Commmon 选项 | from              | The email address of the sender
～          | ～          | to                | 接受邮件的邮箱
～          | ～          | cc                | -
～          | ～          | bcc               | -
～          | ～          | subject           | 邮件标题
～          | ～          | text              | 文本形式的邮件正文
～          | ～          | html              | HTML 形式的邮件正文
～          | ～          | attachments       | 附件列表
～          | Routing选项  | sender            | -
～          | ～          | replyTo           | -
～          | ～          | inReplyTo         | -
～          | ～          | references        | -
～          | ～          | envelope          | -
～          | Content选项  | attachDataUrls    | -
～          | ～          | watchHtml         | -
～          | ～          | icalEvent         | iCalendar event to use as an alternative
～          | ～          | alternatives      | 额外的文本内容列表
～          | ～          | encoding          | -
～          | ～          | raw               | -
～          | ～          | textEncoding      | -
～          | Header选项   | priority          | -
～          | ～          | headers           | -
～          | ～          | messageId         | -
～          | ～          | date              | -
～          | ～          | list              | -
～          | Security选项 | disableFileAccess | -
～          | ～          | disableUrlAccess  | -
