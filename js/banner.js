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
  speed: 3000,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbi8vIC0tIEJhbm5lciBlbGVtZW50c1xyXG5jb25zdCBvcGVuTWVudUJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lcicpO1xyXG5jb25zdCBtZW51QmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYmFubmVyJyk7XHJcbmNvbnN0IGNvbnRlbnRCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICcuYmFubmVyX19zbGlkZSAuYmFubmVyX19jb250ZW50J1xyXG4pO1xyXG5jb25zdCBwYWdpbmF0aW9uQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lcl9fc2xpZGVyLXBhZ2luYXRpb24nKTtcclxuY29uc3QgYnRuc0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXJfX3NsaWRlci1idG4nKTtcclxuXHJcbm9wZW5NZW51QmFubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1lbnVCYW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgWy4uLmNvbnRlbnRCYW5uZXIsIHBhZ2luYXRpb25CYW5uZXIsIC4uLmJ0bnNCYW5uZXJdLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICApO1xyXG59KTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIW9wZW5NZW51QmFubmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgIW1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICBtZW51QmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICApIHtcclxuICAgIG1lbnVCYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBbLi4uY29udGVudEJhbm5lciwgcGFnaW5hdGlvbkJhbm5lciwgLi4uYnRuc0Jhbm5lcl0uZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBDYXRhbG9nIG1lbnVcclxuY29uc3QgbWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpO1xyXG5jb25zdCBvcGVuTWVudUNhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1vcGVuJyk7XHJcbmNvbnN0IGNsb3NlTWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1jbG9zZScpO1xyXG5jb25zdCBjb250ZW50Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWNvbnRlbnQnKTtcclxuY29uc3QgdGFiQ29udGVudENhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy10YWItY29udGVudCcpO1xyXG5jb25zdCBidG5CYWNrQ2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWJhY2snKTtcclxuY29uc3QgYm94VGFiQ2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLXRhYnMnKTtcclxuY29uc3QgdGFic0NhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy10YWInKTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlQ2F0YWxvZygpIHtcclxuICBtZW51Q2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBjb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB0YWJDb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCd0YWItYWN0aXZlJyk7XHJcbiAgdGFic0NhdGFsb2cuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbn1cclxuXHJcbm9wZW5NZW51Q2F0YWxvZy5mb3JFYWNoKChlbCkgPT5cclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1lbnVDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdGFiQ29udGVudENhdGFsb2cuY2xhc3NMaXN0LmFkZCgndGFiLWFjdGl2ZScpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRhYnNDYXRhbG9nWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSwgNDAwKTtcclxuXHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGJveFRhYkNhdGFsb2cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSlcclxuKTtcclxuY2xvc2VNZW51Q2F0YWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjbG9zZUNhdGFsb2coKTtcclxufSk7XHJcbnRhYnNDYXRhbG9nLmZvckVhY2goKGVsLCBfLCBhcnIpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFyci5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgICBib3hUYWJDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBjb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYkNvbnRlbnRDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1hY3RpdmUnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGFiQ29udGVudENhdGFsb2cuY2xhc3NMaXN0LmFkZCgndGFiLWFjdGl2ZScpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuYnRuQmFja0NhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYm94VGFiQ2F0YWxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBjb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgICFvcGVuTWVudUNhdGFsb2dbMF0uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhb3Blbk1lbnVDYXRhbG9nWzFdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgIW1lbnVDYXRhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gIClcclxuICAgIGNsb3NlQ2F0YWxvZygpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckJhbm5lciA9IG5ldyBTd2lwZXIoJy5iYW5uZXJfX3NsaWRlcicsIHtcclxuICBlZmZlY3Q6ICdmYWRlJyxcclxuICBsb29wOiB0cnVlLFxyXG4gIHNwZWVkOiAzMDAwLFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBkZWxheTogNTAwMCxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5iYW5uZXJfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuYmFubmVyX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5iYW5uZXJfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgIHR5cGU6ICdmcmFjdGlvbicsXHJcbiAgfSxcclxuICBvbjoge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgbWVudUJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJhbm5lcicpO1xyXG4gICAgICBjb25zdCBjYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2cnKTtcclxuICAgICAgY29uc3QgY2xvc2VDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY2xvc2UnKTtcclxuXHJcbiAgICAgIG9wZW5NZW51QmFubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdG9wKCkpO1xyXG4gICAgICBvcGVuTWVudUNhdGFsb2cuZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmF1dG9wbGF5LnN0b3AoKSlcclxuICAgICAgKTtcclxuICAgICAgY2xvc2VDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdGFydCgpKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFvcGVuTWVudUNhdGFsb2dbMF0uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhb3Blbk1lbnVDYXRhbG9nWzFdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIWNhdGFsb2cuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhb3Blbk1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhbWVudUJhbm5lci5jb250YWlucyhlLnRhcmdldClcclxuICAgICAgICApXHJcbiAgICAgICAgICB0aGlzLmF1dG9wbGF5LnN0YXJ0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sImZpbGUiOiJiYW5uZXIuanMifQ==
