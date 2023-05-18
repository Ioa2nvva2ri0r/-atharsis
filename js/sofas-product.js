/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vLyBUb2dnbGUgbWVudVxyXG5pZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItYmFubmVyJykpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jbG9zZScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKTtcclxuXHJcbiAgb3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBsaW5rcy5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcclxuICApO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgIClcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgc3dpcGVyUHJvZHVjdCA9IG5ldyBTd2lwZXIoJy5zb2Zhcy1wcm9kdWN0X19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc29mYXMtcHJvZHVjdF9fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zb2Zhcy1wcm9kdWN0X19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxufSk7XHJcblxyXG4vLyBBZGQgZmF2b3JpdGVcclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcignLnNvZmFzLXByb2R1Y3RfX2J0bi1mYXZvcml0ZScpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhZGQnKTtcclxuICB9KTtcclxuXHJcbi8vIENob2ljZSBwcm9kdWN0XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNlbGVjdF0nKTtcclxuY29uc3QgYnRuQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2hvaWNlXScpO1xyXG5cclxuYnRuQ2hvaWNlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgaWYgKCF0aGlzRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSlcclxuICAgICAgWy4uLmJ0bkNob2ljZSwgLi4uc2VsZWN0XS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIFtcclxuICAgICAgdGhpc0VsLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZWxlY3Q9JyR7dGhpc0VsLmRhdGFzZXQuY2hvaWNlfSddYCksXHJcbiAgICBdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5zZWxlY3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBvcHRpb24gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0VsLmRhdGFzZXQuc2VsZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpbnB1dC52YWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByZXZWYWx1ZTtcclxuXHJcbiAgICBbdGhpc0VsLCAuLi5idG5DaG9pY2VdLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBBZGQgYmFza2V0XHJcbmNvbnN0IGJ0bkJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtYWRkJyk7XHJcbmNvbnN0IGNvdW50Qm94QmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1ib3gtY291bnQnKTtcclxuY29uc3QgY291bnRCYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFza2V0LWNvdW50Jyk7XHJcbmNvbnN0IGFkZEJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtcGx1cycpO1xyXG5jb25zdCBhd2F5QmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1taW51cycpO1xyXG5cclxuYnRuQmFza2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoY291bnRCb3hCYXNrZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgY29uc3QgY291bnQgPSBOdW1iZXIoY291bnRCYXNrZXQudmFsdWUpO1xyXG5cclxuICAgIGlmIChjb3VudCA9PT0gMTUpIHJldHVybjtcclxuICAgIGNvdW50QmFza2V0LnZhbHVlID0gY291bnQgKyAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgY291bnRCYXNrZXQudmFsdWUgPSAxO1xyXG4gICAgdGhpc0VsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ9CSINC60L7RgNC30LjQvdC1JztcclxuXHJcbiAgICBbdGhpc0VsLCBjb3VudEJveEJhc2tldF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICB9XHJcbn0pO1xyXG5hZGRCYXNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgY291bnQgPSBOdW1iZXIoY291bnRCYXNrZXQudmFsdWUpO1xyXG5cclxuICBpZiAoY291bnQgPT09IDE1KSByZXR1cm47XHJcbiAgY291bnRCYXNrZXQudmFsdWUgPSBjb3VudCArIDE7XHJcbn0pO1xyXG5hd2F5QmFza2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gTnVtYmVyKGNvdW50QmFza2V0LnZhbHVlKTtcclxuXHJcbiAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICBjb3VudEJhc2tldC52YWx1ZSA9IDA7XHJcbiAgICBidG5CYXNrZXQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAn0JTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rgyc7XHJcblxyXG4gICAgW2J0bkJhc2tldCwgY291bnRCb3hCYXNrZXRdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSBlbHNlIGNvdW50QmFza2V0LnZhbHVlID0gY291bnQgLSAxO1xyXG59KTtcclxuXHJcbi8vIFRhYiBkZXNjXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJdJyk7XHJcbmNvbnN0IHRhYkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJkZXNjXScpO1xyXG5cclxuZnVuY3Rpb24gYWN0aXZlVGFiKHRhYiwgZWxlbURlc2MpIHtcclxuICBbLi4udGFicywgLi4uZWxlbURlc2NdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgW3RhYiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiZGVzYz0nJHt0YWIuZGF0YXNldC50YWJ9J11gKV0uZm9yRWFjaChcclxuICAgIChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc2ZlclRhYkRlc2MoKSB7XHJcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSB7XHJcbiAgICBbLi4udGFicywgLi4udGFiRGVzY10uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICB0YWJzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBjb25zdCBkZXNjID0gWy4uLnRhYkRlc2NdLmZpbHRlcihcclxuICAgICAgICAoZWwpID0+IGVsLmRhdGFzZXQudGFiZGVzYyA9PT0gYnRuLmRhdGFzZXQudGFiXHJcbiAgICAgIClbMF07XHJcblxyXG4gICAgICBidG4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGAke2Rlc2M/Lm91dGVySFRNTH1gKTtcclxuXHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAodGhpc0VsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgIFt0aGlzRWwsIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYmRlc2NdJyldLmZvckVhY2goXHJcbiAgICAgICAgICAgIChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGFjdGl2ZVRhYih0aGlzRWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYmRlc2NdJykpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2Zhcy1wcm9kdWN0X190YWItY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhpc0VsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBhY3RpdmVUYWIodGhpc0VsLCB0YWJEZXNjKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdHJhbnNmZXJUYWJEZXNjKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyYW5zZmVyVGFiRGVzYyk7XHJcblxyXG5jb25zdCBzd2lwZXJDb21tb24gPSBuZXcgU3dpcGVyKCcuY29tbW9uLXNsaWRlcl9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNvbW1vbi1zbGlkZXJfX2J0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5jb21tb24tc2xpZGVyX19idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6ICcuY29tbW9uLXNsaWRlcl9fc2Nyb2xsYmFyJyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbjoge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5zbGlkZXNbdGhpcy5sb29wZWRTbGlkZXNdO1xyXG4gICAgICBsYXN0LnN0eWxlLm9wYWNpdHkgPSAnMC4yJztcclxuICAgIH0sXHJcbiAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdO1xyXG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleCArIHRoaXMubG9vcGVkU2xpZGVzXTtcclxuICAgICAgZmlyc3Quc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgbGFzdC5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2J0bicpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZCcpKTtcclxufSk7XHJcbiJdLCJmaWxlIjoic29mYXMtcHJvZHVjdC5qcyJ9
