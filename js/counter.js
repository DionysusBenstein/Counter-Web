const countWords = text => text ? text.split(' ').length : '0';

function lengthWithoutSigns(text) {
    const signs = "!\"#$%^&*()+=_'?.,|\\/~№:;@[]{}«»<>©";
    let textLength = text.length;

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < signs.length; j++) {
            if (text[i] === signs[j])
                textLength--;
        }
    }
    return textLength;  
}

function lengthWithoutSpaces(text) {
    let textLength = text.length;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ')
            textLength--;
    }
    return textLength;
}

function countLines(text) {
    let counter = 1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n')
            counter++;
    }
    return counter;
}