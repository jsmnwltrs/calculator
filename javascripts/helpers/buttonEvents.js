import {addNumber, setMathType, calculate} from '../components/calculator.js'

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');

const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const equalButton = document.getElementById('equalButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
};

const equalButtonEvent = () => {
    equalButton.addEventListener('click', calculate);
};

const divideButtonEvent = () => {
    divideButton.addEventListener('click', (e) => {
        e.target.className += "selectedButton";
        setMathType('divide');
    })
};

const addButtonEvent = () => {
    addButton.addEventListener('click', (e) => {
        e.target.className += "selectedButton";
        setMathType('add');
    })
};

const subtractButtonEvent = () => {
    subtractButton.addEventListener('click', (e) => {
        e.target.className += "selectedButton";
        setMathType('subtract');
    })
};

const multiplyButtonEvent = () => {
    multiplyButton.addEventListener('click', (e) => {
        e.target.className += "selectedButton";
        setMathType('multiply');
    })
};

const sevenButtonEvent = () => {
    sevenButton.addEventListener("click", addNumberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click', addNumberCaller);
};

const oneButtonEvent = () => {
    oneButton.addEventListener('click', addNumberCaller);
};

const twoButtonEvent = () => {
    twoButton.addEventListener('click', addNumberCaller);
};

const threeButtonEvent = () => {
    threeButton.addEventListener('click', addNumberCaller);
};

const fourButtonEvent = () => {
    fourButton.addEventListener('click', addNumberCaller);
};

const fiveButtonEvent = () => {
    fiveButton.addEventListener('click', addNumberCaller);
};

const sixButtonEvent = () => {
    sixButton.addEventListener('click', addNumberCaller);
};


const attachEvents = () => {
    sevenButtonEvent();
    nineButtonEvent();
    eightButtonEvent();
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    divideButtonEvent();
    equalButtonEvent();
    addButtonEvent();
    subtractButtonEvent();
    multiplyButtonEvent();
}

export default attachEvents;