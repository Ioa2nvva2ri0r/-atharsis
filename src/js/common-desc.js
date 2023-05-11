const commonDesc = document.getElementById('common-desc');

const observerTranslate = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting) commonDesc.classList.add('active');
      else commonDesc.classList.remove('active');
  },
  {
    threshold: [0.6],
  }
);
observerTranslate.observe(commonDesc);
