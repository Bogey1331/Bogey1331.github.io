const navSlide = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileHeader = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', () => {
        mobileHeader.classList.toggle('menu-active');
        burgerMenu.classList.toggle('burger-menu-active');
    });
}

navSlide();