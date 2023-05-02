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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG5jb25zdCBzd2lwZXJQcm9kdWN0ID0gbmV3IFN3aXBlcignLnNvZmFzLXByb2R1Y3RfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zb2Zhcy1wcm9kdWN0X19zbGlkZXItYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnNvZmFzLXByb2R1Y3RfX3NsaWRlci1idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG59KTtcclxuXHJcbi8vIEFkZCBmYXZvcml0ZVxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKCcuc29mYXMtcHJvZHVjdF9fYnRuLWZhdm9yaXRlJylcclxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZCcpO1xyXG4gIH0pO1xyXG5cclxuLy8gQ2hvaWNlIHByb2R1Y3RcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2VsZWN0XScpO1xyXG5jb25zdCBidG5DaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jaG9pY2VdJyk7XHJcblxyXG5idG5DaG9pY2UuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBpZiAoIXRoaXNFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKVxyXG4gICAgICBbLi4uYnRuQ2hvaWNlLCAuLi5zZWxlY3RdLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgW1xyXG4gICAgICB0aGlzRWwsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNlbGVjdD0nJHt0aGlzRWwuZGF0YXNldC5jaG9pY2V9J11gKSxcclxuICAgIF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpKTtcclxuICB9KTtcclxufSk7XHJcbnNlbGVjdC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzRWwuZGF0YXNldC5zZWxlY3QpO1xyXG5cclxuICAgIGNvbnN0IHByZXZWYWx1ZSA9IGlucHV0LnZhbHVlO1xyXG5cclxuICAgIGlucHV0LnZhbHVlID0gb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJldlZhbHVlO1xyXG5cclxuICAgIFt0aGlzRWwsIC4uLmJ0bkNob2ljZV0uZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIEFkZCBiYXNrZXRcclxuY29uc3QgYnRuQmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1hZGQnKTtcclxuY29uc3QgY291bnRCb3hCYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFza2V0LWJveC1jb3VudCcpO1xyXG5jb25zdCBjb3VudEJhc2tldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNrZXQtY291bnQnKTtcclxuY29uc3QgYWRkQmFza2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2tldC1wbHVzJyk7XHJcbmNvbnN0IGF3YXlCYXNrZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFza2V0LW1pbnVzJyk7XHJcblxyXG5idG5CYXNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChjb3VudEJveEJhc2tldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IE51bWJlcihjb3VudEJhc2tldC52YWx1ZSk7XHJcblxyXG4gICAgaWYgKGNvdW50ID09PSAxNSkgcmV0dXJuO1xyXG4gICAgY291bnRCYXNrZXQudmFsdWUgPSBjb3VudCArIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHRoaXNFbCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBjb3VudEJhc2tldC52YWx1ZSA9IDE7XHJcbiAgICB0aGlzRWwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAn0JIg0LrQvtGA0LfQuNC90LUnO1xyXG5cclxuICAgIFt0aGlzRWwsIGNvdW50Qm94QmFza2V0XS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gIH1cclxufSk7XHJcbmFkZEJhc2tldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBjb3VudCA9IE51bWJlcihjb3VudEJhc2tldC52YWx1ZSk7XHJcblxyXG4gIGlmIChjb3VudCA9PT0gMTUpIHJldHVybjtcclxuICBjb3VudEJhc2tldC52YWx1ZSA9IGNvdW50ICsgMTtcclxufSk7XHJcbmF3YXlCYXNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgY291bnQgPSBOdW1iZXIoY291bnRCYXNrZXQudmFsdWUpO1xyXG5cclxuICBpZiAoY291bnQgPT09IDEpIHtcclxuICAgIGNvdW50QmFza2V0LnZhbHVlID0gMDtcclxuICAgIGJ0bkJhc2tldC5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICfQlNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDJztcclxuXHJcbiAgICBbYnRuQmFza2V0LCBjb3VudEJveEJhc2tldF0uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICB9IGVsc2UgY291bnRCYXNrZXQudmFsdWUgPSBjb3VudCAtIDE7XHJcbn0pO1xyXG5cclxuLy8gVGFiIGRlc2NcclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYl0nKTtcclxuY29uc3QgdGFiRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYmRlc2NdJyk7XHJcblxyXG5mdW5jdGlvbiBhY3RpdmVUYWIodGFiLCBlbGVtRGVzYykge1xyXG4gIFsuLi50YWJzLCAuLi5lbGVtRGVzY10uZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBbdGFiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YWJkZXNjPScke3RhYi5kYXRhc2V0LnRhYn0nXWApXS5mb3JFYWNoKFxyXG4gICAgKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZmVyVGFiRGVzYygpIHtcclxuICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIHtcclxuICAgIFsuLi50YWJzLCAuLi50YWJEZXNjXS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIHRhYnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlc2MgPSBbLi4udGFiRGVzY10uZmlsdGVyKFxyXG4gICAgICAgIChlbCkgPT4gZWwuZGF0YXNldC50YWJkZXNjID09PSBidG4uZGF0YXNldC50YWJcclxuICAgICAgKVswXTtcclxuXHJcbiAgICAgIGJ0bi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYCR7ZGVzYz8ub3V0ZXJIVE1MfWApO1xyXG5cclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgW3RoaXNFbCwgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiZGVzY10nKV0uZm9yRWFjaChcclxuICAgICAgICAgICAgKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgYWN0aXZlVGFiKHRoaXNFbCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiZGVzY10nKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvZmFzLXByb2R1Y3RfX3RhYi1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFicy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIGFjdGl2ZVRhYih0aGlzRWwsIHRhYkRlc2MpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0cmFuc2ZlclRhYkRlc2MpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdHJhbnNmZXJUYWJEZXNjKTtcclxuIl0sImZpbGUiOiJzb2Zhcy1wcm9kdWN0LmpzIn0=
