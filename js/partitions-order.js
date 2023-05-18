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

const swiperPartitions = new Swiper('.partitions__slider', {
  loop: true,
  navigation: {
    nextEl: '.partitions__slider-btn-next',
    prevEl: '.partitions__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
});

// Range Slider
const sliderHeight = document.getElementById('slider-height');
const sliderValueHeightMin = document.getElementById(
  'opening-height-value-min'
);
const sliderValueHeightMax = document.getElementById(
  'opening-height-value-max'
);
const sliderWidth = document.getElementById('slider-width');
const sliderValueWidthMin = document.getElementById('opening-width-value-min');
const sliderValueWidthMax = document.getElementById('opening-width-value-max');

const options = {
  start: 140,
  connect: [true, false],
  tooltips: {
    to: function (numericValue) {
      return numericValue.toFixed(0);
    },
  },
  step: 10,
  range: {
    min: 80,
    max: 400,
  },
};

noUiSlider.create(sliderHeight, options);
noUiSlider.create(sliderWidth, options);

const heightRange = sliderHeight.noUiSlider.options.range;
sliderValueHeightMin.textContent = heightRange.min;
sliderValueHeightMax.textContent = heightRange.max;

const widthRange = sliderWidth.noUiSlider.options.range;
sliderValueWidthMin.textContent = widthRange.min;
sliderValueWidthMax.textContent = widthRange.max;

sliderHeight.noUiSlider.on('update', function (values, handle) {
  document.getElementById('opening-height').value = Math.round(values[handle]);
});
sliderWidth.noUiSlider.on('update', function (values, handle) {
  document.getElementById('opening-width').value = Math.round(values[handle]);
});

// Popup
const popup = document.getElementById('popup');
const popupBox = document.getElementById('popup-box');
const popupClose = document.getElementById('popup-close');

['common-form', 'search-form', 'services-form', 'contacts-form', 'about-form']
  .map((id) => document.getElementById(id))
  .filter((el) => el)
  .forEach((el) =>
    el.addEventListener('submit', (e) => {
      e.preventDefault();
      popup.classList.add('active');
    })
  );

popupClose.addEventListener('click', () => popup.classList.remove('active'));
document.body.addEventListener('click', (e) => {
  if (popup.classList.contains('active') && !popupBox.contains(e.target))
    popup.classList.remove('active');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aXRpb25zLW9yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBUb2dnbGUgbWVudVxyXG5pZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItYmFubmVyJykpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jbG9zZScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKTtcclxuXHJcbiAgb3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBsaW5rcy5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcclxuICApO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgIClcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgc3dpcGVyUGFydGl0aW9ucyA9IG5ldyBTd2lwZXIoJy5wYXJ0aXRpb25zX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcucGFydGl0aW9uc19fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5wYXJ0aXRpb25zX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDMwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxufSk7XHJcblxyXG4vLyBSYW5nZSBTbGlkZXJcclxuY29uc3Qgc2xpZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci1oZWlnaHQnKTtcclxuY29uc3Qgc2xpZGVyVmFsdWVIZWlnaHRNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAnb3BlbmluZy1oZWlnaHQtdmFsdWUtbWluJ1xyXG4pO1xyXG5jb25zdCBzbGlkZXJWYWx1ZUhlaWdodE1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICdvcGVuaW5nLWhlaWdodC12YWx1ZS1tYXgnXHJcbik7XHJcbmNvbnN0IHNsaWRlcldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci13aWR0aCcpO1xyXG5jb25zdCBzbGlkZXJWYWx1ZVdpZHRoTWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5pbmctd2lkdGgtdmFsdWUtbWluJyk7XHJcbmNvbnN0IHNsaWRlclZhbHVlV2lkdGhNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbmluZy13aWR0aC12YWx1ZS1tYXgnKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgc3RhcnQ6IDE0MCxcclxuICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gIHRvb2x0aXBzOiB7XHJcbiAgICB0bzogZnVuY3Rpb24gKG51bWVyaWNWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVtZXJpY1ZhbHVlLnRvRml4ZWQoMCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3RlcDogMTAsXHJcbiAgcmFuZ2U6IHtcclxuICAgIG1pbjogODAsXHJcbiAgICBtYXg6IDQwMCxcclxuICB9LFxyXG59O1xyXG5cclxubm9VaVNsaWRlci5jcmVhdGUoc2xpZGVySGVpZ2h0LCBvcHRpb25zKTtcclxubm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyV2lkdGgsIG9wdGlvbnMpO1xyXG5cclxuY29uc3QgaGVpZ2h0UmFuZ2UgPSBzbGlkZXJIZWlnaHQubm9VaVNsaWRlci5vcHRpb25zLnJhbmdlO1xyXG5zbGlkZXJWYWx1ZUhlaWdodE1pbi50ZXh0Q29udGVudCA9IGhlaWdodFJhbmdlLm1pbjtcclxuc2xpZGVyVmFsdWVIZWlnaHRNYXgudGV4dENvbnRlbnQgPSBoZWlnaHRSYW5nZS5tYXg7XHJcblxyXG5jb25zdCB3aWR0aFJhbmdlID0gc2xpZGVyV2lkdGgubm9VaVNsaWRlci5vcHRpb25zLnJhbmdlO1xyXG5zbGlkZXJWYWx1ZVdpZHRoTWluLnRleHRDb250ZW50ID0gd2lkdGhSYW5nZS5taW47XHJcbnNsaWRlclZhbHVlV2lkdGhNYXgudGV4dENvbnRlbnQgPSB3aWR0aFJhbmdlLm1heDtcclxuXHJcbnNsaWRlckhlaWdodC5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbmluZy1oZWlnaHQnKS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG59KTtcclxuc2xpZGVyV2lkdGgubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5pbmctd2lkdGgnKS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG59KTtcclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5bJ2NvbW1vbi1mb3JtJywgJ3NlYXJjaC1mb3JtJywgJ3NlcnZpY2VzLWZvcm0nLCAnY29udGFjdHMtZm9ybScsICdhYm91dC1mb3JtJ11cclxuICAubWFwKChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxyXG4gIC5maWx0ZXIoKGVsKSA9PiBlbClcclxuICAuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIXBvcHVwQm94LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuIl0sImZpbGUiOiJwYXJ0aXRpb25zLW9yZGVyLmpzIn0=
