const popup = document.getElementById('popup');
const popupBox = document.getElementById('popup-box');
const popupClose = document.getElementById('popup-close');

['common-form', 'search-form', 'services-form', 'contacts-form', 'about-form']
  .map((id) => document.getElementById(id))
  .filter((el) => el)
  .forEach((el) =>
    el.addEventListener('submit', (e) => {
      e.preventDefault();
      popup.classList.add('active');
    })
  );

popupClose.addEventListener('click', () => popup.classList.remove('active'));
document.body.addEventListener('click', (e) => {
  if (popup.classList.contains('active') && !popupBox.contains(e.target))
    popup.classList.remove('active');
});

const labelDescFile = document.querySelector(
  '.common-form__label[for=file] span'
);
const inputFile = document.querySelector('.common-form__input[type=file]');

if (inputFile)
  inputFile.addEventListener('change', (e) => {
    labelDescFile.textContent = e.currentTarget.files[0].name;
  });
