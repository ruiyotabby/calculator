let btn = document.querySelectorAll('button');
let display = document.querySelector('.display');
let operand = document.getElementsByClassName('operand');
let operator = document.getElementsByClassName('operator');

let num1 = '';
let sign = '';
let num2 = '';

for(let b of btn){
    b.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;

        if(sign == '') {
            num1 = getInput(num1, e);
        } else {
            num2 = getInput(num2, e);
        }
        
        if(num2 != '') operate()
    })
}

let operate = () => {
    switch (sign) {
        case '+':
            return add();
        default:
            console.log('default');
            break;
    }
}

let add = () => {
    let total = parseInt(num1) + parseInt(num2);
    num2 = '';
    sign = '';
    num1 = total;
    return display.textContent = total;
}

let getInput = (num, event) => {
    for(let p of operand){
        while(event.target == p){
            num += event.target.textContent;
            console.log('bjb');
            break;
        }
    }
    for(let o of operator){
        while(event.target == o){
            sign += event.target.textContent;
            console.log('qweer');
            break;
        }
    }
    return num;
}