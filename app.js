function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function div(a, b) {
    if (!isNaN(a) && b === 0) return "Can't divide 0"
    return a / b
}

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';
let decimalValue = '';

function operate(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b)
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return div(a, b);
        default:
            return 'Invalid operator';
    }
}

const btns = document.querySelectorAll('.buttons')

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let number = e.target.innerText;
        work(number);
    })
})
let display = document.querySelector('.display');

function populate(n) {
    display.value = n;
}

function work(n) {
    if (!isNaN(n)) {
        if (!operator) {
            firstNumber += n;
            populate(firstNumber);
        } else {
            secondNumber += n;
            populate(secondNumber);
        }
    } else if (['/', '*', '+', '-'].includes(n)) {
        if (!firstNumber && !operator) {
            populate("please Enter operands before operator");
            return
        }
        if (secondNumber && operator) {
            let midResult = operate(operator, firstNumber, secondNumber);
            populate(midResult);
            firstNumber = midResult;
            secondNumber = '';
        }
        operator = n;
        populate(operator)
    } else if (n === '=') {
        if (!firstNumber && !secondNumber) {
            populate("please Enter numbers before =");
            return
        }
        result = operate(operator, firstNumber, secondNumber);
        firstNumber = '';
        secondNumber = '';
        operator = '';
        populate(result)
    }
}

const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.value = '';
})

document.addEventListener('keydown', (e) => {
    let key = e.key;
    console.log(key)
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(key)) {
        work(key)
    }
    if (['+', '-', '*', '/'].includes(key)) {
        work(key)
    }
    if (['Enter'].includes(key)) {
        let j = '='
        work(j)
    }
    if (key === 'Backspace') {
        e.preventDefault();
        display.value = display.value.slice(0, -1);
    }
})