# Date方法大全（大杂烩）

## 获取指定日期所在月份的天数

```javascript
function getMonthDays(Y, M){
    //Y代表年份；M 代表为月数0~11,月份加1,但是第3个参数为0，所以不+1；第3个参数要求最小为1，但是设置0，就变成M月的最后一天了
    return new Date(Y, M, 0).getDate();
}
```

## 获取当前时间

```javascript
function getNowTime(){
    var date =new Date();//获取日期对象
    /*获取年、月、日、时、分、秒，本地系统的时间*/
    return date.getFullYear() + "年"
        + (date.getMonth() + 1) + "月"
        + date.getDate() + "日"
        + " "
        + date.getHours() + "时"
        + date.getMinutes() + "分"
        + date.getSeconds() + "秒";
}
```

## 判断日期是闰年还是平年

```javascript
function getYearType(Y){
    return  getMonthDays(Y, 2) == 28 ? "平年" : "闰年" ;
}
getYearType("2014");
```

## 到指定日期时间的倒计时

```javascript
function getCountDown(Y, M, D, h, m, s){
    Y = Y || 0;
    M = M || 0;
    D = D || 0;
    h = h || 0;
    m = m || 0;
    s = s || 0;
    var date = new Date(Y, M-1, D, h, m, s),
    //转换为时间戳，方便计算差值
        times = date.getTime() - new Date().getTime();
    //返回天数
    return Math.ceil(times / (1000 * 60 * 60 * 24));
}
var tian=getCountDown("2016", "10", "1");//距离今年10月1日还有多少天
```

## 时间转化为几天前,几小时前，几分钟前

```javascript
function getDateDiff(dateTimeStamp){
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){return;}
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;

    var result=null;
    if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
    }
    else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
    }
    else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
    }
    else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
    }else
        result="刚刚";
    return result;
}
```

## 验证日期格式

```javascript
function verifyDate(vDate){
    //验证格式必须为  "YYYY-MM-DD hh:mm:ss" 格式，类似“2014-02-12 16:34:57”
    return /^(\d{4}-\d{2}-\d{2})\s{1}(\d{2}:\d{2}:\d{2})$/.test(vDate);
}
verifyDate("2021-02-19 16:21:51");//布尔值
```
