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

        
    })
}
