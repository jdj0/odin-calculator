// Calculator buttons
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const times = document.getElementById('x');
const divide = document.getElementById('÷');
const trash = document.getElementById('trash');

const screen = document.getElementById('output')

let num1 = '';
let operator = '';
let num2 = '';

one.addEventListener('click', function(){
    screen.textContent += 1;
})
two.addEventListener('click', function(){
    screen.textContent += 2;
})
three.addEventListener('click', function(){
    screen.textContent += 3;
})

trash.addEventListener('click', function(){
    num1 = '';
    operator = '';
    num2 = '';
    screen.textContent = '';
})

function operatorSign(num1, num2, operator){

}


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divides(a, b){
    return a / b;
}

function clear(){

}

function operate(num1, operator, num2){
    if (operator === '+'){
        return sum(num1, num2);
    } else if (operator === '-'){
        return subtract(num1, num2);
    } else if (operator === 'x'){
        multiply(num1, num2);
    } else if (operator === '/'){
        return divides(num1, num2)
    }
}