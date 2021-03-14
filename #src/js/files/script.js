//Burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');

burger.addEventListener('click', function() {
    let active = burger.classList.toggle('_active');
    if (active) {
        document.body.style.overflow = 'hidden';
        menu.classList.toggle('_active');
    } else {
        document.body.style.overflow = 'visible';
        menu.classList.remove('_active');
    }
});
