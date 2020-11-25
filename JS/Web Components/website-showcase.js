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
    }
}

class website_card extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
            
            </style>

            {%- if strapi.collections.projects.size > 0 -%}
            <div class="website-card">
                <h3 id="name">{{projects:0.name}}</h3>
                <a><img id="thumbnail"></img></a>
                <p id="description"></p>
                <div id="buttons">
                    <button id="button-left">Visit Site</button>
                    <button id="button-right">Github Project</button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('website-showcase', website_showcase);
window.customElements.define('website-card', website_card);