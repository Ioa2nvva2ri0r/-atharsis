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
