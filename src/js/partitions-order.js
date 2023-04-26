/* eslint-disable no-undef */
const sliderHeight = document.getElementById('slider-height');
const sliderValueHeightMin = document.getElementById(
  'opening-height-value-min'
);
const sliderValueHeightMax = document.getElementById(
  'opening-height-value-max'
);
const sliderWidth = document.getElementById('slider-width');
const sliderValueWidthMin = document.getElementById('opening-width-value-min');
const sliderValueWidthMax = document.getElementById('opening-width-value-max');

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
    min: 80,
    max: 400,
  },
};

noUiSlider.create(sliderHeight, options);
noUiSlider.create(sliderWidth, options);

const heightRange = sliderHeight.noUiSlider.options.range;
sliderValueHeightMin.textContent = heightRange.min;
sliderValueHeightMax.textContent = heightRange.max;

const widthRange = sliderWidth.noUiSlider.options.range;
sliderValueWidthMin.textContent = widthRange.min;
sliderValueWidthMax.textContent = widthRange.max;

sliderHeight.noUiSlider.on('update', function (values, handle) {
  document.getElementById('opening-height').value = Math.round(values[handle]);
});
sliderWidth.noUiSlider.on('update', function (values, handle) {
  document.getElementById('opening-width').value = Math.round(values[handle]);
});
