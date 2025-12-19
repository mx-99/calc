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
    a = parseFloat(a);
    b = parseFloat(b)
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

const btns = document.querySelectorAll('.buttons')

btns.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        let number = e.target.innerText;
        populate(number);
    })
})

function populate(value){
    let display = document.querySelector('.display');
    display.textContent = value;
    if(!isNaN(value)){
        if(!operator){
            firstNumber += value;
            display.textContent = firstNumber;
        }else {
            secondNumber += value;
            display.textContent = value;
        }
    } else if(['/', '*', '+', '-'].includes(value)){
        if(!firstNumber && !operator){
            display.textContent = "please Enter operands before operator";
            return 
        }
        if(secondNumber && operator){
            let midResult = operate(operator, firstNumber, secondNumber);
            display.textContent = midResult;
            firstNumber = midResult;
            secondNumber = '';
        }
        operator = value;
    } 
    }

const clear = document.querySelector('.clear')

clear.addEventListener('click', ()=>{
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    })