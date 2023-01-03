const cards = document.querySelectorAll('.card');
const details = document.query

cards.forEach(card => {
    const button = card.querySelector('.card-button');
    button.addEventListener('click', () => {
      const title = card.querySelector('.card-title').textContent;
      const content = document.querySelector(`summary:contains(${title})`).parentElement;
      content.style.display = 'block';
    });
  });
  