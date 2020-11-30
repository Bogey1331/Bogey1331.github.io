const footer_template = document.createElement('template');
footer_template.innerHTML = `
<style>
    footer {
        min-height: 30px;
        padding: calc(2px + .5vw) 0;
        background-color: #06603A;
    }

    social-icon-bar {
        text-align: left;
    }
</style>
<footer>
    <div class="container">
        <social-icon-bar-small></social-icon-bar-small>
        <h4>Copyright &copy;2020</h4>
    </div>
    <link rel='stylesheet' href='/CSS Styles/global.css'>
</footer>
`;

class main_footer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footer_template.content.cloneNode(true));
    }
}

window.customElements.define('main-footer', main_footer);