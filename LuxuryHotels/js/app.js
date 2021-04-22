//Active menu

let menuLinks = document.querySelectorAll('.header__link');

for (let i = 0; i < menuLinks.length; i++) {
  if (document.location.href === menuLinks[i].href) {
    menuLinks[i].classList.add('_active');
  }
}
console.log(location.pathname.indexOf(menuLinks[1].text));
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

if (
	location.pathname === '/home.html' ||
	location.pathname === '/facilities.html' ||
	location.pathname === '/rooms.html'
) {
	let scroll = document.querySelector('.luxury__scroll-btn[data-goto]');

	scroll.addEventListener('click', function (e) {
		let btn = e.target;
		if (btn.dataset.goto && document.querySelector(btn.dataset.goto)) {
			let gotoBlock = document.querySelector(btn.dataset.goto);
			let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	});
}

//Slider
new Swiper('.rooms__slider', {
	navigation: {
		nextEl: '.rooms__btn-next',
		prevEl: '.rooms__btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 600,
});

//Validation

let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const footerForm = document.forms.footerForm;
const footerInput = footerForm.elements.footerInput;

footerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  formRemoveError(footerForm);

  if (emailTest(footerInput)) {
    formAddError(footerForm);
  }

  if (footerInput.value === '') {
    formAddError(footerForm);
  }
});


if (location.pathname === '/contact-us.html') {
  const form = document.forms.form;

	form.addEventListener('submit', formSend);

	function formSend(e) {
		e.preventDefault();
    formValidate(form);
	}

	function formValidate(form) {
		let formReq = document.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
				}
			} else {
				if (input.value === '') {
					formAddError(input);
				}
			}
		}
	}

	function formAddError(input) {
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !regEmail.test(input.value);
	}
}
