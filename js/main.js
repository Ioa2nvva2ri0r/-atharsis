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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vLyAtLSBCYW5uZXIgZWxlbWVudHNcclxuY29uc3Qgb3Blbk1lbnVCYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXInKTtcclxuY29uc3QgbWVudUJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJhbm5lcicpO1xyXG5jb25zdCBjb250ZW50QmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAnLmJhbm5lcl9fc2xpZGUgLmJhbm5lcl9fY29udGVudCdcclxuKTtcclxuY29uc3QgcGFnaW5hdGlvbkJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX3NsaWRlci1wYWdpbmF0aW9uJyk7XHJcbmNvbnN0IGJ0bnNCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFubmVyX19zbGlkZXItYnRuJyk7XHJcblxyXG5vcGVuTWVudUJhbm5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtZW51QmFubmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIFsuLi5jb250ZW50QmFubmVyLCBwYWdpbmF0aW9uQmFubmVyLCAuLi5idG5zQmFubmVyXS5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgKTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgICFvcGVuTWVudUJhbm5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICFtZW51QmFubmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgbWVudUJhbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgKSB7XHJcbiAgICBtZW51QmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgWy4uLmNvbnRlbnRCYW5uZXIsIHBhZ2luYXRpb25CYW5uZXIsIC4uLmJ0bnNCYW5uZXJdLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gQ2F0YWxvZyBtZW51XHJcbmNvbnN0IG1lbnVDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2cnKTtcclxuY29uc3Qgb3Blbk1lbnVDYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctb3BlbicpO1xyXG5jb25zdCBjbG9zZU1lbnVDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY2xvc2UnKTtcclxuY29uc3QgYm94VGFiQ2F0YWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLXRhYnMnKTtcclxuY29uc3QgY29udGVudENhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1jb250ZW50Jyk7XHJcbmNvbnN0IHRhYnNDYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctdGFiJyk7XHJcbmNvbnN0IHRhYkNvbnRlbnRDYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiRGVzY10nKTtcclxuXHJcbmNvbnN0IGJ0bkJhY2tDYXRhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctYmFjaycpO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VDYXRhbG9nKCkge1xyXG4gIFtcclxuICAgIG1lbnVDYXRhbG9nLFxyXG4gICAgY29udGVudENhdGFsb2csXHJcbiAgICBib3hUYWJDYXRhbG9nLFxyXG4gICAgLi4udGFiQ29udGVudENhdGFsb2csXHJcbiAgICAuLi50YWJzQ2F0YWxvZyxcclxuICBdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xyXG59XHJcblxyXG5vcGVuTWVudUNhdGFsb2cuZm9yRWFjaCgoYnRuKSA9PlxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFtcclxuICAgICAgbWVudUNhdGFsb2csXHJcbiAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjggJiYgY29udGVudENhdGFsb2csXHJcbiAgICAgIGJveFRhYkNhdGFsb2csXHJcbiAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjggJiYgdGFiQ29udGVudENhdGFsb2dbMF0sXHJcbiAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjggJiYgdGFic0NhdGFsb2dbMF0sXHJcbiAgICBdXHJcbiAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbClcclxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcbmNsb3NlTWVudUNhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xvc2VDYXRhbG9nKCk7XHJcbn0pO1xyXG50YWJzQ2F0YWxvZy5mb3JFYWNoKChlbCwgXywgYXJyKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgdGFiRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGBbZGF0YS10YWJEZXNjPScke3RoaXNFbC5kYXRhc2V0LnRhYn0nXWBcclxuICAgICk7XHJcblxyXG4gICAgWy4uLnRhYkNvbnRlbnRDYXRhbG9nLCAuLi5hcnJdLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSB7XHJcbiAgICAgIGNvbnRlbnRDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB0YWJEZXNjLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBib3hUYWJDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpc0VsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRhYkRlc2MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyksIDUwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5idG5CYWNrQ2F0YWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBib3hUYWJDYXRhbG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGNvbnRlbnRDYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIW9wZW5NZW51Q2F0YWxvZ1swXS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICFvcGVuTWVudUNhdGFsb2dbMV0uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhbWVudUNhdGFsb2cuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgKVxyXG4gICAgY2xvc2VDYXRhbG9nKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyQmFubmVyID0gbmV3IFN3aXBlcignLmJhbm5lcl9fc2xpZGVyJywge1xyXG4gIGVmZmVjdDogJ2ZhZGUnLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BlZWQ6IDIwMDAsXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiA1MDAwLFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmJhbm5lcl9fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5iYW5uZXJfX3NsaWRlci1idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLmJhbm5lcl9fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcclxuICB9LFxyXG4gIG9uOiB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCBtZW51QmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYmFubmVyJyk7XHJcbiAgICAgIGNvbnN0IGNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpO1xyXG4gICAgICBjb25zdCBjbG9zZUNhdGFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1jbG9zZScpO1xyXG5cclxuICAgICAgb3Blbk1lbnVCYW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmF1dG9wbGF5LnN0b3AoKSk7XHJcbiAgICAgIG9wZW5NZW51Q2F0YWxvZy5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXV0b3BsYXkuc3RvcCgpKVxyXG4gICAgICApO1xyXG4gICAgICBjbG9zZUNhdGFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmF1dG9wbGF5LnN0YXJ0KCkpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW9wZW5NZW51Q2F0YWxvZ1swXS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICFvcGVuTWVudUNhdGFsb2dbMV0uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAhY2F0YWxvZy5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICFvcGVuTWVudUJhbm5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICFtZW51QmFubmVyLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gICAgICAgIClcclxuICAgICAgICAgIHRoaXMuYXV0b3BsYXkuc3RhcnQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gUG9wdXBcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcclxuY29uc3QgcG9wdXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtYm94Jyk7XHJcbmNvbnN0IHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2xvc2UnKTtcclxuXHJcblsnY29tbW9uLWZvcm0nLCAnc2VhcmNoLWZvcm0nLCAnc2VydmljZXMtZm9ybScsICdjb250YWN0cy1mb3JtJywgJ2Fib3V0LWZvcm0nXVxyXG4gIC5tYXAoKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpXHJcbiAgLmZpbHRlcigoZWwpID0+IGVsKVxyXG4gIC5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG5wb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhcG9wdXBCb3guY29udGFpbnMoZS50YXJnZXQpKVxyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgbGFiZWxEZXNjRmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgJy5jb21tb24tZm9ybV9fbGFiZWxbZm9yPWZpbGVdIHNwYW4nXHJcbik7XHJcbmNvbnN0IGlucHV0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tb24tZm9ybV9faW5wdXRbdHlwZT1maWxlXScpO1xyXG5cclxuaWYgKGlucHV0RmlsZSlcclxuICBpbnB1dEZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGxhYmVsRGVzY0ZpbGUudGV4dENvbnRlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0ubmFtZTtcclxuICB9KTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
