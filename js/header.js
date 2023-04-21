// Change Logo
function changeLogo() {
  const logo = document.getElementById('logo');

  if (window.screen.width <= 768) logo.src = `img/logo-min.svg`;
  else logo.src = `img/logo.svg`;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBsb2dvLnNyYyA9IGBpbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYGltZy9sb2dvLnN2Z2A7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VMb2dvKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2VMb2dvKTtcclxuXHJcbi8vIFRvZ2dsZSBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuXHJcbm9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn0pO1xyXG5jbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJylcclxuICAuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKCFvcGVuTWVudS5jb250YWlucyhlLnRhcmdldCkgJiYgIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKVxyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4vLyBDYXRhbG9nIG1lbnVcclxuY29uc3QgbWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpO1xyXG5jb25zdCBvcGVuTWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1vcGVuJyk7XHJcbmNvbnN0IGNsb3NlTWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1jbG9zZScpO1xyXG5jb25zdCB0YWJNZW51Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLXRhYicpO1xyXG5cclxub3Blbk1lbnVDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1lbnVDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHRhYk1lbnVDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ3RhYi1hY3RpdmUnKTtcclxufSk7XHJcbmNsb3NlTWVudUNhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWVudUNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgdGFiTWVudUNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgndGFiLWFjdGl2ZScpO1xyXG59KTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKCFvcGVuTWVudUNhdGFsb2cuY29udGFpbnMoZS50YXJnZXQpICYmICFtZW51Q2F0YWxvZy5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgIG1lbnVDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgdGFiTWVudUNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgndGFiLWFjdGl2ZScpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJmaWxlIjoiaGVhZGVyLmpzIn0=
