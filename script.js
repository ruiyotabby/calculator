let operands = document.getElementsByClassName('operand');
let operators = document.getElementsByClassName('operator');
let display1 = document.querySelector('.display1');
let display2 = document.querySelector('.display2');

let num1 = '';
let sign = '';
let num2 = '';

document.querySelector('.equals').addEventListener('click', operate);

for(let p of operands){
    p.addEventListener('click', (e) => {
        display1.textContent += e.target.textContent;
        if(sign == '') {
            num1 = getNum(num1, e);
        } else {
            num2 = getNum(num2, e);
        }    
    })
}

for(let o of operators){
    o.addEventListener('click', (e) => {
        display1.textContent += e.target.textContent;
        getSign(e);
    })
}


function operate() {
    switch (sign) {
        case '+':
            return add();
        case 'x':
            return multiply();
        case '/':
            return divide();
        case '-':
            return subtract();
        default:
        //     return display2.textContent = 'error';

    }
}

function multiply () {
    let product = parseInt(num1) * parseInt(num2);
    num2 = ''; 
    sign = '';
    num1 = product;
    display2.textContent = product;
}

function add() {
    let sum = parseInt(num1) + parseInt(num2);
    num2 = '';
    num1 = sum;
    sign = ''
    display2.textContent = sum;
}

function divide(){
    if(num2 == 0) {
        display2.textContent = 'Error';
        display1.textContent = 'can\'t divide by 0';
        return -1;
    }
    
    let total =  parseInt(num1) / parseInt(num2);
    num2 = '';
    num1 = total;
    sign = ''
    display2.textContent = total;
}

function subtract () {
    let remainder = parseInt(num1) - parseInt(num2);
    num2 = '';
    sign = '';
    num2 = remainder;
    display2.textContent = remainder;
}

let getNum = (num, event) => {
    num += event.target.textContent;
    return num;
}

let getSign = (event) => {
    if(num2 != '' && sign != '') operate();
    sign += event.target.textContent;
}

let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    sign = ''; num1 = '', num2 = '';
    display1.textContent = '';
    display2.textContent = 0;
})