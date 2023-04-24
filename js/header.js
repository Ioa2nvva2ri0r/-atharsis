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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBsb2dvLnNyYyA9IGBpbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYGltZy9sb2dvLnN2Z2A7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VMb2dvKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2VMb2dvKTtcclxuXHJcbi8vIFRvZ2dsZSBtZW51XHJcblxyXG5pZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItYmFubmVyJykpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jbG9zZScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKTtcclxuXHJcbiAgb3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBsaW5rcy5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcclxuICApO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgIClcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG4iXSwiZmlsZSI6ImhlYWRlci5qcyJ9
