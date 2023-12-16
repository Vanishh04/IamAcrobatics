const burgerMenu = document.querySelector('.main-page-burger-menu');
const xMenu = document.querySelector('.main-page-x-menu');
const mainNavList = document.querySelector('.main-nav-list');

burgerMenu.addEventListener('click', () => {
    mainNavList.classList.add('active');
});

xMenu.addEventListener('click', () => {
    mainNavList.classList.remove('active');
});