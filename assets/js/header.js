function eburgermenuClick() {
    const burgerMenu = document.querySelector('.hamburger_menu');
    const navBar = document.querySelector('.nav-bar');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger_menu-active');
        navBar.classList.toggle('menu-active');
    });
}

eburgermenuClick();