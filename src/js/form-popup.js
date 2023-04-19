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
