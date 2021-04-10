'use strict'
const header = document.body.querySelector('h1');

// const spanCreator = header.createElement
const hover = function() {
    //replace h1 by newH1 
    const headerArr = header.textContent.split('');
    const newHeader = document.createElement('h1');
    header.replaceWith(newHeader);

    //Adding span with each letter into newH1
    for(const eachLetter of headerArr) {
        const newSpan = document.createElement('span');
        newSpan.textContent = eachLetter;
        newHeader.append(newSpan);
        //adding class flip into each span
        newSpan.textContent !== ' ' && newSpan.classList.add('flip');
    }
} 
header.addEventListener('mouseenter', hover);