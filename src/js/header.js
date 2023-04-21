// Change Logo
function changeLogo() {
  const logo = document.getElementById('logo');
  const publicUrl = window.location.origin;

  if (window.screen.width <= 768) logo.src = `${publicUrl}/img/logo-min.svg`;
  else logo.src = `${publicUrl}/img/logo.svg`;
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);

// Toggle menu
const menu = document.getElementById('menu');
const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');

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
  if (!openMenu.contains(e.target) && !menu.contains(e.target))
    menu.classList.remove('active');
});

// Catalog menu
const menuCatalog = document.getElementById('catalog');
const openMenuCatalog = document.getElementById('catalog-open');
const closeMenuCatalog = document.getElementById('catalog-close');
const tabMenuCatalog = document.getElementById('catalog-tab');

openMenuCatalog.addEventListener('click', () => {
  menuCatalog.classList.add('active');
  tabMenuCatalog.classList.add('tab-active');
});
closeMenuCatalog.addEventListener('click', () => {
  menuCatalog.classList.remove('active');
  tabMenuCatalog.classList.remove('tab-active');
});
document.body.addEventListener('click', (e) => {
  if (!openMenuCatalog.contains(e.target) && !menuCatalog.contains(e.target)) {
    menuCatalog.classList.remove('active');
    tabMenuCatalog.classList.remove('tab-active');
  }
});
