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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci1zdWNjZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhpZGRlbiBpdGVtXHJcbmNvbnN0IGxpc3RQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLXN1Y2Nlc3NfX2l0ZW0nKTtcclxuaWYgKGxpc3RQcm9kdWN0Lmxlbmd0aCA+PSAzKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLXN1Y2Nlc3NfX2J0bi1tb3JlJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBsaXN0UHJvZHVjdC5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID49IDIpIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxufVxyXG5cclxuLy8gTW9kYWxcclxuY29uc3Qgc3VjY2Vzc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3MtbW9kYWwnKTtcclxuY29uc3Qgc3VjY2Vzc01vZGFsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzLW1vZGFsLWJveCcpO1xyXG5jb25zdCBzdWNjZXNzTW9kYWxPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyLW1vcmUnKTtcclxuY29uc3Qgc3VjY2Vzc01vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzcy1tb2RhbC1jbG9zZScpO1xyXG5cclxuc3VjY2Vzc01vZGFsT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbik7XHJcbnN1Y2Nlc3NNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuKTtcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIXN1Y2Nlc3NNb2RhbE9wZW4uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhc3VjY2Vzc01vZGFsQ29udGVudC5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgIHN1Y2Nlc3NNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXHJcbiAgKVxyXG4gICAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59KTtcclxuIl0sImZpbGUiOiJvcmRlci1zdWNjZXNzLmpzIn0=
