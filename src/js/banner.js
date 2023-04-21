/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const swiperBanner = new Swiper('.banner__slider', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.banner__slider-btn-next',
    prevEl: '.banner__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  pagination: {
    el: '.banner__slider-pagination',
    type: 'fraction',
  },
});
