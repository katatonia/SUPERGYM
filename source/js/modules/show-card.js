const cards = document.querySelectorAll('.trainers__item');

const showCardInfo = () => {
  if (cards) {
    cards.forEach((item) => {
      item.addEventListener('click', () => {
        cards.forEach((info) => {
          const cardsInfo = info.querySelector('.trainers__info');
          const cardsTitle = info.querySelector('h3');
          cardsInfo.style.display = 'none';
          cardsTitle.style.display = 'block';
        });
        let currentCard = item;
        const cardInfo = currentCard.querySelector('.trainers__info');
        const cardPhoto = currentCard.querySelector('.trainers__photo');
        const cardTitle = cardPhoto.querySelector('h3');

        cardInfo.style.display = 'flex';
        cardTitle.style.display = 'none';
      });
    });
  }
};

const onCardClick = () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1199) {
      showCardInfo();
    }
  });
};

export {onCardClick};
