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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aXRpb25zLW9yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmNvbnN0IHNsaWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItaGVpZ2h0Jyk7XHJcbmNvbnN0IHNsaWRlcldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci13aWR0aCcpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBzdGFydDogMTQwLFxyXG4gIGNvbm5lY3Q6IFt0cnVlLCBmYWxzZV0sXHJcbiAgdG9vbHRpcHM6IHtcclxuICAgIHRvOiBmdW5jdGlvbiAobnVtZXJpY1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBudW1lcmljVmFsdWUudG9GaXhlZCgwKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdGVwOiAxMCxcclxuICByYW5nZToge1xyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiA0MDAsXHJcbiAgfSxcclxufTtcclxuXHJcbm5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlckhlaWdodCwgb3B0aW9ucyk7XHJcbm5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlcldpZHRoLCBvcHRpb25zKTtcclxuXHJcbnNsaWRlckhlaWdodC5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbmluZy1oZWlnaHQnKS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG59KTtcclxuc2xpZGVyV2lkdGgubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5pbmctd2lkdGgnKS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG59KTtcclxuIl0sImZpbGUiOiJwYXJ0aXRpb25zLW9yZGVyLmpzIn0=
