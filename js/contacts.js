/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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

const swiperContacts = new Swiper('.contacts-slider__slider', {
  loop: true,
  navigation: {
    nextEl: '.contacts-slider__btn-next',
    prevEl: '.contacts-slider__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  speed: 1000,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 29,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 29,
    },
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

const tabContacts = document.querySelectorAll('[data-tab]');
const tabItemContacts = document.querySelectorAll('[data-itemtab]');

tabContacts.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const thisEl = e.currentTarget;

    [...tabContacts, ...tabItemContacts].forEach((el) =>
      el.classList.remove('active')
    );

    [
      thisEl,
      document.querySelector(`[data-itemtab='${thisEl.dataset.tab}']`),
    ].forEach((el) => el.classList.toggle('active'));
  });
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

// Scale image form
const image = document.querySelectorAll('.common-form__img');
const observerImage = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting)
        image.forEach((el) => el.classList.add('active'));
      else image.forEach((el) => el.classList.remove('active'));
  },
  {
    threshold: [0.4],
  }
);
observerImage.observe(...image);

// Map
const tabs = document.querySelectorAll('.contacts-slider__address');

ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [53.676347909629094, 23.828005242050153],
    zoom: 18,
  });

  const optionPlacemark = {
    iconLayout: 'default#image',
    iconImageHref: `data:image/svg+xml,${encodeURIComponent(
      "<svg width='55' height='70' viewBox='0 0 55 70' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M27.2996 70C28.7465 70 54.5993 42.3773 54.5993 27.3C54.5993 12.2226 42.3767 0 27.2996 0C12.2224 0 0 12.2226 0 27.3C0 42.3773 25.8528 70 27.2996 70ZM27.2997 40.9545C34.9438 40.9545 41.1406 34.7575 41.1406 27.1133C41.1406 19.469 34.9438 13.2722 27.2997 13.2722C19.6555 13.2722 13.4588 19.469 13.4588 27.1133C13.4588 34.7575 19.6555 40.9545 27.2997 40.9545Z' fill='#1D3552'/></svg>"
    )}`,
    iconImageSize: [54, 70],
    iconImageOffset: [-3, -42],
  };

  if (tabs[0]) {
    [
      { id: 'tab-1', value: [53.67669826968073, 23.830183195770243] },
      { id: 'tab-2', value: [56.88083856781894, 60.518243] },
      { id: 'tab-3', value: [55.75480556900409, 37.58455049999999] },
      { id: 'tab-4', value: [53.67669826968073, 23.830183195770243] },
      { id: 'tab-5', value: [56.88083856781894, 60.518243] },
      { id: 'tab-6', value: [55.75480556900409, 37.58455049999999] },
    ].forEach((coordinate) => {
      const myPlacemark = new ymaps.Placemark(
        coordinate.value,
        {},
        optionPlacemark
      );

      myMap.geoObjects.add(myPlacemark);

      tabs.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          if (e.currentTarget.dataset.tab === coordinate.id)
            myMap.panTo(myPlacemark.geometry.getCoordinates(), {
              duration: 500,
            });
        });
      });
    });
  } else {
    const myPlacemark = new ymaps.Placemark(
      [53.67669826968073, 23.830183195770243],
      {},
      optionPlacemark
    );

    myMap.geoObjects.add(myPlacemark);
  }

  myMap
    .panTo([53.67669826968073, 23.830183195770243], { flying: true })
    .then(function () {
      myMap.setZoom(17);
    });

  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHN3aXBlckNvbnRhY3RzID0gbmV3IFN3aXBlcignLmNvbnRhY3RzLXNsaWRlcl9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNvbnRhY3RzLXNsaWRlcl9fYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmNvbnRhY3RzLXNsaWRlcl9fYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjksXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgdGFiQ29udGFjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJdJyk7XHJcbmNvbnN0IHRhYkl0ZW1Db250YWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWl0ZW10YWJdJyk7XHJcblxyXG50YWJDb250YWN0cy5mb3JFYWNoKChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIFsuLi50YWJDb250YWN0cywgLi4udGFiSXRlbUNvbnRhY3RzXS5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICk7XHJcblxyXG4gICAgW1xyXG4gICAgICB0aGlzRWwsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWl0ZW10YWI9JyR7dGhpc0VsLmRhdGFzZXQudGFifSddYCksXHJcbiAgICBdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gUG9wdXBcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcclxuY29uc3QgcG9wdXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtYm94Jyk7XHJcbmNvbnN0IHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2xvc2UnKTtcclxuXHJcblsnY29tbW9uLWZvcm0nLCAnc2VhcmNoLWZvcm0nLCAnc2VydmljZXMtZm9ybScsICdjb250YWN0cy1mb3JtJywgJ2Fib3V0LWZvcm0nXVxyXG4gIC5tYXAoKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpXHJcbiAgLmZpbHRlcigoZWwpID0+IGVsKVxyXG4gIC5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG5wb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhcG9wdXBCb3guY29udGFpbnMoZS50YXJnZXQpKVxyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gU2NhbGUgaW1hZ2UgZm9ybVxyXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tb24tZm9ybV9faW1nJyk7XHJcbmNvbnN0IG9ic2VydmVySW1hZ2UgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgKFtlbnRyeV0pID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gNzY4KVxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpXHJcbiAgICAgICAgaW1hZ2UuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICAgICAgZWxzZSBpbWFnZS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC40XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVySW1hZ2Uub2JzZXJ2ZSguLi5pbWFnZSk7XHJcblxyXG4vLyBNYXBcclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0cy1zbGlkZXJfX2FkZHJlc3MnKTtcclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBsZXQgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICBjZW50ZXI6IFs1My42NzYzNDc5MDk2MjkwOTQsIDIzLjgyODAwNTI0MjA1MDE1M10sXHJcbiAgICB6b29tOiAxOCxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uUGxhY2VtYXJrID0ge1xyXG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgaWNvbkltYWdlSHJlZjogYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgXCI8c3ZnIHdpZHRoPSc1NScgaGVpZ2h0PSc3MCcgdmlld0JveD0nMCAwIDU1IDcwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjcuMjk5NiA3MEMyOC43NDY1IDcwIDU0LjU5OTMgNDIuMzc3MyA1NC41OTkzIDI3LjNDNTQuNTk5MyAxMi4yMjI2IDQyLjM3NjcgMCAyNy4yOTk2IDBDMTIuMjIyNCAwIDAgMTIuMjIyNiAwIDI3LjNDMCA0Mi4zNzczIDI1Ljg1MjggNzAgMjcuMjk5NiA3MFpNMjcuMjk5NyA0MC45NTQ1QzM0Ljk0MzggNDAuOTU0NSA0MS4xNDA2IDM0Ljc1NzUgNDEuMTQwNiAyNy4xMTMzQzQxLjE0MDYgMTkuNDY5IDM0Ljk0MzggMTMuMjcyMiAyNy4yOTk3IDEzLjI3MjJDMTkuNjU1NSAxMy4yNzIyIDEzLjQ1ODggMTkuNDY5IDEzLjQ1ODggMjcuMTEzM0MxMy40NTg4IDM0Ljc1NzUgMTkuNjU1NSA0MC45NTQ1IDI3LjI5OTcgNDAuOTU0NVonIGZpbGw9JyMxRDM1NTInLz48L3N2Zz5cIlxyXG4gICAgKX1gLFxyXG4gICAgaWNvbkltYWdlU2l6ZTogWzU0LCA3MF0sXHJcbiAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMywgLTQyXSxcclxuICB9O1xyXG5cclxuICBpZiAodGFic1swXSkge1xyXG4gICAgW1xyXG4gICAgICB7IGlkOiAndGFiLTEnLCB2YWx1ZTogWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItMicsIHZhbHVlOiBbNTYuODgwODM4NTY3ODE4OTQsIDYwLjUxODI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi0zJywgdmFsdWU6IFs1NS43NTQ4MDU1NjkwMDQwOSwgMzcuNTg0NTUwNDk5OTk5OTldIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItNCcsIHZhbHVlOiBbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi01JywgdmFsdWU6IFs1Ni44ODA4Mzg1Njc4MTg5NCwgNjAuNTE4MjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTYnLCB2YWx1ZTogWzU1Ljc1NDgwNTU2OTAwNDA5LCAzNy41ODQ1NTA0OTk5OTk5OV0gfSxcclxuICAgIF0uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgY29vcmRpbmF0ZS52YWx1ZSxcclxuICAgICAgICB7fSxcclxuICAgICAgICBvcHRpb25QbGFjZW1hcmtcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuXHJcbiAgICAgIHRhYnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YWIgPT09IGNvb3JkaW5hdGUuaWQpXHJcbiAgICAgICAgICAgIG15TWFwLnBhblRvKG15UGxhY2VtYXJrLmdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCksIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICBbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10sXHJcbiAgICAgIHt9LFxyXG4gICAgICBvcHRpb25QbGFjZW1hcmtcclxuICAgICk7XHJcblxyXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG4gIH1cclxuXHJcbiAgbXlNYXBcclxuICAgIC5wYW5UbyhbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10sIHsgZmx5aW5nOiB0cnVlIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG15TWFwLnNldFpvb20oMTcpO1xyXG4gICAgfSk7XHJcblxyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnem9vbUNvbnRyb2wnKTtcclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xyXG59XHJcbiJdLCJmaWxlIjoiY29udGFjdHMuanMifQ==
