let number1 = undefined;
let number2 = undefined;
let operator = undefined;
let switchNumbers = false;
let displayContent = document.querySelector('.display-content'); 

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function divide (a, b) {
    return a / b;
};

function multiply (a, b) {
    return a * b;
};

function operate (operator, number1, number2) {
    switch (operator) {
        case '+': return add(number1, number2);
        case '-': return subtract(number1, number2);
        case '/': return divide(number1, number2);
        case '*': return multiply(number1, number2);
    }
};

function pressedNumber() {
    if (switchNumbers) {
        displayContent.textContent = "";
        switchNumbers = false;};
    let numberPressed = this.textContent;
    displayContent.textContent += numberPressed;
};

function pressedOperator() {
    operator = this.dataset.operator;
    number1 = parseInt(displayContent.textContent, 10);
    if (number1) {switchNumbers = true};
};

function pressedEqual() {
    number2 = parseInt(displayContent.textContent, 10);
    let result = operate(operator, number1, number2);
    displayContent.textContent = result;
    number1 = result;
};

function pressedClear() {
    displayContent.textContent = "";
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
}

document.querySelectorAll('.num-btn').forEach(btn => btn.addEventListener('click', pressedNumber));
document.querySelectorAll('.operator').forEach(op => op.addEventListener('click', pressedOperator));
document.querySelector('.enter').addEventListener('click', pressedEqual);
document.querySelector('.clear').addEventListener('click', pressedClear);