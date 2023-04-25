/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let color = [
  ['rgba(151, 80, 255, 1)', 'rgba(151, 80, 255, 0.7)'],
  ['rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 0.7)'],
  ['rgba(255, 183, 0, 1)', 'rgba(255, 183, 0, 0.7)'],
  ['rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 0.7)'],
  ['rgba(0, 255, 218, 1)', 'rgba(0, 255, 218, 0.7)'],
][Math.floor(Math.random() * 5)];

$('body').css('--color', color[0]).css('--color-transparent', color[1]);

const indexAnime = (function () {
  let dotsWrapperEl = $('.dots-wrapper');
  let dotsFragment = $(document.createDocumentFragment());
  let row = Math.ceil(($(document).height() / $(document).width()) * 12.5);
  let rowMob = Math.ceil(($(document).height() / $(document).width()) * 5);
  let grid;
  if ($(window).width() > 768) {
    grid = [12, row];
  } else {
    grid = [5, rowMob];
  }
  let numberOfElements = grid[0] * grid[1];
  let animation;

  for (let i = 0; i < numberOfElements; i++) {
    dotsFragment.append('<div class="dot"></div>');
  }

  dotsWrapperEl.append(dotsFragment);

  let index = anime.random(0, numberOfElements - 1);

  function play() {
    if (animation) animation.pause();

    index = anime.random(0, numberOfElements - 1);

    animation = anime
      .timeline({
        easing: 'easeInOutQuad',
        complete: play,
      })
      .add(
        {
          targets: '.stagger-visualizer .dot',
          keyframes: [
            {
              translateX: anime.stagger('-2px', {
                grid: grid,
                from: index,
                axis: 'x',
              }),
              translateY: anime.stagger('-2px', {
                grid: grid,
                from: index,
                axis: 'y',
              }),
              duration: 100,
            },
            {
              translateX: anime.stagger('2px', {
                grid: grid,
                from: index,
                axis: 'x',
              }),
              translateY: anime.stagger('2px', {
                grid: grid,
                from: index,
                axis: 'y',
              }),
              scale: anime.stagger([1, 0.9], { grid: grid, from: index }),
              duration: 225,
            },
            {
              translateX: 0,
              translateY: 0,
              scale: 1,
              duration: 1200,
            },
            {
              duration: 1400,
            },
          ],
          delay: anime.stagger(80, { grid: grid, from: index }),
        },
        30
      );
  }

  play();
})();
