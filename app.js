const DEFAULT_NUM = undefined;
const DEFAULT_OPERATOR = '';
const funnyPhrase = 'wtf lol';

let num1, num2 = DEFAULT_NUM;
let currentOperator = DEFAULT_OPERATOR;
let needsReset = false;

function setCurrentOperator(newOperator) {
    currentOperator = newOperator;
}

function setNum1(newNum) {
    num1 = newNum;
}

function setNum2(newNum) {
    num2 = newNum;
}

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn0 = document.getElementById('0');

const digits = document.querySelectorAll('.digit')
console.table(digits);

const btnClear = document.getElementById('clear');
const btnInverse = document.getElementById('inverse');
const btnDecimal = document.getElementById('.');

const btnPlus = document.getElementById('+');
const btnMinus = document.getElementById('-');
const btnMultiply = document.getElementById('*');
const btnDivide = document.getElementById('/');
const btnEquals = document.getElementById('equalsBtn');

const operators = document.querySelectorAll('.operator')
const display = document.querySelector('#displayText')


btnClear.onclick = () => reset();
btnInverse.onclick = () => inverse();
btnEquals.onclick = () => equals();

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (needsReset) {
            display.innerHTML = '';
            needsReset = false;
        }
        if (display.innerHTML != funnyPhrase || display.innerHTML != 'ERROR')
            concatDisplay(digit.textContent);
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        
        if (num1 != DEFAULT_NUM && display.innerHTML != '') {
            compute();
            activateOperator(operator);
            setCurrentOperator(operator.textContent);
            if (display.innerHTML != '') {
                setNum1(parseFloat(display.innerHTML));
            }
            needsReset = true
        } else {
            activateOperator(operator);
            setCurrentOperator(operator.textContent);
            if (display.innerHTML != '') {
                setNum1(parseFloat(display.innerHTML));
            }
            display.innerHTML = '';
        }
        
        console.log(num1);
        console.log(currentOperator);
    });
})


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
    if (arguments[1] === 0)
        return 'wtf lol'
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

function equals() {
    compute();
    if (!(isNaN(parseFloat(display.innerHTML))))
        setNum1(parseFloat(display.innerHTML));
    resetOperators();
}

function compute() {
    if (num1 != undefined) {
        setNum2(parseFloat(display.innerHTML));
        const result = operate(num1, num2, currentOperator);
        if (result != undefined)    
            if (result == funnyPhrase) {
                display.innerHTML = `${result}`;
            } else if (isNaN(result)) {
                display.innerHTML = `ERROR`;
            } else if (result % Math.round(result) != 0) {
                display.innerHTML = `${result.toFixed(3)}`;
            } else {
                display.innerHTML = `${result}`;
            }

    }
}

function inverse() {
    let num = parseFloat(display.innerHTML);
    num *= -1
    display.innerHTML = `${num}`;
}

function init() {
    display.textContent = '0';
    needsReset = true;
    setNum1(DEFAULT_NUM);
    setNum2(DEFAULT_NUM);
    setCurrentOperator(DEFAULT_OPERATOR);
}

function reset() {
    init();
    resetOperators();
}

function activateOperator(operatorBtn) {
    resetOperators();
    operatorBtn.classList.add('active');
}

function resetOperators() {
    operators.forEach((operator) => {
        operator.classList.remove('active');
    });
    setCurrentOperator(DEFAULT_OPERATOR);
}

function concatDisplay(digit) {
    display.innerHTML = display.innerHTML.concat('', digit);
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



if num1 is not undefined AND display is not empty, compute result and store as num 1 erase num 2
*/
