let dropbox;
dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  
  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  } 

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();
  
    const dt = e.dataTransfer;
    const files = dt.files;
  
    handleFiles(files);
}