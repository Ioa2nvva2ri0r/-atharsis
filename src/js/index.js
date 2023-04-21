/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Catalog -- Swiper-slider
const swiperCatalog = new Swiper('.catalog__slider', {
  loop: true,
  navigation: {
    nextEl: '.catalog__slider-btn-next',
    prevEl: '.catalog__slider-btn-prev'
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд'
  },
  speed: 1000
});

// Popular -- Swiper-slider
const swiperPopular = new Swiper('.popular__slider', {
  loop: true,
  navigation: {
    nextEl: '.popular__slider-btn-next',
    prevEl: '.popular__slider-btn-prev'
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд'
  },
  scrollbar: {
    el: '.popular__slider-scrollbar',
    draggable: true
  },
  speed: 1000,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 29
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 29
    },
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 10
    }
  }
});

// Sofas -- Catalog -- popup-label
const labelContent = document.getElementById('label-content');
let elem = '';

document.querySelectorAll('.catalog__label').forEach((el) => {
  el.addEventListener('click', (e) => {
    elem = e.currentTarget;

    if (screen.width > 768) {
      labelContent.style.left = `${elem.offsetLeft + elem.offsetWidth + 29}px`;
      labelContent.style.top = `${
        elem.offsetTop - labelContent.offsetHeight
      }px`;
    }

    labelContent.classList.add('active');
  });
});

document.body.addEventListener('click', (e) => {
  if (!elem.contains(e.target) && !labelContent.contains(e.target))
    labelContent.classList.remove('active');
});

// Yandex-map
ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [53.676347909629094, 23.828005242050153],
    zoom: 16
  });

  let myPlacemark = new ymaps.Placemark(
    [53.67669826968073, 23.830183195770243],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: `data:image/svg+xml,${encodeURIComponent(
        "<svg width='55' height='70' viewBox='0 0 55 70' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M27.2996 70C28.7465 70 54.5993 42.3773 54.5993 27.3C54.5993 12.2226 42.3767 0 27.2996 0C12.2224 0 0 12.2226 0 27.3C0 42.3773 25.8528 70 27.2996 70ZM27.2997 40.9545C34.9438 40.9545 41.1406 34.7575 41.1406 27.1133C41.1406 19.469 34.9438 13.2722 27.2997 13.2722C19.6555 13.2722 13.4588 19.469 13.4588 27.1133C13.4588 34.7575 19.6555 40.9545 27.2997 40.9545Z' fill='#1D3552'/></svg>"
      )}`,
      iconImageSize: [54, 70],
      iconImageOffset: [-3, -42]
    }
  );

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
}

// function addError(input, message, ms) {
//   const toggleCssClass = (el, cssClass) => el.classList.toggle(cssClass);

//   toggleCssClass(input, 'error-valid__input');
//   input.insertAdjacentHTML(
//     'afterend',
//     `<div id="error-valid" class="error-valid__message" role="alert">${message}<div/>`
//   );
//   const error = document.getElementById('error-valid');

//   if (error !== null) {
//     setTimeout(() => {
//       error.parentElement.style.position = 'relative';
//       toggleCssClass(error, 'error-valid__message-active');

//       setTimeout(() => {
//         error.parentElement.style.position = null;
//         toggleCssClass(input, 'error-valid__input');
//         toggleCssClass(error, 'error-valid__message-active');
//       }, ms - 305);
//       setTimeout(() => {
//         error.remove();
//       }, ms);
//     }, 10);
//   }
// }

// function regExp(type, value, exception = '') {
//   const newRegExp = (val, flags) => new RegExp(`[^${val}${exception}]`, flags);

//   switch (type) {
//     case 'email':
//       return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
//         value
//       );
//     case 'tel':
//       return !/^\+\d{1,3}\(\d{2,3}\)\d{2,3}-\d{2}-\d{2}$/.test(value);
//     case 'number':
//       return newRegExp('0-9').test(value);
//     case 'ru':
//       return newRegExp('а-яё', 'gi').test(value);
//     case 'en':
//       return newRegExp('a-z', 'gi').test(value);
//   }
// }

// function debounce(fun, ms) {
//   let isCooldown = false;
//   return function () {
//     if (isCooldown) return;
//     isCooldown = true;
//     fun.apply(this, arguments);
//     setTimeout(() => (isCooldown = false), ms);
//   };
// }

// const animationMessage = debounce(addError, 5000);

// function checkError(input) {
//   // Props input
//   const {
//     type,
//     value,
//     name,
//     placeholder,
//     checked,
//     required,
//     lang,
//     maxLength,
//     minLength,
//   } = input;
//   // Props option
//   const _name = placeholder || placeholder !== '' ? placeholder : name;
//   const _max = maxLength;
//   const _min = minLength;
//   const _value = value.trim();
//   const _length = _value.length;
//   const _type = (val) => type === val;
//   const _excep = input.dataset.excep;
//   const letter = lang === 'ru' ? 'русского' : lang === 'en' && 'латинского';
//   const testValue = _value !== '' || required;

//   function errorСheckingСondition(condition, message) {
//     if (condition) {
//       animationMessage(input, `Поле «${_name}» ${message}`, 5000);
//       return true;
//     }
//     return false;
//   }

//   return [
//     errorСheckingСondition(_length < 1 && required, 'не указано!'),
//     errorСheckingСondition(
//       (_min !== -1 || _max !== -1) &&
//         _length >= 1 &&
//         (_length < _min || _length > _max),
//       `не должно быть ${
//         _min && !_max
//           ? `менее ${_min}`
//           : _max && !_min
//           ? `более ${_max}`
//           : _min &&
//             _max &&
//             (_min === _max
//               ? `менее и более ${_min}`
//               : `${_min} и более ${_max}`)
//       } символов!`
//     ),
//     errorСheckingСondition(
//       lang !== '' && regExp(lang, _value, _excep),
//       `может содержать в себе только: буквы ${letter} алфавита!`
//     ),
//     errorСheckingСondition(
//       (_type('radio') || _type('checkbox')) && !checked && required,
//       'не выбрано!'
//     ),
//     errorСheckingСondition(
//       _type('number') && regExp(type, _value) && testValue,
//       'содержит символы не являющиеся цифрами!'
//     ),
//     errorСheckingСondition(
//       _type('email') && regExp(type, _value) && testValue,
//       'указано не правильно, или имеет некорректную формулировку!'
//     ),
//     errorСheckingСondition(
//       _type('tel') && regExp(type, _value) && testValue,
//       'может содержать в себе только следующую маску ввода: +«Код страны»(«Код оператора»)«Номер телефона через тире»!'
//     ),
//   ].includes(true);
// }

// function dataForm(form) {
//   if (form.constructor === HTMLFormElement) {
//     const elements = [
//       ...new Set(
//         Object.values(form.elements).filter(
//           (el) => el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA'
//         )
//       ),
//     ];

//     if (elements.length === 0) return null;

//     let data = {};

//     for (const [index, elem] of Object.entries(elements)) {
//       const { type, name, value, checked } = elem;
//       const checkType = type === 'radio' || type === 'checkbox';

//       if (checkError(elem) === true) return null;

//       if (checkType && checked) data[name] = checked;
//       if (!checkType && value !== '') data[name] = value;

//       if (Number(index) === elements.length - 1)
//         elements.forEach((el) => {
//           const _checkType = el.type === 'radio' || el.type === 'checkbox';

//           if (_checkType) el.checked = false;
//           if (!_checkType) el.value = '';
//         });
//     }

//     return data;
//   } else throw new Error('Passed parameter is not a HTML-form!');
// }

// // Header menu
// const body = document.body;
// const menu = document.getElementById('menu');
// const menuList = document.getElementById('menu-list');
// const menuBtnToggle = document.getElementById('menu-open');

// function closeMenu() {
//   menuBtnToggle.classList.remove('header__menu-open-active');
//   menu.classList.remove('header__nav-active');
//   body.style.overflowY = null;
// }

// body.addEventListener('click', (e) => {
//   if (!menuBtnToggle.contains(e.target) && !menuList.contains(e.target))
//     closeMenu();
// });

// menuBtnToggle.addEventListener('click', () => {
//   menuBtnToggle.classList.toggle('header__menu-open-active');
//   menu.classList.toggle('header__nav-active');

//   if (menu.classList.contains('header__nav-active'))
//     body.style.overflowY = 'hidden';
//   else body.style.overflowY = null;
// });

// document
//   .querySelectorAll('.header__nav-link')
//   .forEach((el) => el.addEventListener('click', closeMenu));

// // Submit form contacts
// const form = document.getElementById('form-contact');

// document.getElementById('btn-submit').addEventListener('click', () => {
//   const data = dataForm(form);

//   if (data) {
//     const successMessage = document.createElement('div');
//     successMessage.id = 'success';
//     successMessage.className = 'success__message';
//     successMessage.role = 'alert';
//     successMessage.textContent =
//       'Данные успешно отправлены! В ближайшее время мы свяжемся с вами!';

//     form.appendChild(successMessage);

//     setTimeout(() => {
//       successMessage.classList.add('success__message-active');
//       setTimeout(() => {
//         successMessage.classList.remove('success__message-active');
//       }, 5000 - 305);
//       setTimeout(() => {
//         successMessage.remove();
//       }, 5000);
//     }, 10);
//   }
// });
