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

// Catalog -- Swiper-slider
const swiperCatalog = new Swiper('.catalog__slider', {
  loop: true,
  navigation: {
    nextEl: '.catalog__slider-btn-next',
    prevEl: '.catalog__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  speed: 1000,
});

// Catalog -- Popup-label
const labelContent = document.getElementById('label-content');
let elem = '';

document.querySelectorAll('.catalog__label').forEach((el) => {
  el.addEventListener('click', (e) => {
    elem = e.currentTarget;

    if (screen.width > 768) {
      labelContent.style.left = `${elem.offsetLeft + elem.offsetWidth + 29}px`;
      labelContent.style.top = `${
        elem.offsetTop - labelContent.offsetHeight
      }px`;
    }

    labelContent.classList.add('active');
  });
});
document.body.addEventListener('click', (e) => {
  if (elem)
    if (!elem.contains(e.target) && !labelContent.contains(e.target))
      labelContent.classList.remove('active');
});

// Popular
const swiperCommon = new Swiper('.common-slider__slider', {
  loop: true,
  navigation: {
    nextEl: '.common-slider__btn-next',
    prevEl: '.common-slider__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  scrollbar: {
    el: '.common-slider__scrollbar',
    draggable: true,
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
  on: {
    init: function () {
      const last = this.slides[this.loopedSlides];
      last.style.opacity = '0.2';
    },
    slideChange: function () {
      const first = this.slides[this.activeIndex];
      const last = this.slides[this.activeIndex + this.loopedSlides];
      first.style.opacity = '1';
      last.style.opacity = '0.2';
    },
  },
});

// Add basket & favorite
document.querySelectorAll('.product__btn').forEach((el) => {
  el.addEventListener('click', (e) => e.currentTarget.classList.toggle('add'));
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

// About translate block
const blockAbout = document.getElementById('block-about');
const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting) blockAbout.classList.add('active');
      else blockAbout.classList.remove('active');
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(blockAbout);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBDaGFuZ2UgTG9nb1xyXG5mdW5jdGlvbiBjaGFuZ2VMb2dvKCkge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG5cclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGxvZ28uc3JjID0gYGltZy9sb2dvLW1pbi5zdmdgO1xyXG4gIGVsc2UgbG9nby5zcmMgPSBgaW1nL2xvZ28uc3ZnYDtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUxvZ28pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZUxvZ28pO1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIENhdGFsb2cgLS0gU3dpcGVyLXNsaWRlclxyXG5jb25zdCBzd2lwZXJDYXRhbG9nID0gbmV3IFN3aXBlcignLmNhdGFsb2dfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5jYXRhbG9nX19zbGlkZXItYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmNhdGFsb2dfX3NsaWRlci1idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG59KTtcclxuXHJcbi8vIENhdGFsb2cgLS0gUG9wdXAtbGFiZWxcclxuY29uc3QgbGFiZWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsLWNvbnRlbnQnKTtcclxubGV0IGVsZW0gPSAnJztcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19sYWJlbCcpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZWxlbSA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBpZiAoc2NyZWVuLndpZHRoID4gNzY4KSB7XHJcbiAgICAgIGxhYmVsQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7ZWxlbS5vZmZzZXRMZWZ0ICsgZWxlbS5vZmZzZXRXaWR0aCArIDI5fXB4YDtcclxuICAgICAgbGFiZWxDb250ZW50LnN0eWxlLnRvcCA9IGAke1xyXG4gICAgICAgIGVsZW0ub2Zmc2V0VG9wIC0gbGFiZWxDb250ZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICB9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9KTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChlbGVtKVxyXG4gICAgaWYgKCFlbGVtLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhbGFiZWxDb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgICAgbGFiZWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vIFBvcHVsYXJcclxuY29uc3Qgc3dpcGVyQ29tbW9uID0gbmV3IFN3aXBlcignLmNvbW1vbi1zbGlkZXJfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5jb21tb24tc2xpZGVyX19idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY29tbW9uLXNsaWRlcl9fYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLmNvbW1vbi1zbGlkZXJfX3Njcm9sbGJhcicsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjksXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc2xpZGVzW3RoaXMubG9vcGVkU2xpZGVzXTtcclxuICAgICAgbGFzdC5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XHJcbiAgICB9LFxyXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLnNsaWRlc1t0aGlzLmFjdGl2ZUluZGV4XTtcclxuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXggKyB0aGlzLmxvb3BlZFNsaWRlc107XHJcbiAgICAgIGZpcnN0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIGxhc3Quc3R5bGUub3BhY2l0eSA9ICcwLjInO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEFkZCBiYXNrZXQgJiBmYXZvcml0ZVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fYnRuJykuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWRkJykpO1xyXG59KTtcclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5bJ2NvbW1vbi1mb3JtJywgJ3NlYXJjaC1mb3JtJywgJ3NlcnZpY2VzLWZvcm0nLCAnY29udGFjdHMtZm9ybScsICdhYm91dC1mb3JtJ11cclxuICAubWFwKChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxyXG4gIC5maWx0ZXIoKGVsKSA9PiBlbClcclxuICAuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIXBvcHVwQm94LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vIFNjYWxlIGltYWdlIGZvcm1cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uLWZvcm1fX2ltZycpO1xyXG5jb25zdCBvYnNlcnZlckltYWdlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gIChbZW50cnldKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDc2OClcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxyXG4gICAgICAgIGltYWdlLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgICAgIGVsc2UgaW1hZ2UuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICB9LFxyXG4gIHtcclxuICAgIHRocmVzaG9sZDogWzAuNF0sXHJcbiAgfVxyXG4pO1xyXG5vYnNlcnZlckltYWdlLm9ic2VydmUoLi4uaW1hZ2UpO1xyXG5cclxuLy8gQWJvdXQgdHJhbnNsYXRlIGJsb2NrXHJcbmNvbnN0IGJsb2NrQWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvY2stYWJvdXQnKTtcclxuY29uc3Qgb2JzZXJ2ZXJUcmFuc2xhdGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgKFtlbnRyeV0pID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gNzY4KVxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIGJsb2NrQWJvdXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGVsc2UgYmxvY2tBYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9LFxyXG4gIHtcclxuICAgIHRocmVzaG9sZDogWzAuNl0sXHJcbiAgfVxyXG4pO1xyXG5vYnNlcnZlclRyYW5zbGF0ZS5vYnNlcnZlKGJsb2NrQWJvdXQpO1xyXG5cclxuLy8gTWFwXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdHMtc2xpZGVyX19hZGRyZXNzJyk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgY2VudGVyOiBbNTMuNjc2MzQ3OTA5NjI5MDk0LCAyMy44MjgwMDUyNDIwNTAxNTNdLFxyXG4gICAgem9vbTogMTgsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvblBsYWNlbWFyayA9IHtcclxuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgIGljb25JbWFnZUhyZWY6IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgIFwiPHN2ZyB3aWR0aD0nNTUnIGhlaWdodD0nNzAnIHZpZXdCb3g9JzAgMCA1NSA3MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTI3LjI5OTYgNzBDMjguNzQ2NSA3MCA1NC41OTkzIDQyLjM3NzMgNTQuNTk5MyAyNy4zQzU0LjU5OTMgMTIuMjIyNiA0Mi4zNzY3IDAgMjcuMjk5NiAwQzEyLjIyMjQgMCAwIDEyLjIyMjYgMCAyNy4zQzAgNDIuMzc3MyAyNS44NTI4IDcwIDI3LjI5OTYgNzBaTTI3LjI5OTcgNDAuOTU0NUMzNC45NDM4IDQwLjk1NDUgNDEuMTQwNiAzNC43NTc1IDQxLjE0MDYgMjcuMTEzM0M0MS4xNDA2IDE5LjQ2OSAzNC45NDM4IDEzLjI3MjIgMjcuMjk5NyAxMy4yNzIyQzE5LjY1NTUgMTMuMjcyMiAxMy40NTg4IDE5LjQ2OSAxMy40NTg4IDI3LjExMzNDMTMuNDU4OCAzNC43NTc1IDE5LjY1NTUgNDAuOTU0NSAyNy4yOTk3IDQwLjk1NDVaJyBmaWxsPScjMUQzNTUyJy8+PC9zdmc+XCJcclxuICAgICl9YCxcclxuICAgIGljb25JbWFnZVNpemU6IFs1NCwgNzBdLFxyXG4gICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMsIC00Ml0sXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRhYnNbMF0pIHtcclxuICAgIFtcclxuICAgICAgeyBpZDogJ3RhYi0xJywgdmFsdWU6IFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTInLCB2YWx1ZTogWzU2Ljg4MDgzODU2NzgxODk0LCA2MC41MTgyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItMycsIHZhbHVlOiBbNTUuNzU0ODA1NTY5MDA0MDksIDM3LjU4NDU1MDQ5OTk5OTk5XSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTQnLCB2YWx1ZTogWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItNScsIHZhbHVlOiBbNTYuODgwODM4NTY3ODE4OTQsIDYwLjUxODI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi02JywgdmFsdWU6IFs1NS43NTQ4MDU1NjkwMDQwOSwgMzcuNTg0NTUwNDk5OTk5OTldIH0sXHJcbiAgICBdLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgIGNvb3JkaW5hdGUudmFsdWUsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgb3B0aW9uUGxhY2VtYXJrXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcblxyXG4gICAgICB0YWJzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiID09PSBjb29yZGluYXRlLmlkKVxyXG4gICAgICAgICAgICBteU1hcC5wYW5UbyhteVBsYWNlbWFyay5nZW9tZXRyeS5nZXRDb29yZGluYXRlcygpLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdLFxyXG4gICAgICB7fSxcclxuICAgICAgb3B0aW9uUGxhY2VtYXJrXHJcbiAgICApO1xyXG5cclxuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICB9XHJcblxyXG4gIG15TWFwXHJcbiAgICAucGFuVG8oWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdLCB7IGZseWluZzogdHJ1ZSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBteU1hcC5zZXRab29tKDE3KTtcclxuICAgIH0pO1xyXG5cclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcclxufVxyXG4iXSwiZmlsZSI6InNvZmFzLW1haW4uanMifQ==
