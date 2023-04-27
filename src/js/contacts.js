/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiperContacts = new Swiper('.contacts-slider__slider', {
  loop: true,
  navigation: {
    nextEl: '.contacts-slider__btn-next',
    prevEl: '.contacts-slider__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  speed: 1000,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 29,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 29,
    },
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});
