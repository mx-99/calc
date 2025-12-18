function add(a,b){
    return a+b;
}
function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

let firstNumber = '';
let operator = '';
let secondNumber = ''

function operate(op, a, b){
    switch(op){
        case '+':
            return add(a,b);
        case '-':
            return sub(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return div(a,b);
        default:
            return 'Invalid operator';
    }
}
