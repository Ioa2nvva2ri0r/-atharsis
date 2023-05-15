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

const swiperPartitions = new Swiper('.partitions__slider', {
  loop: true,
  navigation: {
    nextEl: '.partitions__slider-btn-next',
    prevEl: '.partitions__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aXRpb25zLW1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuXHJcbi8vIENoYW5nZSBMb2dvXHJcbmZ1bmN0aW9uIGNoYW5nZUxvZ28oKSB7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XHJcblxyXG4gIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkgbG9nby5zcmMgPSBgaW1nL2xvZ28tbWluLnN2Z2A7XHJcbiAgZWxzZSBsb2dvLnNyYyA9IGBpbWcvbG9nby5zdmdgO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlTG9nbyk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hhbmdlTG9nbyk7XHJcblxyXG4vLyBUb2dnbGUgbWVudVxyXG5pZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItYmFubmVyJykpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jbG9zZScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKTtcclxuXHJcbiAgb3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBsaW5rcy5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcclxuICApO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgIClcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgc3dpcGVyUGFydGl0aW9ucyA9IG5ldyBTd2lwZXIoJy5wYXJ0aXRpb25zX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcucGFydGl0aW9uc19fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5wYXJ0aXRpb25zX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDMwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxufSk7XHJcblxyXG4vLyBTY2FsZSBpbWFnZSBmb3JtXHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1vbi1mb3JtX19pbWcnKTtcclxuY29uc3Qgb2JzZXJ2ZXJJbWFnZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjgpXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZylcclxuICAgICAgICBpbWFnZS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gICAgICBlbHNlIGltYWdlLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHJlc2hvbGQ6IFswLjRdLFxyXG4gIH1cclxuKTtcclxub2JzZXJ2ZXJJbWFnZS5vYnNlcnZlKC4uLmltYWdlKTtcclxuXHJcbi8vIEFib3V0IHRyYW5zbGF0ZSBibG9ja1xyXG5jb25zdCBibG9ja0Fib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLWFib3V0Jyk7XHJcbmNvbnN0IG9ic2VydmVyVHJhbnNsYXRlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gIChbZW50cnldKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDc2OClcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBibG9ja0Fib3V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBlbHNlIGJsb2NrQWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHJlc2hvbGQ6IFswLjZdLFxyXG4gIH1cclxuKTtcclxub2JzZXJ2ZXJUcmFuc2xhdGUub2JzZXJ2ZShibG9ja0Fib3V0KTtcclxuXHJcbi8vIE1hcFxyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3RzLXNsaWRlcl9fYWRkcmVzcycpO1xyXG5cclxueW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGxldCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgIGNlbnRlcjogWzUzLjY3NjM0NzkwOTYyOTA5NCwgMjMuODI4MDA1MjQyMDUwMTUzXSxcclxuICAgIHpvb206IDE4LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcHRpb25QbGFjZW1hcmsgPSB7XHJcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICBpY29uSW1hZ2VIcmVmOiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICBcIjxzdmcgd2lkdGg9JzU1JyBoZWlnaHQ9JzcwJyB2aWV3Qm94PScwIDAgNTUgNzAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yNy4yOTk2IDcwQzI4Ljc0NjUgNzAgNTQuNTk5MyA0Mi4zNzczIDU0LjU5OTMgMjcuM0M1NC41OTkzIDEyLjIyMjYgNDIuMzc2NyAwIDI3LjI5OTYgMEMxMi4yMjI0IDAgMCAxMi4yMjI2IDAgMjcuM0MwIDQyLjM3NzMgMjUuODUyOCA3MCAyNy4yOTk2IDcwWk0yNy4yOTk3IDQwLjk1NDVDMzQuOTQzOCA0MC45NTQ1IDQxLjE0MDYgMzQuNzU3NSA0MS4xNDA2IDI3LjExMzNDNDEuMTQwNiAxOS40NjkgMzQuOTQzOCAxMy4yNzIyIDI3LjI5OTcgMTMuMjcyMkMxOS42NTU1IDEzLjI3MjIgMTMuNDU4OCAxOS40NjkgMTMuNDU4OCAyNy4xMTMzQzEzLjQ1ODggMzQuNzU3NSAxOS42NTU1IDQwLjk1NDUgMjcuMjk5NyA0MC45NTQ1WicgZmlsbD0nIzFEMzU1MicvPjwvc3ZnPlwiXHJcbiAgICApfWAsXHJcbiAgICBpY29uSW1hZ2VTaXplOiBbNTQsIDcwXSxcclxuICAgIGljb25JbWFnZU9mZnNldDogWy0zLCAtNDJdLFxyXG4gIH07XHJcblxyXG4gIGlmICh0YWJzWzBdKSB7XHJcbiAgICBbXHJcbiAgICAgIHsgaWQ6ICd0YWItMScsIHZhbHVlOiBbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi0yJywgdmFsdWU6IFs1Ni44ODA4Mzg1Njc4MTg5NCwgNjAuNTE4MjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTMnLCB2YWx1ZTogWzU1Ljc1NDgwNTU2OTAwNDA5LCAzNy41ODQ1NTA0OTk5OTk5OV0gfSxcclxuICAgICAgeyBpZDogJ3RhYi00JywgdmFsdWU6IFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTUnLCB2YWx1ZTogWzU2Ljg4MDgzODU2NzgxODk0LCA2MC41MTgyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItNicsIHZhbHVlOiBbNTUuNzU0ODA1NTY5MDA0MDksIDM3LjU4NDU1MDQ5OTk5OTk5XSB9LFxyXG4gICAgXS5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgICBjb29yZGluYXRlLnZhbHVlLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIG9wdGlvblBsYWNlbWFya1xyXG4gICAgICApO1xyXG5cclxuICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG5cclxuICAgICAgdGFicy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhYiA9PT0gY29vcmRpbmF0ZS5pZClcclxuICAgICAgICAgICAgbXlNYXAucGFuVG8obXlQbGFjZW1hcmsuZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgIFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSxcclxuICAgICAge30sXHJcbiAgICAgIG9wdGlvblBsYWNlbWFya1xyXG4gICAgKTtcclxuXHJcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcbiAgfVxyXG5cclxuICBteU1hcFxyXG4gICAgLnBhblRvKFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSwgeyBmbHlpbmc6IHRydWUgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbXlNYXAuc2V0Wm9vbSgxNyk7XHJcbiAgICB9KTtcclxuXHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpO1xyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XHJcbn1cclxuXHJcbi8vIFBvcHVwXHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5bJ2NvbW1vbi1mb3JtJywgJ3NlYXJjaC1mb3JtJywgJ3NlcnZpY2VzLWZvcm0nLCAnY29udGFjdHMtZm9ybScsICdhYm91dC1mb3JtJ11cclxuICAubWFwKChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxyXG4gIC5maWx0ZXIoKGVsKSA9PiBlbClcclxuICAuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIXBvcHVwQm94LmNvbnRhaW5zKGUudGFyZ2V0KSlcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuIl0sImZpbGUiOiJwYXJ0aXRpb25zLW1haW4uanMifQ==
