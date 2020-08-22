var language = {
    kr: {
        explain:"간편하고 빠르게 원하는 이미지 파일 <b>PNG 에서 JPEG</b>, 그리고 <b>동영상 파일에서 오디오 파일</b><br/>로 바꾸어주는 서비스입니다. 이 서비스는 그 어떤 개인정보도 물어보지않습니다."
    },
    esp:{
        explain:"La herramienta en línea gratuita convierte PNG a JPEG </b> y <b> VIDEO a AUDIO. </b> <br/> este servicio no solicita ninguna información personal."
    }
};
var filelangauge = {
    kr: {
        fileexplain: "파일을 업로드하세요."
    },
    kr1:{
        fileexplain1: "(클릭 아니면 드래그&드랍)"
    },
    esp: {
        fileexplain: "Sube el archivo."
    },
    esp1: {
        fileexplain1: "(haga clic o arrastre y suelte)"
    },
};

//switch language based on the hash
if(window.location.hash)
{
    if(window.location.hash == "#kor")
    {
        document.getElementById("description").innerHTML = language.kr.explain;
        document.getElementById("fileText").innerHTML = filelangauge.kr.fileexplain;
        document.getElementById("fileText1").innerHTML = filelangauge.kr1.fileexplain1;
    } 
    else if(window.location.hash == "#esp")
    {
        document.getElementById("description").innerHTML = language.esp.explain;
        document.getElementById("fileText").innerHTML = filelangauge.esp.fileexplain;
        document.getElementById("fileText1").innerHTML = filelangauge.esp1.fileexplain1;
    }
}
//reload page
function reloadFuc() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }



