

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

function askNumbers(times){
    const arrayOfAskedNums = [];
    for( let i = 0; i < times; i++){
        const askedNum = Number(prompt('eneter a number', ''));
        arrayOfAskedNums.push(askedNum);
    }
    return arrayOfAskedNums;
}

function controlCoincidence(list, controlList){
    const coincidentNums = [];
    for(let i = 0; i < list.length; i++){
        if(controlList.includes(list[i])){
            coincidentNums.push(list[i]);
        }
    }
    return coincidentNums;
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
let arrayOfAskedNums = [];
let coincidentNums = [];

createHTMLElement(element, randomArray.length, container, classNameNumbers);
fillInnerText(arrayOfElements, randomArray);

let hide = setTimeout(()=>{
    hideElements(arrayOfElements, classHide);
}, 4000);

let CallarrayOfAskedNums = setTimeout(()=>{
    arrayOfAskedNums = [...askNumbers(lengthOfNumbers)];
}, 5000);

let callCoincidentArray =  setTimeout(()=>{
    coincidentNums = [...controlCoincidence(arrayOfAskedNums, randomArray)];
}, 6000);

let callResult = setTimeout(()=>{
    createHTMLElement(element, coincidentNums.length, container, classNameNumbers);
}, 7000);


