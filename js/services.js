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

const swiperCommon = new Swiper('.common-slider__slider', {
  loop: true,
  navigation: {
    nextEl: '.common-slider__btn-next',
    prevEl: '.common-slider__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  scrollbar: {
    el: '.common-slider__scrollbar',
    draggable: true,
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
  on: {
    init: function () {
      const last = this.slides[this.loopedSlides];
      last.style.opacity = '0.2';
    },
    slideChange: function () {
      const first = this.slides[this.activeIndex];
      const last = this.slides[this.activeIndex + this.loopedSlides];
      first.style.opacity = '1';
      last.style.opacity = '0.2';
    },
  },
});

// Common-desc
const commonDesc = document.getElementById('common-desc');
const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting) commonDesc.classList.add('active');
      else commonDesc.classList.remove('active');
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(commonDesc);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBsb2dvLnNyYyA9IGBpbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYGltZy9sb2dvLnN2Z2A7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VMb2dvKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2VMb2dvKTtcclxuXHJcbi8vIFRvZ2dsZSBtZW51XHJcbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1iYW5uZXInKSkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4gIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNsb3NlJyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpO1xyXG5cclxuICBvcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIGxpbmtzLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICk7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFvcGVuTWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG4gICAgKVxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBzd2lwZXJDb21tb24gPSBuZXcgU3dpcGVyKCcuY29tbW9uLXNsaWRlcl9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNvbW1vbi1zbGlkZXJfX2J0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5jb21tb24tc2xpZGVyX19idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6ICcuY29tbW9uLXNsaWRlcl9fc2Nyb2xsYmFyJyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbjoge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5zbGlkZXNbdGhpcy5sb29wZWRTbGlkZXNdO1xyXG4gICAgICBsYXN0LnN0eWxlLm9wYWNpdHkgPSAnMC4yJztcclxuICAgIH0sXHJcbiAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdO1xyXG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleCArIHRoaXMubG9vcGVkU2xpZGVzXTtcclxuICAgICAgZmlyc3Quc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgbGFzdC5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gQ29tbW9uLWRlc2NcclxuY29uc3QgY29tbW9uRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tb24tZGVzYycpO1xyXG5jb25zdCBvYnNlcnZlclRyYW5zbGF0ZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjgpXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgY29tbW9uRGVzYy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZWxzZSBjb21tb25EZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC42XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVyVHJhbnNsYXRlLm9ic2VydmUoY29tbW9uRGVzYyk7XHJcblxyXG4vLyBQb3B1cFxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xyXG5jb25zdCBwb3B1cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1ib3gnKTtcclxuY29uc3QgcG9wdXBDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jbG9zZScpO1xyXG5cclxuWydjb21tb24tZm9ybScsICdzZWFyY2gtZm9ybScsICdzZXJ2aWNlcy1mb3JtJywgJ2NvbnRhY3RzLWZvcm0nLCAnYWJvdXQtZm9ybSddXHJcbiAgLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSlcclxuICAuZmlsdGVyKChlbCkgPT4gZWwpXHJcbiAgLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbnBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFwb3B1cEJveC5jb250YWlucyhlLnRhcmdldCkpXHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbiJdLCJmaWxlIjoic2VydmljZXMuanMifQ==
