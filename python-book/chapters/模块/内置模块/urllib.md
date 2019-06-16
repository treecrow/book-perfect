[urllib](https://docs.python.org/zh-cn/3/library/urllib.html)

> url 相关

## urllib.request

> 打开和阅读 URLs

| class | api       | more                                                                |
| ----- | --------- | ------------------------------------------------------------------- |
| -     | urlopen() | Open the URL url, which can be either a string or a Request object. |

## urllib.error

> 包含 urllib.request 抛出的异常

| class | api      | more                                                                                    |
| ----- | -------- | --------------------------------------------------------------------------------------- |
| -     | URLError | The handlers raise this exception (or derived exceptions) when they run into a problem. |

## urllib.parse

> 用于处理 URL

| class | api | more |
| ----- | --- | ---- |


## urllib.robotparser

> 用于解析 robots.txt 文件

| class                         | api                       | more                                                                                                                      |
| ----------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| robotparser.RobotFileParser() | -                         | This class provides methods to read, parse and answer questions about the robots.txt file at url.                         |
| ^                             | set_url(url)              | Sets the URL referring to a robots.txt file                                                                               |
| ^                             | read()                    | Reads the robots.txt URL and feeds it to the parser.                                                                      |
| ^                             | can_fetch(useragent, url) | Returns True if the useragent is allowed to fetch the url according to the rules contained in the parsed robots.txt file. |
