// alert("这个文件已经被调用了！");
function changelanguage() {
    var language = navigator.language;
    // alert(language);
    var country = language.split("-");
    language = country[1];
    // alert(language);
    var pagettle = document.getElementById("titleofpage");
    var bgimg = document.getElementById("tiltejpg");
    if (language == "CN"){
        bgimg.style.backgroundImage="url('images/maps/CN.jpg')";
        pagettle.innerHTML="Hello Chinese user!你好！中文用户！";
    }
    else if (language == "RU"){
        bgimg.style.backgroundImage="url('images/maps/RU.jpg')";
        pagettle.innerHTML="Hello Russian user! For Mother Russia!";
    }
    else if (language == "GB"){
        bgimg.style.backgroundImage="url('images/maps/GB.jpg')";
        pagettle.innerHTML="Hello  user! For Mother Russia!";
    }
    else if (language == "FR"){
        bgimg.style.backgroundImage="url('images/maps/FR.jpg')";
        pagettle.innerHTML="Hello British user! For Mother Russia!";
    }
    else {
        bgimg.style.backgroundImage="url('images/maps/DEF.jpg')";
    }
}
setTimeout(changelanguage,2000);
// changelanguage();
