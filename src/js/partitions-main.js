/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiperPartitions = new Swiper('.partitions-portfolio__slider', {
  loop: true,
  navigation: {
    nextEl: '.partitions-portfolio__slider-btn-next',
    prevEl: '.partitions-portfolio__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  speed: 1000,
});
