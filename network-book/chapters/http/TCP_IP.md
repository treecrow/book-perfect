# TCP_IP

> 构成我们今天使用的 Internet 的基础的是 TCP/IP 协议族，所谓协议族就是一系列的协议及其构成的通信模型，我们通常也把这套东西称为 TCP/IP 模型

| TCP/IP model              | OSI model    | Protocols and services              |
| ------------------------- | ------------ | ----------------------------------- |
| Application(应用层)       | Application  | HTTP、FTTP、Telnet、NTP、DHCP、PING |
| ^                         | Presentation | ^                                   |
| ^                         | Session      | ^                                   |
| Transport(传输层)         | Transport    | TCP、UDP                            |
| Network(网络层)           | Network      | IP、ARP、ICMP、IGMP                 |
| Network Interface(链路层) | Data Link    | Ethernet、FDDI、ATM                 |
| ^                         | Physical     | ^                                   |

## 应用层

## 传输层

| @      | TCP                                                    | UDP                               |
| ------ | ------------------------------------------------------ | --------------------------------- |
| name   | TCP(Transmission Control Protocol)                     | UDP(User Datagram Protocol)       |
| 名称   | 传输控制协议                                           | 用户数据报协议                    |
| 连接   | TCP 是面向连接(Connection oriented)的协议 （三次握手） | UDP 是无连接(Connection less)协议 |
| 可靠性 | TCP 丢包会自动重传                                     | UDP 丢包不会自动重传              |
| 有序性 | 对消息进行重排序                                       | 不会对消息进行重排序              |

## 网络层

## 链路层
