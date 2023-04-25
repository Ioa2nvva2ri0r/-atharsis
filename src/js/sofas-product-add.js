document.querySelectorAll('.product__btn').forEach((el) => {
  el.addEventListener('click', (e) => e.currentTarget.classList.toggle('add'));
});
