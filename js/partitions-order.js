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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aXRpb25zLW9yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBDaGFuZ2UgTG9nb1xyXG5mdW5jdGlvbiBjaGFuZ2VMb2dvKCkge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG5cclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGxvZ28uc3JjID0gYGltZy9sb2dvLW1pbi5zdmdgO1xyXG4gIGVsc2UgbG9nby5zcmMgPSBgaW1nL2xvZ28uc3ZnYDtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUxvZ28pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZUxvZ28pO1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHN3aXBlclBhcnRpdGlvbnMgPSBuZXcgU3dpcGVyKCcucGFydGl0aW9uc19fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnBhcnRpdGlvbnNfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcucGFydGl0aW9uc19fc2xpZGVyLWJ0bi1wcmV2JyxcclxuICB9LFxyXG4gIGExMXk6IHtcclxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQktC/0LXRgNGR0LQnLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiAzMDAwLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbn0pO1xyXG5cclxuLy8gUmFuZ2UgU2xpZGVyXHJcbmNvbnN0IHNsaWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItaGVpZ2h0Jyk7XHJcbmNvbnN0IHNsaWRlclZhbHVlSGVpZ2h0TWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgJ29wZW5pbmctaGVpZ2h0LXZhbHVlLW1pbidcclxuKTtcclxuY29uc3Qgc2xpZGVyVmFsdWVIZWlnaHRNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAnb3BlbmluZy1oZWlnaHQtdmFsdWUtbWF4J1xyXG4pO1xyXG5jb25zdCBzbGlkZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItd2lkdGgnKTtcclxuY29uc3Qgc2xpZGVyVmFsdWVXaWR0aE1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuaW5nLXdpZHRoLXZhbHVlLW1pbicpO1xyXG5jb25zdCBzbGlkZXJWYWx1ZVdpZHRoTWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5pbmctd2lkdGgtdmFsdWUtbWF4Jyk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHN0YXJ0OiAxNDAsXHJcbiAgY29ubmVjdDogW3RydWUsIGZhbHNlXSxcclxuICB0b29sdGlwczoge1xyXG4gICAgdG86IGZ1bmN0aW9uIChudW1lcmljVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG51bWVyaWNWYWx1ZS50b0ZpeGVkKDApO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHN0ZXA6IDEwLFxyXG4gIHJhbmdlOiB7XHJcbiAgICBtaW46IDgwLFxyXG4gICAgbWF4OiA0MDAsXHJcbiAgfSxcclxufTtcclxuXHJcbm5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlckhlaWdodCwgb3B0aW9ucyk7XHJcbm5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlcldpZHRoLCBvcHRpb25zKTtcclxuXHJcbmNvbnN0IGhlaWdodFJhbmdlID0gc2xpZGVySGVpZ2h0Lm5vVWlTbGlkZXIub3B0aW9ucy5yYW5nZTtcclxuc2xpZGVyVmFsdWVIZWlnaHRNaW4udGV4dENvbnRlbnQgPSBoZWlnaHRSYW5nZS5taW47XHJcbnNsaWRlclZhbHVlSGVpZ2h0TWF4LnRleHRDb250ZW50ID0gaGVpZ2h0UmFuZ2UubWF4O1xyXG5cclxuY29uc3Qgd2lkdGhSYW5nZSA9IHNsaWRlcldpZHRoLm5vVWlTbGlkZXIub3B0aW9ucy5yYW5nZTtcclxuc2xpZGVyVmFsdWVXaWR0aE1pbi50ZXh0Q29udGVudCA9IHdpZHRoUmFuZ2UubWluO1xyXG5zbGlkZXJWYWx1ZVdpZHRoTWF4LnRleHRDb250ZW50ID0gd2lkdGhSYW5nZS5tYXg7XHJcblxyXG5zbGlkZXJIZWlnaHQubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5pbmctaGVpZ2h0JykudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcclxufSk7XHJcbnNsaWRlcldpZHRoLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuaW5nLXdpZHRoJykudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcclxufSk7XHJcblxyXG4vLyBQb3B1cFxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xyXG5jb25zdCBwb3B1cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1ib3gnKTtcclxuY29uc3QgcG9wdXBDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jbG9zZScpO1xyXG5cclxuWydjb21tb24tZm9ybScsICdzZWFyY2gtZm9ybScsICdzZXJ2aWNlcy1mb3JtJywgJ2NvbnRhY3RzLWZvcm0nLCAnYWJvdXQtZm9ybSddXHJcbiAgLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSlcclxuICAuZmlsdGVyKChlbCkgPT4gZWwpXHJcbiAgLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbnBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFwb3B1cEJveC5jb250YWlucyhlLnRhcmdldCkpXHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbiJdLCJmaWxlIjoicGFydGl0aW9ucy1vcmRlci5qcyJ9
