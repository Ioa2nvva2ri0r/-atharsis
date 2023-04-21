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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuICBjb25zdCBwdWJsaWNVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG5cclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGxvZ28uc3JjID0gYCR7cHVibGljVXJsfS9pbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYCR7cHVibGljVXJsfS9pbWcvbG9nby5zdmdgO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlTG9nbyk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hhbmdlTG9nbyk7XHJcblxyXG4vLyBUb2dnbGUgbWVudVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNsb3NlJyk7XHJcblxyXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KTtcclxuY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpXHJcbiAgLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmICghb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gQ2F0YWxvZyBtZW51XHJcbmNvbnN0IG1lbnVDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2cnKTtcclxuY29uc3Qgb3Blbk1lbnVDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctb3BlbicpO1xyXG5jb25zdCBjbG9zZU1lbnVDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY2xvc2UnKTtcclxuY29uc3QgdGFiTWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy10YWInKTtcclxuXHJcbm9wZW5NZW51Q2F0YWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtZW51Q2F0YWxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB0YWJNZW51Q2F0YWxvZy5jbGFzc0xpc3QuYWRkKCd0YWItYWN0aXZlJyk7XHJcbn0pO1xyXG5jbG9zZU1lbnVDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1lbnVDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIHRhYk1lbnVDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1hY3RpdmUnKTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmICghb3Blbk1lbnVDYXRhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhbWVudUNhdGFsb2cuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICBtZW51Q2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRhYk1lbnVDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1hY3RpdmUnKTtcclxuICB9XHJcbn0pO1xyXG4iXSwiZmlsZSI6ImhlYWRlci5qcyJ9
