const mainTextInput = document.querySelector('#main-text-input');
const counterLabel = document.querySelector('.controls__counter');
const labels = document.querySelectorAll('.controls__label');
const checkboxes = document.querySelectorAll('.controls__checkbox');

function isAllChecked(checkboxes) {
    const checkboxesArr = Array.prototype.slice.call(checkboxes);    
    return checkboxesArr.every(checkbox => checkbox.checked);
}

mainTextInput.addEventListener('input', () => {
    if (!isAllChecked(checkboxes)) 
        counterLabel.innerHTML = mainTextInput.value.length;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            switch (checkbox.value) {
                case 'no spaces':
                    counterLabel.innerHTML = lengthWithoutSpaces(mainTextInput.value);
                    console.log('no spaces');
                    break;
                case 'no signs':
                    counterLabel.innerHTML = lengthWithoutSigns(mainTextInput.value);
                    console.log('no signs');
                    break;
                case 'count lines':
                    counterLabel.innerHTML = countLines(mainTextInput.value);
                    console.log('count lines');
                    break;
                case 'count words':
                    counterLabel.innerHTML = countWords(mainTextInput.value);
                    console.log('count words');
                    break;
                default:
                    counterLabel.innerHTML = mainTextInput.value.length;
                    console.log('length');
            }
        }
    });
});

labels.forEach(label => {
    label.addEventListener('click', () => {
        const checkmark = label.querySelector('.controls__checkmark');
        checkmark.classList.add('click-anim');
        setTimeout(() => checkmark.classList.remove('click-anim'), 100);
    });
});

