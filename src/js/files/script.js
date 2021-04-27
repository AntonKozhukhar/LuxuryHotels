//Active menu
let menuLinks = document.querySelectorAll('.header__link');

for (let i = 0; i < menuLinks.length; i++) {
	if (document.location.href === menuLinks[i].href) {
		menuLinks[i].classList.add('_active');
	}
}

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
	location.pathname.includes('/index.html') ||
	location.pathname.includes('/facilities.html') ||
	location.pathname.includes('/rooms.html')
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

//Dropdown

const details = document.querySelectorAll('.rooms__details');
const dropdowns = document.querySelectorAll('.rooms__details-list');

for (let i = 0; i < details.length; i++) {
	const btn = details[i];
	const dropdown = dropdowns[i];

  btn.addEventListener('click', function() {
    btn.classList.toggle('_active');
    dropdown.classList.toggle('_active');
  });

	if (isActive(btn)) {
		window.addEventListener('click', removeDropdown(btn, dropdown));
	}
}

function removeDropdown(element1, element2) {
  removeActive(element1);
  removeActive(element2);
}
function isActive(element) {
	return element.classList.contains('_active');
}
function removeActive(element) {
	element.classList.remove('_active');
}

//Validation
const form = document.forms.form;
const formReq = document.querySelectorAll('._input');

isInputsEmpty(formReq);

function isInputsEmpty(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].addEventListener('blur', function () {
			if (arr[i].value != '') {
				arr[i].classList.add('_active');
			} else {
				arr[i].classList.remove('_active');
			}
		});
	}
}

const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const footerForm = document.forms.footerForm;
const footerInput = footerForm.elements.footerInput;
const footerErrors = document.querySelectorAll('.error-message');

footerForm.addEventListener('submit', function (e) {
	e.preventDefault();
	formRemoveError(footerForm);

	for (let i = 0; i < footerErrors.length; i++) {
		removeErrorMessage(footerErrors[i]);
		if (footerInput.value != '') {
			if (emailTest(footerInput)) {
				formAddError(footerForm);
				addErrorMessage(footerErrors[1]);
			}
		} else {
			formAddError(footerForm);
			addErrorMessage(footerErrors[0]);
		}
	}
});

if (location.pathname.includes('/contact-us.html')) {
	form.addEventListener('submit', formSend);

	function formSend(e) {
		e.preventDefault();
		formValidate();
	}
}
function formValidate() {
	const errorMessages = document.querySelectorAll('._message');
	const errorEmail = document.querySelector('._message-email');

	removeErrorMessage(errorEmail);

	for (let i = 0; i < formReq.length; i++) {
		const input = formReq[i];
		const message = errorMessages[i];

		formRemoveError(input);
		removeErrorMessage(message);

		if (input.name === 'email' && input.value != '') {
			if (emailTest(input)) {
				formAddError(input);
				addErrorMessage(errorEmail);
			}
		} else {
			if (input.value === '') {
				formAddError(input);
				addErrorMessage(message);
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

function addErrorMessage(message) {
	message.classList.add('_active');
}
function removeErrorMessage(message) {
	message.classList.remove('_active');
}
