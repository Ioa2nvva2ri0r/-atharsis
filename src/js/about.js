/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const imageDesc = document.querySelectorAll('.about__img');
const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting)
        imageDesc.forEach((el) => el.classList.add('active'));
      else imageDesc.forEach((el) => el.classList.remove('active'));
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(...imageDesc);

const swiperReviews = new Swiper('.about-reviews__slider', {
  loop: true,
  navigation: {
    nextEl: '.about-reviews__btn-next',
    prevEl: '.about-reviews__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  scrollbar: {
    el: '.about-reviews__scrollbar',
    draggable: true,
  },
  speed: 1000,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 29,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

const reviewTextarea = document.getElementById('review');

window.addEventListener('load', () => {
  if (reviewTextarea.scrollHeight <= 120)
    reviewTextarea.classList.remove('active-scroll');
  else reviewTextarea.classList.add('active-scroll');
});
reviewTextarea.addEventListener('click', (e) =>
  e.currentTarget.classList.add('active-height')
);
reviewTextarea.addEventListener('blur', (e) => {
  const thisEl = e.currentTarget;

  if (thisEl.value === '') e.currentTarget.classList.remove('active-height');
  if (thisEl.scrollHeight <= 120) thisEl.classList.remove('active-scroll');
});
reviewTextarea.addEventListener('input', (e) => {
  const thisEl = e.currentTarget;

  if (thisEl.scrollHeight > 120) thisEl.classList.add('active-scroll');
  else thisEl.classList.remove('active-scroll');
});

document
  .querySelectorAll('.about-form__label-box label')
  .forEach((el, index, arr) => {
    const input = el.children[0];

    input.addEventListener('change', () => {
      arr.forEach((elem, id) => {
        elem.classList.remove('active');
        if (id <= index) elem.classList.add('active');
      });
    });
  });
