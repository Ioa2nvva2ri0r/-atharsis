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
