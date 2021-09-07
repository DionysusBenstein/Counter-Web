const labels = document.querySelectorAll('.controls__label');

labels.forEach(label => {
    label.addEventListener('click', () => {
        const checkmark = label.querySelector('.controls__checkmark');
        checkmark.classList.add('click-anim');
        setTimeout(() => checkmark.classList.remove('click-anim'), 100);
    });
});

