// Calculator buttons
const zero = document.getElementById('0');
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
const multiply = document.getElementById('x');
const divide = document.getElementById('÷');
const equals = document.getElementById('=');
const trash = document.getElementById('trash');

const screen = document.getElementById('output')

// Stores variables for calculations 
let num1 = '';
let operator = '';
let num2 = '';
let result = '';

// Event listeners to numbers buttons
zero.addEventListener('click', function(){
    screen.textContent += 0;
})
one.addEventListener('click', function(){
    screen.textContent += 1;
})
two.addEventListener('click', function(){
    screen.textContent += 2;
})
three.addEventListener('click', function(){
    screen.textContent += 3;
})
four.addEventListener('click', function(){
    screen.textContent += 4;
})
five.addEventListener('click', function(){
    screen.textContent += 5;
})
six.addEventListener('click', function(){
    screen.textContent += 6;
})
seven.addEventListener('click', function(){
    screen.textContent += 7;
})
eight.addEventListener('click', function(){
    screen.textContent += 8;
})
nine.addEventListener('click', function(){
    screen.textContent += 9;
})

// Stores num1 variable and operator variable
plus.addEventListener('click', function(){
    operator = '+'
    num1 = screen.textContent;
    screen.textContent = '';
})

minus.addEventListener('click', function(){
    operator = '-'
    num1 = screen.textContent;
    screen.textContent = '';
})

multiply.addEventListener('click', function(){
    operator = '*'
    num1 = screen.textContent;
    screen.textContent = '';
})

divide.addEventListener('click', function(){
    operator = '/'
    num1 = screen.textContent;
    screen.textContent = '';
})

// Stores the num2 variable and executes the operate function
equals.addEventListener('click', function(){
    num2 = screen.textContent;
    return operate(num1, operator, num2)
})


// Clears calculation variables
trash.addEventListener('click', function(){
    num1 = '';
    operator = '';
    num2 = '';
    screen.textContent = '';
})

function operate(num1, operator, num2){
    if (operator === '+'){
        result = Number(num1) + Number(num2);
        return screen.textContent = result;
    } else if (operator === '-'){
        result = Number(num1) - Number(num2);
        return screen.textContent = result;
    } else if (operator === '*'){
        result = Number(num1) * Number(num2);
        return screen.textContent = result;
    } else if (operator === '/'){
        result = Number(num1) / Number(num2);
        return screen.textContent = result;
    }
}