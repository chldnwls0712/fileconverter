class img_conv extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
                <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">IMAGE CONVERTER</span></h5>
	<div class="options">
	<input type="file" name="files" id="files" accept=".jpeg,.jpg,.png,.webp,.svg,.ico,.bmp" multiple />
	<label id="format"for="select_type">Output Format: </label>
		<select name="select_type" id="select_type">
			<option value="jpeg">JPEG</option>
			<option value="png">PNG</option>
	</select>
	<label id="quality" for="select_quality">Quality: </label>
        <select name="select_quality" id="select_quality">
            <option value="1">Ultra</option>
            <option value="0.9">High</option>
            <option value="0.7">Medium</option>
            <option value="0.4">Low</option>
            <option value="0.2">Very Low</option>
		</select>
        <button id="download_Btn" class="download_Btn">Download</button>
	</div>
	<div class ="uploaded">
		<div class="img_box" id="img_box"></div>
		<canvas id="can"></canvas>
		<div class="pyro" id="pyro"></div>
	</div>
    <div id="boxbox">
	<label class="drag" for="files">
        <div class="cubes">
            <div class="cube1"></div>
            <div class="cube2"></div>
            <div class="cube3"></div>
            <div class="cube4"></div>
        </div>
        <div>
            <p class="cubetext">+</p>
        </div>
	</label>
    </div>
        </div>
<script src="./conversion.js"></script>
        `;
    }
}

customElements.define('img-converter', img_conv);