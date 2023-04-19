// Change Logo
function changeLogo() {
  const logo = document.getElementById('logo');
  if (window.screen.width <= 700) logo.src = 'img/logo-min.svg';
  else logo.src = 'img/logo.svg';
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
document.body.addEventListener('click', (e) => {
  if (!openMenu.contains(e.target) && !menu.contains(e.target))
    menu.classList.remove('active');
});
