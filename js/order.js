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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuZnVuY3Rpb24gYWRkRXJyb3IoaW5wdXQsIG1lc3NhZ2UsIG1zKSB7XHJcbiAgY29uc3QgdG9nZ2xlQ3NzQ2xhc3MgPSAoZWwsIGNzc0NsYXNzKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGNzc0NsYXNzKTtcclxuXHJcbiAgdG9nZ2xlQ3NzQ2xhc3MoaW5wdXQsICdlcnJvci12YWxpZF9faW5wdXQnKTtcclxuICBpbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAnYWZ0ZXJlbmQnLFxyXG4gICAgYDxkaXYgaWQ9XCJlcnJvci12YWxpZFwiIGNsYXNzPVwiZXJyb3ItdmFsaWRfX21lc3NhZ2VcIiByb2xlPVwiYWxlcnRcIj4ke21lc3NhZ2V9PGRpdi8+YFxyXG4gICk7XHJcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItdmFsaWQnKTtcclxuXHJcbiAgaWYgKGVycm9yICE9PSBudWxsKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IucGFyZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgIHRvZ2dsZUNzc0NsYXNzKGVycm9yLCAnZXJyb3ItdmFsaWRfX21lc3NhZ2UtYWN0aXZlJyk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlcnJvci5wYXJlbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICB0b2dnbGVDc3NDbGFzcyhlcnJvciwgJ2Vycm9yLXZhbGlkX19tZXNzYWdlLWFjdGl2ZScpO1xyXG4gICAgICB9LCBtcyAtIDMwNSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVycm9yLnJlbW92ZSgpO1xyXG4gICAgICB9LCBtcyk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItdmFsaWRfX2lucHV0JylcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdFeHAodHlwZSwgdmFsdWUsIGV4Y2VwdGlvbiA9ICcnKSB7XHJcbiAgY29uc3QgbmV3UmVnRXhwID0gKHZhbCwgZmxhZ3MpID0+IG5ldyBSZWdFeHAoYFteJHt2YWx9JHtleGNlcHRpb259XWAsIGZsYWdzKTtcclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgIHJldHVybiAhL14oW2EtejAtOV8tXStcXC4pKlthLXowLTlfLV0rQFthLXowLTlfLV0rKFxcLlthLXowLTlfLV0rKSpcXC5bYS16XXsyLDZ9JC8udGVzdChcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICApO1xyXG4gICAgY2FzZSAndGVsJzpcclxuICAgICAgcmV0dXJuICEvXlxcK1xcZHsxLDN9XFwoXFxkezIsM31cXClcXGR7MiwzfS1cXGR7Mn0tXFxkezJ9JC8udGVzdCh2YWx1ZSk7XHJcbiAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICByZXR1cm4gbmV3UmVnRXhwKCcwLTknKS50ZXN0KHZhbHVlKTtcclxuICAgIGNhc2UgJ3J1JzpcclxuICAgICAgcmV0dXJuIG5ld1JlZ0V4cCgn0LAt0Y/RkScsICdnaScpLnRlc3QodmFsdWUpO1xyXG4gICAgY2FzZSAnZW4nOlxyXG4gICAgICByZXR1cm4gbmV3UmVnRXhwKCdhLXonLCAnZ2knKS50ZXN0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1biwgbXMpIHtcclxuICBsZXQgaXNDb29sZG93biA9IGZhbHNlO1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaXNDb29sZG93bikgcmV0dXJuO1xyXG4gICAgaXNDb29sZG93biA9IHRydWU7XHJcbiAgICBmdW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKGlzQ29vbGRvd24gPSBmYWxzZSksIG1zKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBhbmltYXRpb25NZXNzYWdlID0gZGVib3VuY2UoYWRkRXJyb3IsIDUwMDApO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tFcnJvcihpbnB1dCkge1xyXG4gIC8vIFByb3BzIGlucHV0XHJcbiAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgY2hlY2tlZCwgcmVxdWlyZWQsIGxhbmcsIG1heExlbmd0aCwgbWluTGVuZ3RoIH0gPSBpbnB1dDtcclxuICBjb25zdCBfbWF4ID0gbWF4TGVuZ3RoO1xyXG4gIGNvbnN0IF9taW4gPSBtaW5MZW5ndGg7XHJcbiAgY29uc3QgX3ZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gIGNvbnN0IF9sZW5ndGggPSBfdmFsdWUubGVuZ3RoO1xyXG4gIGNvbnN0IF90eXBlID0gKHZhbCkgPT4gdHlwZSA9PT0gdmFsO1xyXG4gIGNvbnN0IHRlc3RWYWx1ZSA9IF92YWx1ZSAhPT0gJycgfHwgcmVxdWlyZWQ7XHJcblxyXG4gIGZ1bmN0aW9uIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihjb25kaXRpb24pIHtcclxuICAgIGlmIChjb25kaXRpb24pIHtcclxuICAgICAgYW5pbWF0aW9uTWVzc2FnZShpbnB1dCwgJ9CU0LDQvdC90YvQtSDQstCy0LXQtNC10L3RiyDQvdC10LrQvtGA0YDQtdC60YLQvdC+JywgNTAwMCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIGVycm9y0KFoZWNraW5n0KFvbmRpdGlvbihfbGVuZ3RoIDwgMSAmJiByZXF1aXJlZCksXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oXHJcbiAgICAgIChfbWluICE9PSAtMSB8fCBfbWF4ICE9PSAtMSkgJiZcclxuICAgICAgICBfbGVuZ3RoID49IDEgJiZcclxuICAgICAgICAoX2xlbmd0aCA8IF9taW4gfHwgX2xlbmd0aCA+IF9tYXgpXHJcbiAgICApLFxyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKGxhbmcgIT09ICcnICYmIHJlZ0V4cChsYW5nLCBfdmFsdWUsIF9leGNlcCkpLFxyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4gICAgICAoX3R5cGUoJ3JhZGlvJykgfHwgX3R5cGUoJ2NoZWNrYm94JykpICYmICFjaGVja2VkICYmIHJlcXVpcmVkXHJcbiAgICApLFxyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKFxyXG4gICAgICBfdHlwZSgnbnVtYmVyJykgJiYgcmVnRXhwKHR5cGUsIF92YWx1ZSkgJiYgdGVzdFZhbHVlXHJcbiAgICApLFxyXG4gICAgZXJyb3LQoWhlY2tpbmfQoW9uZGl0aW9uKF90eXBlKCdlbWFpbCcpICYmIHJlZ0V4cCh0eXBlLCBfdmFsdWUpICYmIHRlc3RWYWx1ZSksXHJcbiAgICBlcnJvctChaGVja2luZ9Chb25kaXRpb24oX3R5cGUoJ3RlbCcpICYmIHJlZ0V4cCh0eXBlLCBfdmFsdWUpICYmIHRlc3RWYWx1ZSksXHJcbiAgXS5pbmNsdWRlcyh0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0YUZvcm0oZm9ybSkge1xyXG4gIGlmIChmb3JtLmNvbnN0cnVjdG9yID09PSBIVE1MRm9ybUVsZW1lbnQpIHtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICBmb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShcclxuICAgICAgbmV3IFNldChcclxuICAgICAgICBPYmplY3QudmFsdWVzKGZvcm0uZWxlbWVudHMpLmZpbHRlcigoZWwpID0+XHJcbiAgICAgICAgICBbJ0lOUFVUJywgJ1RFWFRBUkVBJywgJ1NFTEVDVCddLmluY2x1ZGVzKGVsLm5vZGVOYW1lKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIGVsZW1dIG9mIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRzKSkge1xyXG4gICAgICBjb25zdCB7IHR5cGUsIG5hbWUsIHZhbHVlLCBjaGVja2VkIH0gPSBlbGVtO1xyXG4gICAgICBjb25zdCBjaGVja1R5cGUgPSB0eXBlID09PSAnY2hlY2tib3gnO1xyXG4gICAgICBjb25zdCByYWRpb1R5cGUgPSB0eXBlID09PSAncmFkaW8nO1xyXG5cclxuICAgICAgaWYgKGNoZWNrRXJyb3IoZWxlbSkgPT09IHRydWUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrVHlwZSAmJiBjaGVja2VkKSBkYXRhW25hbWVdID0gY2hlY2tlZDtcclxuICAgICAgICBpZiAocmFkaW9UeXBlICYmIGNoZWNrZWQpIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICBpZiAoIWNoZWNrVHlwZSAmJiAhcmFkaW9UeXBlICYmIHZhbHVlICE9PSAnJykgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTnVtYmVyKGluZGV4KSA9PT0gZWxlbWVudHMubGVuZ3RoIC0gMSlcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgX2NoZWNrVHlwZSA9IGVsLnR5cGUgPT09ICdjaGVja2JveCc7XHJcbiAgICAgICAgICBjb25zdCBfcmFkaW9UeXBlID0gZWwudHlwZSA9PT0gJ3JhZGlvJztcclxuXHJcbiAgICAgICAgICBpZiAoX2NoZWNrVHlwZSB8fCBfcmFkaW9UeXBlKSBlbC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoIV9jaGVja1R5cGUgJiYgIV9yYWRpb1R5cGUpIGVsLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignUGFzc2VkIHBhcmFtZXRlciBpcyBub3QgYSBIVE1MLWZvcm0hJyk7XHJcbn1cclxuXHJcbi8vIFN1Ym1pdCBmb3JtXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXItZm9ybScpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBkYXRhRm9ybShmb3JtKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG4vLyBDdXN0b20gc2VsZWN0XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1ib3gnKTtcclxuY29uc3Qgc2VsZWN0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXZhbHVlJyk7XHJcbmNvbnN0IHNlbGVjdERyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1kcm9wZG93bicpO1xyXG5cclxuc2VsZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNlbGVjdERyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59KTtcclxuc2VsZWN0RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIEFycmF5LmZyb20oc2VsZWN0RHJvcGRvd24uY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICApO1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIEFycmF5LmZyb20oc2VsZWN0LmNoaWxkcmVuKS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09PSBvcHRpb24udmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICBzZWxlY3RWYWx1ZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJmaWxlIjoib3JkZXIuanMifQ==
