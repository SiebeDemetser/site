const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const button = card.querySelector('.card-button');
        button.addEventListener('click', () => {
            const title = card.querySelector('.card-title').textContent;
            const summaries = document.querySelectorAll('summary');
            const content = Array.from(summaries).filter(summary => summary.textContent === title)[0].parentElement;
            content.style.display = 'block';
            content.setAttribute('open', '');

            // Close all other details elements
            document.querySelectorAll('details').forEach(el => {
                if (el !== content) el.style.display = 'none';
            });
        });
    });