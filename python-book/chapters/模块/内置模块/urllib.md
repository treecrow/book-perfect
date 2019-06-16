[urllib](https://docs.python.org/zh-cn/3/library/urllib.html)

> urllib 提供了一系列用于操作 URL 的功能

## urllib.request

> 打开和阅读 URLs

| api                      | more                                                                |
| ------------------------ | ------------------------------------------------------------------- |
| urllib.request.urlopen() | Open the URL url, which can be either a string or a Request object. |

## urllib.error

> 包含 urllib.request 抛出的异常

| class | api      | more                                                                                    |
| ----- | -------- | --------------------------------------------------------------------------------------- |
| -     | URLError | The handlers raise this exception (or derived exceptions) when they run into a problem. |

## urllib.parse

> 用于处理 URL

| class | api                      | more                                                                                                                                         |
| ----- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| -     | urllib.parse.urljoin()   | Construct a full ("absolute") URL by combining a "base URL" (base) with another URL (url)                                                    |
| -     | urllib.parse.urlencode() | Convert a mapping object or a sequence of two-element tuples, which may contain str or bytes objects, to a percent-encoded ASCII text string |

## urllib.robotparser

> 用于解析 robots.txt 文件

| class                         | api                       | more                                                                                                                      |
| ----------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| robotparser.RobotFileParser() | -                         | This class provides methods to read, parse and answer questions about the robots.txt file at url.                         |
| ^                             | set_url(url)              | Sets the URL referring to a robots.txt file                                                                               |
| ^                             | read()                    | Reads the robots.txt URL and feeds it to the parser.                                                                      |
| ^                             | can_fetch(useragent, url) | Returns True if the useragent is allowed to fetch the url according to the rules contained in the parsed robots.txt file. |
