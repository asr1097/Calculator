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

document.querySelectorAll('.num-btn').forEach(btn => btn.addEventListener('click', function() {
    let numberPressed = this.textContent;
    let displayContent = document.querySelector('.display-content'); 
    displayContent.textContent += numberPressed;
}))