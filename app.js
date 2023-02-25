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


// Notes: String together operations
// Notes: Early '=' click shouldnt do anything
// Notes: Should be able to switch active operator without affecting numbers
// start with num1 = undefined, num2 = undefined
// Concat digit with result text box each digit click
// save first and second num (same as first) when operator is clicked
// next digit to be clicked is concat to result text box
// equals button click will save text box num as second num and then oeprate with both nums and selected operator
