/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [53.676347909629094, 23.828005242050153],
    zoom: 16,
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
      iconImageOffset: [-3, -42],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgY2VudGVyOiBbNTMuNjc2MzQ3OTA5NjI5MDk0LCAyMy44MjgwMDUyNDIwNTAxNTNdLFxyXG4gICAgem9vbTogMTYsXHJcbiAgfSk7XHJcblxyXG4gIGxldCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICBbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10sXHJcbiAgICB7fSxcclxuICAgIHtcclxuICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICBpY29uSW1hZ2VIcmVmOiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICAgIFwiPHN2ZyB3aWR0aD0nNTUnIGhlaWdodD0nNzAnIHZpZXdCb3g9JzAgMCA1NSA3MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTI3LjI5OTYgNzBDMjguNzQ2NSA3MCA1NC41OTkzIDQyLjM3NzMgNTQuNTk5MyAyNy4zQzU0LjU5OTMgMTIuMjIyNiA0Mi4zNzY3IDAgMjcuMjk5NiAwQzEyLjIyMjQgMCAwIDEyLjIyMjYgMCAyNy4zQzAgNDIuMzc3MyAyNS44NTI4IDcwIDI3LjI5OTYgNzBaTTI3LjI5OTcgNDAuOTU0NUMzNC45NDM4IDQwLjk1NDUgNDEuMTQwNiAzNC43NTc1IDQxLjE0MDYgMjcuMTEzM0M0MS4xNDA2IDE5LjQ2OSAzNC45NDM4IDEzLjI3MjIgMjcuMjk5NyAxMy4yNzIyQzE5LjY1NTUgMTMuMjcyMiAxMy40NTg4IDE5LjQ2OSAxMy40NTg4IDI3LjExMzNDMTMuNDU4OCAzNC43NTc1IDE5LjY1NTUgNDAuOTU0NSAyNy4yOTk3IDQwLjk1NDVaJyBmaWxsPScjMUQzNTUyJy8+PC9zdmc+XCJcclxuICAgICAgKX1gLFxyXG4gICAgICBpY29uSW1hZ2VTaXplOiBbNTQsIDcwXSxcclxuICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMsIC00Ml0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG5cclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkRXJyb3IoaW5wdXQsIG1lc3NhZ2UsIG1zKSB7XHJcbi8vICAgY29uc3QgdG9nZ2xlQ3NzQ2xhc3MgPSAoZWwsIGNzc0NsYXNzKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGNzc0NsYXNzKTtcclxuXHJcbi8vICAgdG9nZ2xlQ3NzQ2xhc3MoaW5wdXQsICdlcnJvci12YWxpZF9faW5wdXQnKTtcclxuLy8gICBpbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbi8vICAgICAnYWZ0ZXJlbmQnLFxyXG4vLyAgICAgYDxkaXYgaWQ9XCJlcnJvci12YWxpZFwiIGNsYXNzPVwiZXJyb3ItdmFsaWRfX21lc3NhZ2VcIiByb2xlPVwiYWxlcnRcIj4ke21lc3NhZ2V9PGRpdi8+YFxyXG4vLyAgICk7XHJcbi8vICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItdmFsaWQnKTtcclxuXHJcbi8vICAgaWYgKGVycm9yICE9PSBudWxsKSB7XHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgZXJyb3IucGFyZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbi8vICAgICAgIHRvZ2dsZUNzc0NsYXNzKGVycm9yLCAnZXJyb3ItdmFsaWRfX21lc3NhZ2UtYWN0aXZlJyk7XHJcblxyXG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICBlcnJvci5wYXJlbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gbnVsbDtcclxuLy8gICAgICAgICB0b2dnbGVDc3NDbGFzcyhpbnB1dCwgJ2Vycm9yLXZhbGlkX19pbnB1dCcpO1xyXG4vLyAgICAgICAgIHRvZ2dsZUNzc0NsYXNzKGVycm9yLCAnZXJyb3ItdmFsaWRfX21lc3NhZ2UtYWN0aXZlJyk7XHJcbi8vICAgICAgIH0sIG1zIC0gMzA1KTtcclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgZXJyb3IucmVtb3ZlKCk7XHJcbi8vICAgICAgIH0sIG1zKTtcclxuLy8gICAgIH0sIDEwKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHJlZ0V4cCh0eXBlLCB2YWx1ZSwgZXhjZXB0aW9uID0gJycpIHtcclxuLy8gICBjb25zdCBuZXdSZWdFeHAgPSAodmFsLCBmbGFncykgPT4gbmV3IFJlZ0V4cChgW14ke3ZhbH0ke2V4Y2VwdGlvbn1dYCwgZmxhZ3MpO1xyXG5cclxuLy8gICBzd2l0Y2ggKHR5cGUpIHtcclxuLy8gICAgIGNhc2UgJ2VtYWlsJzpcclxuLy8gICAgICAgcmV0dXJuICEvXihbYS16MC05Xy1dK1xcLikqW2EtejAtOV8tXStAW2EtejAtOV8tXSsoXFwuW2EtejAtOV8tXSspKlxcLlthLXpdezIsNn0kLy50ZXN0KFxyXG4vLyAgICAgICAgIHZhbHVlXHJcbi8vICAgICAgICk7XHJcbi8vICAgICBjYXNlICd0ZWwnOlxyXG4vLyAgICAgICByZXR1cm4gIS9eXFwrXFxkezEsM31cXChcXGR7MiwzfVxcKVxcZHsyLDN9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHZhbHVlKTtcclxuLy8gICAgIGNhc2UgJ251bWJlcic6XHJcbi8vICAgICAgIHJldHVybiBuZXdSZWdFeHAoJzAtOScpLnRlc3QodmFsdWUpO1xyXG4vLyAgICAgY2FzZSAncnUnOlxyXG4vLyAgICAgICByZXR1cm4gbmV3UmVnRXhwKCfQsC3Rj9GRJywgJ2dpJykudGVzdCh2YWx1ZSk7XHJcbi8vICAgICBjYXNlICdlbic6XHJcbi8vICAgICAgIHJldHVybiBuZXdSZWdFeHAoJ2EteicsICdnaScpLnRlc3QodmFsdWUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZGVib3VuY2UoZnVuLCBtcykge1xyXG4vLyAgIGxldCBpc0Nvb2xkb3duID0gZmFsc2U7XHJcbi8vICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGlmIChpc0Nvb2xkb3duKSByZXR1cm47XHJcbi8vICAgICBpc0Nvb2xkb3duID0gdHJ1ZTtcclxuLy8gICAgIGZ1bi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiAoaXNDb29sZG93biA9IGZhbHNlKSwgbXMpO1xyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGFuaW1hdGlvbk1lc3NhZ2UgPSBkZWJvdW5jZShhZGRFcnJvciwgNTAwMCk7XHJcblxyXG4vLyBmdW5jdGlvbiBjaGVja0Vycm9yKGlucHV0KSB7XHJcbi8vICAgLy8gUHJvcHMgaW5wdXRcclxuLy8gICBjb25zdCB7XHJcbi8vICAgICB0eXBlLFxyXG4vLyAgICAgdmFsdWUsXHJcbi8vICAgICBuYW1lLFxyXG4vLyAgICAgcGxhY2Vob2xkZXIsXHJcbi8vICAgICBjaGVja2VkLFxyXG4vLyAgICAgcmVxdWlyZWQsXHJcbi8vICAgICBsYW5nLFxyXG4vLyAgICAgbWF4TGVuZ3RoLFxyXG4vLyAgICAgbWluTGVuZ3RoLFxyXG4vLyAgIH0gPSBpbnB1dDtcclxuLy8gICAvLyBQcm9wcyBvcHRpb25cclxuLy8gICBjb25zdCBfbmFtZSA9IHBsYWNlaG9sZGVyIHx8IHBsYWNlaG9sZGVyICE9PSAnJyA/IHBsYWNlaG9sZGVyIDogbmFtZTtcclxuLy8gICBjb25zdCBfbWF4ID0gbWF4TGVuZ3RoO1xyXG4vLyAgIGNvbnN0IF9taW4gPSBtaW5MZW5ndGg7XHJcbi8vICAgY29uc3QgX3ZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4vLyAgIGNvbnN0IF9sZW5ndGggPSBfdmFsdWUubGVuZ3RoO1xyXG4vLyAgIGNvbnN0IF90eXBlID0gKHZhbCkgPT4gdHlwZSA9PT0gdmFsO1xyXG4vLyAgIGNvbnN0IF9leGNlcCA9IGlucHV0LmRhdGFzZXQuZXhjZXA7XHJcbi8vICAgY29uc3QgbGV0dGVyID0gbGFuZyA9PT0gJ3J1JyA/ICfRgNGD0YHRgdC60L7Qs9C+JyA6IGxhbmcgPT09ICdlbicgJiYgJ9C70LDRgtC40L3RgdC60L7Qs9C+JztcclxuLy8gICBjb25zdCB0ZXN0VmFsdWUgPSBfdmFsdWUgIT09ICcnIHx8IHJlcXVpcmVkO1xyXG5cclxuLy8gICBmdW5jdGlvbiBlcnJvctChaGVja2luZ9Chb25kaXRpb24oY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcbi8vICAgICBpZiAoY29uZGl0aW9uKSB7XHJcbi8vICAgICAgIGFuaW1hdGlvbk1lc3NhZ2UoaW5wdXQsIGDQn9C+0LvQtSDCqyR7X25hbWV9wrsgJHttZXNzYWdlfWAsIDUwMDApO1xyXG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBmYWxzZTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBbXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oX2xlbmd0aCA8IDEgJiYgcmVxdWlyZWQsICfQvdC1INGD0LrQsNC30LDQvdC+IScpLFxyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4vLyAgICAgICAoX21pbiAhPT0gLTEgfHwgX21heCAhPT0gLTEpICYmXHJcbi8vICAgICAgICAgX2xlbmd0aCA+PSAxICYmXHJcbi8vICAgICAgICAgKF9sZW5ndGggPCBfbWluIHx8IF9sZW5ndGggPiBfbWF4KSxcclxuLy8gICAgICAgYNC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMICR7XHJcbi8vICAgICAgICAgX21pbiAmJiAhX21heFxyXG4vLyAgICAgICAgICAgPyBg0LzQtdC90LXQtSAke19taW59YFxyXG4vLyAgICAgICAgICAgOiBfbWF4ICYmICFfbWluXHJcbi8vICAgICAgICAgICA/IGDQsdC+0LvQtdC1ICR7X21heH1gXHJcbi8vICAgICAgICAgICA6IF9taW4gJiZcclxuLy8gICAgICAgICAgICAgX21heCAmJlxyXG4vLyAgICAgICAgICAgICAoX21pbiA9PT0gX21heFxyXG4vLyAgICAgICAgICAgICAgID8gYNC80LXQvdC10LUg0Lgg0LHQvtC70LXQtSAke19taW59YFxyXG4vLyAgICAgICAgICAgICAgIDogYCR7X21pbn0g0Lgg0LHQvtC70LXQtSAke19tYXh9YClcclxuLy8gICAgICAgfSDRgdC40LzQstC+0LvQvtCyIWBcclxuLy8gICAgICksXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbi8vICAgICAgIGxhbmcgIT09ICcnICYmIHJlZ0V4cChsYW5nLCBfdmFsdWUsIF9leGNlcCksXHJcbi8vICAgICAgIGDQvNC+0LbQtdGCINGB0L7QtNC10YDQttCw0YLRjCDQsiDRgdC10LHQtSDRgtC+0LvRjNC60L46INCx0YPQutCy0YsgJHtsZXR0ZXJ9INCw0LvRhNCw0LLQuNGC0LAhYFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuLy8gICAgICAgKF90eXBlKCdyYWRpbycpIHx8IF90eXBlKCdjaGVja2JveCcpKSAmJiAhY2hlY2tlZCAmJiByZXF1aXJlZCxcclxuLy8gICAgICAgJ9C90LUg0LLRi9Cx0YDQsNC90L4hJ1xyXG4vLyAgICAgKSxcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuLy8gICAgICAgX3R5cGUoJ251bWJlcicpICYmIHJlZ0V4cCh0eXBlLCBfdmFsdWUpICYmIHRlc3RWYWx1ZSxcclxuLy8gICAgICAgJ9GB0L7QtNC10YDQttC40YIg0YHQuNC80LLQvtC70Ysg0L3QtSDRj9Cy0LvRj9GO0YnQuNC10YHRjyDRhtC40YTRgNCw0LzQuCEnXHJcbi8vICAgICApLFxyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4vLyAgICAgICBfdHlwZSgnZW1haWwnKSAmJiByZWdFeHAodHlwZSwgX3ZhbHVlKSAmJiB0ZXN0VmFsdWUsXHJcbi8vICAgICAgICfRg9C60LDQt9Cw0L3QviDQvdC1INC/0YDQsNCy0LjQu9GM0L3Qviwg0LjQu9C4INC40LzQtdC10YIg0L3QtdC60L7RgNGA0LXQutGC0L3Rg9GOINGE0L7RgNC80YPQu9C40YDQvtCy0LrRgyEnXHJcbi8vICAgICApLFxyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4vLyAgICAgICBfdHlwZSgndGVsJykgJiYgcmVnRXhwKHR5cGUsIF92YWx1ZSkgJiYgdGVzdFZhbHVlLFxyXG4vLyAgICAgICAn0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0LIg0YHQtdCx0LUg0YLQvtC70YzQutC+INGB0LvQtdC00YPRjtGJ0YPRjiDQvNCw0YHQutGDINCy0LLQvtC00LA6ICvCq9Ca0L7QtCDRgdGC0YDQsNC90YvCuyjCq9Ca0L7QtCDQvtC/0LXRgNCw0YLQvtGA0LDCuynCq9Cd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCDRh9C10YDQtdC3INGC0LjRgNC1wrshJ1xyXG4vLyAgICAgKSxcclxuLy8gICBdLmluY2x1ZGVzKHRydWUpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBkYXRhRm9ybShmb3JtKSB7XHJcbi8vICAgaWYgKGZvcm0uY29uc3RydWN0b3IgPT09IEhUTUxGb3JtRWxlbWVudCkge1xyXG4vLyAgICAgY29uc3QgZWxlbWVudHMgPSBbXHJcbi8vICAgICAgIC4uLm5ldyBTZXQoXHJcbi8vICAgICAgICAgT2JqZWN0LnZhbHVlcyhmb3JtLmVsZW1lbnRzKS5maWx0ZXIoXHJcbi8vICAgICAgICAgICAoZWwpID0+IGVsLm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsLm5vZGVOYW1lID09PSAnVEVYVEFSRUEnXHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgICApLFxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbi8vICAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuLy8gICAgIGZvciAoY29uc3QgW2luZGV4LCBlbGVtXSBvZiBPYmplY3QuZW50cmllcyhlbGVtZW50cykpIHtcclxuLy8gICAgICAgY29uc3QgeyB0eXBlLCBuYW1lLCB2YWx1ZSwgY2hlY2tlZCB9ID0gZWxlbTtcclxuLy8gICAgICAgY29uc3QgY2hlY2tUeXBlID0gdHlwZSA9PT0gJ3JhZGlvJyB8fCB0eXBlID09PSAnY2hlY2tib3gnO1xyXG5cclxuLy8gICAgICAgaWYgKGNoZWNrRXJyb3IoZWxlbSkgPT09IHRydWUpIHJldHVybiBudWxsO1xyXG5cclxuLy8gICAgICAgaWYgKGNoZWNrVHlwZSAmJiBjaGVja2VkKSBkYXRhW25hbWVdID0gY2hlY2tlZDtcclxuLy8gICAgICAgaWYgKCFjaGVja1R5cGUgJiYgdmFsdWUgIT09ICcnKSBkYXRhW25hbWVdID0gdmFsdWU7XHJcblxyXG4vLyAgICAgICBpZiAoTnVtYmVyKGluZGV4KSA9PT0gZWxlbWVudHMubGVuZ3RoIC0gMSlcclxuLy8gICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc3QgX2NoZWNrVHlwZSA9IGVsLnR5cGUgPT09ICdyYWRpbycgfHwgZWwudHlwZSA9PT0gJ2NoZWNrYm94JztcclxuXHJcbi8vICAgICAgICAgICBpZiAoX2NoZWNrVHlwZSkgZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgaWYgKCFfY2hlY2tUeXBlKSBlbC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiBkYXRhO1xyXG4vLyAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3NlZCBwYXJhbWV0ZXIgaXMgbm90IGEgSFRNTC1mb3JtIScpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBIZWFkZXIgbWVudVxyXG4vLyBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuLy8gY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbi8vIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbGlzdCcpO1xyXG4vLyBjb25zdCBtZW51QnRuVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG5cclxuLy8gZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4vLyAgIG1lbnVCdG5Ub2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LW9wZW4tYWN0aXZlJyk7XHJcbi8vICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdi1hY3RpdmUnKTtcclxuLy8gICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IG51bGw7XHJcbi8vIH1cclxuXHJcbi8vIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgIGlmICghbWVudUJ0blRvZ2dsZS5jb250YWlucyhlLnRhcmdldCkgJiYgIW1lbnVMaXN0LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuLy8gICAgIGNsb3NlTWVudSgpO1xyXG4vLyB9KTtcclxuXHJcbi8vIG1lbnVCdG5Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgbWVudUJ0blRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX21lbnUtb3Blbi1hY3RpdmUnKTtcclxuLy8gICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbmF2LWFjdGl2ZScpO1xyXG5cclxuLy8gICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbmF2LWFjdGl2ZScpKVxyXG4vLyAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuLy8gICBlbHNlIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gbnVsbDtcclxuLy8gfSk7XHJcblxyXG4vLyBkb2N1bWVudFxyXG4vLyAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpXHJcbi8vICAgLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSkpO1xyXG5cclxuLy8gLy8gU3VibWl0IGZvcm0gY29udGFjdHNcclxuLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhY3QnKTtcclxuXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgY29uc3QgZGF0YSA9IGRhdGFGb3JtKGZvcm0pO1xyXG5cclxuLy8gICBpZiAoZGF0YSkge1xyXG4vLyAgICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHN1Y2Nlc3NNZXNzYWdlLmlkID0gJ3N1Y2Nlc3MnO1xyXG4vLyAgICAgc3VjY2Vzc01lc3NhZ2UuY2xhc3NOYW1lID0gJ3N1Y2Nlc3NfX21lc3NhZ2UnO1xyXG4vLyAgICAgc3VjY2Vzc01lc3NhZ2Uucm9sZSA9ICdhbGVydCc7XHJcbi8vICAgICBzdWNjZXNzTWVzc2FnZS50ZXh0Q29udGVudCA9XHJcbi8vICAgICAgICfQlNCw0L3QvdGL0LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90YshINCSINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPINC80Ysg0YHQstGP0LbQtdC80YHRjyDRgSDQstCw0LzQuCEnO1xyXG5cclxuLy8gICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VjY2Vzc01lc3NhZ2UpO1xyXG5cclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzX19tZXNzYWdlLWFjdGl2ZScpO1xyXG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzX19tZXNzYWdlLWFjdGl2ZScpO1xyXG4vLyAgICAgICB9LCA1MDAwIC0gMzA1KTtcclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgc3VjY2Vzc01lc3NhZ2UucmVtb3ZlKCk7XHJcbi8vICAgICAgIH0sIDUwMDApO1xyXG4vLyAgICAgfSwgMTApO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcbiJdLCJmaWxlIjoiZm9ybS5qcyJ9
