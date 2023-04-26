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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBDYXRhbG9nIC0tIFN3aXBlci1zbGlkZXJcclxuY29uc3Qgc3dpcGVyQ2F0YWxvZyA9IG5ldyBTd2lwZXIoJy5jYXRhbG9nX19zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY2F0YWxvZ19fc2xpZGVyLWJ0bi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5jYXRhbG9nX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxufSk7XHJcblxyXG4vLyBDYXRhbG9nIC0tIFBvcHVwLWxhYmVsXHJcbmNvbnN0IGxhYmVsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYWJlbC1jb250ZW50Jyk7XHJcbmxldCBlbGVtID0gJyc7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fbGFiZWwnKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGVsZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgaWYgKHNjcmVlbi53aWR0aCA+IDc2OCkge1xyXG4gICAgICBsYWJlbENvbnRlbnQuc3R5bGUubGVmdCA9IGAke2VsZW0ub2Zmc2V0TGVmdCArIGVsZW0ub2Zmc2V0V2lkdGggKyAyOX1weGA7XHJcbiAgICAgIGxhYmVsQ29udGVudC5zdHlsZS50b3AgPSBgJHtcclxuICAgICAgICBlbGVtLm9mZnNldFRvcCAtIGxhYmVsQ29udGVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgfXB4YDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoZWxlbSlcclxuICAgIGlmICghZWxlbS5jb250YWlucyhlLnRhcmdldCkgJiYgIWxhYmVsQ29udGVudC5jb250YWlucyhlLnRhcmdldCkpXHJcbiAgICAgIGxhYmVsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbiJdLCJmaWxlIjoic29mYXMtbWFpbi5qcyJ9
