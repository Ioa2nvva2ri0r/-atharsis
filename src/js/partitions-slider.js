/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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
