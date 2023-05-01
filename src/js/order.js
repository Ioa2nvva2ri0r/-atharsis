/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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
