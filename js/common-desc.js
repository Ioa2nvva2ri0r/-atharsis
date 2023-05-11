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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24tZGVzYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21tb25EZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1vbi1kZXNjJyk7XHJcblxyXG5jb25zdCBvYnNlcnZlclRyYW5zbGF0ZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjgpXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgY29tbW9uRGVzYy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZWxzZSBjb21tb25EZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC42XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVyVHJhbnNsYXRlLm9ic2VydmUoY29tbW9uRGVzYyk7XHJcbiJdLCJmaWxlIjoiY29tbW9uLWRlc2MuanMifQ==
