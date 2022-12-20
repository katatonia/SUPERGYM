import Swiper from 'swiper';

const trainersContainer = document.querySelector('.trainers-slider');

const createTrainersSlider = () => {
  if (trainersContainer) {
    // eslint-disable-next-line
    const trainersSlider = new Swiper('.trainers-slider', {
      loop: true,
      navigation: {
        nextEl: '.trainers-slider__btn-next',
        prevEl: '.trainers-slider__btn-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
        },
      },
    });
  }
};

export {createTrainersSlider};
