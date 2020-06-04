//var timeurl = "http://api.k780.com/?app=life.time&appkey=APPKEY&sign=SIGN&format=json";
var newurl = "http://worldtimeapi.org/api/ip";
function gettimezone() {
    var timer = new Date();
    var gmtHours = timer.getTimezoneOffset()/60;
    // alert(gmtHours);
    return gmtHours;
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
    var expressday = "2020/06/25 00:"+diffhr+":00"
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
    hxtime.innerHTML="The End of 22 Seasons："+LeaveDays+" D "+LeaveHours+" H "+LeaveMinutes+" m "+LeaveSeconds+" s "+q+" ms ";
}
setInterval(ShowTimes,100);
