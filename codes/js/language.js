var language = {
    kr: {
        explain:"간편하고 빠르게 원하는 이미지 파일 <b>PNG 에서 JPEG</b>, 그리고 <b>동영상 파일에서 오디오 파일</b><br/>로 바꾸어주는 서비스입니다. 이 서비스는 그 어떤 개인정보도 물어보지않습니다.<br/><b>업로드 전 파일형식, 품질을 선택하세요.</b>"
    },
    esp:{
        explain:"La herramienta en línea gratuita convierte PNG a JPEG </b> y <b> VIDEO a AUDIO. </b> <br/> este servicio no solicita ninguna información personal. <br/><b>Seleccione el formato de salida y la calidad antes de cargar.</b>"
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
var convertlanguage = {
    kr: {
        convertexplain: "다운로드"
    },
    esp: {
        convertexplain: "descargar"
    },
    krFormat: {
        convertexplain: "출력 형식"
    },
    espFormat: {
        convertexplain: "Formato de salida"
    },
    krQ: {
        convertexplain: "품질"
    },
    espQ: {
        convertexplain: "Calidad"
    },
    Kr_imgconv:{
        menu: "이미지파일 변환기"
    },
    Kr_vidconv:{
        menu: "비디오파일 변환기"
    },
    Esp_imgconv:{
        menu: "convertidor de archivos de imagen"
    },
    Esp_vidconv:{
        menu:"convertidor de archivos de video"
    }
}
//switch language based on the hash
if(window.location.hash)
{
    if(window.location.hash == "#kor")
    {
        document.getElementById("img_conv").innerHTML = convertlanguage.Kr_imgconv.menu;
        document.getElementById("vid_conv").innerHTML = convertlanguage.Kr_vidconv.menu;
        document.getElementById("description").innerHTML = language.kr.explain;
        document.getElementById("fileText").innerHTML = filelangauge.kr.fileexplain;
        document.getElementById("fileText1").innerHTML = filelangauge.kr1.fileexplain1;
        document.getElementById("download_Btn").innerHTML = convertlanguage.kr.convertexplain;
        document.getElementById("format").innerHTML = convertlanguage.krFormat.convertexplain;
        document.getElementById("quality").innerHTML = convertlanguage.krQ.convertexplain;
    } 
    else if(window.location.hash == "#esp")
    {
        document.getElementById("img_conv").innerHTML = convertlanguage.Esp_imgconv.menu;
        document.getElementById("vid_conv").innerHTML = convertlanguage.Esp_vidconv.menu;
        document.getElementById("description").innerHTML = language.esp.explain;
        document.getElementById("fileText").innerHTML = filelangauge.esp.fileexplain;
        document.getElementById("fileText1").innerHTML = filelangauge.esp1.fileexplain1;
        document.getElementById("download_Btn").innerHTML = convertlanguage.esp.convertexplain;
        document.getElementById("format").innerHTML = convertlanguage.espFormat.convertexplain;
        document.getElementById("quality").innerHTML = convertlanguage.espQ.convertexplain;
    }
}
//reload page
function reloadFuc() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }



