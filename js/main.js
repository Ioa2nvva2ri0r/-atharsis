/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Change Logo
function changeLogo() {
  const logo = document.getElementById('logo');

  if (window.screen.width <= 768) logo.src = `img/logo-min.svg`;
  else logo.src = `img/logo.svg`;
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);

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

// Popup
const popup = document.getElementById('popup');
const popupBox = document.getElementById('popup-box');
const popupClose = document.getElementById('popup-close');

['common-form', 'search-form', 'services-form', 'contacts-form', 'about-form']
  .map((id) => document.getElementById(id))
  .filter((el) => el)
  .forEach((el) =>
    el.addEventListener('submit', (e) => {
      e.preventDefault();
      popup.classList.add('active');
    })
  );

popupClose.addEventListener('click', () => popup.classList.remove('active'));
document.body.addEventListener('click', (e) => {
  if (popup.classList.contains('active') && !popupBox.contains(e.target))
    popup.classList.remove('active');
});

const labelDescFile = document.querySelector(
  '.common-form__label[for=file] span'
);
const inputFile = document.querySelector('.common-form__input[type=file]');

if (inputFile)
  inputFile.addEventListener('change', (e) => {
    labelDescFile.textContent = e.currentTarget.files[0].name;
  });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vLyBDaGFuZ2UgTG9nb1xyXG5mdW5jdGlvbiBjaGFuZ2VMb2dvKCkge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG5cclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGxvZ28uc3JjID0gYGltZy9sb2dvLW1pbi5zdmdgO1xyXG4gIGVsc2UgbG9nby5zcmMgPSBgaW1nL2xvZ28uc3ZnYDtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUxvZ28pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZUxvZ28pO1xyXG5cclxuLy8gLS0gQmFubmVyIGVsZW1lbnRzXHJcbmNvbnN0IG9wZW5NZW51QmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyJyk7XHJcbmNvbnN0IG1lbnVCYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1iYW5uZXInKTtcclxuY29uc3QgY29udGVudEJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgJy5iYW5uZXJfX3NsaWRlIC5iYW5uZXJfX2NvbnRlbnQnXHJcbik7XHJcbmNvbnN0IHBhZ2luYXRpb25CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyX19zbGlkZXItcGFnaW5hdGlvbicpO1xyXG5jb25zdCBidG5zQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhbm5lcl9fc2xpZGVyLWJ0bicpO1xyXG5cclxub3Blbk1lbnVCYW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWVudUJhbm5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBbLi4uY29udGVudEJhbm5lciwgcGFnaW5hdGlvbkJhbm5lciwgLi4uYnRuc0Jhbm5lcl0uZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG4gICk7XHJcbn0pO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoXHJcbiAgICAhb3Blbk1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhbWVudUJhbm5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgIG1lbnVCYW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG4gICkge1xyXG4gICAgbWVudUJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIFsuLi5jb250ZW50QmFubmVyLCBwYWdpbmF0aW9uQmFubmVyLCAuLi5idG5zQmFubmVyXS5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIENhdGFsb2cgbWVudVxyXG5jb25zdCBtZW51Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nJyk7XHJcbmNvbnN0IG9wZW5NZW51Q2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLW9wZW4nKTtcclxuY29uc3QgY2xvc2VNZW51Q2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWNsb3NlJyk7XHJcbmNvbnN0IGJveFRhYkNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy10YWJzJyk7XHJcbmNvbnN0IGNvbnRlbnRDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY29udGVudCcpO1xyXG5jb25zdCB0YWJzQ2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLXRhYicpO1xyXG5jb25zdCB0YWJDb250ZW50Q2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYkRlc2NdJyk7XHJcblxyXG5jb25zdCBidG5CYWNrQ2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWJhY2snKTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlQ2F0YWxvZygpIHtcclxuICBbXHJcbiAgICBtZW51Q2F0YWxvZyxcclxuICAgIGNvbnRlbnRDYXRhbG9nLFxyXG4gICAgYm94VGFiQ2F0YWxvZyxcclxuICAgIC4uLnRhYkNvbnRlbnRDYXRhbG9nLFxyXG4gICAgLi4udGFic0NhdGFsb2csXHJcbiAgXS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxufVxyXG5cclxub3Blbk1lbnVDYXRhbG9nLmZvckVhY2goKGJ0bikgPT5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBbXHJcbiAgICAgIG1lbnVDYXRhbG9nLFxyXG4gICAgICB3aW5kb3cuc2NyZWVuLndpZHRoID4gNzY4ICYmIGNvbnRlbnRDYXRhbG9nLFxyXG4gICAgICBib3hUYWJDYXRhbG9nLFxyXG4gICAgICB3aW5kb3cuc2NyZWVuLndpZHRoID4gNzY4ICYmIHRhYkNvbnRlbnRDYXRhbG9nWzBdLFxyXG4gICAgICB3aW5kb3cuc2NyZWVuLndpZHRoID4gNzY4ICYmIHRhYnNDYXRhbG9nWzBdLFxyXG4gICAgXVxyXG4gICAgICAuZmlsdGVyKChlbCkgPT4gZWwpXHJcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5jbG9zZU1lbnVDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNsb3NlQ2F0YWxvZygpO1xyXG59KTtcclxudGFic0NhdGFsb2cuZm9yRWFjaCgoZWwsIF8sIGFycikgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGNvbnN0IHRhYkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgW2RhdGEtdGFiRGVzYz0nJHt0aGlzRWwuZGF0YXNldC50YWJ9J11gXHJcbiAgICApO1xyXG5cclxuICAgIFsuLi50YWJDb250ZW50Q2F0YWxvZywgLi4uYXJyXS5mb3JFYWNoKChlbGVtKSA9PlxyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgICBjb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgdGFiRGVzYy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgYm94VGFiQ2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXNFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0YWJEZXNjLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpLCA1MDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuYnRuQmFja0NhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYm94VGFiQ2F0YWxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBjb250ZW50Q2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgICFvcGVuTWVudUNhdGFsb2dbMF0uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhb3Blbk1lbnVDYXRhbG9nWzFdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgIW1lbnVDYXRhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gIClcclxuICAgIGNsb3NlQ2F0YWxvZygpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckJhbm5lciA9IG5ldyBTd2lwZXIoJy5iYW5uZXJfX3NsaWRlcicsIHtcclxuICBlZmZlY3Q6ICdmYWRlJyxcclxuICBsb29wOiB0cnVlLFxyXG4gIHNwZWVkOiAyMDAwLFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBkZWxheTogNTAwMCxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5iYW5uZXJfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuYmFubmVyX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5iYW5uZXJfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgIHR5cGU6ICdmcmFjdGlvbicsXHJcbiAgfSxcclxuICBvbjoge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgbWVudUJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJhbm5lcicpO1xyXG4gICAgICBjb25zdCBjYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2cnKTtcclxuICAgICAgY29uc3QgY2xvc2VDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY2xvc2UnKTtcclxuXHJcbiAgICAgIG9wZW5NZW51QmFubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdG9wKCkpO1xyXG4gICAgICBvcGVuTWVudUNhdGFsb2cuZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmF1dG9wbGF5LnN0b3AoKSlcclxuICAgICAgKTtcclxuICAgICAgY2xvc2VDYXRhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hdXRvcGxheS5zdGFydCgpKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFvcGVuTWVudUNhdGFsb2dbMF0uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhb3Blbk1lbnVDYXRhbG9nWzFdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgIWNhdGFsb2cuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhb3Blbk1lbnVCYW5uZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhbWVudUJhbm5lci5jb250YWlucyhlLnRhcmdldClcclxuICAgICAgICApXHJcbiAgICAgICAgICB0aGlzLmF1dG9wbGF5LnN0YXJ0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5bJ2NvbW1vbi1mb3JtJywgJ3NlYXJjaC1mb3JtJywgJ3NlcnZpY2VzLWZvcm0nLCAnY29udGFjdHMtZm9ybScsICdhYm91dC1mb3JtJ11cclxuICAubWFwKChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxyXG4gIC5maWx0ZXIoKGVsKSA9PiBlbClcclxuICAuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIXBvcHVwQm94LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbmNvbnN0IGxhYmVsRGVzY0ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICcuY29tbW9uLWZvcm1fX2xhYmVsW2Zvcj1maWxlXSBzcGFuJ1xyXG4pO1xyXG5jb25zdCBpbnB1dEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbW9uLWZvcm1fX2lucHV0W3R5cGU9ZmlsZV0nKTtcclxuXHJcbmlmIChpbnB1dEZpbGUpXHJcbiAgaW5wdXRGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBsYWJlbERlc2NGaWxlLnRleHRDb250ZW50ID0gZS5jdXJyZW50VGFyZ2V0LmZpbGVzWzBdLm5hbWU7XHJcbiAgfSk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
