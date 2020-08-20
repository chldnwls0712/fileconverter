var language = {
    eng: {
        explain:"free online tool converts <b>PNG to JPEG</b>, and <b>VIDEO to AUDIO.</b><br/>  this service does not ask for any personal information."
    },
    kr: {
        explain:"간편하고 빠르게 원하는 이미지 파일 <b>PNG 에서 JPEG</b>, 그리고 <b>동영상 파일에서 오디오 파일</b><br/>로 바꾸어주는 서비스입니다. 이 서비스는 그 어떤 개인정보도 물어보지않습니다."
    }
};
var filelangauge = {
    eng: {
        fileexplain: "Click to select the file."
    },
    kr: {
        fileexplain: "파일 선택을 위해 클릭하세요."
    }
};
//define language based on the hash
if(window.location.hash)
{
    if(window.location.hash == "#kor")
    {
        document.getElementById("description").innerHTML = language.kr.explain;
        document.getElementById("fileText").innerHTML = filelangauge.kr.fileexplain;
    } 
}
function reloadFuc() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }



