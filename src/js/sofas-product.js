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
