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

            @media screen and (min-width: 1675px) {
                .website-showcase {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
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
                width: 80%;
                padding: 0 calc(10px + 1vw);
                margin: calc(20px + 1vw) auto;
                border-radius: calc(60px + 1vw);
                box-shadow: 0px calc(12px + 1vw) calc(16px + 1vw) rgba(0, 0, 0, .5);
                background-color: #2c2c2c;
            }

            .website-card #name {
                padding: calc(20px + 1vw) 0 calc(10px + 1vw) 0;
                text-align: center;
            }

            .website-card #description {
                padding: calc(10px + 1vw) 0;
                text-align: left;
            }

            .website-card #thumbnail {
                width: 100%
            }

            .website-card #buttons {
                padding: 0 0 calc(10px + 1vw) 0;
                text-align: center;
            }

            .website-card #button-left {
                margin: 0 calc(5px + 1vw) 0 0;
            }

            .website-card #button-right {
                margin: 0 0 0 calc(5px + 1vw);
            }

            .website-card #buttons #button-right img {
                width: calc(5px + 1vw);
            }

            @media screen and (max-width: 350px) {
                .website-card #buttons button {
                    margin: calc(5px + 1vw) 0;
                }
            }
            </style>

            <div class="website-card">
                <h3 id="name">Example Site</h3>
                <a><img id="thumbnail" src="/Media/Images/work-731198_1920x880.jpg"></img></a>
                <p id="description">Front-End: HTML, CSS, Vanilla JS <br> Back-End: Strapi, Jekyll, Github Pages</p>
                <div id="buttons">
                    <button id="button-left" name="visit site" type="button">Visit Site</button>
                    <button id="button-right" name="repo site" type="button"> <img src="/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png"></img> Project</button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('website-showcase', website_showcase);
window.customElements.define('website-card', website_card);