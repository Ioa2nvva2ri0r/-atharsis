/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const tabs = document.querySelectorAll('.contacts-slider__address');

ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [53.676347909629094, 23.828005242050153],
    zoom: 18,
  });

  const optionPlacemark = {
    iconLayout: 'default#image',
    iconImageHref: `data:image/svg+xml,${encodeURIComponent(
      "<svg width='55' height='70' viewBox='0 0 55 70' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M27.2996 70C28.7465 70 54.5993 42.3773 54.5993 27.3C54.5993 12.2226 42.3767 0 27.2996 0C12.2224 0 0 12.2226 0 27.3C0 42.3773 25.8528 70 27.2996 70ZM27.2997 40.9545C34.9438 40.9545 41.1406 34.7575 41.1406 27.1133C41.1406 19.469 34.9438 13.2722 27.2997 13.2722C19.6555 13.2722 13.4588 19.469 13.4588 27.1133C13.4588 34.7575 19.6555 40.9545 27.2997 40.9545Z' fill='#1D3552'/></svg>"
    )}`,
    iconImageSize: [54, 70],
    iconImageOffset: [-3, -42],
  };

  if (tabs[0]) {
    [
      { id: 'tab-1', value: [53.67669826968073, 23.830183195770243] },
      { id: 'tab-2', value: [56.88083856781894, 60.518243] },
      { id: 'tab-3', value: [55.75480556900409, 37.58455049999999] },
      { id: 'tab-4', value: [53.67669826968073, 23.830183195770243] },
      { id: 'tab-5', value: [56.88083856781894, 60.518243] },
      { id: 'tab-6', value: [55.75480556900409, 37.58455049999999] },
    ].forEach((coordinate) => {
      const myPlacemark = new ymaps.Placemark(
        coordinate.value,
        {},
        optionPlacemark
      );

      myMap.geoObjects.add(myPlacemark);

      tabs.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          if (e.currentTarget.dataset.tab === coordinate.id)
            myMap.panTo(myPlacemark.geometry.getCoordinates(), {
              duration: 500,
            });
        });
      });
    });
  } else {
    const myPlacemark = new ymaps.Placemark(
      [53.67669826968073, 23.830183195770243],
      {},
      optionPlacemark
    );

    myMap.geoObjects.add(myPlacemark);
  }

  myMap
    .panTo([53.67669826968073, 23.830183195770243], { flying: true })
    .then(function () {
      myMap.setZoom(17);
    });

  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdHMtc2xpZGVyX19hZGRyZXNzJyk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgY2VudGVyOiBbNTMuNjc2MzQ3OTA5NjI5MDk0LCAyMy44MjgwMDUyNDIwNTAxNTNdLFxyXG4gICAgem9vbTogMTgsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvblBsYWNlbWFyayA9IHtcclxuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgIGljb25JbWFnZUhyZWY6IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgIFwiPHN2ZyB3aWR0aD0nNTUnIGhlaWdodD0nNzAnIHZpZXdCb3g9JzAgMCA1NSA3MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTI3LjI5OTYgNzBDMjguNzQ2NSA3MCA1NC41OTkzIDQyLjM3NzMgNTQuNTk5MyAyNy4zQzU0LjU5OTMgMTIuMjIyNiA0Mi4zNzY3IDAgMjcuMjk5NiAwQzEyLjIyMjQgMCAwIDEyLjIyMjYgMCAyNy4zQzAgNDIuMzc3MyAyNS44NTI4IDcwIDI3LjI5OTYgNzBaTTI3LjI5OTcgNDAuOTU0NUMzNC45NDM4IDQwLjk1NDUgNDEuMTQwNiAzNC43NTc1IDQxLjE0MDYgMjcuMTEzM0M0MS4xNDA2IDE5LjQ2OSAzNC45NDM4IDEzLjI3MjIgMjcuMjk5NyAxMy4yNzIyQzE5LjY1NTUgMTMuMjcyMiAxMy40NTg4IDE5LjQ2OSAxMy40NTg4IDI3LjExMzNDMTMuNDU4OCAzNC43NTc1IDE5LjY1NTUgNDAuOTU0NSAyNy4yOTk3IDQwLjk1NDVaJyBmaWxsPScjMUQzNTUyJy8+PC9zdmc+XCJcclxuICAgICl9YCxcclxuICAgIGljb25JbWFnZVNpemU6IFs1NCwgNzBdLFxyXG4gICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMsIC00Ml0sXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRhYnNbMF0pIHtcclxuICAgIFtcclxuICAgICAgeyBpZDogJ3RhYi0xJywgdmFsdWU6IFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTInLCB2YWx1ZTogWzU2Ljg4MDgzODU2NzgxODk0LCA2MC41MTgyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItMycsIHZhbHVlOiBbNTUuNzU0ODA1NTY5MDA0MDksIDM3LjU4NDU1MDQ5OTk5OTk5XSB9LFxyXG4gICAgICB7IGlkOiAndGFiLTQnLCB2YWx1ZTogWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdIH0sXHJcbiAgICAgIHsgaWQ6ICd0YWItNScsIHZhbHVlOiBbNTYuODgwODM4NTY3ODE4OTQsIDYwLjUxODI0M10gfSxcclxuICAgICAgeyBpZDogJ3RhYi02JywgdmFsdWU6IFs1NS43NTQ4MDU1NjkwMDQwOSwgMzcuNTg0NTUwNDk5OTk5OTldIH0sXHJcbiAgICBdLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgIGNvb3JkaW5hdGUudmFsdWUsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgb3B0aW9uUGxhY2VtYXJrXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcblxyXG4gICAgICB0YWJzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiID09PSBjb29yZGluYXRlLmlkKVxyXG4gICAgICAgICAgICBteU1hcC5wYW5UbyhteVBsYWNlbWFyay5nZW9tZXRyeS5nZXRDb29yZGluYXRlcygpLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdLFxyXG4gICAgICB7fSxcclxuICAgICAgb3B0aW9uUGxhY2VtYXJrXHJcbiAgICApO1xyXG5cclxuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICB9XHJcblxyXG4gIG15TWFwXHJcbiAgICAucGFuVG8oWzUzLjY3NjY5ODI2OTY4MDczLCAyMy44MzAxODMxOTU3NzAyNDNdLCB7IGZseWluZzogdHJ1ZSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBteU1hcC5zZXRab29tKDE3KTtcclxuICAgIH0pO1xyXG5cclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcclxufVxyXG4iXSwiZmlsZSI6Im1hcC5qcyJ9
