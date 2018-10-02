import {printToDom} from '../helpers/util.js';
import {multiply, divide, add, subtract} from '../helpers/math.js';

const calc = {
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: ''
};

const calculate = () => {
    let answer = 0;
switch(calc.mathType){           //if else statement that is good for a condition that relies on one variable change
    case "multiply":
        answer = multiply(calc.firstNumber, calc.secondNumber);
        break;
    case "divide":
       answer = divide(calc.firstNumber, calc.secondNumber);
        break;
    case "add":
        answer = add(calc.firstNumber, calc.secondNumber);
        break;
    case "subtract":
        answer = subtract(calc.firstNumber, calc.secondNumber);
        break;
    default:
        answer = "none";
}
setDisplay(answer);
};

const setDisplay = (someNumber) => {
    calc.display = someNumber;
    printToDom(calc.display, 'result');
};

const setMathType = (newMathType) => {
    calc.mathType = newMathType;
};

const initialDisplay = () => {
    printToDom(0, 'result');
};

const addNumber = (num) => {
    if(calc.mathType === '') {
        calc.firstNumber += num;
        setDisplay(calc.firstNumber);
    } else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    }
};

export {calculate, addNumber, initialDisplay, setMathType};