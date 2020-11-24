class website_showcase extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
            .website-showcase {
                margin: 0 10%;
                height: auto;
                background-color: #2c2c2c;
            }
            </style>

            <div class="website-showcase">

            </div>
        `;

        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:1337/project');
        request.responseType = 'json';
        request.send();

        console.log(request.response);
    }
}

class website_item extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
            
            </style>

            <div class="website-item">

            </div>
        `;
    }
}

window.customElements.define('website-showcase', website_showcase);
window.customElements.define('website-item', website_item);