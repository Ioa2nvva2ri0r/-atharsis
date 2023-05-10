const image = document.querySelectorAll('.common-form__img');

const observerImage = new IntersectionObserver(
  ([entry]) => {
    if (window.screen.width > 768)
      if (entry.isIntersecting)
        image.forEach((el) => el.classList.add('active'));
      else image.forEach((el) => el.classList.remove('active'));
  },
  {
    threshold: [0.4],
  }
);
observerImage.observe(...image);
