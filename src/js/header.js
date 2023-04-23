// Change Logo
function changeLogo() {
  const logo = document.getElementById('logo');

  if (window.screen.width <= 768) logo.src = `img/logo-min.svg`;
  else logo.src = `img/logo.svg`;
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);

// Toggle menu -- menu-banner
// -- Common menu
const menu = document.getElementById('menu');
const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
// -- Banner elements
const banner = document.getElementById('banner');
const menuBanner = document.getElementById('menu-banner');
const contentBanner = document.querySelectorAll(
  '.banner__slide .banner__content'
);
const paginationBanner = document.querySelector('.banner__slider-pagination');
const btnsBanner = document.querySelectorAll('.banner__slider-btn');

if (!banner) {
  openMenu.addEventListener('click', () => {
    menu.classList.add('active');
  });
  closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
  });
  document
    .querySelectorAll('.header__nav-link')
    .forEach((el) =>
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
} else {
  openMenu.addEventListener('click', () => {
    menuBanner.classList.toggle('active');
    [...contentBanner, paginationBanner, ...btnsBanner].forEach((el) =>
      el.classList.toggle('hidden')
    );
  });
  document.body.addEventListener('click', (e) => {
    if (
      !openMenu.contains(e.target) &&
      !menuBanner.contains(e.target) &&
      menuBanner.classList.contains('active')
    ) {
      menuBanner.classList.remove('active');
      [...contentBanner, paginationBanner, ...btnsBanner].forEach((el) =>
        el.classList.toggle('hidden')
      );
    }
  });
}
