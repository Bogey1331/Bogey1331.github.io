class SocialIconBar_Med extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <style>
            #social-bar-medium {
                padding: calc(10px + .5vw) 0;
            }
            #social-bar-medium a {
                margin: 0 calc(5px + .5vw);
                font-size: 0;
            }
    
            #social-bar-medium img {
                transform: translateY(0px);
                transition: transform .25s ease-in;
            }
    
            #social-bar-medium a img:hover {
                transform: translateY(calc(5px + .5vw));
            }
        </style>
    
        <div id="social-bar-medium">
            <a href="https://github.com/Bogey1331"><img
                srcset="/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png 36w, /Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png 64w, /Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png 120w"
                sizes="(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px"
                src="/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png"
                alt="White Github Logo">
            </a>
            <a href="https://www.linkedin.com/in/justinrtolin/"><img
                srcset="/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-36.png 36w, /Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-64.png 64w, /Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-120.png 120w"
                sizes="(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px"
                src="/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-36.png"
                alt="White Linkedin Logo">
            </a>
            <a href="https://www.facebook.com/justin.tolin.5"><img
                srcset="/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_36.png 36w, /Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_64.png 64w, /Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_120.png 120w"
                sizes="(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px"
                src="/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_36.png"
                alt="White Facbook Logo">
            </a>
            <a href="https://twitter.com/TolinJustin"><img
                srcset="/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-36px.png 36w, /Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-64px.png 64w, /Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-120px.png 120w"
                sizes="(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px"
                src="/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-36px.png"
                alt="White Twitter Logo">
            </a>
        </div>
        `;
    }
}

window.customElements.define('social-icon-bar-med', SocialIconBar_Med);