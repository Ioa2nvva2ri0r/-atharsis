/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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

// Popular -- Swiper-slider
const swiperPopular = new Swiper('.popular__slider', {
  loop: true,
  navigation: {
    nextEl: '.popular__slider-btn-next',
    prevEl: '.popular__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  scrollbar: {
    el: '.popular__slider-scrollbar',
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
  if (!elem.contains(e.target) && !labelContent.contains(e.target))
    labelContent.classList.remove('active');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBDYXRhbG9nIC0tIFN3aXBlci1zbGlkZXJcclxuY29uc3Qgc3dpcGVyQ2F0YWxvZyA9IG5ldyBTd2lwZXIoJy5jYXRhbG9nX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY2F0YWxvZ19fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5jYXRhbG9nX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxufSk7XHJcblxyXG4vLyBQb3B1bGFyIC0tIFN3aXBlci1zbGlkZXJcclxuY29uc3Qgc3dpcGVyUG9wdWxhciA9IG5ldyBTd2lwZXIoJy5wb3B1bGFyX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcucG9wdWxhcl9fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5wb3B1bGFyX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLnBvcHVsYXJfX3NsaWRlci1zY3JvbGxiYXInLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEyMDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDQsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjksXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIENhdGFsb2cgLS0gUG9wdXAtbGFiZWxcclxuY29uc3QgbGFiZWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsLWNvbnRlbnQnKTtcclxubGV0IGVsZW0gPSAnJztcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19sYWJlbCcpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZWxlbSA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBpZiAoc2NyZWVuLndpZHRoID4gNzY4KSB7XHJcbiAgICAgIGxhYmVsQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7ZWxlbS5vZmZzZXRMZWZ0ICsgZWxlbS5vZmZzZXRXaWR0aCArIDI5fXB4YDtcclxuICAgICAgbGFiZWxDb250ZW50LnN0eWxlLnRvcCA9IGAke1xyXG4gICAgICAgIGVsZW0ub2Zmc2V0VG9wIC0gbGFiZWxDb250ZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICB9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9KTtcclxufSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmICghZWxlbS5jb250YWlucyhlLnRhcmdldCkgJiYgIWxhYmVsQ29udGVudC5jb250YWlucyhlLnRhcmdldCkpXHJcbiAgICBsYWJlbENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6InNvZmFzLW1haW4uanMifQ==
