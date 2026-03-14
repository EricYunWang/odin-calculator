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

function numberButtonsFunction(event){
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
}

function numberKeyboardFunction(num){
    if(equalState == true){
        a = "";
        equalState = false;
        dotButton.disabled = false;
    }
    let value = num;
    if(a == '' || operator == ''){
        a += value;
        display.textContent = a;
    }
    else{
        b += value;
        display.textContent = b;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        numberButtonsFunction(event);
  });
});

function dotButtonFunction(){
    if(a != '' && operator == ''){
        a += '.';
        display.textContent = a;
        dotButton.disabled = true;
    }
    else if (b != ''){
        b += '.';
        display.textContent = b;
        dotButton.disabled = true;
    }
}

dotButton.addEventListener('click', () => {
    dotButtonFunction();
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


window.addEventListener('keydown', (event) => {
    switch (event.key){
        case '+':
            event.preventDefault();
            addButtonFunction();
            break;
        case '-':
            event.preventDefault();
            minusButtonFunction();
            break;
        case '*':
            event.preventDefault();
            timesButtonFunction();
            break;
        case '/':
            event.preventDefault();
            divideButtonFunction();
            break;
        case '=':
            event.preventDefault();
            equalButtonFunction();
            break;
        case '1':
            event.preventDefault();
            numberKeyboardFunction('1');
            break;
        case '2':
            event.preventDefault();
            numberKeyboardFunction('2');
            break;
        case '3':
            event.preventDefault();
            numberKeyboardFunction('3');
            break;
        case '4':
            event.preventDefault();
            numberKeyboardFunction('4');
            break;
        case '5':
            event.preventDefault();
            numberKeyboardFunction('5');
            break;
        case '6':
            event.preventDefault();
            numberKeyboardFunction('6');
            break;
        case '7':
            event.preventDefault();
            numberKeyboardFunction('7');
            break;
        case '8':
            event.preventDefault();
            numberKeyboardFunction('8');
            break;
        case '9':
            event.preventDefault();
            numberKeyboardFunction('9');
            break;
        case '0':
            event.preventDefault();
            numberKeyboardFunction('0');
            break;
        case '.':
            event.preventDefault();
            if(dotButton.disabled == true){
                return;
            }
            else{
                dotButtonFunction();
                break;
            }
        case 'Backspace':
            event.preventDefault();
            delButtonFunction();
            break;
    }
});

function addButtonFunction(){
    equalState = false;
    dotButton.disabled = false;
    if(operator != '' && b == ''){
        operator = '+';
        display.textContent = operator;
        return;
    }
    calculate('+');
}

plus.addEventListener('click',() =>{
    addButtonFunction();
})

function minusButtonFunction(){
    equalState = false;
    dotButton.disabled = false;
    if(operator != '' && b == ''){
        operator = '-';
        display.textContent = operator;
        return;
    }
    calculate('-');
}

minus.addEventListener('click',() =>{
    minusButtonFunction();
})

function timesButtonFunction(){
    equalState = false;
    dotButton.disabled = false;
    if(operator != '' && b == ''){
        operator = '*';
        display.textContent = operator;
        return;
    }
    calculate('*');
}

times.addEventListener('click',() =>{
    timesButtonFunction();
})

function divideButtonFunction(){
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
}

divides.addEventListener('click',() =>{
    divideButtonFunction();
})

function equalButtonFunction(){
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
}

equal.addEventListener('click',() =>{
    equalButtonFunction();
})

clear.addEventListener('click',() =>{
    display.textContent = "";
    a = "";
    b = "";
    operator = "";
    equalState = false;
    dotButton.disabled = false;
})

function delButtonFunction(){
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
}

del.addEventListener('click',() =>{
    delButtonFunction();
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