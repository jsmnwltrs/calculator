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
const equalButton = document.getElementById('equalButton')

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML)
};

const equalButtonEvent = () => {
    equalButton.addEventListener('click', calculate)
};

const divideButtonEvent = () => {
    divideButton.addEventListener('click', () => {
        setMathType('divide');
    })
}

const sevenButtonEvent = () => {
    sevenButton.addEventListener("click", addNumberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click', addNumberCaller);
};



const attachEvents = () => {
    sevenButtonEvent();
    nineButtonEvent();
    eightButtonEvent();
    divideButtonEvent();
    equalButtonEvent();
}

export default attachEvents;