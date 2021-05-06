$(document).ready(function (e) {
    SetProgressTime(null, "2017/07/29 0:00:00", "2017/08/10 0:00:00")
});
var _index = 0;//进度
var _mProgressTimer;//定时器
var _speed = 1000;
var myfun;//执行方法，当前时间为参数
function SetProgressTime(fun, startTime, endTime) {
    myfun = fun;
    $("#progressTime").show();
    // 开始时间
    var startDate = new Date(startTime);
    var Year = startDate.getFullYear();
    var Month = (startDate.getMonth()+1) < 10 ? "0" + (startDate.getMonth()+1) : (startDate.getMonth()+1);
    var currentDate = startDate.getDate() < 10 ? "0" + startDate.getDate() : startDate.getDate();
    var Hours = startDate.getHours() < 10 ? "0" + startDate.getHours() : startDate.getHours();
    var Minutes = startDate.getMinutes() < 10 ? "0" + startDate.getMinutes() : startDate.getMinutes();
    var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    var week = weekArray[new Date(startDate).getDay()];
    var indexStart2 = week + "  " + currentDate + " - " + Hours + ":" + Minutes;
    var indexStart3 = Hours + ":" + Minutes;
    var firstStart = Year + "-" + Month + "-" + currentDate;
    // 结束时间
    var endDate = new Date(endTime);
    var endYear = endDate.getFullYear();
    var endMonth = (endDate.getMonth()+1) < 10 ? "0" + (endDate.getMonth()+1) : (endDate.getMonth()+1);
    var endcurrentDate = endDate.getDate() < 10 ? "0" + endDate.getDate() : endDate.getDate();
    var endHours = endDate.getHours() < 10 ? "0" + endDate.getHours() : endDate.getHours();
    var endMinutes = endDate.getMinutes() < 10 ? "0" + endDate.getMinutes() : endDate.getMinutes();
    var lastEnd = endYear + "-" + endMonth + "-" + endcurrentDate;
    $("#scroll_Thumb").html(indexStart2);
    $(".timecode").html(indexStart3);
    $("#startTime").text(startTime);
    $("#endTime").text(endTime);
    // 得到总天数
    function getDateDiff(date1,date2){
        var arr1=date1.split('-');
        var arr2=date2.split('-');
        var d1=new Date(arr1[0],arr1[1],arr1[2]);
        var d2=new Date(arr2[0],arr2[1],arr2[2]);
        return (d2.getTime()-d1.getTime())/(1000*3600*24);
    }
    var dateNum = getDateDiff(firstStart,lastEnd);
    var str = '';
    for(var i = 0; i < dateNum; i ++){
        var d1 = new Date(startTime);
        var d2 = new Date(d1);
        d2.setDate(d1.getDate() + i);
        var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
        var week = weekArray[new Date(d2).getDay()];
        var monthNum = d2.getDate() < 10 ? "0" + d2.getDate() : d2.getDate();
        str += '<p>'+week + ' ' + monthNum+'</p>';
    }
    $(".time_slot").html(str);
    $(".time_slot p").css({"width":"calc("+100/dateNum+"% - 1px)"});
    //设置最大值
    var qdsjDate = new Date(startTime);
    var jssjDate = new Date(endTime);
    ScrollBar.maxValue = Math.abs(qdsjDate - jssjDate) / 1000 / 60 / 60;
    //初始化
    ScrollBar.Initialize();
}
//滑块
var ScrollBar = {
    value: 0,
    maxValue: 40,
    step: 1,
    currentX: 0,
    Initialize: function () {
        if (this.value > this.maxValue) {
            alert("给定当前值大于了最大值");
            return;
        }
        this.GetValue();
        $("#scroll_Track").css("width", this.currentX + "px");
        $("#scroll_Thumb").css("margin-left", this.currentX + "px");
        this.Value();
    },
    SetValue: function (aValue) {
        this.value = aValue;
        if (this.value >= this.maxValue) this.value = this.maxValue;
        if (this.value <= 0) this.value = 0;
        var mWidth = this.value / this.maxValue * $("#scrollBar").width() + "px";
        $("#scroll_Track").css("width", mWidth);
        $("#scroll_Thumb").css("margin-left", mWidth);
    },
    Value: function () {
        var valite = false;
        var currentValue;
        // 点击进度条时滑块到达对应位置
        $("#scrollBarBox").click(function (event) {
            var changeX = event.clientX - ScrollBar.currentX;
            currentValue = changeX - ScrollBar.currentX - $("#scrollBar").offset().left;
            $("#scroll_Thumb").css("margin-left", currentValue + "px");
            $("#scroll_Track").css("width", currentValue + 2 + "px");
            if ((currentValue + 1) >= $("#scrollBar").width()) {
                $("#scroll_Thumb").css("margin-left", $("#scrollBar").width() - 1 + "px");
                $("#scroll_Track").css("width", $("#scrollBar").width() + 2 + "px");
                ScrollBar.value = ScrollBar.maxValue;
            } else if (currentValue <= 0) {
                $("#scroll_Thumb").css("margin-left", "0px");
                $("#scroll_Track").css("width", "0px");
                ScrollBar.value = 0;
            } else {
                ScrollBar.value = Math.round(currentValue * ScrollBar.maxValue / $("#scrollBar").width());
            }
            SetTime(ScrollBar.value);
            SetInterval(ScrollBar.value);
            _index = ScrollBar.value;
        });
        // 鼠标在进度条上面滑动时小滑块显示并对应相应的时间
        $("#scrollBarBox").mousemove(function (event) {
            var changeX = event.clientX - ScrollBar.currentX;
            currentValue = changeX - ScrollBar.currentX - $("#scrollBar").offset().left;
            $(".timecode").show().css("left", currentValue -28 + "px");
            if ((currentValue + 1) >= $("#scrollBar").width()) {
                $(".timecode").css("left", $("#scrollBar").width() - 43 + "px");
                ScrollBar.value = ScrollBar.maxValue;
            } else if (currentValue <= 0) {
                $(".timecode").css("left", "-28px");
                ScrollBar.value = 0;
            } else {
                ScrollBar.value = Math.round(currentValue * ScrollBar.maxValue / $("#scrollBar").width());
            }
            SetTime1(ScrollBar.value);
        });
        // 鼠标移入进度条时小滑块显示
        $("#scrollBarBox").mouseover(function (event) {
            $(".timecode").show();
        });
        // 鼠标移除进度条时小滑块消失
        $("#scrollBarBox").mouseout(function (event) {
            $(".timecode").hide();
        });
    },
    GetValue: function () {
        this.currentX = $("#scrollBar").width() * (this.value / this.maxValue);
    }
}

// 控制大滑块的当前时间
function SetTime(value) {
    var start = $("#startTime").html();
    var startDate = new Date(start);
    startDate.setHours(startDate.getHours() + 1 * value);//十五分钟为进度
    var month = startDate.getMonth() + 1 < 10 ? "0" + (startDate.getMonth() + 1) : startDate.getMonth() + 1;
    var currentDate = startDate.getDate() < 10 ? "0" + startDate.getDate() : startDate.getDate();
    var Hours = startDate.getHours() < 10 ? "0" + startDate.getHours() : startDate.getHours();
    var Minutes = startDate.getMinutes() < 10 ? "0" + startDate.getMinutes() : startDate.getMinutes();
    var Seconds = startDate.getSeconds() < 10 ? "0" + startDate.getSeconds() : startDate.getSeconds();
    var indexStart = startDate.getFullYear() + "/" + month + "/" + currentDate + " " + Hours + ":" + Minutes + ":" + Seconds;
    var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    var week = weekArray[new Date(startDate).getDay()];
    var indexStart1 = week + "  " + currentDate + " - " + Hours + ":" + Minutes;
    $("#scroll_Thumb").html(indexStart1);
    if (window.parent.currentTime) {
        currentTime = indexStart;
    }
    if (typeof (myfun) == "function") {
        var jscode = new Function('return ' + myfun)();
        jscode(indexStart)
    }
}
// 控制小滑块的当前时间，小滑块时间变化时大滑块不变
function SetTime1(value) {
    var start = $("#startTime").html();
    var startDate = new Date(start);
    startDate.setHours(startDate.getHours() + 1 * value);//十五分钟为进度
    var Hours = startDate.getHours() < 10 ? "0" + startDate.getHours() : startDate.getHours();
    var Minutes = startDate.getMinutes() < 10 ? "0" + startDate.getMinutes() : startDate.getMinutes();
    var indexStart = Hours + ":" + Minutes;
    var indexStart2 = Hours + ":" + Minutes;
    $(".timecode").html(indexStart2);
    if (window.parent.currentTime) {
        currentTime = indexStart;
    }
    if (typeof (myfun) == "function") {
        var jscode = new Function('return ' + myfun)();
        jscode(indexStart)
    }
}

//开始 暂停
function progressTimeControl(img) {
    if ($(img).attr("title") == "暂停") {
        $(img).attr("title", "开始");
        $(img).css("background-image", "url(img/play.png)");
        window.clearInterval(_mProgressTimer);
    }else {
        $(img).attr("title", "暂停");
        $(img).css("background-image", "url(img/pause.png)");
        _mProgressTimer = window.setInterval(function () {
            if (_index <= ScrollBar.maxValue) {
                _index += 1;
                ScrollBar.SetValue(_index);
                SetTime(_index)
            }else {
                progressTimeStop()
            }
        }, _speed);
    }
}

//停止
function progressTimeStop() {
    $("#progressTime_control").attr("title", "开始");
    $("#progressTime_control").css("background-image", "url(img/play.png)");
    $("#scroll_Thumb").css("margin-left", "0px");
    $("#scroll_Track").css("width", "0px");
    ScrollBar.value = 0;
    _index = 0;
    _speed = 1000;
    window.clearInterval(_mProgressTimer);
    SetTime(ScrollBar.value);
    SetInterval(_index);
}

//重制时间
function SetInterval(_index) {
    window.clearInterval(_mProgressTimer);
    if ($("#progressTime_control").attr("title") == "开始") {
        ScrollBar.SetValue(_index);
        SetTime(_index)
    }else{
        _mProgressTimer = window.setInterval(function () {
            if (_index <= ScrollBar.maxValue) {
                _index += 1;
                ScrollBar.SetValue(_index);
                SetTime(_index)
            }else {
                progressTimeStop()
            }
        }, _speed);
    }
}
