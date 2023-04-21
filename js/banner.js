/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const swiperBanner = new Swiper('.banner__slider', {
  effect: 'fade',
  loop: true,
  speed: 3000,
  // autoplay: {
  //   delay: 5000,
  // },
  navigation: {
    nextEl: '.banner__slider-btn-next',
    prevEl: '.banner__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
  },
  pagination: {
    el: '.banner__slider-pagination',
    type: 'fraction',
  },
  on: {
    init() {
      // this.el.addEventListener('mouseenter', () => {
      //   this.autoplay.stop();
      // });
      // this.el.addEventListener('mouseleave', () => {
      //   this.autoplay.start();
      // });
    },
  },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbmNvbnN0IHN3aXBlckJhbm5lciA9IG5ldyBTd2lwZXIoJy5iYW5uZXJfX3NsaWRlcicsIHtcclxuICBlZmZlY3Q6ICdmYWRlJyxcclxuICBsb29wOiB0cnVlLFxyXG4gIHNwZWVkOiAzMDAwLFxyXG4gIC8vIGF1dG9wbGF5OiB7XHJcbiAgLy8gICBkZWxheTogNTAwMCxcclxuICAvLyB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5iYW5uZXJfX3NsaWRlci1idG4tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuYmFubmVyX19zbGlkZXItYnRuLXByZXYnLFxyXG4gIH0sXHJcbiAgYTExeToge1xyXG4gICAgcHJldlNsaWRlTWVzc2FnZTogJ9Cd0LDQt9Cw0LQnLFxyXG4gICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0ZHQtCcsXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5iYW5uZXJfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgIHR5cGU6ICdmcmFjdGlvbicsXHJcbiAgfSxcclxuICBvbjoge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgLy8gdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuYXV0b3BsYXkuc3RvcCgpO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy8gdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuYXV0b3BsYXkuc3RhcnQoKTtcclxuICAgICAgLy8gfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwiZmlsZSI6ImJhbm5lci5qcyJ9
