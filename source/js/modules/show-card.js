const cards = document.querySelectorAll('.trainers__item');

const showCardInfo = () => {
  if (cards) {
    cards.forEach((item) => {
      item.addEventListener('click', () => {
        cards.forEach((info) => {
          const cardsInfo = info.querySelector('.trainers__info');
          cardsInfo.style.display = 'none';
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

export {showCardInfo};
