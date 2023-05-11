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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuY29uc3QgaW1hZ2VEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19pbWcnKTtcclxuY29uc3Qgb2JzZXJ2ZXJUcmFuc2xhdGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgKFtlbnRyeV0pID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gNzY4KVxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpXHJcbiAgICAgICAgaW1hZ2VEZXNjLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgICAgIGVsc2UgaW1hZ2VEZXNjLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHJlc2hvbGQ6IFswLjZdLFxyXG4gIH1cclxuKTtcclxub2JzZXJ2ZXJUcmFuc2xhdGUub2JzZXJ2ZSguLi5pbWFnZURlc2MpO1xyXG5cclxuY29uc3Qgc3dpcGVyUmV2aWV3cyA9IG5ldyBTd2lwZXIoJy5hYm91dC1yZXZpZXdzX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuYWJvdXQtcmV2aWV3c19fYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmFib3V0LXJldmlld3NfX2J0bi1wcmV2JyxcclxuICB9LFxyXG4gIGExMXk6IHtcclxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQktC/0LXRgNGR0LQnLFxyXG4gIH0sXHJcbiAgc2Nyb2xsYmFyOiB7XHJcbiAgICBlbDogJy5hYm91dC1yZXZpZXdzX19zY3JvbGxiYXInLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEyMDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZXZpZXdUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZpZXcnKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGlmIChyZXZpZXdUZXh0YXJlYS5zY3JvbGxIZWlnaHQgPD0gMTIwKVxyXG4gICAgcmV2aWV3VGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXNjcm9sbCcpO1xyXG4gIGVsc2UgcmV2aWV3VGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNjcm9sbCcpO1xyXG59KTtcclxucmV2aWV3VGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cclxuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWhlaWdodCcpXHJcbik7XHJcbnJldmlld1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xyXG4gIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgaWYgKHRoaXNFbC52YWx1ZSA9PT0gJycpIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtaGVpZ2h0Jyk7XHJcbiAgaWYgKHRoaXNFbC5zY3JvbGxIZWlnaHQgPD0gMTIwKSB0aGlzRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXNjcm9sbCcpO1xyXG59KTtcclxucmV2aWV3VGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgaWYgKHRoaXNFbC5zY3JvbGxIZWlnaHQgPiAxMjApIHRoaXNFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtc2Nyb2xsJyk7XHJcbiAgZWxzZSB0aGlzRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXNjcm9sbCcpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dC1mb3JtX19sYWJlbC1ib3ggbGFiZWwnKVxyXG4gIC5mb3JFYWNoKChlbCwgaW5kZXgsIGFycikgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBlbC5jaGlsZHJlblswXTtcclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGFyci5mb3JFYWNoKChlbGVtLCBpZCkgPT4ge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGlkIDw9IGluZGV4KSBlbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iXSwiZmlsZSI6ImFib3V0LmpzIn0=
