function Jv() {

}
// 获取 url 参数信息
Jv.prototype.getSearchObj = function () {
  var searchArr = window.location.search.substring(1).split('&'),
    obj = {};
  for (var i = 0, len = searchArr.length; i < len; i++) {
    var arr = searchArr[i].split('=');
    obj[arr[0]] = arr[1];
  }
  return obj;
};
// 处理日历数据
Jv.prototype.handleCalendarData = function () {
  var dayList = [];
  for (var i = 0; i < monthMsg.dayOfWeek - 1; i++) {
    dayList.push(null);
  }
  for (var day in initDayList) {
    var dayObj = {};
    dayObj.day = day; // 日期
    dayObj.diaryNum = initDayList[day].diaryNum; // 流水数量
    dayObj.diaryStatus = initDayList[day].diaryStatus; //流水状态：0:全部完成核对；1:未全部完成核对； 2:未导入流水
    dayObj.isBeforeToday = initDayList[day].isBeforeToday; // 是否是往日 0:是 1:不是
    dayList.push(dayObj);
  }
  return dayList;
};
// 更新下拉列表
Jv.prototype.updateSelect = function () {
  var html = '';
  for (var val in optionMap) {
    html += '<option value=' + val + '>' + optionMap[val] + '</option>';
  }
  var $el = $(id);
  $el.html(html);
  if (value) $el.val(value);
};