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

const imageDesc = document.querySelectorAll('.about__img');
const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting)
        imageDesc.forEach((el) => el.classList.add('active'));
      else imageDesc.forEach((el) => el.classList.remove('active'));
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(...imageDesc);

const swiperReviews = new Swiper('.about-reviews__slider', {
  loop: true,
  navigation: {
    nextEl: '.about-reviews__btn-next',
    prevEl: '.about-reviews__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  scrollbar: {
    el: '.about-reviews__scrollbar',
    draggable: true,
  },
  speed: 1000,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 29,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

const reviewTextarea = document.getElementById('review');

window.addEventListener('load', () => {
  if (reviewTextarea.scrollHeight <= 120)
    reviewTextarea.classList.remove('active-scroll');
  else reviewTextarea.classList.add('active-scroll');
});
reviewTextarea.addEventListener('click', (e) =>
  e.currentTarget.classList.add('active-height')
);
reviewTextarea.addEventListener('blur', (e) => {
  const thisEl = e.currentTarget;

  if (thisEl.value === '') e.currentTarget.classList.remove('active-height');
  if (thisEl.scrollHeight <= 120) thisEl.classList.remove('active-scroll');
});
reviewTextarea.addEventListener('input', (e) => {
  const thisEl = e.currentTarget;

  if (thisEl.scrollHeight > 120) thisEl.classList.add('active-scroll');
  else thisEl.classList.remove('active-scroll');
});

document
  .querySelectorAll('.about-form__label-box label')
  .forEach((el, index, arr) => {
    const input = el.children[0];

    input.addEventListener('change', () => {
      arr.forEach((elem, id) => {
        elem.classList.remove('active');
        if (id <= index) elem.classList.add('active');
      });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9faW1nJyk7XHJcbmNvbnN0IG9ic2VydmVyVHJhbnNsYXRlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gIChbZW50cnldKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDc2OClcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxyXG4gICAgICAgIGltYWdlRGVzYy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gICAgICBlbHNlIGltYWdlRGVzYy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC42XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVyVHJhbnNsYXRlLm9ic2VydmUoLi4uaW1hZ2VEZXNjKTtcclxuXHJcbmNvbnN0IHN3aXBlclJldmlld3MgPSBuZXcgU3dpcGVyKCcuYWJvdXQtcmV2aWV3c19fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmFib3V0LXJldmlld3NfX2J0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5hYm91dC1yZXZpZXdzX19idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6ICcuYWJvdXQtcmV2aWV3c19fc2Nyb2xsYmFyJyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmV2aWV3VGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV2aWV3Jyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICBpZiAocmV2aWV3VGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IDw9IDEyMClcclxuICAgIHJldmlld1RleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zY3JvbGwnKTtcclxuICBlbHNlIHJldmlld1RleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zY3JvbGwnKTtcclxufSk7XHJcbnJldmlld1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XHJcbiAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1oZWlnaHQnKVxyXG4pO1xyXG5yZXZpZXdUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcclxuICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gIGlmICh0aGlzRWwudmFsdWUgPT09ICcnKSBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWhlaWdodCcpO1xyXG4gIGlmICh0aGlzRWwuc2Nyb2xsSGVpZ2h0IDw9IDEyMCkgdGhpc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zY3JvbGwnKTtcclxufSk7XHJcbnJldmlld1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gIGlmICh0aGlzRWwuc2Nyb2xsSGVpZ2h0ID4gMTIwKSB0aGlzRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNjcm9sbCcpO1xyXG4gIGVsc2UgdGhpc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zY3JvbGwnKTtcclxufSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXQtZm9ybV9fbGFiZWwtYm94IGxhYmVsJylcclxuICAuZm9yRWFjaCgoZWwsIGluZGV4LCBhcnIpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZWwuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBhcnIuZm9yRWFjaCgoZWxlbSwgaWQpID0+IHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChpZCA8PSBpbmRleCkgZWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5bJ2NvbW1vbi1mb3JtJywgJ3NlYXJjaC1mb3JtJywgJ3NlcnZpY2VzLWZvcm0nLCAnY29udGFjdHMtZm9ybScsICdhYm91dC1mb3JtJ11cclxuICAubWFwKChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxyXG4gIC5maWx0ZXIoKGVsKSA9PiBlbClcclxuICAuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIXBvcHVwQm94LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vIFNjYWxlIGltYWdlIGZvcm1cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uLWZvcm1fX2ltZycpO1xyXG5jb25zdCBvYnNlcnZlckltYWdlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gIChbZW50cnldKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDc2OClcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxyXG4gICAgICAgIGltYWdlLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgICAgIGVsc2UgaW1hZ2UuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICB9LFxyXG4gIHtcclxuICAgIHRocmVzaG9sZDogWzAuNF0sXHJcbiAgfVxyXG4pO1xyXG5vYnNlcnZlckltYWdlLm9ic2VydmUoLi4uaW1hZ2UpO1xyXG5cclxuLy8gTWFwXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdHMtc2xpZGVyX19hZGRyZXNzJyk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgY2VudGVyOiBbNTMuNjc2MzQ3OTA5NjI5MDk0LCAyMy44MjgwMDUyNDIwNTAxNTNdLFxyXG4gICAgem9vbTogMTgsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvblBsYWNlbWFyayA9IHtcclxuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgIGljb25JbWFnZUhyZWY6IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgIFwiPHN2ZyB3aWR0aD0nNTUnIGhlaWdodD0nNzAnIHZpZXdCb3g9JzAgMCA1NSA3MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTI3LjI5OTYgNzBDMjguNzQ2NSA3MCA1NC41OTkzIDQyLjM3NzMgNTQuNTk5MyAyNy4zQzU0LjU5OTMgMTIuMjIyNiA0Mi4zNzY3IDAgMjcuMjk5NiAwQzEyLjIyMjQgMCAwIDEyLjIyMjYgMCAyNy4zQzAgNDIuMzc3MyAyNS44NTI4IDcwIDI3LjI5OTYgNzBaTTI3LjI5OTcgNDAuOTU0NUMzNC45NDM4IDQwLjk1NDUgNDEuMTQwNiAzNC43NTc1IDQxLjE0MDYgMjcuMTEzM0M0MS4xNDA2IDE5LjQ2OSAzNC45NDM4IDEzLjI3MjIgMjcuMjk5NyAxMy4yNzIyQzE5LjY1NTUgMTMuMjcyMiAxMy40NTg4IDE5LjQ2OSAxMy40NTg4IDI3LjExMzNDMTMuNDU4OCAzNC43NTc1IDE5LjY1NTUgNDAuOTU0NSAyNy4yOTk3IDQwLjk1NDVaJyBmaWxsPScjMUQzNTUyJy8+PC9zdmc+XCJcclxuICAgICl9YCxcclxuICAgIGljb25JbWFnZVNpemU6IFs1NCwgNzBdLFxyXG4gICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMsIC00Ml0sXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRhYnNbMF0pIHtcclxuICAgIFtcclxuICAgICAgeyBpZDogJ3RhYi0xJywgdmFsdWU6IFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTInLCB2YWx1ZTogWzU2Ljg4MDgzODU2NzgxODk0LCA2MC41MTgyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItMycsIHZhbHVlOiBbNTUuNzU0ODA1NTY5MDA0MDksIDM3LjU4NDU1MDQ5OTk5OTk5XSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTQnLCB2YWx1ZTogWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItNScsIHZhbHVlOiBbNTYuODgwODM4NTY3ODE4OTQsIDYwLjUxODI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi02JywgdmFsdWU6IFs1NS43NTQ4MDU1NjkwMDQwOSwgMzcuNTg0NTUwNDk5OTk5OTldIH0sXHJcbiAgICBdLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgIGNvb3JkaW5hdGUudmFsdWUsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgb3B0aW9uUGxhY2VtYXJrXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcblxyXG4gICAgICB0YWJzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiID09PSBjb29yZGluYXRlLmlkKVxyXG4gICAgICAgICAgICBteU1hcC5wYW5UbyhteVBsYWNlbWFyay5nZW9tZXRyeS5nZXRDb29yZGluYXRlcygpLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdLFxyXG4gICAgICB7fSxcclxuICAgICAgb3B0aW9uUGxhY2VtYXJrXHJcbiAgICApO1xyXG5cclxuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICB9XHJcblxyXG4gIG15TWFwXHJcbiAgICAucGFuVG8oWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdLCB7IGZseWluZzogdHJ1ZSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBteU1hcC5zZXRab29tKDE3KTtcclxuICAgIH0pO1xyXG5cclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcclxufVxyXG4iXSwiZmlsZSI6ImFib3V0LmpzIn0=