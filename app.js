let result = 0;
let firstNum = "";
const OPERATORS = ["add", "subtract", "multiply", "divide"];
function main() {
    const digits = document.querySelector(".digits").querySelectorAll("button");
    digits.forEach(digit => digit.addEventListener("click", digit => {
        firstNum += digit.target.dataset.number;        
        displayCurrent(firstNum);
        console.log(firstNum);
    }));

    const operators = document.querySelector(".operators").querySelectorAll("button");
    operators.forEach(operator => operator.addEventListener("click", operator =>  {
        result = operate(operator.target.id, result, +firstNum);
        displayLast(`${firstNum} ${operator.target.textContent}`)
        firstNum = "";
    }));

    //clearBtn
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", clear);
}

function clear() {
    displayCurrent("0");
    displayLast("");
    firstNum = "";
    result = 0;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    console.log(`Called: Operator: ${operator} a: ${a} b: ${b}`);
    if (operator === "add")
        return add(a, b);
    else if(operator === "subtract")
        return subtract(a, b);
    else if(operator === "multiply")
        return multiply(a, b);
    else if(operator === "divide")
        return divide(a, b);
}

function displayCurrent(text) {
    const answer = document.querySelector(".screen-current");
    answer.textContent = text;
}


function displayLast(text) {
    const answer = document.querySelector(".screen-last");
    answer.textContent = text;
}


main();