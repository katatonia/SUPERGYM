const trainersSwiper = document.querySelector('.trainers__swiper');
const trainersButtonPrev = document.querySelector('.trainers__button-prev');
const trainersButtonNext = document.querySelector('.trainers__button-next');

const createTrainersSlider = () => {
  if (trainersSwiper) {
    // eslint-disable-next-line
    new Swiper(trainersSwiper, {
      navigation: {
        prevEl: trainersButtonPrev,
        nextEl: trainersButtonNext,
      },
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 2,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
};

export {createTrainersSlider};
