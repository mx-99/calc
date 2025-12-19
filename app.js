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

function populate(n){
    if(!isNaN(n)){
        if(!operator){
            firstNumber += n;
            display.value = firstNumber;
        }else {
            secondNumber += n;
            display.value = secondNumber;
        }
    } else if(['/', '*', '+', '-'].includes(n)){
        if(!firstNumber && !operator){
            display.value = "please Enter operands before operator";
            return 
        }
        if(secondNumber && operator){
            let midResult = operate(operator, firstNumber, secondNumber);
            display.value = midResult;
            firstNumber = midResult;
            secondNumber = '';
        }
        operator = n;
    } else if(n === '='){
        if(!firstNumber && !secondNumber){
          display.value = "please Enter numbers before =";
          return 
        }
        result = operate(operator, firstNumber, secondNumber);
        firstNumber = '';
        secondNumber = '';
        operator = '';
        display.value = result
      }
    }

const clear = document.querySelector('.clear')

clear.addEventListener('click', ()=>{
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.value = '';
})
