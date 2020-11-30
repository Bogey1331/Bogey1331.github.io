class main_header extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <style>
            header {
                min-height: 45px;
                line-height: calc(45px + 1vw);
                padding: calc(15px + 1vw) 0px;
                background-color: #06603A;
            }

            header #top-header {
                min-height: 45px;
                line-height: calc(45px + 1vw);
                position: relative;
                z-index: 2;
                background-color: #06603A;
            }

            header #top-header #branding {
                float: left;
                overflow: visible;
            }

            header #top-header #branding a {
                font-family: Verdana, Tahoma, sans-serif;
                font-size: unset;
            }

            header #top-header .hamburger-menu {
                float: right;
                margin: .5em 0;
                cursor: pointer;
            }

            header #top-header .hamburger-menu div {
                width: 25px;
                height: 3px;
                margin: 5px 0px;
                background-color: #ffffff;
                transition: transform 0.5s ease;
            }

            header .nav-bar {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                padding: calc(15px + 1vw) 0px;
                z-index: 1;
              background-color: #06603A;
              transform: translateY(0px);
              transition: transform .25s ease-in;
            }

            header .nav-bar #nav-links {
                float: none;
                text-align: center;
              }

            header .nav-bar #nav-links li {
                display: inline;
                margin: 0 calc(5px + 1vw);
            }

            header .nav-bar #nav-links div {
                display: inline-block;
                width: calc(3px + .25vw);
                height: calc(9px + .5vw);
                background-color: #ffffff;
            }
              
            header .nav-bar #nav-links a:hover {
                color: #2c2c2c;
            }

            header .menu-active {
                transform: translateY(70px);
            }
            
            header .burger-menu-active .line1 {
                transform: rotate(45deg) translate(5px, 6px);
            }
            header .burger-menu-active .line2 {
                opacity: 0;
            }
            header .burger-menu-active .line3 {
                transform: rotate(-45deg) translate(5px, -6px);
            }

            @media screen and (min-width: 700px) {
                header .hamburger-menu {
                    display: none;
                }

                header #top-header {
                    min-height: inherit;
                    line-height: inherit;
                    position: static;
                    z-index: auto;
                    float: left;
                    background-color: transparent;
                }

                header .nav-bar {
                    display: inline-block;
                    min-height: inherit;
                    line-height: inherit;
                    width: auto;
                    padding: 0;
                    position: static;
                    z-index: auto;
                    float: right;
                    background-color: transparent;
                }
            }
        </style>
        <header>
            <div class="container">
                <div id="top-header">
                    <h2 id="branding"><a href="/index.html">Justin Tolin</a></h2>
                    <div class="hamburger-menu">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
                <div class="nav-bar">
                    <nav id="nav-links">
                        <ol>
                            <li><a href="#">Portfolio</a></li>
                            <div></div>
                            <li><a href="#">Resumè</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
        `;
    }

    connectedCallback() {
        const burgerMenu = this.querySelector('.hamburger-menu');
        const navBar = this.querySelector('.nav-bar');

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('burger-menu-active');
            navBar.classList.toggle('menu-active');
        });
    }
}

window.customElements.define('main-header', main_header);