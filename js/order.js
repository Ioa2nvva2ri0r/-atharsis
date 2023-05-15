/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Change Logo
function changeLogo() {
  const logo = document.getElementById('logo');

  if (window.screen.width <= 768) logo.src = `img/logo-min.svg`;
  else logo.src = `img/logo.svg`;
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBsb2dvLnNyYyA9IGBpbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYGltZy9sb2dvLnN2Z2A7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VMb2dvKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2VMb2dvKTtcclxuXHJcbi8vIFRvZ2dsZSBtZW51XHJcbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1iYW5uZXInKSkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4gIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNsb3NlJyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpO1xyXG5cclxuICBvcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIGxpbmtzLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICk7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFvcGVuTWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG4gICAgKVxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFcnJvcihpbnB1dCwgbWVzc2FnZSwgbXMpIHtcclxuICBjb25zdCB0b2dnbGVDc3NDbGFzcyA9IChlbCwgY3NzQ2xhc3MpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoY3NzQ2xhc3MpO1xyXG5cclxuICB0b2dnbGVDc3NDbGFzcyhpbnB1dCwgJ2Vycm9yLXZhbGlkX19pbnB1dCcpO1xyXG4gIGlucHV0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdhZnRlcmVuZCcsXHJcbiAgICBgPGRpdiBpZD1cImVycm9yLXZhbGlkXCIgY2xhc3M9XCJlcnJvci12YWxpZF9fbWVzc2FnZVwiIHJvbGU9XCJhbGVydFwiPiR7bWVzc2FnZX08ZGl2Lz5gXHJcbiAgKTtcclxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci12YWxpZCcpO1xyXG5cclxuICBpZiAoZXJyb3IgIT09IG51bGwpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlcnJvci5wYXJlbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgdG9nZ2xlQ3NzQ2xhc3MoZXJyb3IsICdlcnJvci12YWxpZF9fbWVzc2FnZS1hY3RpdmUnKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVycm9yLnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRvZ2dsZUNzc0NsYXNzKGVycm9yLCAnZXJyb3ItdmFsaWRfX21lc3NhZ2UtYWN0aXZlJyk7XHJcbiAgICAgIH0sIG1zIC0gMzA1KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZXJyb3IucmVtb3ZlKCk7XHJcbiAgICAgIH0sIG1zKTtcclxuICAgIH0sIDEwKTtcclxuICB9XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT5cclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci12YWxpZF9faW5wdXQnKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ0V4cCh0eXBlLCB2YWx1ZSwgZXhjZXB0aW9uID0gJycpIHtcclxuICBjb25zdCBuZXdSZWdFeHAgPSAodmFsLCBmbGFncykgPT4gbmV3IFJlZ0V4cChgW14ke3ZhbH0ke2V4Y2VwdGlvbn1dYCwgZmxhZ3MpO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgcmV0dXJuICEvXihbYS16MC05Xy1dK1xcLikqW2EtejAtOV8tXStAW2EtejAtOV8tXSsoXFwuW2EtejAtOV8tXSspKlxcLlthLXpdezIsNn0kLy50ZXN0KFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgICk7XHJcbiAgICBjYXNlICd0ZWwnOlxyXG4gICAgICByZXR1cm4gIS9eXFwrXFxkezEsM31cXChcXGR7MiwzfVxcKVxcZHsyLDN9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHZhbHVlKTtcclxuICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgIHJldHVybiBuZXdSZWdFeHAoJzAtOScpLnRlc3QodmFsdWUpO1xyXG4gICAgY2FzZSAncnUnOlxyXG4gICAgICByZXR1cm4gbmV3UmVnRXhwKCfQsC3Rj9GRJywgJ2dpJykudGVzdCh2YWx1ZSk7XHJcbiAgICBjYXNlICdlbic6XHJcbiAgICAgIHJldHVybiBuZXdSZWdFeHAoJ2EteicsICdnaScpLnRlc3QodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVib3VuY2UoZnVuLCBtcykge1xyXG4gIGxldCBpc0Nvb2xkb3duID0gZmFsc2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpc0Nvb2xkb3duKSByZXR1cm47XHJcbiAgICBpc0Nvb2xkb3duID0gdHJ1ZTtcclxuICAgIGZ1bi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiAoaXNDb29sZG93biA9IGZhbHNlKSwgbXMpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGFuaW1hdGlvbk1lc3NhZ2UgPSBkZWJvdW5jZShhZGRFcnJvciwgNTAwMCk7XHJcblxyXG5mdW5jdGlvbiBjaGVja0Vycm9yKGlucHV0KSB7XHJcbiAgLy8gUHJvcHMgaW5wdXRcclxuICBjb25zdCB7IHR5cGUsIHZhbHVlLCBjaGVja2VkLCByZXF1aXJlZCwgbGFuZywgbWF4TGVuZ3RoLCBtaW5MZW5ndGggfSA9IGlucHV0O1xyXG4gIGNvbnN0IF9tYXggPSBtYXhMZW5ndGg7XHJcbiAgY29uc3QgX21pbiA9IG1pbkxlbmd0aDtcclxuICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgY29uc3QgX2xlbmd0aCA9IF92YWx1ZS5sZW5ndGg7XHJcbiAgY29uc3QgX3R5cGUgPSAodmFsKSA9PiB0eXBlID09PSB2YWw7XHJcbiAgY29uc3QgdGVzdFZhbHVlID0gX3ZhbHVlICE9PSAnJyB8fCByZXF1aXJlZDtcclxuXHJcbiAgZnVuY3Rpb24gZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgICBhbmltYXRpb25NZXNzYWdlKGlucHV0LCAn0JTQsNC90L3Ri9C1INCy0LLQtdC00LXQvdGLINC90LXQutC+0YDRgNC10LrRgtC90L4nLCA1MDAwKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW1xyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKF9sZW5ndGggPCAxICYmIHJlcXVpcmVkKSxcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihcclxuICAgICAgKF9taW4gIT09IC0xIHx8IF9tYXggIT09IC0xKSAmJlxyXG4gICAgICAgIF9sZW5ndGggPj0gMSAmJlxyXG4gICAgICAgIChfbGVuZ3RoIDwgX21pbiB8fCBfbGVuZ3RoID4gX21heClcclxuICAgICksXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24obGFuZyAhPT0gJycgJiYgcmVnRXhwKGxhbmcsIF92YWx1ZSwgX2V4Y2VwKSksXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbiAgICAgIChfdHlwZSgncmFkaW8nKSB8fCBfdHlwZSgnY2hlY2tib3gnKSkgJiYgIWNoZWNrZWQgJiYgcmVxdWlyZWRcclxuICAgICksXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbiAgICAgIF90eXBlKCdudW1iZXInKSAmJiByZWdFeHAodHlwZSwgX3ZhbHVlKSAmJiB0ZXN0VmFsdWVcclxuICAgICksXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oX3R5cGUoJ2VtYWlsJykgJiYgcmVnRXhwKHR5cGUsIF92YWx1ZSkgJiYgdGVzdFZhbHVlKSxcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihfdHlwZSgndGVsJykgJiYgcmVnRXhwKHR5cGUsIF92YWx1ZSkgJiYgdGVzdFZhbHVlKSxcclxuICBdLmluY2x1ZGVzKHRydWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRhRm9ybShmb3JtKSB7XHJcbiAgaWYgKGZvcm0uY29uc3RydWN0b3IgPT09IEhUTUxGb3JtRWxlbWVudCkge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIGZvcm0ubm9WYWxpZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKFxyXG4gICAgICBuZXcgU2V0KFxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZm9ybS5lbGVtZW50cykuZmlsdGVyKChlbCkgPT5cclxuICAgICAgICAgIFsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ10uaW5jbHVkZXMoZWwubm9kZU5hbWUpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgZWxlbV0gb2YgT2JqZWN0LmVudHJpZXMoZWxlbWVudHMpKSB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgbmFtZSwgdmFsdWUsIGNoZWNrZWQgfSA9IGVsZW07XHJcbiAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHR5cGUgPT09ICdjaGVja2JveCc7XHJcbiAgICAgIGNvbnN0IHJhZGlvVHlwZSA9IHR5cGUgPT09ICdyYWRpbyc7XHJcblxyXG4gICAgICBpZiAoY2hlY2tFcnJvcihlbGVtKSA9PT0gdHJ1ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gJycpIHtcclxuICAgICAgICBpZiAoY2hlY2tUeXBlICYmIGNoZWNrZWQpIGRhdGFbbmFtZV0gPSBjaGVja2VkO1xyXG4gICAgICAgIGlmIChyYWRpb1R5cGUgJiYgY2hlY2tlZCkgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICghY2hlY2tUeXBlICYmICFyYWRpb1R5cGUgJiYgdmFsdWUgIT09ICcnKSBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChOdW1iZXIoaW5kZXgpID09PSBlbGVtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBfY2hlY2tUeXBlID0gZWwudHlwZSA9PT0gJ2NoZWNrYm94JztcclxuICAgICAgICAgIGNvbnN0IF9yYWRpb1R5cGUgPSBlbC50eXBlID09PSAncmFkaW8nO1xyXG5cclxuICAgICAgICAgIGlmIChfY2hlY2tUeXBlIHx8IF9yYWRpb1R5cGUpIGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICghX2NoZWNrVHlwZSAmJiAhX3JhZGlvVHlwZSkgZWwudmFsdWUgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdQYXNzZWQgcGFyYW1ldGVyIGlzIG5vdCBhIEhUTUwtZm9ybSEnKTtcclxufVxyXG5cclxuLy8gU3VibWl0IGZvcm1cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlci1mb3JtJyk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXItc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGRhdGFGb3JtKGZvcm0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59KTtcclxuXHJcbi8vIEN1c3RvbSBzZWxlY3RcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdCcpO1xyXG5jb25zdCBzZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWJveCcpO1xyXG5jb25zdCBzZWxlY3RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtdmFsdWUnKTtcclxuY29uc3Qgc2VsZWN0RHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWRyb3Bkb3duJyk7XHJcblxyXG5zZWxlY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc2VsZWN0RHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5zZWxlY3REcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgQXJyYXkuZnJvbShzZWxlY3REcm9wZG93bi5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICk7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgQXJyYXkuZnJvbShzZWxlY3QuY2hpbGRyZW4pLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT09IG9wdGlvbi52YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHNlbGVjdFZhbHVlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgICFzZWxlY3RDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICBzZWxlY3REcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgKVxyXG4gICAgc2VsZWN0RHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Im9yZGVyLmpzIn0=
