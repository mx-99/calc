function add(a,b){
    return a+b;
}
function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function div(a, b) {
    if(!isNaN(a) && b === 0) return "Can't divide 0"
    return a/b
}

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';
let decimalValue = '';

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
let display = document.querySelector('.display');

function populate(value){
    if(!isNaN(value)){
        if(!operator){
            firstNumber += value;
            display.textContent = firstNumber;
        }else {
            secondNumber += value;
            display.textContent = secondNumber;
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
    } else if(value === '='){
        if(!firstNumber && !secondNumber){
          display.textContent = "please Enter numbers before =";
          return 
        }
        result = operate(operator, firstNumber, secondNumber);
        firstNumber = '';
        secondNumber = '';
        operator = '';
        display.textContent = result
      }
    }

const clear = document.querySelector('.clear')

clear.addEventListener('click', ()=>{
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '';
})

