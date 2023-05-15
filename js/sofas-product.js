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

const swiperProduct = new Swiper('.sofas-product__slider', {
  loop: true,
  navigation: {
    nextEl: '.sofas-product__slider-btn-next',
    prevEl: '.sofas-product__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  speed: 1000,
});

// Add favorite
document
  .querySelector('.sofas-product__btn-favorite')
  .addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('add');
  });

// Choice product
const select = document.querySelectorAll('[data-select]');
const btnChoice = document.querySelectorAll('[data-choice]');

btnChoice.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const thisEl = e.currentTarget;

    if (!thisEl.classList.contains('active'))
      [...btnChoice, ...select].forEach((el) => el.classList.remove('active'));

    [
      thisEl,
      document.querySelector(`[data-select='${thisEl.dataset.choice}']`),
    ].forEach((el) => el.classList.toggle('active'));
  });
});
select.forEach((el) => {
  el.addEventListener('click', (e) => {
    const thisEl = e.currentTarget;
    const option = e.target;
    const input = document.getElementById(thisEl.dataset.select);

    const prevValue = input.value;

    input.value = option.textContent;
    option.textContent = prevValue;

    [thisEl, ...btnChoice].forEach((btn) => btn.classList.remove('active'));
  });
});

// Add basket
const btnBasket = document.getElementById('basket-add');
const countBoxBasket = document.getElementById('basket-box-count');
const countBasket = document.getElementById('basket-count');
const addBasket = document.getElementById('basket-plus');
const awayBasket = document.getElementById('basket-minus');

btnBasket.addEventListener('click', (e) => {
  if (countBoxBasket.classList.contains('active')) {
    const count = Number(countBasket.value);

    if (count === 15) return;
    countBasket.value = count + 1;
  } else {
    const thisEl = e.currentTarget;

    countBasket.value = 1;
    thisEl.children[0].textContent = 'В корзине';

    [thisEl, countBoxBasket].forEach((el) => el.classList.add('active'));
  }
});
addBasket.addEventListener('click', () => {
  const count = Number(countBasket.value);

  if (count === 15) return;
  countBasket.value = count + 1;
});
awayBasket.addEventListener('click', () => {
  const count = Number(countBasket.value);

  if (count === 1) {
    countBasket.value = 0;
    btnBasket.children[0].textContent = 'Добавить в корзину';

    [btnBasket, countBoxBasket].forEach((el) => el.classList.remove('active'));
  } else countBasket.value = count - 1;
});

// Tab desc
const tabs = document.querySelectorAll('[data-tab]');
const tabDesc = document.querySelectorAll('[data-tabdesc]');

function activeTab(tab, elemDesc) {
  [...tabs, ...elemDesc].forEach((el) => el.classList.remove('active'));
  [tab, document.querySelector(`[data-tabdesc='${tab.dataset.tab}']`)].forEach(
    (el) => el.classList.add('active')
  );
}

function transferTabDesc() {
  if (window.screen.width <= 768) {
    [...tabs, ...tabDesc].forEach((el) => el.classList.remove('active'));

    tabs.forEach((btn) => {
      const desc = [...tabDesc].filter(
        (el) => el.dataset.tabdesc === btn.dataset.tab
      )[0];

      btn.insertAdjacentHTML('afterend', `${desc?.outerHTML}`);

      btn.addEventListener('click', (e) => {
        const thisEl = e.currentTarget;

        if (thisEl.classList.contains('active')) {
          [thisEl, ...document.querySelectorAll('[data-tabdesc]')].forEach(
            (el) => el.classList.remove('active')
          );
        } else activeTab(thisEl, document.querySelectorAll('[data-tabdesc]'));
      });
    });

    document.querySelector('.sofas-product__tab-container').remove();
  } else {
    tabs.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const thisEl = e.currentTarget;

        activeTab(thisEl, tabDesc);
      });
    });
  }
}

window.addEventListener('load', transferTabDesc);
window.addEventListener('resize', transferTabDesc);

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

document.querySelectorAll('.product__btn').forEach((el) => {
  el.addEventListener('click', (e) => e.currentTarget.classList.toggle('add'));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vLyBDaGFuZ2UgTG9nb1xyXG5mdW5jdGlvbiBjaGFuZ2VMb2dvKCkge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG5cclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIGxvZ28uc3JjID0gYGltZy9sb2dvLW1pbi5zdmdgO1xyXG4gIGVsc2UgbG9nby5zcmMgPSBgaW1nL2xvZ28uc3ZnYDtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUxvZ28pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZUxvZ28pO1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWJhbm5lcicpKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG4gIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgbGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcbiAgKTtcclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW9wZW5NZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgICApXHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHN3aXBlclByb2R1Y3QgPSBuZXcgU3dpcGVyKCcuc29mYXMtcHJvZHVjdF9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnNvZmFzLXByb2R1Y3RfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc29mYXMtcHJvZHVjdF9fc2xpZGVyLWJ0bi1wcmV2JyxcclxuICB9LFxyXG4gIGExMXk6IHtcclxuICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQktC/0LXRgNGR0LQnLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbn0pO1xyXG5cclxuLy8gQWRkIGZhdm9yaXRlXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5zb2Zhcy1wcm9kdWN0X19idG4tZmF2b3JpdGUnKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWRkJyk7XHJcbiAgfSk7XHJcblxyXG4vLyBDaG9pY2UgcHJvZHVjdFxyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zZWxlY3RdJyk7XHJcbmNvbnN0IGJ0bkNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNob2ljZV0nKTtcclxuXHJcbmJ0bkNob2ljZS5mb3JFYWNoKChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIGlmICghdGhpc0VsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpXHJcbiAgICAgIFsuLi5idG5DaG9pY2UsIC4uLnNlbGVjdF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICBbXHJcbiAgICAgIHRoaXNFbCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2VsZWN0PScke3RoaXNFbC5kYXRhc2V0LmNob2ljZX0nXWApLFxyXG4gICAgXS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJykpO1xyXG4gIH0pO1xyXG59KTtcclxuc2VsZWN0LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNFbC5kYXRhc2V0LnNlbGVjdCk7XHJcblxyXG4gICAgY29uc3QgcHJldlZhbHVlID0gaW5wdXQudmFsdWU7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmV2VmFsdWU7XHJcblxyXG4gICAgW3RoaXNFbCwgLi4uYnRuQ2hvaWNlXS5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gQWRkIGJhc2tldFxyXG5jb25zdCBidG5CYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFza2V0LWFkZCcpO1xyXG5jb25zdCBjb3VudEJveEJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtYm94LWNvdW50Jyk7XHJcbmNvbnN0IGNvdW50QmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1jb3VudCcpO1xyXG5jb25zdCBhZGRCYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFza2V0LXBsdXMnKTtcclxuY29uc3QgYXdheUJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtbWludXMnKTtcclxuXHJcbmJ0bkJhc2tldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGNvdW50Qm94QmFza2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gTnVtYmVyKGNvdW50QmFza2V0LnZhbHVlKTtcclxuXHJcbiAgICBpZiAoY291bnQgPT09IDE1KSByZXR1cm47XHJcbiAgICBjb3VudEJhc2tldC52YWx1ZSA9IGNvdW50ICsgMTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIGNvdW50QmFza2V0LnZhbHVlID0gMTtcclxuICAgIHRoaXNFbC5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICfQkiDQutC+0YDQt9C40L3QtSc7XHJcblxyXG4gICAgW3RoaXNFbCwgY291bnRCb3hCYXNrZXRdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XHJcbiAgfVxyXG59KTtcclxuYWRkQmFza2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gTnVtYmVyKGNvdW50QmFza2V0LnZhbHVlKTtcclxuXHJcbiAgaWYgKGNvdW50ID09PSAxNSkgcmV0dXJuO1xyXG4gIGNvdW50QmFza2V0LnZhbHVlID0gY291bnQgKyAxO1xyXG59KTtcclxuYXdheUJhc2tldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBjb3VudCA9IE51bWJlcihjb3VudEJhc2tldC52YWx1ZSk7XHJcblxyXG4gIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgY291bnRCYXNrZXQudmFsdWUgPSAwO1xyXG4gICAgYnRuQmFza2V0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ9CU0L7QsdCw0LLQuNGC0Ywg0LIg0LrQvtGA0LfQuNC90YMnO1xyXG5cclxuICAgIFtidG5CYXNrZXQsIGNvdW50Qm94QmFza2V0XS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIH0gZWxzZSBjb3VudEJhc2tldC52YWx1ZSA9IGNvdW50IC0gMTtcclxufSk7XHJcblxyXG4vLyBUYWIgZGVzY1xyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiXScpO1xyXG5jb25zdCB0YWJEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiZGVzY10nKTtcclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZVRhYih0YWIsIGVsZW1EZXNjKSB7XHJcbiAgWy4uLnRhYnMsIC4uLmVsZW1EZXNjXS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIFt0YWIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYmRlc2M9JyR7dGFiLmRhdGFzZXQudGFifSddYCldLmZvckVhY2goXHJcbiAgICAoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNmZXJUYWJEZXNjKCkge1xyXG4gIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgWy4uLnRhYnMsIC4uLnRhYkRlc2NdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgdGFicy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgY29uc3QgZGVzYyA9IFsuLi50YWJEZXNjXS5maWx0ZXIoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5kYXRhc2V0LnRhYmRlc2MgPT09IGJ0bi5kYXRhc2V0LnRhYlxyXG4gICAgICApWzBdO1xyXG5cclxuICAgICAgYnRuLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgJHtkZXNjPy5vdXRlckhUTUx9YCk7XHJcblxyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXNFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICBbdGhpc0VsLCAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJkZXNjXScpXS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBhY3RpdmVUYWIodGhpc0VsLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJkZXNjXScpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29mYXMtcHJvZHVjdF9fdGFiLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWJzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgYWN0aXZlVGFiKHRoaXNFbCwgdGFiRGVzYyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyYW5zZmVyVGFiRGVzYyk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmFuc2ZlclRhYkRlc2MpO1xyXG5cclxuY29uc3Qgc3dpcGVyQ29tbW9uID0gbmV3IFN3aXBlcignLmNvbW1vbi1zbGlkZXJfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5jb21tb24tc2xpZGVyX19idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY29tbW9uLXNsaWRlcl9fYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLmNvbW1vbi1zbGlkZXJfX3Njcm9sbGJhcicsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjksXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc2xpZGVzW3RoaXMubG9vcGVkU2xpZGVzXTtcclxuICAgICAgbGFzdC5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XHJcbiAgICB9LFxyXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLnNsaWRlc1t0aGlzLmFjdGl2ZUluZGV4XTtcclxuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXggKyB0aGlzLmxvb3BlZFNsaWRlc107XHJcbiAgICAgIGZpcnN0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIGxhc3Quc3R5bGUub3BhY2l0eSA9ICcwLjInO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19idG4nKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhZGQnKSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6InNvZmFzLXByb2R1Y3QuanMifQ==
