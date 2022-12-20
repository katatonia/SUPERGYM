import Swiper from 'swiper';

const reviewsContainer = document.querySelector('.reviews-slider');

const createReviewsSlider = () => {
  if (reviewsContainer) {
    const reviewsSlider = new Swiper('.reviews-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 57,
      navigation: {
        nextEl: '.reviews-slider__btn-next',
        prevEl: '.reviews-slider__btn-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 32,
        },
        768: {
          spaceBetween: 57,
        },
        1200: {
          spaceBetween: 80,
        },
      },
    });
  }
};

export {createReviewsSlider};
