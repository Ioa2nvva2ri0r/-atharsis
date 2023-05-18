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

// hidden item
const listProduct = document.querySelectorAll('.order-success__item');
if (listProduct.length >= 3) {
  document.querySelector('.order-success__btn-more').style.display = 'flex';
  listProduct.forEach((elem, index) => {
    if (index >= 2) elem.style.display = 'none';
  });
}

// Modal
const successModal = document.getElementById('success-modal');
const successModalContent = document.getElementById('success-modal-box');
const successModalOpen = document.getElementById('order-more');
const successModalClose = document.getElementById('success-modal-close');

successModalOpen.addEventListener('click', () =>
  successModal.classList.add('active')
);
successModalClose.addEventListener('click', () =>
  successModal.classList.remove('active')
);
document.body.addEventListener('click', (e) => {
  if (
    !successModalOpen.contains(e.target) &&
    !successModalContent.contains(e.target) &&
    successModal.classList.contains('active')
  )
    successModal.classList.remove('active');
});

// Common slider
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci1zdWNjZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBUb2dnbGUgbWVudVxyXG5pZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItYmFubmVyJykpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW9wZW4nKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jbG9zZScpO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKTtcclxuXHJcbiAgb3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBsaW5rcy5mb3JFYWNoKChlbCkgPT5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcclxuICApO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICBtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICAgIClcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gaGlkZGVuIGl0ZW1cclxuY29uc3QgbGlzdFByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItc3VjY2Vzc19faXRlbScpO1xyXG5pZiAobGlzdFByb2R1Y3QubGVuZ3RoID49IDMpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItc3VjY2Vzc19fYnRuLW1vcmUnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGxpc3RQcm9kdWN0LmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPj0gMikgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBNb2RhbFxyXG5jb25zdCBzdWNjZXNzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzcy1tb2RhbCcpO1xyXG5jb25zdCBzdWNjZXNzTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3MtbW9kYWwtYm94Jyk7XHJcbmNvbnN0IHN1Y2Nlc3NNb2RhbE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXItbW9yZScpO1xyXG5jb25zdCBzdWNjZXNzTW9kYWxDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzLW1vZGFsLWNsb3NlJyk7XHJcblxyXG5zdWNjZXNzTW9kYWxPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuKTtcclxuc3VjY2Vzc01vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG4gIHN1Y2Nlc3NNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4pO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoXHJcbiAgICAhc3VjY2Vzc01vZGFsT3Blbi5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICFzdWNjZXNzTW9kYWxDb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcclxuICApXHJcbiAgICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gQ29tbW9uIHNsaWRlclxyXG5jb25zdCBzd2lwZXJDb21tb24gPSBuZXcgU3dpcGVyKCcuY29tbW9uLXNsaWRlcl9fc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNvbW1vbi1zbGlkZXJfX2J0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5jb21tb24tc2xpZGVyX19idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6ICcuY29tbW9uLXNsaWRlcl9fc2Nyb2xsYmFyJyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbjoge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5zbGlkZXNbdGhpcy5sb29wZWRTbGlkZXNdO1xyXG4gICAgICBsYXN0LnN0eWxlLm9wYWNpdHkgPSAnMC4yJztcclxuICAgIH0sXHJcbiAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdO1xyXG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleCArIHRoaXMubG9vcGVkU2xpZGVzXTtcclxuICAgICAgZmlyc3Quc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgbGFzdC5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gQWRkIGJhc2tldCAmIGZhdm9yaXRlXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19idG4nKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhZGQnKSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Im9yZGVyLXN1Y2Nlc3MuanMifQ==
