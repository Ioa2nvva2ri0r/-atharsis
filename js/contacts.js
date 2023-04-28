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

const tabContacts = document.querySelectorAll('[data-tab]');
const tabItemContacts = document.querySelectorAll('[data-itemtab]');

tabContacts.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const thisEl = e.currentTarget;

    [...tabContacts, ...tabItemContacts].forEach((el) =>
      el.classList.remove('active')
    );

    [
      thisEl,
      document.querySelector(`[data-itemtab='${thisEl.dataset.tab}']`),
    ].forEach((el) => el.classList.toggle('active'));
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuY29uc3Qgc3dpcGVyQ29udGFjdHMgPSBuZXcgU3dpcGVyKCcuY29udGFjdHMtc2xpZGVyX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY29udGFjdHMtc2xpZGVyX19idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY29udGFjdHMtc2xpZGVyX19idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCB0YWJDb250YWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYl0nKTtcclxuY29uc3QgdGFiSXRlbUNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaXRlbXRhYl0nKTtcclxuXHJcbnRhYkNvbnRhY3RzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgWy4uLnRhYkNvbnRhY3RzLCAuLi50YWJJdGVtQ29udGFjdHNdLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgKTtcclxuXHJcbiAgICBbXHJcbiAgICAgIHRoaXNFbCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaXRlbXRhYj0nJHt0aGlzRWwuZGF0YXNldC50YWJ9J11gKSxcclxuICAgIF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJmaWxlIjoiY29udGFjdHMuanMifQ==
