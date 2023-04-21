const popup = document.getElementById('popup');
const popupBox = document.getElementById('popup-box');
const popupClose = document.getElementById('popup-close');

document.getElementById('application').addEventListener('submit', (e) => {
  e.preventDefault();
  popup.classList.add('active');
});

popupClose.addEventListener('click', () => popup.classList.remove('active'));
document.body.addEventListener('click', (e) => {
  if (popup.classList.contains('active') && !popupBox.contains(e.target))
    popup.classList.remove('active');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLXBvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGljYXRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG5wb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhcG9wdXBCb3guY29udGFpbnMoZS50YXJnZXQpKVxyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6ImZvcm0tcG9wdXAuanMifQ==
