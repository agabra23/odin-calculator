const DEFAULT_NUM = undefined;
const DEFAULT_OPERATOR = undefined;

let num1, num2 = DEFAULT_NUM;
let currentOperator = DEFAULT_OPERATOR;

function setCurrentOperator(newOperator) {
    currentOperator = newOperator;
}

const btn1 = document.querySelector('#1');
const btn2 = document.querySelector('#2');
const btn3 = document.querySelector('#3');
const btn4 = document.querySelector('#4');
const btn5 = document.querySelector('#5');
const btn6 = document.querySelector('#6');
const btn7 = document.querySelector('#7');
const btn8 = document.querySelector('#8');
const btn9 = document.querySelector('#9');
const btn0 = document.querySelector('#0');

const digits = document.querySelectorAll('.digit')

const btnClear = document.querySelector('#clear');
const btnInverse = document.querySelector('#inverse');
const btnPercent = document.querySelector('#%');

const btnPlus = document.querySelector('#+');
const btnMinus = document.querySelector('#-');
const btnMultiply = document.querySelector('#*');
const btnDivide = document.querySelector('#/');
const btnDecimal = document.querySelector('#decimalBtn');

const operators = document.querySelectorAll('.operator')

const display = document.querySelector('#displayText')





function add() {
    return arguments[0] + arguments[1];
}


function subtract() {
    return arguments[0] - arguments[1];
}


function multiply() {
    return arguments[0] * arguments[1];
}


function divide() {
    return arguments[0] / arguments[1];
}


function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

function init() {
    display.textContent = '';
    num1, num2 = DEFAULT_NUM;
    currentOperator = DEFAULT_OPERATOR;
}

function reset() {
    init();
}

function activateButton(newOperator) {
    if (currentOperator === '+') {
        btnPlus.classList.remove('active');
    } else if (currentMode === '-') {
        btnMinus.classList.remove('active');
    } else if (currentMode === '*') {
        btnMultiply.classList.remove('active');
    } else if (currentMode === '/') {
        btnDivide.classList.remove('active');
    }

    if (newOperator === '+') {
        btnPlus.classList.add('active');
    } else if (newMode === '-') {
        btnMinus.classList.add('active');
    } else if (newMode === '*') {
        btnMultiply.classList.add('active');
    }else if (newMode === '/') {
        btnDivide.classList.add('active');
    }
}

function concatDisplay(digit) {
    display.textContent += digit;
}

Window.onload = init();

/* 
Notes: String together operations
Notes: Early '=' click shouldnt do anything
Notes: Should be able to switch active operator without affecting numbers
Notes: Round decimals to 2 decimal places
Notes: 'Clear' button completely clears data and resets the calculator
Notes: Display 'dumbass' when dividing by 0
Notes: Add keyboard Support
Notes: add decimal support
*start with num1 = undefined, num2 = undefined
Concat digit with result text box each digit click
save first and second num (same as first) when operator is clicked
next digit to be clicked is concat to result text box
equals button click will save text box num as second num and then oeprate with both nums and selected operator
*/
