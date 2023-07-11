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

let numberOne = 0;
let operator = 0;
let numberTwo = 0;

one.addEventListener('click', function(){
    screen.textContent = 1;
})

function sum(a, b){
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

function operate(numberOne, operator, numberTwo){

}

console.log(sum(34, 45))