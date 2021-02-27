let allOkFiles = [],
    alltType = ['mp4','avi','mov'],
    outType = ['mp3', 'mp4','avi','mov'],
    config = {}
/*
function setConfig() {
    config.type = document.querySelector('#select_type').value
    config.quality = document.querySelector('#select_quality').value - 0
    console.log(config)
  }
dropzone()

function dropzone() {
  let holder = document.getElementById('dropbox')
  holder.ondragover = function(event) {
      let close = setTimeout(() => {
          holder.className = ''
      }, 3000)
      if (holder.className !== 'ondragover') {
          holder.className = 'ondragover'
      } else {
          clearTimeout(close)
      }
      return false
  }
  holder.ondragend = function(event) {
      holder.className = ''
      console.log('ondragend')
      return false
  }
  //file filter then proceed
  holder.ondrop = function(event) {
      event.preventDefault()
      holder.className = ''
      let files = [...event.dataTransfer.files]
      files = files.filter(f => alltType.includes(f.type.split('/')[1]))
      readFiles(files)
  }
}

let input = document.getElementById("files") 
input.addEventListener('change', function() {
    readFiles([...this.files])
}, false)

//readFile
async function readFiles(allFiles) {
  let files = [...allFiles]
  if (files.length === 0) return
  setConfig()
  allOkFiles = []
  files.map(async (file, index) => {
      let base64 = await file2Base64(file)
      //get width and height
      let wAndH = await getImagesWidthHeight(base64)
      let name = () => {
          let n = alltType.filter(f => file.name.endsWith(f))
          return {
              name: file.name.replace(n[0], ''),
              type: n[0]
          }
      }
      // convert info
      let blob = await base642file(base64, config.type, config.size, config.quality)
      allOkFiles.push({
          name: name().name,
          type: name().type,
          base64: base64,
          size: file.size,
          width: wAndH.w,
          height: wAndH.h,
          data: blob
      })
      //file uploaded
      if (files.length === allOkFiles.length) {
          console.log(allOkFiles)
                allOkFiles.map(x => {
                    document.getElementById("download_Btn").style.background = "#E8FCFC";
                    document.getElementById("download_Btn").onclick = function() {funDownload(x.data, `${x.name}.${config.type}`)};
                    
                    
                })
                document.getElementById('pyro').innerHTML =
                    `
                    <div class="before"></div>
                    <div class="after"></div>
                    `

          let img_box = document.getElementById("img_box")
          let img_html = ``
          allOkFiles.map(x => {
              img_html = img_html +
                  `<div class="img_one">
                      <p class="type ${x.type}">${x.type}</p>
                      <p class="size">${x.width}x${x.height}</p>
                      <img src="${x.base64}" alt="">
                  </div>`
          })
          img_box.innerHTML = img_html 
      }
  })
}

function file2Base64(file) {
  return new Promise((ret, res) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function(e) {
          console.log(e)
          ret(this.result)
      }
  })
}
function getImagesWidthHeight(base64) {
  return new Promise((ret, res) => {
      let img = new Image()
      img.src = base64
      img.onload = function() {
          ret({
              w: this.width,
              h: this.height
          })
      }
  })

}
function base642file(base64, type = 'jpeg', size = 1, quality = 0.92) {
  return new Promise((ret, res) => {
      let img = new Image()
      img.src = base64
      img.onload = function() {
          let _canvas = document.getElementById("can")
          let w = this.width * size
          let h = this.height * size
          _canvas.setAttribute("width", w)
          _canvas.setAttribute("height", h)
          _canvas.getContext("2d").drawImage(this, 0, 0, w, h)
          _canvas.toBlob(function(blob) {
              ret(blob)
          }, `image/${type}`, quality)
      }
  })
}

function funDownload(content, filename = 'untitled') {
  let eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'

  let blob = new Blob([content])
  eleLink.href = URL.createObjectURL(content)

  document.body.appendChild(eleLink)
  eleLink.click()

  document.body.removeChild(eleLink)
}
*/