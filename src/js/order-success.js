/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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
