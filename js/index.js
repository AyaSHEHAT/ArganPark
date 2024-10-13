document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('offers-container');
    const cards = Array.from(container.children);
    console.log(cards);
    const visibleCards = 4; // Number of cards to show at once
    let currentPosition = 0; // Index of the first visible card
    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('prev');
    prevBtn.disabled = true;


    function updateSlider() {
        cards.forEach((card, index) => {
            if (index >= currentPosition && index < currentPosition + visibleCards) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    nextBtn.addEventListener('click', function () {
        if (currentPosition + visibleCards < cards.length) {
            currentPosition++;
            updateSlider();
            prevBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }

    });

    prevBtn.addEventListener('click', function () {
        if (currentPosition > 0) {
            currentPosition--;
            updateSlider();
            nextBtn.disabled = false;
        } else {
            prevBtn.disabled = true
        }
    });

    updateSlider();



    const radioButtons = document.querySelectorAll('.btn-check');
    const labels = document.querySelectorAll('.btn-outline');

    function updateBackground() {
        labels.forEach(label => {
            const input = document.getElementById(label.getAttribute('for'));
            if (input.checked) {
                label.style.backgroundColor = '#b3952b';
                label.style.color = '#fff';
            } else {
                label.style.backgroundColor = 'transparent';
                label.style.color = '#000';
            }
        });
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateBackground);
    });

    updateBackground();
});
