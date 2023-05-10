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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY2FsZS1pbWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uLWZvcm1fX2ltZycpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXJJbWFnZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjgpXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZylcclxuICAgICAgICBpbWFnZS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG4gICAgICBlbHNlIGltYWdlLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHJlc2hvbGQ6IFswLjRdLFxyXG4gIH1cclxuKTtcclxub2JzZXJ2ZXJJbWFnZS5vYnNlcnZlKC4uLmltYWdlKTtcclxuIl0sImZpbGUiOiJzY2FsZS1pbWcuanMifQ==
