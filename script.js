let a, operator, b;
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
    let value = event.target.textContent;
    display.textContent += value;
  });
});

plus.addEventListener('click',() =>{
    a = display.textContent;
    operator = '+';
    display.textContent = "";
    console.log(a);
})

minus.addEventListener('click',() =>{
    a = display.textContent;
    operator = '-';
    display.textContent = "";
    console.log(a);
})

times.addEventListener('click',() =>{
    a = display.textContent;
    operator = '*';
    display.textContent = "";
    console.log(a);
})

divides.addEventListener('click',() =>{
    a = display.textContent;
    operator = '/';
    display.textContent = "";
    console.log(a);
})

equal.addEventListener('click',() =>{
    b = display.textContent;
    a = Number(a);
    b = Number(b);
    console.log(a, b, operator);
    let c = operate(a, operator, b);
    display.textContent = c;
    a = c;
})

clear.addEventListener('click',() =>{
    display.textContent = "";
    a = "";
    b = "";
})


console.log(operate(1, '+', 2));