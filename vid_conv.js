class vid_conv extends HTMLElement {
        constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>
                <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">VIDEO CONVERTER</span></h5>
            </div>
        `;
    }
}

customElements.define('vid-converter', vid_conv);