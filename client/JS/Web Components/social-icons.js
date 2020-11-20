const SocialBar = document.createElement('template');
SocialBar.innerHTML = `
    <style>
        .social-icons {
            text-align: center;
            padding: 10px 0;
        }
    </style>

    <div class="social-icons" id="social-bar">

    </div>
`;

const SocialIcon = document.createElement('template');
SocialIcon.innerHTML = `
    <style>
        a {
            margin: 0 calc(5px + .5vw);
        }

        a img {
            transform: translateY(0px);
            transition: transform .25s ease-in;
        }

        a img:hover {
            transform: translateY(10px);
        }
    </style>

    <a href=""><img
    srcset=""
    sizes=""
    src=""
    alt=""></a>
`;

class SocialIconBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(SocialBar.content.cloneNode(true));

        var icons = JSON.parse(this.getAttribute('icons'));
        for (let i = 0; i < icons.length; i++) {
            var socialIcon = document.createElement('social-icon-element');
            var attributeNode = document.createAttribute('name');
            socialIcon.setAttribute('name' , icons[i].name);

            this.shadowRoot.getElementById('social-bar').appendChild(socialIcon);
            console.log(icons[i].name);
        }
    }
}

class IconElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(SocialIcon.content.cloneNode(true));

        if(this.getAttribute('name') === 'GitHub') {
            this.shadowRoot.querySelector('a').href = "https://github.com/Bogey1331";
            this.shadowRoot.querySelector('img').srcset = "/client/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png 36w, /client/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png 64w, /client/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png 120w";
            this.shadowRoot.querySelector('img').sizes = "(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px";
            this.shadowRoot.querySelector('img').src = "/client/Media/Favicons/GitHub-Mark/PNG/GitHub-Mark-Light-36px.png";
            this.shadowRoot.querySelector('img').alt = "White Github Logo";
        }
        else if(this.getAttribute('name') === 'LinkedIn') {
            this.shadowRoot.querySelector('a').href = "https://www.linkedin.com/in/justinrtolin/";
            this.shadowRoot.querySelector('img').srcset = "/client/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-36.png 36w, /client/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-64.png 64w, /client/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-120.png 120w";
            this.shadowRoot.querySelector('img').sizes = "(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px";
            this.shadowRoot.querySelector('img').src = "/client/Media/Favicons/LinkedIn-Logos/In/Digital/White/1x/In-White-36.png";
            this.shadowRoot.querySelector('img').alt = "White Linkedin Logo";
        }
        else if(this.getAttribute('name') === 'Facebook') {
            this.shadowRoot.querySelector('a').href = "https://www.facebook.com/justin.tolin.5";
            this.shadowRoot.querySelector('img').srcset = "/client/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_36.png 36w, /client/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_64.png 64w, /client/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_120.png 120w";
            this.shadowRoot.querySelector('img').sizes = "(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px";
            this.shadowRoot.querySelector('img').src = "/client/Media/Favicons/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_36.png";
            this.shadowRoot.querySelector('img').alt = "White Facbook Logo";
        }
        else if(this.getAttribute('name') === 'Twitter') {
            this.shadowRoot.querySelector('a').href = "https://twitter.com/TolinJustin";
            this.shadowRoot.querySelector('img').srcset = "/client/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-36px.png 36w, /client/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-64px.png 64w, /client/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-120px.png 120w";
            this.shadowRoot.querySelector('img').sizes = "(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px";
            this.shadowRoot.querySelector('img').src = "/client/Media/Favicons/Twitter-All-Brand-Resources/Twitter-Social-Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White-36px.png";
            this.shadowRoot.querySelector('img').alt = "White Twitter Logo";
        }
        else if(this.getAttribute('name') === 'Email') {
            this.shadowRoot.querySelector('a').href = "/client/HTML Pages/contactpage.html";
            this.shadowRoot.querySelector('img').srcset = "/client/Media/Favicons/email-white-24dp/2x/baseline_email_white_36px.png 36w, /client/Media/Favicons/email-white-24dp/2x/baseline_email_white_64px.png 64w, /client/Media/Favicons/email-white-24dp/2x/baseline_email_white_120px.png 120w";
            this.shadowRoot.querySelector('img').sizes = "(min-width: 700px) and (max-width: 2160px) 64px, (min-width: 2160px) 120px, 36px";
            this.shadowRoot.querySelector('img').src = "/client/Media/Favicons/email-white-24dp/2x/baseline_email_white_36px.png";
            this.shadowRoot.querySelector('img').alt = "White Email Icon";
        }
    }
}

window.customElements.define('social-icon-bar', SocialIconBar);
window.customElements.define('social-icon-element', IconElement);