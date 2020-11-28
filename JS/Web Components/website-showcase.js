class website_showcase extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
            .website-showcase {
                margin: auto;
                height: auto;
                width: 90%;
            }

            @media screen and (min-width: 1200px) {
                .website-showcase {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 50px;
                    background-color: black;
                }
            }
            </style>

            <div class="website-showcase">
                <website-card></website-card>
                <website-card></website-card>
                <website-card></website-card>
            </div>
        `;
    }
}

class website_card extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
            .website-card {
                width: 70%;
                padding: calc(.2em + 1vw);
                margin: calc(20px + 1vw) auto;
                border-radius: 60px;
                box-shadow: 0px 12px 16px rgba(0, 0, 0, .5);
                background-color: #2c2c2c;
            }

            .website-card #name {
                margin: calc(.25em + 1vw) 0;
                text-align: center;
            }

            .website-card #description {
                margin: calc(.25em + 1vw) 0;
                text-align: left;
            }

            .website-card #thumbnail {
                width: 100%
            }

            .website-card #buttons {
                margin: 0 0 calc(.25em + 1vw) 0;
                text-align: center;
            }

            .website-card #button-left {
                margin: 0 calc(.05em + 1vw) 0 0;
            }

            .website-card #button-right {
                margin: 0 0 0 calc(.05em + 1vw);
            }

            .website-card #buttons #button-right img {
                width: 1em;
            }

            @media screen and (max-width: 300px) {
                .website-card #buttons button {
                    display: inline-block;
                    text-align: center;
                    margin: calc(5px + 1vw) 0 0 0;
                }
            }
            </style>

            <div class="website-card">
                <h3 id="name">Example Site</h3>
                <a><img id="thumbnail" src="/Media/Images/work-731198_1920x880.jpg"></img></a>
                <p id="description">Front-End: HTML, CSS, Vanilla JS <br> Back-End: Strapi, Jekyll, Github Pages</p>
                <div id="buttons">
                    <button id="button-left">Visit Site</button>
                    <button id="button-right"> <img src="/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png"></img> Project</button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('website-showcase', website_showcase);
window.customElements.define('website-card', website_card);