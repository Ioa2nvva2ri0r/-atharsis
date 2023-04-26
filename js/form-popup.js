const popup = document.getElementById('popup');
const popupBox = document.getElementById('popup-box');
const popupClose = document.getElementById('popup-close');

document.getElementById('common-form').addEventListener('submit', (e) => {
  e.preventDefault();
  popup.classList.add('active');
});

popupClose.addEventListener('click', () => popup.classList.remove('active'));
document.body.addEventListener('click', (e) => {
  if (popup.classList.contains('active') && !popupBox.contains(e.target))
    popup.classList.remove('active');
});

// $('.common-form__input input[type=file]').on('change', function () {
//   let file = this.files[0];
//   $(this).closest('.input-file').find('.input-file-text').html(file.name);
// });

const labelDescFile = document.querySelector(
  '.common-form__label[for=file] span'
);
const inputFile = document.querySelector('.common-form__input[type=file]');

if (inputFile)
  inputFile.addEventListener('change', (e) => {
    labelDescFile.textContent = e.currentTarget.files[0].name;
  });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLXBvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XHJcbmNvbnN0IHBvcHVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJveCcpO1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNsb3NlJyk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbW9uLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG5wb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhcG9wdXBCb3guY29udGFpbnMoZS50YXJnZXQpKVxyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gJCgnLmNvbW1vbi1mb3JtX19pbnB1dCBpbnB1dFt0eXBlPWZpbGVdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbi8vICAgJCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmlsZScpLmZpbmQoJy5pbnB1dC1maWxlLXRleHQnKS5odG1sKGZpbGUubmFtZSk7XHJcbi8vIH0pO1xyXG5cclxuY29uc3QgbGFiZWxEZXNjRmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgJy5jb21tb24tZm9ybV9fbGFiZWxbZm9yPWZpbGVdIHNwYW4nXHJcbik7XHJcbmNvbnN0IGlucHV0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tb24tZm9ybV9faW5wdXRbdHlwZT1maWxlXScpO1xyXG5cclxuaWYgKGlucHV0RmlsZSlcclxuICBpbnB1dEZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGxhYmVsRGVzY0ZpbGUudGV4dENvbnRlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0ubmFtZTtcclxuICB9KTtcclxuIl0sImZpbGUiOiJmb3JtLXBvcHVwLmpzIn0=
