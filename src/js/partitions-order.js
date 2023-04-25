/* eslint-disable no-undef */
const sliderHeight = document.getElementById('slider-height');
const sliderWidth = document.getElementById('slider-width');

const options = {
  start: 140,
  connect: [true, false],
  tooltips: {
    to: function (numericValue) {
      return numericValue.toFixed(0);
    },
  },
  step: 10,
  range: {
    min: 0,
    max: 400,
  },
};

noUiSlider.create(sliderHeight, options);
noUiSlider.create(sliderWidth, options);

sliderHeight.noUiSlider.on('update', function (values, handle) {
  document.getElementById('opening-height').value = Math.round(values[handle]);
});
sliderWidth.noUiSlider.on('update', function (values, handle) {
  document.getElementById('opening-width').value = Math.round(values[handle]);
});
