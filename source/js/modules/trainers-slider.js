const {default: Swiper} = require('swiper');

export const trainersSwiper = new Swiper('.trainers-slider', {
  loop: true,

  navigation: {
    nextEl: '.trainers-slider__btn-next"',
    prevEl: '.trainers-slider__btn-prev"',
  },
});
