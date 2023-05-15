/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxuLy8gQ2hhbmdlIExvZ29cclxuZnVuY3Rpb24gY2hhbmdlTG9nbygpIHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSBsb2dvLnNyYyA9IGBpbWcvbG9nby1taW4uc3ZnYDtcclxuICBlbHNlIGxvZ28uc3JjID0gYGltZy9sb2dvLnN2Z2A7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VMb2dvKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2VMb2dvKTtcclxuXHJcbi8vIFRvZ2dsZSBtZW51XHJcbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1iYW5uZXInKSkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4gIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNsb3NlJyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpO1xyXG5cclxuICBvcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIGxpbmtzLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICk7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFvcGVuTWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG4gICAgKVxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpbWFnZURlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2ltZycpO1xyXG5jb25zdCBvYnNlcnZlclRyYW5zbGF0ZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjgpXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZylcclxuICAgICAgICBpbWFnZURlc2MuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICAgICAgZWxzZSBpbWFnZURlc2MuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICB9LFxyXG4gIHtcclxuICAgIHRocmVzaG9sZDogWzAuNl0sXHJcbiAgfVxyXG4pO1xyXG5vYnNlcnZlclRyYW5zbGF0ZS5vYnNlcnZlKC4uLmltYWdlRGVzYyk7XHJcblxyXG5jb25zdCBzd2lwZXJSZXZpZXdzID0gbmV3IFN3aXBlcignLmFib3V0LXJldmlld3NfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5hYm91dC1yZXZpZXdzX19idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuYWJvdXQtcmV2aWV3c19fYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLmFib3V0LXJldmlld3NfX3Njcm9sbGJhcicsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjksXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJldmlld1RleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmlldycpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgaWYgKHJldmlld1RleHRhcmVhLnNjcm9sbEhlaWdodCA8PSAxMjApXHJcbiAgICByZXZpZXdUZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2Nyb2xsJyk7XHJcbiAgZWxzZSByZXZpZXdUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtc2Nyb2xsJyk7XHJcbn0pO1xyXG5yZXZpZXdUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxyXG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtaGVpZ2h0JylcclxuKTtcclxucmV2aWV3VGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICBpZiAodGhpc0VsLnZhbHVlID09PSAnJykgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1oZWlnaHQnKTtcclxuICBpZiAodGhpc0VsLnNjcm9sbEhlaWdodCA8PSAxMjApIHRoaXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2Nyb2xsJyk7XHJcbn0pO1xyXG5yZXZpZXdUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICBpZiAodGhpc0VsLnNjcm9sbEhlaWdodCA+IDEyMCkgdGhpc0VsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zY3JvbGwnKTtcclxuICBlbHNlIHRoaXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2Nyb2xsJyk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0LWZvcm1fX2xhYmVsLWJveCBsYWJlbCcpXHJcbiAgLmZvckVhY2goKGVsLCBpbmRleCwgYXJyKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGVsLmNoaWxkcmVuWzBdO1xyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgYXJyLmZvckVhY2goKGVsZW0sIGlkKSA9PiB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoaWQgPD0gaW5kZXgpIGVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4vLyBQb3B1cFxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xyXG5jb25zdCBwb3B1cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1ib3gnKTtcclxuY29uc3QgcG9wdXBDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jbG9zZScpO1xyXG5cclxuWydjb21tb24tZm9ybScsICdzZWFyY2gtZm9ybScsICdzZXJ2aWNlcy1mb3JtJywgJ2NvbnRhY3RzLWZvcm0nLCAnYWJvdXQtZm9ybSddXHJcbiAgLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSlcclxuICAuZmlsdGVyKChlbCkgPT4gZWwpXHJcbiAgLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbnBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFwb3B1cEJveC5jb250YWlucyhlLnRhcmdldCkpXHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4vLyBTY2FsZSBpbWFnZSBmb3JtXHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1vbi1mb3JtX19pbWcnKTtcclxuY29uc3Qgb2JzZXJ2ZXJJbWFnZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjgpXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZylcclxuICAgICAgICBpbWFnZS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gICAgICBlbHNlIGltYWdlLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHJlc2hvbGQ6IFswLjRdLFxyXG4gIH1cclxuKTtcclxub2JzZXJ2ZXJJbWFnZS5vYnNlcnZlKC4uLmltYWdlKTtcclxuXHJcbi8vIE1hcFxyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3RzLXNsaWRlcl9fYWRkcmVzcycpO1xyXG5cclxueW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGxldCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgIGNlbnRlcjogWzUzLjY3NjM0NzkwOTYyOTA5NCwgMjMuODI4MDA1MjQyMDUwMTUzXSxcclxuICAgIHpvb206IDE4LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcHRpb25QbGFjZW1hcmsgPSB7XHJcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICBpY29uSW1hZ2VIcmVmOiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICBcIjxzdmcgd2lkdGg9JzU1JyBoZWlnaHQ9JzcwJyB2aWV3Qm94PScwIDAgNTUgNzAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yNy4yOTk2IDcwQzI4Ljc0NjUgNzAgNTQuNTk5MyA0Mi4zNzczIDU0LjU5OTMgMjcuM0M1NC41OTkzIDEyLjIyMjYgNDIuMzc2NyAwIDI3LjI5OTYgMEMxMi4yMjI0IDAgMCAxMi4yMjI2IDAgMjcuM0MwIDQyLjM3NzMgMjUuODUyOCA3MCAyNy4yOTk2IDcwWk0yNy4yOTk3IDQwLjk1NDVDMzQuOTQzOCA0MC45NTQ1IDQxLjE0MDYgMzQuNzU3NSA0MS4xNDA2IDI3LjExMzNDNDEuMTQwNiAxOS40NjkgMzQuOTQzOCAxMy4yNzIyIDI3LjI5OTcgMTMuMjcyMkMxOS42NTU1IDEzLjI3MjIgMTMuNDU4OCAxOS40NjkgMTMuNDU4OCAyNy4xMTMzQzEzLjQ1ODggMzQuNzU3NSAxOS42NTU1IDQwLjk1NDUgMjcuMjk5NyA0MC45NTQ1WicgZmlsbD0nIzFEMzU1MicvPjwvc3ZnPlwiXHJcbiAgICApfWAsXHJcbiAgICBpY29uSW1hZ2VTaXplOiBbNTQsIDcwXSxcclxuICAgIGljb25JbWFnZU9mZnNldDogWy0zLCAtNDJdLFxyXG4gIH07XHJcblxyXG4gIGlmICh0YWJzWzBdKSB7XHJcbiAgICBbXHJcbiAgICAgIHsgaWQ6ICd0YWItMScsIHZhbHVlOiBbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi0yJywgdmFsdWU6IFs1Ni44ODA4Mzg1Njc4MTg5NCwgNjAuNTE4MjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTMnLCB2YWx1ZTogWzU1Ljc1NDgwNTU2OTAwNDA5LCAzNy41ODQ1NTA0OTk5OTk5OV0gfSxcclxuICAgICAgeyBpZDogJ3RhYi00JywgdmFsdWU6IFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTUnLCB2YWx1ZTogWzU2Ljg4MDgzODU2NzgxODk0LCA2MC41MTgyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItNicsIHZhbHVlOiBbNTUuNzU0ODA1NTY5MDA0MDksIDM3LjU4NDU1MDQ5OTk5OTk5XSB9LFxyXG4gICAgXS5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgICBjb29yZGluYXRlLnZhbHVlLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIG9wdGlvblBsYWNlbWFya1xyXG4gICAgICApO1xyXG5cclxuICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG5cclxuICAgICAgdGFicy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhYiA9PT0gY29vcmRpbmF0ZS5pZClcclxuICAgICAgICAgICAgbXlNYXAucGFuVG8obXlQbGFjZW1hcmsuZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgIFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSxcclxuICAgICAge30sXHJcbiAgICAgIG9wdGlvblBsYWNlbWFya1xyXG4gICAgKTtcclxuXHJcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcbiAgfVxyXG5cclxuICBteU1hcFxyXG4gICAgLnBhblRvKFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSwgeyBmbHlpbmc6IHRydWUgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbXlNYXAuc2V0Wm9vbSgxNyk7XHJcbiAgICB9KTtcclxuXHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpO1xyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XHJcbn1cclxuIl0sImZpbGUiOiJhYm91dC5qcyJ9
