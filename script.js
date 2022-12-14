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
    if(sign.length > 1) {
        sign = sign.slice(sign.length-1);
    }
    if(sign == '') return num2 == '' ? display2.textContent = num1 : num2;
    if(num1 == '' ) {
        display1.textContent = 'Please try again';
        return display2.textContent = 'Error';
    }
    switch (sign.toLowerCase()) {
        case '+':
            return add();
        case 'x':
            return multiply();
        case '*':
            return multiply();
        case '/':
            return divide();
        case '-':
            return subtract();
        default:
            return console.log('something bad happened');
    }
}

function multiply () {
    let product = parseFloat(num1) * parseFloat(num2);
    num2 = ''; 
    sign = '';
    num1 = product;
    display2.textContent = Math.round(product * 100) / 100;
}

function add() {
    let sum = parseFloat(num1) + parseFloat(num2);
    num2 = '';
    num1 = sum;
    sign = ''
    display2.textContent = Math.round(sum * 100) / 100;
}

function divide(){
    if(num2 == 0) {
        display2.textContent = 'Error';
        display1.textContent = 'can\'t divide by 0';
        return -1;
    }
    let total =  parseFloat(num1) / parseFloat(num2);
    num2 = '';
    num1 = total;
    sign = ''
    display2.textContent = Math.round(total * 100) / 100;
}

function subtract () {
    let remainder = parseFloat(num1) - parseFloat(num2);
    num2 = '';
    sign = '';
    num1 = remainder;
    display2.textContent = Math.round(remainder * 100) / 100;
}

let getNum = (num, event) => {
    num += event.target.textContent;
    return num;
}

let getSign = (event) => {
    if(num1 == '') sign = '';
    if(num2 != '' && sign != '') operate();
    return sign += event.target.textContent;
}

let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    sign = ''; num1 = '', num2 = '';
    display1.textContent = '';
    display2.textContent = 0;
})

document.querySelector('.percent').addEventListener('click', (event) => {
    display1.textContent += event.target.textContent;
    if(num2 == '') {
        return num1 = num1/100;
    }
    return num2 = num2/100;
})

window.addEventListener('keydown', event => {
    if(event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '0' || event.key == '.'){
        if(sign == '') {
            display1.textContent += event.key;
            return num1 += event.key
        };
        if(sign != '') {
            display1.textContent += event.key;
            return num2 += event.key;
        }
    }
    else if(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
        if(num1 == '') sign = '';
        if(num2 != '' && sign != '') operate();
        display1.textContent += event.key;
        return sign += event.key;
    } else if(event.key == '=') return operate();
})