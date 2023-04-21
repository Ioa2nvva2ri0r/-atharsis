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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gQ2F0YWxvZyAtLSBTd2lwZXItc2xpZGVyXHJcbmNvbnN0IHN3aXBlckNhdGFsb2cgPSBuZXcgU3dpcGVyKCcuY2F0YWxvZ19fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNhdGFsb2dfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY2F0YWxvZ19fc2xpZGVyLWJ0bi1wcmV2J1xyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCdcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwXHJcbn0pO1xyXG5cclxuLy8gUG9wdWxhciAtLSBTd2lwZXItc2xpZGVyXHJcbmNvbnN0IHN3aXBlclBvcHVsYXIgPSBuZXcgU3dpcGVyKCcucG9wdWxhcl9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnBvcHVsYXJfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcucG9wdWxhcl9fc2xpZGVyLWJ0bi1wcmV2J1xyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCdcclxuICB9LFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6ICcucG9wdWxhcl9fc2xpZGVyLXNjcm9sbGJhcicsXHJcbiAgICBkcmFnZ2FibGU6IHRydWVcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5XHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5XHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTBcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLy8gU29mYXMgLS0gQ2F0YWxvZyAtLSBwb3B1cC1sYWJlbFxyXG5jb25zdCBsYWJlbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFiZWwtY29udGVudCcpO1xyXG5sZXQgZWxlbSA9ICcnO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2xhYmVsJykuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlbGVtID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIGlmIChzY3JlZW4ud2lkdGggPiA3NjgpIHtcclxuICAgICAgbGFiZWxDb250ZW50LnN0eWxlLmxlZnQgPSBgJHtlbGVtLm9mZnNldExlZnQgKyBlbGVtLm9mZnNldFdpZHRoICsgMjl9cHhgO1xyXG4gICAgICBsYWJlbENvbnRlbnQuc3R5bGUudG9wID0gYCR7XHJcbiAgICAgICAgZWxlbS5vZmZzZXRUb3AgLSBsYWJlbENvbnRlbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIH1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmICghZWxlbS5jb250YWlucyhlLnRhcmdldCkgJiYgIWxhYmVsQ29udGVudC5jb250YWlucyhlLnRhcmdldCkpXHJcbiAgICBsYWJlbENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gWWFuZGV4LW1hcFxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgY2VudGVyOiBbNTMuNjc2MzQ3OTA5NjI5MDk0LCAyMy44MjgwMDUyNDIwNTAxNTNdLFxyXG4gICAgem9vbTogMTZcclxuICB9KTtcclxuXHJcbiAgbGV0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgIFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSxcclxuICAgIHt9LFxyXG4gICAge1xyXG4gICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgIGljb25JbWFnZUhyZWY6IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgICAgXCI8c3ZnIHdpZHRoPSc1NScgaGVpZ2h0PSc3MCcgdmlld0JveD0nMCAwIDU1IDcwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjcuMjk5NiA3MEMyOC43NDY1IDcwIDU0LjU5OTMgNDIuMzc3MyA1NC41OTkzIDI3LjNDNTQuNTk5MyAxMi4yMjI2IDQyLjM3NjcgMCAyNy4yOTk2IDBDMTIuMjIyNCAwIDAgMTIuMjIyNiAwIDI3LjNDMCA0Mi4zNzczIDI1Ljg1MjggNzAgMjcuMjk5NiA3MFpNMjcuMjk5NyA0MC45NTQ1QzM0Ljk0MzggNDAuOTU0NSA0MS4xNDA2IDM0Ljc1NzUgNDEuMTQwNiAyNy4xMTMzQzQxLjE0MDYgMTkuNDY5IDM0Ljk0MzggMTMuMjcyMiAyNy4yOTk3IDEzLjI3MjJDMTkuNjU1NSAxMy4yNzIyIDEzLjQ1ODggMTkuNDY5IDEzLjQ1ODggMjcuMTEzM0MxMy40NTg4IDM0Ljc1NzUgMTkuNjU1NSA0MC45NTQ1IDI3LjI5OTcgNDAuOTU0NVonIGZpbGw9JyMxRDM1NTInLz48L3N2Zz5cIlxyXG4gICAgICApfWAsXHJcbiAgICAgIGljb25JbWFnZVNpemU6IFs1NCwgNzBdLFxyXG4gICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMywgLTQyXVxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuXHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpO1xyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZEVycm9yKGlucHV0LCBtZXNzYWdlLCBtcykge1xyXG4vLyAgIGNvbnN0IHRvZ2dsZUNzc0NsYXNzID0gKGVsLCBjc3NDbGFzcykgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShjc3NDbGFzcyk7XHJcblxyXG4vLyAgIHRvZ2dsZUNzc0NsYXNzKGlucHV0LCAnZXJyb3ItdmFsaWRfX2lucHV0Jyk7XHJcbi8vICAgaW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4vLyAgICAgJ2FmdGVyZW5kJyxcclxuLy8gICAgIGA8ZGl2IGlkPVwiZXJyb3ItdmFsaWRcIiBjbGFzcz1cImVycm9yLXZhbGlkX19tZXNzYWdlXCIgcm9sZT1cImFsZXJ0XCI+JHttZXNzYWdlfTxkaXYvPmBcclxuLy8gICApO1xyXG4vLyAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLXZhbGlkJyk7XHJcblxyXG4vLyAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgIGVycm9yLnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4vLyAgICAgICB0b2dnbGVDc3NDbGFzcyhlcnJvciwgJ2Vycm9yLXZhbGlkX19tZXNzYWdlLWFjdGl2ZScpO1xyXG5cclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgZXJyb3IucGFyZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IG51bGw7XHJcbi8vICAgICAgICAgdG9nZ2xlQ3NzQ2xhc3MoaW5wdXQsICdlcnJvci12YWxpZF9faW5wdXQnKTtcclxuLy8gICAgICAgICB0b2dnbGVDc3NDbGFzcyhlcnJvciwgJ2Vycm9yLXZhbGlkX19tZXNzYWdlLWFjdGl2ZScpO1xyXG4vLyAgICAgICB9LCBtcyAtIDMwNSk7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIGVycm9yLnJlbW92ZSgpO1xyXG4vLyAgICAgICB9LCBtcyk7XHJcbi8vICAgICB9LCAxMCk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiByZWdFeHAodHlwZSwgdmFsdWUsIGV4Y2VwdGlvbiA9ICcnKSB7XHJcbi8vICAgY29uc3QgbmV3UmVnRXhwID0gKHZhbCwgZmxhZ3MpID0+IG5ldyBSZWdFeHAoYFteJHt2YWx9JHtleGNlcHRpb259XWAsIGZsYWdzKTtcclxuXHJcbi8vICAgc3dpdGNoICh0eXBlKSB7XHJcbi8vICAgICBjYXNlICdlbWFpbCc6XHJcbi8vICAgICAgIHJldHVybiAhL14oW2EtejAtOV8tXStcXC4pKlthLXowLTlfLV0rQFthLXowLTlfLV0rKFxcLlthLXowLTlfLV0rKSpcXC5bYS16XXsyLDZ9JC8udGVzdChcclxuLy8gICAgICAgICB2YWx1ZVxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgY2FzZSAndGVsJzpcclxuLy8gICAgICAgcmV0dXJuICEvXlxcK1xcZHsxLDN9XFwoXFxkezIsM31cXClcXGR7MiwzfS1cXGR7Mn0tXFxkezJ9JC8udGVzdCh2YWx1ZSk7XHJcbi8vICAgICBjYXNlICdudW1iZXInOlxyXG4vLyAgICAgICByZXR1cm4gbmV3UmVnRXhwKCcwLTknKS50ZXN0KHZhbHVlKTtcclxuLy8gICAgIGNhc2UgJ3J1JzpcclxuLy8gICAgICAgcmV0dXJuIG5ld1JlZ0V4cCgn0LAt0Y/RkScsICdnaScpLnRlc3QodmFsdWUpO1xyXG4vLyAgICAgY2FzZSAnZW4nOlxyXG4vLyAgICAgICByZXR1cm4gbmV3UmVnRXhwKCdhLXonLCAnZ2knKS50ZXN0KHZhbHVlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGRlYm91bmNlKGZ1biwgbXMpIHtcclxuLy8gICBsZXQgaXNDb29sZG93biA9IGZhbHNlO1xyXG4vLyAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBpZiAoaXNDb29sZG93bikgcmV0dXJuO1xyXG4vLyAgICAgaXNDb29sZG93biA9IHRydWU7XHJcbi8vICAgICBmdW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gKGlzQ29vbGRvd24gPSBmYWxzZSksIG1zKTtcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhbmltYXRpb25NZXNzYWdlID0gZGVib3VuY2UoYWRkRXJyb3IsIDUwMDApO1xyXG5cclxuLy8gZnVuY3Rpb24gY2hlY2tFcnJvcihpbnB1dCkge1xyXG4vLyAgIC8vIFByb3BzIGlucHV0XHJcbi8vICAgY29uc3Qge1xyXG4vLyAgICAgdHlwZSxcclxuLy8gICAgIHZhbHVlLFxyXG4vLyAgICAgbmFtZSxcclxuLy8gICAgIHBsYWNlaG9sZGVyLFxyXG4vLyAgICAgY2hlY2tlZCxcclxuLy8gICAgIHJlcXVpcmVkLFxyXG4vLyAgICAgbGFuZyxcclxuLy8gICAgIG1heExlbmd0aCxcclxuLy8gICAgIG1pbkxlbmd0aCxcclxuLy8gICB9ID0gaW5wdXQ7XHJcbi8vICAgLy8gUHJvcHMgb3B0aW9uXHJcbi8vICAgY29uc3QgX25hbWUgPSBwbGFjZWhvbGRlciB8fCBwbGFjZWhvbGRlciAhPT0gJycgPyBwbGFjZWhvbGRlciA6IG5hbWU7XHJcbi8vICAgY29uc3QgX21heCA9IG1heExlbmd0aDtcclxuLy8gICBjb25zdCBfbWluID0gbWluTGVuZ3RoO1xyXG4vLyAgIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuLy8gICBjb25zdCBfbGVuZ3RoID0gX3ZhbHVlLmxlbmd0aDtcclxuLy8gICBjb25zdCBfdHlwZSA9ICh2YWwpID0+IHR5cGUgPT09IHZhbDtcclxuLy8gICBjb25zdCBfZXhjZXAgPSBpbnB1dC5kYXRhc2V0LmV4Y2VwO1xyXG4vLyAgIGNvbnN0IGxldHRlciA9IGxhbmcgPT09ICdydScgPyAn0YDRg9GB0YHQutC+0LPQvicgOiBsYW5nID09PSAnZW4nICYmICfQu9Cw0YLQuNC90YHQutC+0LPQvic7XHJcbi8vICAgY29uc3QgdGVzdFZhbHVlID0gX3ZhbHVlICE9PSAnJyB8fCByZXF1aXJlZDtcclxuXHJcbi8vICAgZnVuY3Rpb24gZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG4vLyAgICAgaWYgKGNvbmRpdGlvbikge1xyXG4vLyAgICAgICBhbmltYXRpb25NZXNzYWdlKGlucHV0LCBg0J/QvtC70LUgwqske19uYW1lfcK7ICR7bWVzc2FnZX1gLCA1MDAwKTtcclxuLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gW1xyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKF9sZW5ndGggPCAxICYmIHJlcXVpcmVkLCAn0L3QtSDRg9C60LDQt9Cw0L3QviEnKSxcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuLy8gICAgICAgKF9taW4gIT09IC0xIHx8IF9tYXggIT09IC0xKSAmJlxyXG4vLyAgICAgICAgIF9sZW5ndGggPj0gMSAmJlxyXG4vLyAgICAgICAgIChfbGVuZ3RoIDwgX21pbiB8fCBfbGVuZ3RoID4gX21heCksXHJcbi8vICAgICAgIGDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCAke1xyXG4vLyAgICAgICAgIF9taW4gJiYgIV9tYXhcclxuLy8gICAgICAgICAgID8gYNC80LXQvdC10LUgJHtfbWlufWBcclxuLy8gICAgICAgICAgIDogX21heCAmJiAhX21pblxyXG4vLyAgICAgICAgICAgPyBg0LHQvtC70LXQtSAke19tYXh9YFxyXG4vLyAgICAgICAgICAgOiBfbWluICYmXHJcbi8vICAgICAgICAgICAgIF9tYXggJiZcclxuLy8gICAgICAgICAgICAgKF9taW4gPT09IF9tYXhcclxuLy8gICAgICAgICAgICAgICA/IGDQvNC10L3QtdC1INC4INCx0L7Qu9C10LUgJHtfbWlufWBcclxuLy8gICAgICAgICAgICAgICA6IGAke19taW59INC4INCx0L7Qu9C10LUgJHtfbWF4fWApXHJcbi8vICAgICAgIH0g0YHQuNC80LLQvtC70L7QsiFgXHJcbi8vICAgICApLFxyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4vLyAgICAgICBsYW5nICE9PSAnJyAmJiByZWdFeHAobGFuZywgX3ZhbHVlLCBfZXhjZXApLFxyXG4vLyAgICAgICBg0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0LIg0YHQtdCx0LUg0YLQvtC70YzQutC+OiDQsdGD0LrQstGLICR7bGV0dGVyfSDQsNC70YTQsNCy0LjRgtCwIWBcclxuLy8gICAgICksXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbi8vICAgICAgIChfdHlwZSgncmFkaW8nKSB8fCBfdHlwZSgnY2hlY2tib3gnKSkgJiYgIWNoZWNrZWQgJiYgcmVxdWlyZWQsXHJcbi8vICAgICAgICfQvdC1INCy0YvQsdGA0LDQvdC+ISdcclxuLy8gICAgICksXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbi8vICAgICAgIF90eXBlKCdudW1iZXInKSAmJiByZWdFeHAodHlwZSwgX3ZhbHVlKSAmJiB0ZXN0VmFsdWUsXHJcbi8vICAgICAgICfRgdC+0LTQtdGA0LbQuNGCINGB0LjQvNCy0L7Qu9GLINC90LUg0Y/QstC70Y/RjtGJ0LjQtdGB0Y8g0YbQuNGE0YDQsNC80LghJ1xyXG4vLyAgICAgKSxcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuLy8gICAgICAgX3R5cGUoJ2VtYWlsJykgJiYgcmVnRXhwKHR5cGUsIF92YWx1ZSkgJiYgdGVzdFZhbHVlLFxyXG4vLyAgICAgICAn0YPQutCw0LfQsNC90L4g0L3QtSDQv9GA0LDQstC40LvRjNC90L4sINC40LvQuCDQuNC80LXQtdGCINC90LXQutC+0YDRgNC10LrRgtC90YPRjiDRhNC+0YDQvNGD0LvQuNGA0L7QstC60YMhJ1xyXG4vLyAgICAgKSxcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuLy8gICAgICAgX3R5cGUoJ3RlbCcpICYmIHJlZ0V4cCh0eXBlLCBfdmFsdWUpICYmIHRlc3RWYWx1ZSxcclxuLy8gICAgICAgJ9C80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINCyINGB0LXQsdC1INGC0L7Qu9GM0LrQviDRgdC70LXQtNGD0Y7RidGD0Y4g0LzQsNGB0LrRgyDQstCy0L7QtNCwOiArwqvQmtC+0LQg0YHRgtGA0LDQvdGLwrsowqvQmtC+0LQg0L7Qv9C10YDQsNGC0L7RgNCwwrspwqvQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0YfQtdGA0LXQtyDRgtC40YDQtcK7ISdcclxuLy8gICAgICksXHJcbi8vICAgXS5pbmNsdWRlcyh0cnVlKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZGF0YUZvcm0oZm9ybSkge1xyXG4vLyAgIGlmIChmb3JtLmNvbnN0cnVjdG9yID09PSBIVE1MRm9ybUVsZW1lbnQpIHtcclxuLy8gICAgIGNvbnN0IGVsZW1lbnRzID0gW1xyXG4vLyAgICAgICAuLi5uZXcgU2V0KFxyXG4vLyAgICAgICAgIE9iamVjdC52YWx1ZXMoZm9ybS5lbGVtZW50cykuZmlsdGVyKFxyXG4vLyAgICAgICAgICAgKGVsKSA9PiBlbC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJ1xyXG4vLyAgICAgICAgIClcclxuLy8gICAgICAgKSxcclxuLy8gICAgIF07XHJcblxyXG4vLyAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4vLyAgICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbi8vICAgICBmb3IgKGNvbnN0IFtpbmRleCwgZWxlbV0gb2YgT2JqZWN0LmVudHJpZXMoZWxlbWVudHMpKSB7XHJcbi8vICAgICAgIGNvbnN0IHsgdHlwZSwgbmFtZSwgdmFsdWUsIGNoZWNrZWQgfSA9IGVsZW07XHJcbi8vICAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHR5cGUgPT09ICdyYWRpbycgfHwgdHlwZSA9PT0gJ2NoZWNrYm94JztcclxuXHJcbi8vICAgICAgIGlmIChjaGVja0Vycm9yKGVsZW0pID09PSB0cnVlKSByZXR1cm4gbnVsbDtcclxuXHJcbi8vICAgICAgIGlmIChjaGVja1R5cGUgJiYgY2hlY2tlZCkgZGF0YVtuYW1lXSA9IGNoZWNrZWQ7XHJcbi8vICAgICAgIGlmICghY2hlY2tUeXBlICYmIHZhbHVlICE9PSAnJykgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cclxuLy8gICAgICAgaWYgKE51bWJlcihpbmRleCkgPT09IGVsZW1lbnRzLmxlbmd0aCAtIDEpXHJcbi8vICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuLy8gICAgICAgICAgIGNvbnN0IF9jaGVja1R5cGUgPSBlbC50eXBlID09PSAncmFkaW8nIHx8IGVsLnR5cGUgPT09ICdjaGVja2JveCc7XHJcblxyXG4vLyAgICAgICAgICAgaWYgKF9jaGVja1R5cGUpIGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgIGlmICghX2NoZWNrVHlwZSkgZWwudmFsdWUgPSAnJztcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gZGF0YTtcclxuLy8gICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdQYXNzZWQgcGFyYW1ldGVyIGlzIG5vdCBhIEhUTUwtZm9ybSEnKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gSGVhZGVyIG1lbnVcclxuLy8gY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbi8vIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4vLyBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWxpc3QnKTtcclxuLy8gY29uc3QgbWVudUJ0blRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuLy8gICBtZW51QnRuVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudS1vcGVuLWFjdGl2ZScpO1xyXG4vLyAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtYWN0aXZlJyk7XHJcbi8vICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBudWxsO1xyXG4vLyB9XHJcblxyXG4vLyBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICBpZiAoIW1lbnVCdG5Ub2dnbGUuY29udGFpbnMoZS50YXJnZXQpICYmICFtZW51TGlzdC5jb250YWlucyhlLnRhcmdldCkpXHJcbi8vICAgICBjbG9zZU1lbnUoKTtcclxuLy8gfSk7XHJcblxyXG4vLyBtZW51QnRuVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIG1lbnVCdG5Ub2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LW9wZW4tYWN0aXZlJyk7XHJcbi8vICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdi1hY3RpdmUnKTtcclxuXHJcbi8vICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX25hdi1hY3RpdmUnKSlcclxuLy8gICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbi8vICAgZWxzZSBib2R5LnN0eWxlLm92ZXJmbG93WSA9IG51bGw7XHJcbi8vIH0pO1xyXG5cclxuLy8gZG9jdW1lbnRcclxuLy8gICAucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKVxyXG4vLyAgIC5mb3JFYWNoKChlbCkgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpKTtcclxuXHJcbi8vIC8vIFN1Ym1pdCBmb3JtIGNvbnRhY3RzXHJcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWN0Jyk7XHJcblxyXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBkYXRhRm9ybShmb3JtKTtcclxuXHJcbi8vICAgaWYgKGRhdGEpIHtcclxuLy8gICAgIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBzdWNjZXNzTWVzc2FnZS5pZCA9ICdzdWNjZXNzJztcclxuLy8gICAgIHN1Y2Nlc3NNZXNzYWdlLmNsYXNzTmFtZSA9ICdzdWNjZXNzX19tZXNzYWdlJztcclxuLy8gICAgIHN1Y2Nlc3NNZXNzYWdlLnJvbGUgPSAnYWxlcnQnO1xyXG4vLyAgICAgc3VjY2Vzc01lc3NhZ2UudGV4dENvbnRlbnQgPVxyXG4vLyAgICAgICAn0JTQsNC90L3Ri9C1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdGLISDQkiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyDQvNGLINGB0LLRj9C20LXQvNGB0Y8g0YEg0LLQsNC80LghJztcclxuXHJcbi8vICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Y2Nlc3NNZXNzYWdlKTtcclxuXHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgc3VjY2Vzc01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc3VjY2Vzc19fbWVzc2FnZS1hY3RpdmUnKTtcclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgc3VjY2Vzc01lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2Vzc19fbWVzc2FnZS1hY3RpdmUnKTtcclxuLy8gICAgICAgfSwgNTAwMCAtIDMwNSk7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlLnJlbW92ZSgpO1xyXG4vLyAgICAgICB9LCA1MDAwKTtcclxuLy8gICAgIH0sIDEwKTtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
