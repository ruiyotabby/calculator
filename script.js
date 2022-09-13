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
            num1 = getFirst(num1, e);
        } else {
            num2 = getFirst(num2, e);
        }
        
    })
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

// let getSecond = (event) => {
//     for(let p of operand){
//         while(event.target == p){
//             num2 += event.target.textContent;
//             console.log('sdd');
//             break;
//         }
//     }
// }