document.querySelectorAll('.product__btn').forEach((el) => {
  el.addEventListener('click', (e) => e.currentTarget.classList.toggle('add'));
});

document.querySelectorAll('.catalog-sofas__nav-link').forEach((btn, _, arr) => {
  btn.addEventListener('click', (e) => {
    arr.forEach((el) => el.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});
