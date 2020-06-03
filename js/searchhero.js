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

function myfunction() {
    var tankrank = "";
    var damagerank = "";
    var supportrank = "";
    var username = "";
    var userid = getUserID();
    var newurl = url + userid;
    // alert(userid);
    // alert("Its a test for the file");
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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
            document.getElementById("supportrank").innerHTML=supportrank;
            document.getElementById("tankrank").innerHTML=tankrank;
            document.getElementById("damagerank").innerHTML=damagerank;
            username = data.usename;
        })
}
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
// function guesstheregion() {
//     var language = navigator.language;
//     // alert(language);
//     var country = language.split("-");
//     language = country[1];
//     alert(language);
//     switch (language) {
//         case "CN":
//             break;
//         case  "US":
//             break;
//         case "RU":
//             break;
//         default:
//             //默认设置成月球基地
//     }
// }