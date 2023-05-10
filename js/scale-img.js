const image = document.querySelectorAll('.common-form__img');

const observerImage = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) image.forEach((el) => el.classList.add('active'));
    else image.forEach((el) => el.classList.remove('active'));
  },
  {
    threshold: [0.4],
  }
);
observerImage.observe(...image);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY2FsZS1pbWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uLWZvcm1fX2ltZycpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXJJbWFnZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBpbWFnZS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gICAgZWxzZSBpbWFnZS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC40XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVySW1hZ2Uub2JzZXJ2ZSguLi5pbWFnZSk7XHJcbiJdLCJmaWxlIjoic2NhbGUtaW1nLmpzIn0=
