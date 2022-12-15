const playBtn = document.querySelector('.video__play');
const iframe = document.querySelector('.video__iframe');

const onPlayClick = () => {
  if (playBtn && iframe) {
    playBtn.addEventListener('click', () => {
      playBtn.style.display = 'none';
      iframe.style.display = 'block';
    });
  }
};

export {onPlayClick};
