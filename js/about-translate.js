const blockAbout = document.getElementById('block-about');

const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) blockAbout.classList.add('active');
    else blockAbout.classList.remove('active');
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(blockAbout);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC10cmFuc2xhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmxvY2tBYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9jay1hYm91dCcpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXJUcmFuc2xhdGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgKFtlbnRyeV0pID0+IHtcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgYmxvY2tBYm91dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGVsc2UgYmxvY2tBYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9LFxyXG4gIHtcclxuICAgIHRocmVzaG9sZDogWzAuNl0sXHJcbiAgfVxyXG4pO1xyXG5vYnNlcnZlclRyYW5zbGF0ZS5vYnNlcnZlKGJsb2NrQWJvdXQpO1xyXG4iXSwiZmlsZSI6ImFib3V0LXRyYW5zbGF0ZS5qcyJ9
