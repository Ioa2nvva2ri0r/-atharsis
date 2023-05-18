/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Toggle menu
if (!document.getElementById('header-banner')) {
  const menu = document.getElementById('menu');
  const openMenu = document.getElementById('menu-open');
  const closeMenu = document.getElementById('menu-close');
  const links = document.querySelectorAll('.header__nav-link');

  openMenu.addEventListener('click', () => menu.classList.add('active'));
  closeMenu.addEventListener('click', () => menu.classList.remove('active'));
  links.forEach((el) =>
    el.addEventListener('click', () => menu.classList.remove('active'))
  );
  document.body.addEventListener('click', (e) => {
    if (
      !openMenu.contains(e.target) &&
      !menu.contains(e.target) &&
      menu.classList.contains('active')
    )
      menu.classList.remove('active');
  });
}

function addError(input, message, ms) {
  const toggleCssClass = (el, cssClass) => el.classList.toggle(cssClass);

  toggleCssClass(input, 'error-valid__input');
  input.insertAdjacentHTML(
    'afterend',
    `<div id="error-valid" class="error-valid__message" role="alert">${message}<div/>`
  );
  const error = document.getElementById('error-valid');

  if (error !== null) {
    setTimeout(() => {
      error.parentElement.style.position = 'relative';
      toggleCssClass(error, 'error-valid__message-active');

      setTimeout(() => {
        error.parentElement.style.position = null;
        toggleCssClass(error, 'error-valid__message-active');
      }, ms - 305);
      setTimeout(() => {
        error.remove();
      }, ms);
    }, 10);
  }
  input.addEventListener('input', (e) =>
    e.currentTarget.classList.remove('error-valid__input')
  );
}

function regExp(type, value, exception = '') {
  const newRegExp = (val, flags) => new RegExp(`[^${val}${exception}]`, flags);

  switch (type) {
    case 'email':
      return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        value
      );
    case 'tel':
      return !/^\+\d{1,3}\(\d{2,3}\)\d{2,3}-\d{2}-\d{2}$/.test(value);
    case 'number':
      return newRegExp('0-9').test(value);
    case 'ru':
      return newRegExp('а-яё', 'gi').test(value);
    case 'en':
      return newRegExp('a-z', 'gi').test(value);
  }
}

function debounce(fun, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    isCooldown = true;
    fun.apply(this, arguments);
    setTimeout(() => (isCooldown = false), ms);
  };
}

const animationMessage = debounce(addError, 5000);

function checkError(input) {
  // Props input
  const { type, value, checked, required, lang, maxLength, minLength } = input;
  const _max = maxLength;
  const _min = minLength;
  const _value = value.trim();
  const _length = _value.length;
  const _type = (val) => type === val;
  const testValue = _value !== '' || required;

  function errorСheckingСondition(condition) {
    if (condition) {
      animationMessage(input, 'Данные введены некорректно', 5000);
      return true;
    }
    return false;
  }

  return [
    errorСheckingСondition(_length < 1 && required),
    errorСheckingСondition(
      (_min !== -1 || _max !== -1) &&
        _length >= 1 &&
        (_length < _min || _length > _max)
    ),
    errorСheckingСondition(lang !== '' && regExp(lang, _value, _excep)),
    errorСheckingСondition(
      (_type('radio') || _type('checkbox')) && !checked && required
    ),
    errorСheckingСondition(
      _type('number') && regExp(type, _value) && testValue
    ),
    errorСheckingСondition(_type('email') && regExp(type, _value) && testValue),
    errorСheckingСondition(_type('tel') && regExp(type, _value) && testValue),
  ].includes(true);
}

function dataForm(form) {
  if (form.constructor === HTMLFormElement) {
    form.addEventListener('submit', (e) => e.preventDefault());
    form.noValidate = true;

    const elements = Array.from(
      new Set(
        Object.values(form.elements).filter((el) =>
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.nodeName)
        )
      )
    );

    if (elements.length === 0) return null;

    const data = {};

    for (const [index, elem] of Object.entries(elements)) {
      const { type, name, value, checked } = elem;
      const checkType = type === 'checkbox';
      const radioType = type === 'radio';

      if (checkError(elem) === true) return null;

      if (name !== '') {
        if (checkType && checked) data[name] = checked;
        if (radioType && checked) data[name] = value;
        if (!checkType && !radioType && value !== '') data[name] = value;
      }

      if (Number(index) === elements.length - 1)
        elements.forEach((el) => {
          const _checkType = el.type === 'checkbox';
          const _radioType = el.type === 'radio';

          if (_checkType || _radioType) el.checked = false;
          if (!_checkType && !_radioType) el.value = '';
        });
    }

    return data;
  } else throw new Error('Passed parameter is not a HTML-form!');
}

// Submit form
const form = document.getElementById('order-form');

document.getElementById('order-submit').addEventListener('click', () => {
  const data = dataForm(form);
  console.log(data);
});

// Custom select
const select = document.getElementById('select');
const selectContainer = document.getElementById('select-box');
const selectValue = document.getElementById('select-value');
const selectDropdown = document.getElementById('select-dropdown');

selectContainer.addEventListener('click', () => {
  selectDropdown.classList.toggle('active');
});
selectDropdown.addEventListener('click', (e) => {
  Array.from(selectDropdown.children).forEach((el) =>
    el.classList.remove('hidden')
  );
  e.target.classList.add('hidden');
  Array.from(select.children).forEach((option) => {
    if (e.target.textContent.toLowerCase() === option.value.toLowerCase()) {
      selectValue.children[0].textContent = option.value;
      option.selected = true;
    }
  });
});

document.body.addEventListener('click', (e) => {
  if (
    !selectContainer.contains(e.target) &&
    selectDropdown.classList.contains('active')
  )
    selectDropdown.classList.remove('active');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVycm9yKGlucHV0LCBtZXNzYWdlLCBtcykge1xyXG4gIGNvbnN0IHRvZ2dsZUNzc0NsYXNzID0gKGVsLCBjc3NDbGFzcykgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShjc3NDbGFzcyk7XHJcblxyXG4gIHRvZ2dsZUNzc0NsYXNzKGlucHV0LCAnZXJyb3ItdmFsaWRfX2lucHV0Jyk7XHJcbiAgaW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2FmdGVyZW5kJyxcclxuICAgIGA8ZGl2IGlkPVwiZXJyb3ItdmFsaWRcIiBjbGFzcz1cImVycm9yLXZhbGlkX19tZXNzYWdlXCIgcm9sZT1cImFsZXJ0XCI+JHttZXNzYWdlfTxkaXYvPmBcclxuICApO1xyXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLXZhbGlkJyk7XHJcblxyXG4gIGlmIChlcnJvciAhPT0gbnVsbCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVycm9yLnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICB0b2dnbGVDc3NDbGFzcyhlcnJvciwgJ2Vycm9yLXZhbGlkX19tZXNzYWdlLWFjdGl2ZScpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZXJyb3IucGFyZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdG9nZ2xlQ3NzQ2xhc3MoZXJyb3IsICdlcnJvci12YWxpZF9fbWVzc2FnZS1hY3RpdmUnKTtcclxuICAgICAgfSwgbXMgLSAzMDUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlcnJvci5yZW1vdmUoKTtcclxuICAgICAgfSwgbXMpO1xyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PlxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLXZhbGlkX19pbnB1dCcpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnRXhwKHR5cGUsIHZhbHVlLCBleGNlcHRpb24gPSAnJykge1xyXG4gIGNvbnN0IG5ld1JlZ0V4cCA9ICh2YWwsIGZsYWdzKSA9PiBuZXcgUmVnRXhwKGBbXiR7dmFsfSR7ZXhjZXB0aW9ufV1gLCBmbGFncyk7XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICByZXR1cm4gIS9eKFthLXowLTlfLV0rXFwuKSpbYS16MC05Xy1dK0BbYS16MC05Xy1dKyhcXC5bYS16MC05Xy1dKykqXFwuW2Etel17Miw2fSQvLnRlc3QoXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgKTtcclxuICAgIGNhc2UgJ3RlbCc6XHJcbiAgICAgIHJldHVybiAhL15cXCtcXGR7MSwzfVxcKFxcZHsyLDN9XFwpXFxkezIsM30tXFxkezJ9LVxcZHsyfSQvLnRlc3QodmFsdWUpO1xyXG4gICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgcmV0dXJuIG5ld1JlZ0V4cCgnMC05JykudGVzdCh2YWx1ZSk7XHJcbiAgICBjYXNlICdydSc6XHJcbiAgICAgIHJldHVybiBuZXdSZWdFeHAoJ9CwLdGP0ZEnLCAnZ2knKS50ZXN0KHZhbHVlKTtcclxuICAgIGNhc2UgJ2VuJzpcclxuICAgICAgcmV0dXJuIG5ld1JlZ0V4cCgnYS16JywgJ2dpJykudGVzdCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW4sIG1zKSB7XHJcbiAgbGV0IGlzQ29vbGRvd24gPSBmYWxzZTtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGlzQ29vbGRvd24pIHJldHVybjtcclxuICAgIGlzQ29vbGRvd24gPSB0cnVlO1xyXG4gICAgZnVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IChpc0Nvb2xkb3duID0gZmFsc2UpLCBtcyk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgYW5pbWF0aW9uTWVzc2FnZSA9IGRlYm91bmNlKGFkZEVycm9yLCA1MDAwKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrRXJyb3IoaW5wdXQpIHtcclxuICAvLyBQcm9wcyBpbnB1dFxyXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUsIGNoZWNrZWQsIHJlcXVpcmVkLCBsYW5nLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCB9ID0gaW5wdXQ7XHJcbiAgY29uc3QgX21heCA9IG1heExlbmd0aDtcclxuICBjb25zdCBfbWluID0gbWluTGVuZ3RoO1xyXG4gIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuICBjb25zdCBfbGVuZ3RoID0gX3ZhbHVlLmxlbmd0aDtcclxuICBjb25zdCBfdHlwZSA9ICh2YWwpID0+IHR5cGUgPT09IHZhbDtcclxuICBjb25zdCB0ZXN0VmFsdWUgPSBfdmFsdWUgIT09ICcnIHx8IHJlcXVpcmVkO1xyXG5cclxuICBmdW5jdGlvbiBlcnJvctChaGVja2luZ9Chb25kaXRpb24oY29uZGl0aW9uKSB7XHJcbiAgICBpZiAoY29uZGl0aW9uKSB7XHJcbiAgICAgIGFuaW1hdGlvbk1lc3NhZ2UoaW5wdXQsICfQlNCw0L3QvdGL0LUg0LLQstC10LTQtdC90Ysg0L3QtdC60L7RgNGA0LXQutGC0L3QvicsIDUwMDApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oX2xlbmd0aCA8IDEgJiYgcmVxdWlyZWQpLFxyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4gICAgICAoX21pbiAhPT0gLTEgfHwgX21heCAhPT0gLTEpICYmXHJcbiAgICAgICAgX2xlbmd0aCA+PSAxICYmXHJcbiAgICAgICAgKF9sZW5ndGggPCBfbWluIHx8IF9sZW5ndGggPiBfbWF4KVxyXG4gICAgKSxcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihsYW5nICE9PSAnJyAmJiByZWdFeHAobGFuZywgX3ZhbHVlLCBfZXhjZXApKSxcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuICAgICAgKF90eXBlKCdyYWRpbycpIHx8IF90eXBlKCdjaGVja2JveCcpKSAmJiAhY2hlY2tlZCAmJiByZXF1aXJlZFxyXG4gICAgKSxcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuICAgICAgX3R5cGUoJ251bWJlcicpICYmIHJlZ0V4cCh0eXBlLCBfdmFsdWUpICYmIHRlc3RWYWx1ZVxyXG4gICAgKSxcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihfdHlwZSgnZW1haWwnKSAmJiByZWdFeHAodHlwZSwgX3ZhbHVlKSAmJiB0ZXN0VmFsdWUpLFxyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKF90eXBlKCd0ZWwnKSAmJiByZWdFeHAodHlwZSwgX3ZhbHVlKSAmJiB0ZXN0VmFsdWUpLFxyXG4gIF0uaW5jbHVkZXModHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGFGb3JtKGZvcm0pIHtcclxuICBpZiAoZm9ybS5jb25zdHJ1Y3RvciA9PT0gSFRNTEZvcm1FbGVtZW50KSB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oXHJcbiAgICAgIG5ldyBTZXQoXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhmb3JtLmVsZW1lbnRzKS5maWx0ZXIoKGVsKSA9PlxyXG4gICAgICAgICAgWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXS5pbmNsdWRlcyhlbC5ub2RlTmFtZSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3QgW2luZGV4LCBlbGVtXSBvZiBPYmplY3QuZW50cmllcyhlbGVtZW50cykpIHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBuYW1lLCB2YWx1ZSwgY2hlY2tlZCB9ID0gZWxlbTtcclxuICAgICAgY29uc3QgY2hlY2tUeXBlID0gdHlwZSA9PT0gJ2NoZWNrYm94JztcclxuICAgICAgY29uc3QgcmFkaW9UeXBlID0gdHlwZSA9PT0gJ3JhZGlvJztcclxuXHJcbiAgICAgIGlmIChjaGVja0Vycm9yKGVsZW0pID09PSB0cnVlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgIGlmIChuYW1lICE9PSAnJykge1xyXG4gICAgICAgIGlmIChjaGVja1R5cGUgJiYgY2hlY2tlZCkgZGF0YVtuYW1lXSA9IGNoZWNrZWQ7XHJcbiAgICAgICAgaWYgKHJhZGlvVHlwZSAmJiBjaGVja2VkKSBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKCFjaGVja1R5cGUgJiYgIXJhZGlvVHlwZSAmJiB2YWx1ZSAhPT0gJycpIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE51bWJlcihpbmRleCkgPT09IGVsZW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgIGNvbnN0IF9jaGVja1R5cGUgPSBlbC50eXBlID09PSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgY29uc3QgX3JhZGlvVHlwZSA9IGVsLnR5cGUgPT09ICdyYWRpbyc7XHJcblxyXG4gICAgICAgICAgaWYgKF9jaGVja1R5cGUgfHwgX3JhZGlvVHlwZSkgZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKCFfY2hlY2tUeXBlICYmICFfcmFkaW9UeXBlKSBlbC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3NlZCBwYXJhbWV0ZXIgaXMgbm90IGEgSFRNTC1mb3JtIScpO1xyXG59XHJcblxyXG4vLyBTdWJtaXQgZm9ybVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyLWZvcm0nKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlci1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gZGF0YUZvcm0oZm9ybSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn0pO1xyXG5cclxuLy8gQ3VzdG9tIHNlbGVjdFxyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Jyk7XHJcbmNvbnN0IHNlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYm94Jyk7XHJcbmNvbnN0IHNlbGVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC12YWx1ZScpO1xyXG5jb25zdCBzZWxlY3REcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtZHJvcGRvd24nKTtcclxuXHJcbnNlbGVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzZWxlY3REcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufSk7XHJcbnNlbGVjdERyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBBcnJheS5mcm9tKHNlbGVjdERyb3Bkb3duLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgKTtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBBcnJheS5mcm9tKHNlbGVjdC5jaGlsZHJlbikuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uLnZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgc2VsZWN0VmFsdWUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIXNlbGVjdENvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgIHNlbGVjdERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICApXHJcbiAgICBzZWxlY3REcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbiJdLCJmaWxlIjoib3JkZXIuanMifQ==
