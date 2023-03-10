// FUNCTIONS

function createRandomNum(min, max) {
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
}

function createHTMLElement(element, number, container, className) {
  const fragment = document.createDocumentFragment();
  const newContainer = document.querySelector(container);
  for (let i = 0; i < number; i++) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    fragment.append(newElement);
  }
  newContainer.append(fragment);
}

function fillInnerText(arrayOfElements, arrayOfNumbers) {
  const elements = document.querySelectorAll(arrayOfElements);
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    elements[i].innerText = arrayOfNumbers[i];
  }
}

function createRandomArray(length, min, max) {
  let randomArray = [];
  while (randomArray.length < length) {
    let randomNum = createRandomNum(min, max);
    randomArray.push(randomNum);
  }
  return randomArray;
}

function hideElements(arrayOfElements, classHide) {
  const arrayToHide = document.querySelectorAll(arrayOfElements);
  for (let i = 0; i < arrayToHide.length; i++) {
    arrayToHide[i].classList.add(classHide);
  }
}

function countDown(seconds, container, element){
  let count = seconds;
  const newElement = document.querySelector(element);
  let interval = setInterval(()=>{
    if(count >= 0){
      newElement.innerText = count;
      count -= 1;
    }else{
      const newContainer = document.querySelector(container);
      newContainer.classList.add('hidden');
      clearInterval(interval);
    }
  }, 1000);
}

function askNumbers(times) {
  const arrayOfAskedNums = [];
  for (let i = 0; i < times; i++) {
    const askedNum = Number(prompt("eneter a number", ""));
    arrayOfAskedNums.push(askedNum);
  }
  return arrayOfAskedNums;
}

function controlCoincidence(list, controlList) {
  const coincidentNums = [];
  for (let i = 0; i < list.length; i++) {
    if (controlList.includes(list[i])) {
      coincidentNums.push(list[i]);
    }
  }
  return coincidentNums;
}

function displayResult(arrayOfCoincidentNums, element, className, container) {
  const messageAtLeastOne = `You guessed numbers: ${arrayOfCoincidentNums.join(
    ", "
  )}. Your score is ${arrayOfCoincidentNums.length}!`;
  const messageLose = `Sorry, you guessed ${arrayOfCoincidentNums.length} numbers`;
  const newContainer = document.querySelector(container);
  const textContainer = document.createElement(element);
  textContainer.classList.add(className);
  if (arrayOfCoincidentNums.length < 1) {
    textContainer.innerText = messageLose;
  } else {
    textContainer.innerText = messageAtLeastOne;
  }
  newContainer.append(textContainer);
}

function reset(container) {
  const newContainer = document.querySelector(container);
  newContainer.innerHTML = "";
}

function removeClass(className, element, condition){
  const newElement = document.querySelector(element);
  if(condition){
    newElement.classList.remove(className);
  }
}

function game(hasClicked) {
  const container = ".container";
  const classNameNumbers = "box";
  const arrayOfElements = ".box";
  const classResult = "result";
  const minNum = 0;
  const maxNum = 99;
  const lengthOfNumbers = 5;
  const element = "div";
  const timeContainer = '.time-container';
  const timeElement = '.time';
  const countDownSecs = 10;
  const classHide = "hidden";
  const randomArray = createRandomArray(lengthOfNumbers, minNum, maxNum);
  let arrayOfAskedNums = [];
  let coincidentNums = [];
  let timeInner = document.querySelector('.time');
  timeInner.innerText = countDownSecs;

  reset(container);
  createHTMLElement(element, randomArray.length, container, classNameNumbers);
  fillInnerText(arrayOfElements, randomArray);
  removeClass(classHide,timeContainer, hasClicked)
  countDown(countDownSecs, timeContainer, timeElement);
  // hasClicked = false;


  let hide = setTimeout(() => {
    hideElements(arrayOfElements, classHide);
  }, (countDownSecs + 2) * 1000);

  let CallarrayOfAskedNums = setTimeout(() => {
    arrayOfAskedNums = [...askNumbers(lengthOfNumbers)];
  }, (countDownSecs + 3) * 1000);

  let callCoincidentArray = setTimeout(() => {
    coincidentNums = [...controlCoincidence(arrayOfAskedNums, randomArray)];
  }, (countDownSecs + 3) * 1000);

  let callDisplayResult = setTimeout(() => {
    displayResult(coincidentNums, element, classResult, container);
  }, (countDownSecs + 3) * 1000);
}

// PROGRAM

const playBtn = document.querySelector('.btn');
let countDownSecs = 10;
let hasClicked = false;
let timeInner = document.querySelector('.time');
timeInner.innerText = countDownSecs;

playBtn.addEventListener('click', ()=>{
  game(hasClicked);
  hasClicked = true;
});
