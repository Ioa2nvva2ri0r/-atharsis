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
