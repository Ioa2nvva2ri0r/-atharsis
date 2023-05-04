/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// -- Banner elements
const openMenuBanner = document.getElementById('menu-open');
const banner = document.getElementById('banner');
const menuBanner = document.getElementById('menu-banner');
const contentBanner = document.querySelectorAll(
  '.banner__slide .banner__content'
);
const paginationBanner = document.querySelector('.banner__slider-pagination');
const btnsBanner = document.querySelectorAll('.banner__slider-btn');

openMenuBanner.addEventListener('click', () => {
  menuBanner.classList.toggle('active');
  [...contentBanner, paginationBanner, ...btnsBanner].forEach((el) =>
    el.classList.toggle('hidden')
  );
});
document.body.addEventListener('click', (e) => {
  if (
    !openMenuBanner.contains(e.target) &&
    !menuBanner.contains(e.target) &&
    menuBanner.classList.contains('active')
  ) {
    menuBanner.classList.remove('active');
    [...contentBanner, paginationBanner, ...btnsBanner].forEach((el) =>
      el.classList.toggle('hidden')
    );
  }
});

// Catalog menu
const menuCatalog = document.getElementById('catalog');
const openMenuCatalog = document.querySelectorAll('.catalog-open');
const closeMenuCatalog = document.getElementById('catalog-close');
const contentCatalog = document.getElementById('catalog-content');
const tabContentCatalog = document.getElementById('catalog-tab-content');
const btnBackCatalog = document.getElementById('catalog-back');
const boxTabCatalog = document.getElementById('catalog-tabs');
const tabsCatalog = document.querySelectorAll('.catalog-tab');

function closeCatalog() {
  menuCatalog.classList.remove('active');
  contentCatalog.classList.remove('active');
  tabContentCatalog.classList.remove('tab-active');
  tabsCatalog.forEach((elem) => elem.classList.remove('active'));
}

openMenuCatalog.forEach((el) =>
  el.addEventListener('click', () => {
    menuCatalog.classList.add('active');
    tabContentCatalog.classList.add('tab-active');
    setTimeout(() => {
      tabsCatalog[0].classList.add('active');
    }, 400);

    if (window.screen.width <= 768) boxTabCatalog.classList.add('active');
  })
);
closeMenuCatalog.addEventListener('click', () => {
  closeCatalog();
});
tabsCatalog.forEach((el, _, arr) => {
  el.addEventListener('click', () => {
    arr.forEach((elem) => elem.classList.remove('active'));
    el.classList.add('active');

    if (window.screen.width <= 768) {
      boxTabCatalog.classList.remove('active');
      contentCatalog.classList.add('active');
    } else {
      tabContentCatalog.classList.remove('tab-active');
      setTimeout(() => {
        tabContentCatalog.classList.add('tab-active');
      }, 500);
    }
  });
});
btnBackCatalog.addEventListener('click', () => {
  boxTabCatalog.classList.add('active');
  contentCatalog.classList.remove('active');
});
document.body.addEventListener('click', (e) => {
  if (
    !openMenuCatalog[0].contains(e.target) &&
    !openMenuCatalog[1].contains(e.target) &&
    !menuCatalog.contains(e.target)
  )
    closeCatalog();
});

const swiperBanner = new Swiper('.banner__slider', {
  effect: 'fade',
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.banner__slider-btn-next',
    prevEl: '.banner__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  pagination: {
    el: '.banner__slider-pagination',
    type: 'fraction',
  },
  on: {
    init() {
      const menuBanner = document.getElementById('menu-banner');
      const catalog = document.getElementById('catalog');
      const closeCatalog = document.getElementById('catalog-close');

      openMenuBanner.addEventListener('click', () => this.autoplay.stop());
      openMenuCatalog.forEach((el) =>
        el.addEventListener('click', () => this.autoplay.stop())
      );
      closeCatalog.addEventListener('click', () => this.autoplay.start());

      document.body.addEventListener('click', (e) => {
        if (
          !openMenuCatalog[0].contains(e.target) &&
          !openMenuCatalog[1].contains(e.target) &&
          !catalog.contains(e.target) &&
          !openMenuBanner.contains(e.target) &&
          !menuBanner.contains(e.target)
        )
          this.autoplay.start();
      });
    },
  },
});
