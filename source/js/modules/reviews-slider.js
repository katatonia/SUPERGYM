const {default: Swiper} = require('swiper');

export const reviesSwiper = new Swiper('.reviews-slider', {
  loop: true,

  navigation: {
    nextEl: '.reviews-slider__btn-next',
    prevEl: '.reviews-slider__btn-prev',
  },
});
