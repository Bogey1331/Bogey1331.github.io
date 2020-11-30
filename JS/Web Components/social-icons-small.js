const SocialBar_Small_Template = document.createElement('template');
SocialBar_Small_Template.innerHTML = `
    <style>
        a {
            margin: 0 calc(1px + .25vw);
        }

        a img {
            transform: translateY(0px);
            transition: transform .25s ease-in;
        }
    </style>

    <div class="social-icons" id="social-bar">
        <a href="https://github.com/Bogey1331"><img
            srcset="/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-16px.png 16w, /Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png 36w, /Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png 64w"
            sizes="(min-width: 700px) and (max-width: 2160px) 36px, (min-width: 2160px) 64px, 16px"
            src="/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-16px.png"
            alt="White Github Logo">
        </a>
        <a href="https://www.linkedin.com/in/justinrtolin/"><img
            srcset="/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-16.png 16w, /Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-36.png 36w, /Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-64.png 64w"
            sizes="(min-width: 700px) and (max-width: 2160px) 36px, (min-width: 2160px) 64px, 16px"
            src="/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-16.png"
            alt="White Linkedin Logo">
        </a>
        <a href="https://www.facebook.com/justin.tolin.5"><img
            srcset="/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_16.png 16w, /Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_36.png 36w, /Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_64.png 64w"
            sizes="(min-width: 700px) and (max-width: 2160px) 36px, (min-width: 2160px) 64px, 16px"
            src="/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_16.png"
            alt="White Facbook Logo">
        </a>
        <a href="https://twitter.com/TolinJustin"><img
            srcset="/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-16px.png 16w, /Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-36px.png 36w, /Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-64px.png 64w"
            sizes="(min-width: 700px) and (max-width: 2160px) 36px, (min-width: 2160px) 64px, 16px"
            src="/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-16px.png"
            alt="White Twitter Logo">
        </a>
    </div>
`;

class SocialIconBar_Small extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(SocialBar_Small_Template.content.cloneNode(true));
    }
}

window.customElements.define('social-icon-bar-small', SocialIconBar_Small);