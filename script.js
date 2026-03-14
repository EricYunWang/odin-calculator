let a = '', operator = '', b = '';
const numberButtons = document.querySelectorAll("#numButton");
const dotButton = document.querySelector("#dotButton");
const display = document.querySelector("#display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divides = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
let equalState = false;
dotButton.disabled = false;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, operator, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if(equalState == true){
            a = "";
            equalState = false;
            dotButton.disabled = false;
        }
        let value = event.target.textContent;
        if(a == '' || operator == ''){
            a += value;
            display.textContent = a;
        }
        else{
            b += value;
            display.textContent = b;
        }    
  });
});

dotButton.addEventListener('click', (event) => {
    if(a != '' && operator == ''){
        a += event.target.textContent;
        display.textContent = a;
        dotButton.disabled = true;
    }
    else if (b != ''){
        b += event.target.textContent;
        display.textContent = b;
        dotButton.disabled = true;
    }
})

function calculate(op){
    if(operator != ''){
        a = Number(a);
        b = Number(b);
        let c = operate(a, operator, b);
        let rounded  = Math.round((c + Number.EPSILON) * 10000000) / 10000000;
        display.textContent = rounded;
        a = c;
        b = "";
        c = "";
        operator = op;
    }
    else {
        operator = op;
        display.textContent = op;
    }
}

plus.addEventListener('click',() =>{
    equalState = false;
    dotButton.disabled = false;
    if(operator != '' && b == ''){
        operator = '+';
        display.textContent = operator;
        return;
    }
    calculate('+');
})

minus.addEventListener('click',() =>{
    equalState = false;
    dotButton.disabled = false;
    if(operator != '' && b == ''){
        operator = '-';
        display.textContent = operator;
    return;
    }
    calculate('-');
})

times.addEventListener('click',() =>{
    equalState = false;
    dotButton.disabled = false;
    if(operator != '' && b == ''){
        operator = '*';
        display.textContent = operator;
        return;
    }
    calculate('*');
})

divides.addEventListener('click',() =>{
    equalState = false;
    dotButton.disabled = false;
    if(checkDivideZero()){
        return;
    }
    if(operator != '' && b == ''){
        operator = '/';
        display.textContent = operator;
        return;
    }
    calculate('/');
    
})

equal.addEventListener('click',() =>{
    if (a == '' || b == '' || operator == ''){
        return;
    }
    else if(checkDivideZero()){
        return;
    }
    a = Number(a);
    b = Number(b);
    let c = operate(a, operator, b);
    let rounded = Math.round((c + Number.EPSILON) * 10000000) / 10000000;
    display.textContent = rounded;
    a = c;
    b = "";
    operator = "";
    equalState = true;
})

clear.addEventListener('click',() =>{
    display.textContent = "";
    a = "";
    b = "";
    operator = "";
    equalState = false;
    dotButton.disabled = false;
})

del.addEventListener('click',() =>{
    if(equalState == true){
        return;
    }
    if(a != '' && operator == ''){
        let lastChar = a.slice(-1);
        a = a.slice(0, -1);
        display.textContent = a;
        if(lastChar == '.'){
            dotButton.disabled = false;
        }
    }
    else if(b != ''){
        let lastChar = b.slice(-1);
        b = b.slice(0, -1);
        display.textContent = b;
        if(lastChar == '.'){
            dotButton.disabled = false;
        }
    }
})

function checkDivideZero(){
    if(operator == '/' && b == '0'){
        display.textContent = "No /0 :)";
        a = "";
        b = "";
        operator = "";
        equalState = false;
        return true;
    }
    return false;
}