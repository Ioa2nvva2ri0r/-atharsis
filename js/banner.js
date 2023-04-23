/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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

if (menuCatalog) {
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
}

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
      const menuOpen = document.getElementById('menu-open');
      const menuBanner = document.getElementById('menu-banner');
      const catalog = document.getElementById('catalog');
      const openCatalog = document.getElementById('catalog-open');
      const closeCatalog = document.getElementById('catalog-close');

      menuOpen.addEventListener('click', () => this.autoplay.stop());
      openCatalog.addEventListener('click', () => this.autoplay.stop());
      closeCatalog.addEventListener('click', () => this.autoplay.start());

      document.body.addEventListener('click', (e) => {
        if (
          !openCatalog.contains(e.target) &&
          !catalog.contains(e.target) &&
          !menuOpen.contains(e.target) &&
          !menuBanner.contains(e.target)
        )
          this.autoplay.start();
      });
    },
  },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbi8vIENhdGFsb2cgbWVudVxyXG5jb25zdCBtZW51Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nJyk7XHJcbmNvbnN0IG9wZW5NZW51Q2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLW9wZW4nKTtcclxuY29uc3QgY2xvc2VNZW51Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWNsb3NlJyk7XHJcbmNvbnN0IGNvbnRlbnRDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY29udGVudCcpO1xyXG5jb25zdCB0YWJDb250ZW50Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLXRhYi1jb250ZW50Jyk7XHJcbmNvbnN0IGJ0bkJhY2tDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctYmFjaycpO1xyXG5jb25zdCBib3hUYWJDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctdGFicycpO1xyXG5jb25zdCB0YWJzQ2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLXRhYicpO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VDYXRhbG9nKCkge1xyXG4gIG1lbnVDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGNvbnRlbnRDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIHRhYkNvbnRlbnRDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1hY3RpdmUnKTtcclxuICB0YWJzQ2F0YWxvZy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxufVxyXG5cclxuaWYgKG1lbnVDYXRhbG9nKSB7XHJcbiAgb3Blbk1lbnVDYXRhbG9nLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1lbnVDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB0YWJDb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QuYWRkKCd0YWItYWN0aXZlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRhYnNDYXRhbG9nWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBib3hUYWJDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICApO1xyXG4gIGNsb3NlTWVudUNhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjbG9zZUNhdGFsb2coKTtcclxuICB9KTtcclxuICB0YWJzQ2F0YWxvZy5mb3JFYWNoKChlbCwgXywgYXJyKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYXJyLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgIGJveFRhYkNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgY29udGVudENhdGFsb2cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFiQ29udGVudENhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZSgndGFiLWFjdGl2ZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGFiQ29udGVudENhdGFsb2cuY2xhc3NMaXN0LmFkZCgndGFiLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGJ0bkJhY2tDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYm94VGFiQ2F0YWxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGNvbnRlbnRDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnVDYXRhbG9nWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhb3Blbk1lbnVDYXRhbG9nWzFdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudUNhdGFsb2cuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgICApXHJcbiAgICAgIGNsb3NlQ2F0YWxvZygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBzd2lwZXJCYW5uZXIgPSBuZXcgU3dpcGVyKCcuYmFubmVyX19zbGlkZXInLCB7XHJcbiAgZWZmZWN0OiAnZmFkZScsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGVlZDogMzAwMCxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDUwMDAsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuYmFubmVyX19zbGlkZXItYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmJhbm5lcl9fc2xpZGVyLWJ0bi1wcmV2JyxcclxuICB9LFxyXG4gIGExMXk6IHtcclxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQktC/0LXRgNGR0LQnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuYmFubmVyX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG4gICAgICBjb25zdCBtZW51QmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYmFubmVyJyk7XHJcbiAgICAgIGNvbnN0IGNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpO1xyXG4gICAgICBjb25zdCBvcGVuQ2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLW9wZW4nKTtcclxuICAgICAgY29uc3QgY2xvc2VDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY2xvc2UnKTtcclxuXHJcbiAgICAgIG1lbnVPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdG9wKCkpO1xyXG4gICAgICBvcGVuQ2F0YWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXV0b3BsYXkuc3RvcCgpKTtcclxuICAgICAgY2xvc2VDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdGFydCgpKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFvcGVuQ2F0YWxvZy5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICFjYXRhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIW1lbnVPcGVuLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIW1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgdGhpcy5hdXRvcGxheS5zdGFydCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJmaWxlIjoiYmFubmVyLmpzIn0=
