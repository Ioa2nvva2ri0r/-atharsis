/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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

tabs.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const thisEl = e.currentTarget;

    activeTab(thisEl, tabDesc);
  });
});

// 768px ->
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

        activeTab(thisEl, document.querySelectorAll('[data-tabdesc]'));
      });
    });

    document.querySelector('.sofas-product__tab-container').remove();
  }
}
// <-

window.addEventListener('load', transferTabDesc);
window.addEventListener('resize', transferTabDesc);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG5jb25zdCBzd2lwZXJQcm9kdWN0ID0gbmV3IFN3aXBlcignLnNvZmFzLXByb2R1Y3RfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zb2Zhcy1wcm9kdWN0X19zbGlkZXItYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnNvZmFzLXByb2R1Y3RfX3NsaWRlci1idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG59KTtcclxuXHJcbi8vIENob2ljZSBwcm9kdWN0XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNlbGVjdF0nKTtcclxuY29uc3QgYnRuQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2hvaWNlXScpO1xyXG5cclxuYnRuQ2hvaWNlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgaWYgKCF0aGlzRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSlcclxuICAgICAgWy4uLmJ0bkNob2ljZSwgLi4uc2VsZWN0XS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIFtcclxuICAgICAgdGhpc0VsLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZWxlY3Q9JyR7dGhpc0VsLmRhdGFzZXQuY2hvaWNlfSddYCksXHJcbiAgICBdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5zZWxlY3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBvcHRpb24gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0VsLmRhdGFzZXQuc2VsZWN0KTtcclxuXHJcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpbnB1dC52YWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByZXZWYWx1ZTtcclxuXHJcbiAgICBbdGhpc0VsLCAuLi5idG5DaG9pY2VdLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBBZGQgYmFza2V0XHJcbmNvbnN0IGJ0bkJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtYWRkJyk7XHJcbmNvbnN0IGNvdW50Qm94QmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1ib3gtY291bnQnKTtcclxuY29uc3QgY291bnRCYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFza2V0LWNvdW50Jyk7XHJcbmNvbnN0IGFkZEJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtcGx1cycpO1xyXG5jb25zdCBhd2F5QmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1taW51cycpO1xyXG5cclxuYnRuQmFza2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoY291bnRCb3hCYXNrZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgY29uc3QgY291bnQgPSBOdW1iZXIoY291bnRCYXNrZXQudmFsdWUpO1xyXG5cclxuICAgIGlmIChjb3VudCA9PT0gMTUpIHJldHVybjtcclxuICAgIGNvdW50QmFza2V0LnZhbHVlID0gY291bnQgKyAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgY291bnRCYXNrZXQudmFsdWUgPSAxO1xyXG4gICAgdGhpc0VsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ9CSINC60L7RgNC30LjQvdC1JztcclxuXHJcbiAgICBbdGhpc0VsLCBjb3VudEJveEJhc2tldF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICB9XHJcbn0pO1xyXG5hZGRCYXNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgY291bnQgPSBOdW1iZXIoY291bnRCYXNrZXQudmFsdWUpO1xyXG5cclxuICBpZiAoY291bnQgPT09IDE1KSByZXR1cm47XHJcbiAgY291bnRCYXNrZXQudmFsdWUgPSBjb3VudCArIDE7XHJcbn0pO1xyXG5hd2F5QmFza2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gTnVtYmVyKGNvdW50QmFza2V0LnZhbHVlKTtcclxuXHJcbiAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICBjb3VudEJhc2tldC52YWx1ZSA9IDA7XHJcbiAgICBidG5CYXNrZXQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAn0JTQvtCx0LDQstC40YLRjCDQsiDQutC+0YDQt9C40L3Rgyc7XHJcblxyXG4gICAgW2J0bkJhc2tldCwgY291bnRCb3hCYXNrZXRdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSBlbHNlIGNvdW50QmFza2V0LnZhbHVlID0gY291bnQgLSAxO1xyXG59KTtcclxuXHJcbi8vIFRhYiBkZXNjXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJdJyk7XHJcbmNvbnN0IHRhYkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJkZXNjXScpO1xyXG5cclxuZnVuY3Rpb24gYWN0aXZlVGFiKHRhYiwgZWxlbURlc2MpIHtcclxuICBbLi4udGFicywgLi4uZWxlbURlc2NdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgW3RhYiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiZGVzYz0nJHt0YWIuZGF0YXNldC50YWJ9J11gKV0uZm9yRWFjaChcclxuICAgIChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICApO1xyXG59XHJcblxyXG50YWJzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgYWN0aXZlVGFiKHRoaXNFbCwgdGFiRGVzYyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gNzY4cHggLT5cclxuZnVuY3Rpb24gdHJhbnNmZXJUYWJEZXNjKCkge1xyXG4gIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgWy4uLnRhYnMsIC4uLnRhYkRlc2NdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgdGFicy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgY29uc3QgZGVzYyA9IFsuLi50YWJEZXNjXS5maWx0ZXIoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5kYXRhc2V0LnRhYmRlc2MgPT09IGJ0bi5kYXRhc2V0LnRhYlxyXG4gICAgICApWzBdO1xyXG5cclxuICAgICAgYnRuLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgJHtkZXNjPy5vdXRlckhUTUx9YCk7XHJcblxyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgYWN0aXZlVGFiKHRoaXNFbCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiZGVzY10nKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvZmFzLXByb2R1Y3RfX3RhYi1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuLy8gPC1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdHJhbnNmZXJUYWJEZXNjKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyYW5zZmVyVGFiRGVzYyk7XHJcbiJdLCJmaWxlIjoic29mYXMtcHJvZHVjdC5qcyJ9
