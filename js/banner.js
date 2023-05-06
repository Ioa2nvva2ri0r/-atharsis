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
const boxTabCatalog = document.getElementById('catalog-tabs');
const contentCatalog = document.getElementById('catalog-content');
const tabsCatalog = document.querySelectorAll('.catalog-tab');
const tabContentCatalog = document.querySelectorAll('[data-tabDesc]');

const btnBackCatalog = document.getElementById('catalog-back');

function closeCatalog() {
  [
    menuCatalog,
    contentCatalog,
    boxTabCatalog,
    ...tabContentCatalog,
    ...tabsCatalog,
  ].forEach((el) => el.classList.remove('active'));
  if (window.screen.width <= 768) document.body.style.overflowY = '';
}

openMenuCatalog.forEach((btn) =>
  btn.addEventListener('click', () => {
    [
      menuCatalog,
      window.screen.width > 768 && contentCatalog,
      boxTabCatalog,
      window.screen.width > 768 && tabContentCatalog[0],
      window.screen.width > 768 && tabsCatalog[0],
    ]
      .filter((el) => el)
      .forEach((el) => el.classList.add('active'));
    if (window.screen.width <= 768) {
      window.scrollTo({ top: 0 });
      document.body.style.overflowY = 'hidden';
    }
  })
);
closeMenuCatalog.addEventListener('click', () => {
  closeCatalog();
});
tabsCatalog.forEach((el, _, arr) => {
  el.addEventListener('click', (e) => {
    const thisEl = e.currentTarget;
    const tabDesc = document.querySelector(
      `[data-tabDesc='${thisEl.dataset.tab}']`
    );

    [...tabContentCatalog, ...arr].forEach((elem) =>
      elem.classList.remove('active')
    );

    if (window.screen.width <= 768) {
      contentCatalog.classList.add('active');
      tabDesc.classList.add('active');
      boxTabCatalog.classList.remove('active');
    } else {
      thisEl.classList.add('active');
      setTimeout(() => tabDesc.classList.add('active'), 500);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbi8vIC0tIEJhbm5lciBlbGVtZW50c1xyXG5jb25zdCBvcGVuTWVudUJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lcicpO1xyXG5jb25zdCBtZW51QmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYmFubmVyJyk7XHJcbmNvbnN0IGNvbnRlbnRCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICcuYmFubmVyX19zbGlkZSAuYmFubmVyX19jb250ZW50J1xyXG4pO1xyXG5jb25zdCBwYWdpbmF0aW9uQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lcl9fc2xpZGVyLXBhZ2luYXRpb24nKTtcclxuY29uc3QgYnRuc0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXJfX3NsaWRlci1idG4nKTtcclxuXHJcbm9wZW5NZW51QmFubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1lbnVCYW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgWy4uLmNvbnRlbnRCYW5uZXIsIHBhZ2luYXRpb25CYW5uZXIsIC4uLmJ0bnNCYW5uZXJdLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICApO1xyXG59KTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIW9wZW5NZW51QmFubmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgIW1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICBtZW51QmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICApIHtcclxuICAgIG1lbnVCYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBbLi4uY29udGVudEJhbm5lciwgcGFnaW5hdGlvbkJhbm5lciwgLi4uYnRuc0Jhbm5lcl0uZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBDYXRhbG9nIG1lbnVcclxuY29uc3QgbWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpO1xyXG5jb25zdCBvcGVuTWVudUNhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1vcGVuJyk7XHJcbmNvbnN0IGNsb3NlTWVudUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1jbG9zZScpO1xyXG5jb25zdCBib3hUYWJDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctdGFicycpO1xyXG5jb25zdCBjb250ZW50Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWNvbnRlbnQnKTtcclxuY29uc3QgdGFic0NhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy10YWInKTtcclxuY29uc3QgdGFiQ29udGVudENhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJEZXNjXScpO1xyXG5cclxuY29uc3QgYnRuQmFja0NhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1iYWNrJyk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZUNhdGFsb2coKSB7XHJcbiAgW1xyXG4gICAgbWVudUNhdGFsb2csXHJcbiAgICBjb250ZW50Q2F0YWxvZyxcclxuICAgIGJveFRhYkNhdGFsb2csXHJcbiAgICAuLi50YWJDb250ZW50Q2F0YWxvZyxcclxuICAgIC4uLnRhYnNDYXRhbG9nLFxyXG4gIF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJyc7XHJcbn1cclxuXHJcbm9wZW5NZW51Q2F0YWxvZy5mb3JFYWNoKChidG4pID0+XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgW1xyXG4gICAgICBtZW51Q2F0YWxvZyxcclxuICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA+IDc2OCAmJiBjb250ZW50Q2F0YWxvZyxcclxuICAgICAgYm94VGFiQ2F0YWxvZyxcclxuICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA+IDc2OCAmJiB0YWJDb250ZW50Q2F0YWxvZ1swXSxcclxuICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA+IDc2OCAmJiB0YWJzQ2F0YWxvZ1swXSxcclxuICAgIF1cclxuICAgICAgLmZpbHRlcigoZWwpID0+IGVsKVxyXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxuY2xvc2VNZW51Q2F0YWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjbG9zZUNhdGFsb2coKTtcclxufSk7XHJcbnRhYnNDYXRhbG9nLmZvckVhY2goKGVsLCBfLCBhcnIpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCB0YWJEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYFtkYXRhLXRhYkRlc2M9JyR7dGhpc0VsLmRhdGFzZXQudGFifSddYFxyXG4gICAgKTtcclxuXHJcbiAgICBbLi4udGFiQ29udGVudENhdGFsb2csIC4uLmFycl0uZm9yRWFjaCgoZWxlbSkgPT5cclxuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIHtcclxuICAgICAgY29udGVudENhdGFsb2cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHRhYkRlc2MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGJveFRhYkNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFiRGVzYy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSwgNTAwKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbmJ0bkJhY2tDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGJveFRhYkNhdGFsb2cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgY29udGVudENhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoXHJcbiAgICAhb3Blbk1lbnVDYXRhbG9nWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgIW9wZW5NZW51Q2F0YWxvZ1sxXS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICFtZW51Q2F0YWxvZy5jb250YWlucyhlLnRhcmdldClcclxuICApXHJcbiAgICBjbG9zZUNhdGFsb2coKTtcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJCYW5uZXIgPSBuZXcgU3dpcGVyKCcuYmFubmVyX19zbGlkZXInLCB7XHJcbiAgZWZmZWN0OiAnZmFkZScsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGVlZDogMjAwMCxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDUwMDAsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuYmFubmVyX19zbGlkZXItYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmJhbm5lcl9fc2xpZGVyLWJ0bi1wcmV2JyxcclxuICB9LFxyXG4gIGExMXk6IHtcclxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQktC/0LXRgNGR0LQnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuYmFubmVyX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVCYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1iYW5uZXInKTtcclxuICAgICAgY29uc3QgY2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nJyk7XHJcbiAgICAgIGNvbnN0IGNsb3NlQ2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWNsb3NlJyk7XHJcblxyXG4gICAgICBvcGVuTWVudUJhbm5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXV0b3BsYXkuc3RvcCgpKTtcclxuICAgICAgb3Blbk1lbnVDYXRhbG9nLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdG9wKCkpXHJcbiAgICAgICk7XHJcbiAgICAgIGNsb3NlQ2F0YWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXV0b3BsYXkuc3RhcnQoKSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhb3Blbk1lbnVDYXRhbG9nWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIW9wZW5NZW51Q2F0YWxvZ1sxXS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICFjYXRhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIW9wZW5NZW51QmFubmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIW1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJmaWxlIjoiYmFubmVyLmpzIn0=
