function eburgermenuClick() {
    const burgerMenu = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.nav-bar');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu-active');
        navBar.classList.toggle('menu-active');
    });
}

eburgermenuClick();