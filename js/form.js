/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBmdW5jdGlvbiBhZGRFcnJvcihpbnB1dCwgbWVzc2FnZSwgbXMpIHtcclxuLy8gICBjb25zdCB0b2dnbGVDc3NDbGFzcyA9IChlbCwgY3NzQ2xhc3MpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoY3NzQ2xhc3MpO1xyXG5cclxuLy8gICB0b2dnbGVDc3NDbGFzcyhpbnB1dCwgJ2Vycm9yLXZhbGlkX19pbnB1dCcpO1xyXG4vLyAgIGlucHV0Lmluc2VydEFkamFjZW50SFRNTChcclxuLy8gICAgICdhZnRlcmVuZCcsXHJcbi8vICAgICBgPGRpdiBpZD1cImVycm9yLXZhbGlkXCIgY2xhc3M9XCJlcnJvci12YWxpZF9fbWVzc2FnZVwiIHJvbGU9XCJhbGVydFwiPiR7bWVzc2FnZX08ZGl2Lz5gXHJcbi8vICAgKTtcclxuLy8gICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci12YWxpZCcpO1xyXG5cclxuLy8gICBpZiAoZXJyb3IgIT09IG51bGwpIHtcclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICBlcnJvci5wYXJlbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuLy8gICAgICAgdG9nZ2xlQ3NzQ2xhc3MoZXJyb3IsICdlcnJvci12YWxpZF9fbWVzc2FnZS1hY3RpdmUnKTtcclxuXHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIGVycm9yLnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBudWxsO1xyXG4vLyAgICAgICAgIHRvZ2dsZUNzc0NsYXNzKGlucHV0LCAnZXJyb3ItdmFsaWRfX2lucHV0Jyk7XHJcbi8vICAgICAgICAgdG9nZ2xlQ3NzQ2xhc3MoZXJyb3IsICdlcnJvci12YWxpZF9fbWVzc2FnZS1hY3RpdmUnKTtcclxuLy8gICAgICAgfSwgbXMgLSAzMDUpO1xyXG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICBlcnJvci5yZW1vdmUoKTtcclxuLy8gICAgICAgfSwgbXMpO1xyXG4vLyAgICAgfSwgMTApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcmVnRXhwKHR5cGUsIHZhbHVlLCBleGNlcHRpb24gPSAnJykge1xyXG4vLyAgIGNvbnN0IG5ld1JlZ0V4cCA9ICh2YWwsIGZsYWdzKSA9PiBuZXcgUmVnRXhwKGBbXiR7dmFsfSR7ZXhjZXB0aW9ufV1gLCBmbGFncyk7XHJcblxyXG4vLyAgIHN3aXRjaCAodHlwZSkge1xyXG4vLyAgICAgY2FzZSAnZW1haWwnOlxyXG4vLyAgICAgICByZXR1cm4gIS9eKFthLXowLTlfLV0rXFwuKSpbYS16MC05Xy1dK0BbYS16MC05Xy1dKyhcXC5bYS16MC05Xy1dKykqXFwuW2Etel17Miw2fSQvLnRlc3QoXHJcbi8vICAgICAgICAgdmFsdWVcclxuLy8gICAgICAgKTtcclxuLy8gICAgIGNhc2UgJ3RlbCc6XHJcbi8vICAgICAgIHJldHVybiAhL15cXCtcXGR7MSwzfVxcKFxcZHsyLDN9XFwpXFxkezIsM30tXFxkezJ9LVxcZHsyfSQvLnRlc3QodmFsdWUpO1xyXG4vLyAgICAgY2FzZSAnbnVtYmVyJzpcclxuLy8gICAgICAgcmV0dXJuIG5ld1JlZ0V4cCgnMC05JykudGVzdCh2YWx1ZSk7XHJcbi8vICAgICBjYXNlICdydSc6XHJcbi8vICAgICAgIHJldHVybiBuZXdSZWdFeHAoJ9CwLdGP0ZEnLCAnZ2knKS50ZXN0KHZhbHVlKTtcclxuLy8gICAgIGNhc2UgJ2VuJzpcclxuLy8gICAgICAgcmV0dXJuIG5ld1JlZ0V4cCgnYS16JywgJ2dpJykudGVzdCh2YWx1ZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBkZWJvdW5jZShmdW4sIG1zKSB7XHJcbi8vICAgbGV0IGlzQ29vbGRvd24gPSBmYWxzZTtcclxuLy8gICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgaWYgKGlzQ29vbGRvd24pIHJldHVybjtcclxuLy8gICAgIGlzQ29vbGRvd24gPSB0cnVlO1xyXG4vLyAgICAgZnVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IChpc0Nvb2xkb3duID0gZmFsc2UpLCBtcyk7XHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgYW5pbWF0aW9uTWVzc2FnZSA9IGRlYm91bmNlKGFkZEVycm9yLCA1MDAwKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNoZWNrRXJyb3IoaW5wdXQpIHtcclxuLy8gICAvLyBQcm9wcyBpbnB1dFxyXG4vLyAgIGNvbnN0IHtcclxuLy8gICAgIHR5cGUsXHJcbi8vICAgICB2YWx1ZSxcclxuLy8gICAgIG5hbWUsXHJcbi8vICAgICBwbGFjZWhvbGRlcixcclxuLy8gICAgIGNoZWNrZWQsXHJcbi8vICAgICByZXF1aXJlZCxcclxuLy8gICAgIGxhbmcsXHJcbi8vICAgICBtYXhMZW5ndGgsXHJcbi8vICAgICBtaW5MZW5ndGgsXHJcbi8vICAgfSA9IGlucHV0O1xyXG4vLyAgIC8vIFByb3BzIG9wdGlvblxyXG4vLyAgIGNvbnN0IF9uYW1lID0gcGxhY2Vob2xkZXIgfHwgcGxhY2Vob2xkZXIgIT09ICcnID8gcGxhY2Vob2xkZXIgOiBuYW1lO1xyXG4vLyAgIGNvbnN0IF9tYXggPSBtYXhMZW5ndGg7XHJcbi8vICAgY29uc3QgX21pbiA9IG1pbkxlbmd0aDtcclxuLy8gICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbi8vICAgY29uc3QgX2xlbmd0aCA9IF92YWx1ZS5sZW5ndGg7XHJcbi8vICAgY29uc3QgX3R5cGUgPSAodmFsKSA9PiB0eXBlID09PSB2YWw7XHJcbi8vICAgY29uc3QgX2V4Y2VwID0gaW5wdXQuZGF0YXNldC5leGNlcDtcclxuLy8gICBjb25zdCBsZXR0ZXIgPSBsYW5nID09PSAncnUnID8gJ9GA0YPRgdGB0LrQvtCz0L4nIDogbGFuZyA9PT0gJ2VuJyAmJiAn0LvQsNGC0LjQvdGB0LrQvtCz0L4nO1xyXG4vLyAgIGNvbnN0IHRlc3RWYWx1ZSA9IF92YWx1ZSAhPT0gJycgfHwgcmVxdWlyZWQ7XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuLy8gICAgIGlmIChjb25kaXRpb24pIHtcclxuLy8gICAgICAgYW5pbWF0aW9uTWVzc2FnZShpbnB1dCwgYNCf0L7Qu9C1IMKrJHtfbmFtZX3CuyAke21lc3NhZ2V9YCwgNTAwMCk7XHJcbi8vICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIFtcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihfbGVuZ3RoIDwgMSAmJiByZXF1aXJlZCwgJ9C90LUg0YPQutCw0LfQsNC90L4hJyksXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbi8vICAgICAgIChfbWluICE9PSAtMSB8fCBfbWF4ICE9PSAtMSkgJiZcclxuLy8gICAgICAgICBfbGVuZ3RoID49IDEgJiZcclxuLy8gICAgICAgICAoX2xlbmd0aCA8IF9taW4gfHwgX2xlbmd0aCA+IF9tYXgpLFxyXG4vLyAgICAgICBg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0YwgJHtcclxuLy8gICAgICAgICBfbWluICYmICFfbWF4XHJcbi8vICAgICAgICAgICA/IGDQvNC10L3QtdC1ICR7X21pbn1gXHJcbi8vICAgICAgICAgICA6IF9tYXggJiYgIV9taW5cclxuLy8gICAgICAgICAgID8gYNCx0L7Qu9C10LUgJHtfbWF4fWBcclxuLy8gICAgICAgICAgIDogX21pbiAmJlxyXG4vLyAgICAgICAgICAgICBfbWF4ICYmXHJcbi8vICAgICAgICAgICAgIChfbWluID09PSBfbWF4XHJcbi8vICAgICAgICAgICAgICAgPyBg0LzQtdC90LXQtSDQuCDQsdC+0LvQtdC1ICR7X21pbn1gXHJcbi8vICAgICAgICAgICAgICAgOiBgJHtfbWlufSDQuCDQsdC+0LvQtdC1ICR7X21heH1gKVxyXG4vLyAgICAgICB9INGB0LjQvNCy0L7Qu9C+0LIhYFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuLy8gICAgICAgbGFuZyAhPT0gJycgJiYgcmVnRXhwKGxhbmcsIF92YWx1ZSwgX2V4Y2VwKSxcclxuLy8gICAgICAgYNC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINCyINGB0LXQsdC1INGC0L7Qu9GM0LrQvjog0LHRg9C60LLRiyAke2xldHRlcn0g0LDQu9GE0LDQstC40YLQsCFgXHJcbi8vICAgICApLFxyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4vLyAgICAgICAoX3R5cGUoJ3JhZGlvJykgfHwgX3R5cGUoJ2NoZWNrYm94JykpICYmICFjaGVja2VkICYmIHJlcXVpcmVkLFxyXG4vLyAgICAgICAn0L3QtSDQstGL0LHRgNCw0L3QviEnXHJcbi8vICAgICApLFxyXG4vLyAgICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4vLyAgICAgICBfdHlwZSgnbnVtYmVyJykgJiYgcmVnRXhwKHR5cGUsIF92YWx1ZSkgJiYgdGVzdFZhbHVlLFxyXG4vLyAgICAgICAn0YHQvtC00LXRgNC20LjRgiDRgdC40LzQstC+0LvRiyDQvdC1INGP0LLQu9GP0Y7RidC40LXRgdGPINGG0LjRhNGA0LDQvNC4ISdcclxuLy8gICAgICksXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbi8vICAgICAgIF90eXBlKCdlbWFpbCcpICYmIHJlZ0V4cCh0eXBlLCBfdmFsdWUpICYmIHRlc3RWYWx1ZSxcclxuLy8gICAgICAgJ9GD0LrQsNC30LDQvdC+INC90LUg0L/RgNCw0LLQuNC70YzQvdC+LCDQuNC70Lgg0LjQvNC10LXRgiDQvdC10LrQvtGA0YDQtdC60YLQvdGD0Y4g0YTQvtGA0LzRg9C70LjRgNC+0LLQutGDISdcclxuLy8gICAgICksXHJcbi8vICAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbi8vICAgICAgIF90eXBlKCd0ZWwnKSAmJiByZWdFeHAodHlwZSwgX3ZhbHVlKSAmJiB0ZXN0VmFsdWUsXHJcbi8vICAgICAgICfQvNC+0LbQtdGCINGB0L7QtNC10YDQttCw0YLRjCDQsiDRgdC10LHQtSDRgtC+0LvRjNC60L4g0YHQu9C10LTRg9GO0YnRg9GOINC80LDRgdC60YMg0LLQstC+0LTQsDogK8Kr0JrQvtC0INGB0YLRgNCw0L3Ri8K7KMKr0JrQvtC0INC+0L/QtdGA0LDRgtC+0YDQsMK7KcKr0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINGH0LXRgNC10Lcg0YLQuNGA0LXCuyEnXHJcbi8vICAgICApLFxyXG4vLyAgIF0uaW5jbHVkZXModHJ1ZSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGRhdGFGb3JtKGZvcm0pIHtcclxuLy8gICBpZiAoZm9ybS5jb25zdHJ1Y3RvciA9PT0gSFRNTEZvcm1FbGVtZW50KSB7XHJcbi8vICAgICBjb25zdCBlbGVtZW50cyA9IFtcclxuLy8gICAgICAgLi4ubmV3IFNldChcclxuLy8gICAgICAgICBPYmplY3QudmFsdWVzKGZvcm0uZWxlbWVudHMpLmZpbHRlcihcclxuLy8gICAgICAgICAgIChlbCkgPT4gZWwubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWwubm9kZU5hbWUgPT09ICdURVhUQVJFQSdcclxuLy8gICAgICAgICApXHJcbi8vICAgICAgICksXHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuLy8gICAgIGxldCBkYXRhID0ge307XHJcblxyXG4vLyAgICAgZm9yIChjb25zdCBbaW5kZXgsIGVsZW1dIG9mIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRzKSkge1xyXG4vLyAgICAgICBjb25zdCB7IHR5cGUsIG5hbWUsIHZhbHVlLCBjaGVja2VkIH0gPSBlbGVtO1xyXG4vLyAgICAgICBjb25zdCBjaGVja1R5cGUgPSB0eXBlID09PSAncmFkaW8nIHx8IHR5cGUgPT09ICdjaGVja2JveCc7XHJcblxyXG4vLyAgICAgICBpZiAoY2hlY2tFcnJvcihlbGVtKSA9PT0gdHJ1ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4vLyAgICAgICBpZiAoY2hlY2tUeXBlICYmIGNoZWNrZWQpIGRhdGFbbmFtZV0gPSBjaGVja2VkO1xyXG4vLyAgICAgICBpZiAoIWNoZWNrVHlwZSAmJiB2YWx1ZSAhPT0gJycpIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuXHJcbi8vICAgICAgIGlmIChOdW1iZXIoaW5kZXgpID09PSBlbGVtZW50cy5sZW5ndGggLSAxKVxyXG4vLyAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCBfY2hlY2tUeXBlID0gZWwudHlwZSA9PT0gJ3JhZGlvJyB8fCBlbC50eXBlID09PSAnY2hlY2tib3gnO1xyXG5cclxuLy8gICAgICAgICAgIGlmIChfY2hlY2tUeXBlKSBlbC5jaGVja2VkID0gZmFsc2U7XHJcbi8vICAgICAgICAgICBpZiAoIV9jaGVja1R5cGUpIGVsLnZhbHVlID0gJyc7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIGRhdGE7XHJcbi8vICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignUGFzc2VkIHBhcmFtZXRlciBpcyBub3QgYSBIVE1MLWZvcm0hJyk7XHJcbi8vIH1cclxuXHJcbi8vIC8vIEhlYWRlciBtZW51XHJcbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4vLyBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuLy8gY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1saXN0Jyk7XHJcbi8vIGNvbnN0IG1lbnVCdG5Ub2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcblxyXG4vLyBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcbi8vICAgbWVudUJ0blRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtb3Blbi1hY3RpdmUnKTtcclxuLy8gICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LWFjdGl2ZScpO1xyXG4vLyAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gbnVsbDtcclxuLy8gfVxyXG5cclxuLy8gYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgaWYgKCFtZW51QnRuVG9nZ2xlLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhbWVudUxpc3QuY29udGFpbnMoZS50YXJnZXQpKVxyXG4vLyAgICAgY2xvc2VNZW51KCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gbWVudUJ0blRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBtZW51QnRuVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbWVudS1vcGVuLWFjdGl2ZScpO1xyXG4vLyAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19uYXYtYWN0aXZlJyk7XHJcblxyXG4vLyAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19uYXYtYWN0aXZlJykpXHJcbi8vICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4vLyAgIGVsc2UgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBudWxsO1xyXG4vLyB9KTtcclxuXHJcbi8vIGRvY3VtZW50XHJcbi8vICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJylcclxuLy8gICAuZm9yRWFjaCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KSk7XHJcblxyXG4vLyAvLyBTdWJtaXQgZm9ybSBjb250YWN0c1xyXG4vLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFjdCcpO1xyXG5cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBjb25zdCBkYXRhID0gZGF0YUZvcm0oZm9ybSk7XHJcblxyXG4vLyAgIGlmIChkYXRhKSB7XHJcbi8vICAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgc3VjY2Vzc01lc3NhZ2UuaWQgPSAnc3VjY2Vzcyc7XHJcbi8vICAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc05hbWUgPSAnc3VjY2Vzc19fbWVzc2FnZSc7XHJcbi8vICAgICBzdWNjZXNzTWVzc2FnZS5yb2xlID0gJ2FsZXJ0JztcclxuLy8gICAgIHN1Y2Nlc3NNZXNzYWdlLnRleHRDb250ZW50ID1cclxuLy8gICAgICAgJ9CU0LDQvdC90YvQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3RiyEg0JIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8g0LzRiyDRgdCy0Y/QttC10LzRgdGPINGBINCy0LDQvNC4ISc7XHJcblxyXG4vLyAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWNjZXNzTWVzc2FnZSk7XHJcblxyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgIHN1Y2Nlc3NNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3NfX21lc3NhZ2UtYWN0aXZlJyk7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3NfX21lc3NhZ2UtYWN0aXZlJyk7XHJcbi8vICAgICAgIH0sIDUwMDAgLSAzMDUpO1xyXG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICBzdWNjZXNzTWVzc2FnZS5yZW1vdmUoKTtcclxuLy8gICAgICAgfSwgNTAwMCk7XHJcbi8vICAgICB9LCAxMCk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuIl0sImZpbGUiOiJmb3JtLmpzIn0=
