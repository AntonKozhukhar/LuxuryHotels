//Burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');

burger.addEventListener('click', function () {
	let active = burger.classList.toggle('_active');
	if (active) {
		document.body.style.overflow = 'hidden';
		menu.classList.toggle('_active');
	} else {
		document.body.style.overflow = 'visible';
		menu.classList.remove('_active');
	}
});

//Srcoll
let scroll = document.querySelector('.luxury__scroll-btn[data-goto]');

scroll.addEventListener('click', function (e) {
	let btn = e.target;
	if (btn.dataset.goto && document.querySelector(btn.dataset.goto)) {
		let gotoBlock = document.querySelector(btn.dataset.goto);
		let gotoBlockValue =
			gotoBlock.getBoundingClientRect().top + pageYOffset;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth',
		});
		e.preventDefault();
	}
});

//Slider
new Swiper('.rooms__slider', {
	//Arrows
	navigation: {
		nextEl: '.rooms__btn-next',
		prevEl: '.rooms__btn-prev'
	},
	//Navigation
	// Bullets, current position, progress bar
	pagination: {
		el: '.swiper-pagination',
		//Bullets
		clickable: true,
	},
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 600,
	
});
