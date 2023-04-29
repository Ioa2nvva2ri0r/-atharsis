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
