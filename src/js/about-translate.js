const blockAbout = document.getElementById('block-about');

const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting) blockAbout.classList.add('active');
      else blockAbout.classList.remove('active');
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(blockAbout);
