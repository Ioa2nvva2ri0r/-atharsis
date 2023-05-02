document.querySelectorAll('.product__btn').forEach((el) => {
  el.addEventListener('click', (e) => e.currentTarget.classList.toggle('add'));
});

document.querySelectorAll('.catalog-sofas__nav-link').forEach((btn, _, arr) => {
  btn.addEventListener('click', (e) => {
    arr.forEach((el) => el.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Zhcy1jYXRhbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19idG4nKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhZGQnKSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctc29mYXNfX25hdi1saW5rJykuZm9yRWFjaCgoYnRuLCBfLCBhcnIpID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYXJyLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6InNvZmFzLWNhdGFsb2cuanMifQ==
