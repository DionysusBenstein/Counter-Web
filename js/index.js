const checkbox = document.querySelector('.controls__checkbox');
const checkmark = document.querySelector('.controls__checkmark');

checkbox.addEventListener('click', () => {
    checkmark.classList.add('click-anim');    
    setTimeout(() => checkmark.classList.remove('click-anim'), 100);
});