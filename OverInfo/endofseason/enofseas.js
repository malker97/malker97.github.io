//var timeurl = "http://api.k780.com/?app=life.time&appkey=APPKEY&sign=SIGN&format=json";
var newurl = "http://worldtimeapi.org/api/ip";
function gettimezone() {
    var timer = new Date();
    var gmtHours = timer.getTimezoneOffset()/60;
    // alert(gmtHours);
    return gmtHours;
}
function judgebrower() {
    var explorer = window.navigator.userAgent ;
    //判断是否为IE浏览器
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //判断是否为Firefox浏览器
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //判断是否为Chrome浏览器
    else if(explorer.indexOf("Chrome") >= 0){
        return 'Chrome';
    }
    //判断是否为Opera浏览器
    else if(explorer.indexOf("Opera") >= 0){
        return 'Opera';
    }
    //判断是否为Safari浏览器
    else if(explorer.indexOf("Safari") >= 0){
        return 'Safari';
    }
}
function ShowTimes(){
    var timezone = "";
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            timezone = data.abbreviation;
        })
    var gmthours = gettimezone();
    var diffhr = 24 - gmthours;
    var expressday = "2020/08/30 00:"+diffhr+":00"
    var AfterTime= new Date(expressday);//活动截止时间
    LeaveTime = AfterTime - new Date();
    LeaveDays=Math.floor(LeaveTime/(1000*60*60*24));//天
    LeaveHours=Math.floor(LeaveTime/(1000*60*60)%24);//时
    LeaveMinutes=Math.floor(LeaveTime/(1000*60)%60);//分
    LeaveSeconds=Math.floor(LeaveTime/1000%60);//秒
    var c=new Date();
    var q=c.getMilliseconds();
    if(q<10)//因为毫秒为一位数时只占一个字符位置，会让毫秒二字变动位置
    {
        q="00"+c.getMilliseconds();
    }
    if(q>=10 && q<100)//因为毫秒为两位数时只占两个字符位置，会让毫秒二字变动位置
    {
        q="0"+c.getMilliseconds();
    }
    hxtime.innerHTML="The End of 23 Seasons："+LeaveDays+" D "+LeaveHours+" H "+LeaveMinutes+" m "+LeaveSeconds+" s "+q+" ms ";
}
const browsertype = judgebrower();
if (browsertype == 'Safari')
    alert("Sorry, We are not support Safari now!");

setInterval(ShowTimes,100);
