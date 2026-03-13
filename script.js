let a = '', operator = '', b = '';
const numberButtons = document.querySelectorAll("#numButton");
const display = document.querySelector("#display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divides = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

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
    console.log("called");
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
            console.log("called");
            return divide(a, b);
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
    let value = event.target.textContent;
    if(a == '' || operator == ''){
        a += value;
        display.textContent = a;
    }
    else{
        b += value;
        display.textContent = b;
    }
    console.log(a, b, operator);
    
  });
});

function calculate(op){
    console.log("called");
    if(operator != ''){
        console.log(operator, a, b);
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
    if(operator != '' && b == ''){
        operator = '+';
        return;
    }
    calculate('+');
})

minus.addEventListener('click',() =>{
    if(operator != '' && b == ''){
        operator = '-';
        return;
    }
    calculate('-');
})

times.addEventListener('click',() =>{
    if(operator != '' && b == ''){
        operator = '*';
        return;
    }
    calculate('*');
})

divides.addEventListener('click',() =>{
    console.log("called");
    if(checkDivideZero()){
        return;
    }
    if(operator != '' && b == ''){
        operator = '/';
        return;
    }
    calculate('/');
    
})

equal.addEventListener('click',() =>{
    console.log("called");
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
})

clear.addEventListener('click',() =>{
    display.textContent = "";
    a = "";
    b = "";
    operator = "";
})

function checkDivideZero(){
    if(operator == '/' && b == '0'){
        display.textContent = "No /0 :)";
        a = "";
        b = "";
        operator = "";
        return true;
    }
    return false;
}