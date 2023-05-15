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

// hidden item
const listProduct = document.querySelectorAll('.order-success__item');
if (listProduct.length >= 3) {
  document.querySelector('.order-success__btn-more').style.display = 'flex';
  listProduct.forEach((elem, index) => {
    if (index >= 2) elem.style.display = 'none';
  });
}

// Modal
const successModal = document.getElementById('success-modal');
const successModalContent = document.getElementById('success-modal-box');
const successModalOpen = document.getElementById('order-more');
const successModalClose = document.getElementById('success-modal-close');

successModalOpen.addEventListener('click', () =>
  successModal.classList.add('active')
);
successModalClose.addEventListener('click', () =>
  successModal.classList.remove('active')
);
document.body.addEventListener('click', (e) => {
  if (
    !successModalOpen.contains(e.target) &&
    !successModalContent.contains(e.target) &&
    successModal.classList.contains('active')
  )
    successModal.classList.remove('active');
});

// Common slider
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

// Add basket & favorite
document.querySelectorAll('.product__btn').forEach((el) => {
  el.addEventListener('click', (e) => e.currentTarget.classList.toggle('add'));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci1zdWNjZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBDaGFuZ2UgTG9nb1xyXG5mdW5jdGlvbiBjaGFuZ2VMb2dvKCkge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG5cclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGxvZ28uc3JjID0gYGltZy9sb2dvLW1pbi5zdmdgO1xyXG4gIGVsc2UgbG9nby5zcmMgPSBgaW1nL2xvZ28uc3ZnYDtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUxvZ28pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZUxvZ28pO1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGhpZGRlbiBpdGVtXHJcbmNvbnN0IGxpc3RQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLXN1Y2Nlc3NfX2l0ZW0nKTtcclxuaWYgKGxpc3RQcm9kdWN0Lmxlbmd0aCA+PSAzKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLXN1Y2Nlc3NfX2J0bi1tb3JlJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBsaXN0UHJvZHVjdC5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID49IDIpIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxufVxyXG5cclxuLy8gTW9kYWxcclxuY29uc3Qgc3VjY2Vzc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3MtbW9kYWwnKTtcclxuY29uc3Qgc3VjY2Vzc01vZGFsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzLW1vZGFsLWJveCcpO1xyXG5jb25zdCBzdWNjZXNzTW9kYWxPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyLW1vcmUnKTtcclxuY29uc3Qgc3VjY2Vzc01vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzcy1tb2RhbC1jbG9zZScpO1xyXG5cclxuc3VjY2Vzc01vZGFsT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbik7XHJcbnN1Y2Nlc3NNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIXN1Y2Nlc3NNb2RhbE9wZW4uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhc3VjY2Vzc01vZGFsQ29udGVudC5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgIHN1Y2Nlc3NNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgKVxyXG4gICAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vIENvbW1vbiBzbGlkZXJcclxuY29uc3Qgc3dpcGVyQ29tbW9uID0gbmV3IFN3aXBlcignLmNvbW1vbi1zbGlkZXJfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5jb21tb24tc2xpZGVyX19idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY29tbW9uLXNsaWRlcl9fYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLmNvbW1vbi1zbGlkZXJfX3Njcm9sbGJhcicsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjksXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc2xpZGVzW3RoaXMubG9vcGVkU2xpZGVzXTtcclxuICAgICAgbGFzdC5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XHJcbiAgICB9LFxyXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLnNsaWRlc1t0aGlzLmFjdGl2ZUluZGV4XTtcclxuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXggKyB0aGlzLmxvb3BlZFNsaWRlc107XHJcbiAgICAgIGZpcnN0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIGxhc3Quc3R5bGUub3BhY2l0eSA9ICcwLjInO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEFkZCBiYXNrZXQgJiBmYXZvcml0ZVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fYnRuJykuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWRkJykpO1xyXG59KTtcclxuIl0sImZpbGUiOiJvcmRlci1zdWNjZXNzLmpzIn0=
