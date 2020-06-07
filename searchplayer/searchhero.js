// const url = "http://owapi.io/profile/pc/us/臺灣省長蔡英文-4640";

// const url = "http://owapi.io/profile/pc/us/malker-1273";
var url = "http://owapi.io/profile/pc/us/";
function getUserID() {
    var playerid = "";
    var inputtext = document.getElementById("playerid");
    playerid = inputtext.value;
    playerid = playerid.replace(/#/,"-");
    return playerid;
}
var userid;
if (document.cookie != null){
    userid = document.cookie;
    document.getElementById("playerid").value=userid;
    // document.cookie = null;
    // alert(userid)
}
function myfunction() {
    var tankrank = "";
    var damagerank = "";
    var supportrank = "";
    var username = "";
    userid = getUserID();
    var newurl = url + userid;
    // alert(userid);
    // alert("Its a test for the file");
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // if (data.private == false){
            //     alert("你已经关闭生涯了！");
            // }
            // document.cookie = data;
            // console.log(document.cookie);
            // alert(document.cookie.competitive.tank.rank);
            document.cookie = userid;
            tankrank = data.competitive.tank.rank;
            damagerank = data.competitive.damage.rank;
            supportrank =  data.competitive.support.rank;
            if (!tankrank){
                tankrank = "Unranked";
            }
            if (!damagerank){
                damagerank = "Unranked";
            }
            if (!supportrank){
                supportrank = "Unranked";
            }
            username = data.username;
            document.getElementById("username").innerHTML=username;
            document.getElementById("headicon").src = data.portrait;

            document.getElementById("supportimg").src="images/resource/support_small.PNG";
            document.getElementById("tankimg").src="images/resource/tank_small.PNG";
            document.getElementById("dpsimg").src="images/resource/damage_small.PNG";

            document.getElementById("supportrank").innerHTML="Support: " + supportrank;
            document.getElementById("tankrank").innerHTML="Tank: " + tankrank;
            document.getElementById("damagerank").innerHTML="DPS: " + damagerank;

        })
}
// if (document.cookie!=null){
//     myfunction();
//     document.cookie=null;
//     alert(document.cookie);
// }
// alert("这个文件被调用了!");
// guesstheregion();
// getIpAddress();
// myfunction();
// alert("Its a test for the file");
// function getIpAddress() {
//     var newurl = "https://api.ipify.org?format=json";
//     fetch(newurl)
//         .then((res) => res.json())
//         .then((data) => {
//             alert(data.ip);
//         })
// }
