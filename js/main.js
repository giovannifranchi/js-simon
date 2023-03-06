

function createRandomNum(min, max){
    let random = Math.floor(Math.random() * (max - min) + min);
    return random;
}

function createHTMLElement(element, number, container, className){
    const fragment = document.createDocumentFragment();
    const newContainer = document.querySelector(container);
    for(let i = 0; i < number; i++){
        const newElement = document.createElement(element);
        newElement.classList.add(className);
        fragment.append(newElement);
    }
    newContainer.append(fragment);
}


function fillInnerText(arrayOfElements, arrayOfNumbers){
    const elements = document.querySelectorAll(arrayOfElements);
    for(let i = 0; i < arrayOfNumbers.length; i++){
        elements[i].innerText = arrayOfNumbers[i];
    }
}

function createRandomArray(length, min, max){
    let randomArray = [];
    while(randomArray.length < length){
        let randomNum = createRandomNum(min, max);
        randomArray.push(randomNum);
    }
    return randomArray;
}

function hideElements(arrayOfElements, classHide){
    const arrayToHide = document.querySelectorAll(arrayOfElements);
    for(let i = 0; i < arrayToHide.length; i++){
        arrayToHide[i].classList.add(classHide);
    }
}

const container = '.container'
const classNameNumbers = 'box';
const arrayOfElements = '.box';
const minNum = 0;
const maxNum = 99;
const lengthOfNumbers = 5;
const element = 'div';
const classHide = 'hidden';
const randomArray = createRandomArray(lengthOfNumbers, minNum, maxNum);

createHTMLElement(element, randomArray.length, container, classNameNumbers);
fillInnerText(arrayOfElements, randomArray);

let hide = setTimeout(()=>{
    hideElements(arrayOfElements, classHide);
}, 4000);

