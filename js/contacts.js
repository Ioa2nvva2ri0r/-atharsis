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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuY29uc3Qgc3dpcGVyQ29udGFjdHMgPSBuZXcgU3dpcGVyKCcuY29udGFjdHMtc2xpZGVyX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY29udGFjdHMtc2xpZGVyX19idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY29udGFjdHMtc2xpZGVyX19idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJmaWxlIjoiY29udGFjdHMuanMifQ==
