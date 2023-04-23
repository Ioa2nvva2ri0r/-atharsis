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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBsb2dvLnNyYyA9IGBpbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYGltZy9sb2dvLnN2Z2A7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VMb2dvKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2VMb2dvKTtcclxuXHJcbi8vIFRvZ2dsZSBtZW51IC0tIG1lbnUtYmFubmVyXHJcbi8vIC0tIENvbW1vbiBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG5jb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuLy8gLS0gQmFubmVyIGVsZW1lbnRzXHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXInKTtcclxuY29uc3QgbWVudUJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJhbm5lcicpO1xyXG5jb25zdCBjb250ZW50QmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAnLmJhbm5lcl9fc2xpZGUgLmJhbm5lcl9fY29udGVudCdcclxuKTtcclxuY29uc3QgcGFnaW5hdGlvbkJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX3NsaWRlci1wYWdpbmF0aW9uJyk7XHJcbmNvbnN0IGJ0bnNCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFubmVyX19zbGlkZXItYnRuJyk7XHJcblxyXG5pZiAoIWJhbm5lcikge1xyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9KTtcclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKVxyXG4gICAgLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgICApO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgIClcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufSBlbHNlIHtcclxuICBvcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1lbnVCYW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBbLi4uY29udGVudEJhbm5lciwgcGFnaW5hdGlvbkJhbm5lciwgLi4uYnRuc0Jhbm5lcl0uZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51QmFubmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51QmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgICkge1xyXG4gICAgICBtZW51QmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBbLi4uY29udGVudEJhbm5lciwgcGFnaW5hdGlvbkJhbm5lciwgLi4uYnRuc0Jhbm5lcl0uZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwiZmlsZSI6ImhlYWRlci5qcyJ9
