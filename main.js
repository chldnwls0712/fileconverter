
/* page change */
function PageTitle(num) {
    let title;
    let favicon = document.createElement('link');
        oldFavi = document.getElementById('dynamic-favicon');
    let para;
    let oldmain = document.getElementById('content-child');
    if(num == 1) {
        title = 'Image Converter';
        favicon.href = 'public/fav2.ico';
        
        para = document.createElement("img-converter");
        para.setAttribute("id","content-child"); 
        document.getElementById("content").replaceChild(para, oldmain);
    } else if(num == 2) {
        title = 'Video Converter';
        favicon.href = 'public/fav3.ico';

        para = document.createElement("vid-converter");
        para.setAttribute("id","content-child"); 
        document.getElementById("content").replaceChild(para, oldmain);
    } else {
        title = 'File Converter';
        favicon.href = 'public/fav1.ico';
    }
    if(oldFavi) {
        document.head.removeChild(oldFavi);
    }
    favicon.rel = "icon";
    favicon.id = 'dynamic-favicon';
    document.querySelector('title').textContent 
    = title; 
    document.head.appendChild(favicon);
}

/* language select */
function LangMenu() {
  document.getElementById("dropmenu").classList.toggle("show");
}
//default : english
var navLangs = {
    kr: {
        image: "이미지",
        video: "비디오",
        language: "언어"
    },
    esp: {
        image: "IMAGEN",
        video: "VIDEO",
        language: "IDIOMA"
    }
};
var Langs = {
    kr: {
        intro: "파일을 변환 할 수있는 무료 온라인 도구입니다. 두 개의 변환기를 사용할 수 있습니다.<br/>이 도구는 파일이나 정보를 업로드하도록 요청하지 않습니다.",   
        desc: "시작할려면, 탑바/상단바에서 변환기를 선택하세요(이미지/비디오). <br/> 파일 변환 전, 형식과 품질을 선택하세요"
    },
    esp:{
        intro: "herramienta en línea gratuita que puede convertir archivos. hay dos convertidores disponibles.<br/>Esta herramienta nunca le pedirá que cargue ningún archivo o información.",
        desc: "Para comenzar, haga clic en el convertidor en TopBar / NavBar (imagen || video) <br/> Antes de convertir, seleccione la salida: formato y calidad"
    }
};

if(window.location.hash)
{
    if(window.location.hash == "#kr") {
        document.getElementById("image_conv").innerHTML = navLangs.kr.image;
        document.getElementById("video_conv").innerHTML = navLangs.kr.video;
        document.getElementById("language_conv").innerHTML = navLangs.kr.language;
        document.getElementById("intro_p").innerHTML = Langs.kr.intro;
        document.getElementById("desc_p").innerHTML = Langs.kr.desc;
    } else if(window.location.hash == "#esp") {
        document.getElementById("image_conv").innerHTML = navLangs.esp.image;
        document.getElementById("video_conv").innerHTML = navLangs.esp.video;
        document.getElementById("language_conv").innerHTML = navLangs.esp.language;
        document.getElementById("intro_p").innerHTML = Langs.esp.intro;
        document.getElementById("desc_p").innerHTML = Langs.esp.desc;
    } else {
        window.location = window.location.href.substr(0, window.location.href.indexOf("#"));
    }
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//refresh window
function reloadWin() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }