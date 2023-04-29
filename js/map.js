/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [53.676347909629094, 23.828005242050153],
    zoom: 18,
  });

  let myPlacemark = new ymaps.Placemark(
    [53.67669826968073, 23.830183195770243],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: `data:image/svg+xml,${encodeURIComponent(
        "<svg width='55' height='70' viewBox='0 0 55 70' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M27.2996 70C28.7465 70 54.5993 42.3773 54.5993 27.3C54.5993 12.2226 42.3767 0 27.2996 0C12.2224 0 0 12.2226 0 27.3C0 42.3773 25.8528 70 27.2996 70ZM27.2997 40.9545C34.9438 40.9545 41.1406 34.7575 41.1406 27.1133C41.1406 19.469 34.9438 13.2722 27.2997 13.2722C19.6555 13.2722 13.4588 19.469 13.4588 27.1133C13.4588 34.7575 19.6555 40.9545 27.2997 40.9545Z' fill='#1D3552'/></svg>"
      )}`,
      iconImageSize: [54, 70],
      iconImageOffset: [-3, -42],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap
    .panTo([53.67669826968073, 23.830183195770243], { flying: true })
    .then(function () {
      myMap.setZoom(18);
    });

  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBsZXQgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICBjZW50ZXI6IFs1My42NzYzNDc5MDk2MjkwOTQsIDIzLjgyODAwNTI0MjA1MDE1M10sXHJcbiAgICB6b29tOiAxOCxcclxuICB9KTtcclxuXHJcbiAgbGV0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgIFs1My42NzY2OTgyNjk2ODA3MywgMjMuODMwMTgzMTk1NzcwMjQzXSxcclxuICAgIHt9LFxyXG4gICAge1xyXG4gICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgIGljb25JbWFnZUhyZWY6IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgICAgXCI8c3ZnIHdpZHRoPSc1NScgaGVpZ2h0PSc3MCcgdmlld0JveD0nMCAwIDU1IDcwJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjcuMjk5NiA3MEMyOC43NDY1IDcwIDU0LjU5OTMgNDIuMzc3MyA1NC41OTkzIDI3LjNDNTQuNTk5MyAxMi4yMjI2IDQyLjM3NjcgMCAyNy4yOTk2IDBDMTIuMjIyNCAwIDAgMTIuMjIyNiAwIDI3LjNDMCA0Mi4zNzczIDI1Ljg1MjggNzAgMjcuMjk5NiA3MFpNMjcuMjk5NyA0MC45NTQ1QzM0Ljk0MzggNDAuOTU0NSA0MS4xNDA2IDM0Ljc1NzUgNDEuMTQwNiAyNy4xMTMzQzQxLjE0MDYgMTkuNDY5IDM0Ljk0MzggMTMuMjcyMiAyNy4yOTk3IDEzLjI3MjJDMTkuNjU1NSAxMy4yNzIyIDEzLjQ1ODggMTkuNDY5IDEzLjQ1ODggMjcuMTEzM0MxMy40NTg4IDM0Ljc1NzUgMTkuNjU1NSA0MC45NTQ1IDI3LjI5OTcgNDAuOTU0NVonIGZpbGw9JyMxRDM1NTInLz48L3N2Zz5cIlxyXG4gICAgICApfWAsXHJcbiAgICAgIGljb25JbWFnZVNpemU6IFs1NCwgNzBdLFxyXG4gICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMywgLTQyXSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcbiAgbXlNYXBcclxuICAgIC5wYW5UbyhbNTMuNjc2Njk4MjY5NjgwNzMsIDIzLjgzMDE4MzE5NTc3MDI0M10sIHsgZmx5aW5nOiB0cnVlIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG15TWFwLnNldFpvb20oMTgpO1xyXG4gICAgfSk7XHJcblxyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnem9vbUNvbnRyb2wnKTtcclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xyXG59XHJcbiJdLCJmaWxlIjoibWFwLmpzIn0=
