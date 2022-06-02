let result = 0;
let firstNum = "";
const OPERATORS = ["add", "subtract", "multiply", "divide"];
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lastOperator = ["add", "+"];

function buttonFunctions(e) {
    console.log("called")
    
    const id = e.target.id;
    const text = e.target.textContent;
    if (OPERATORS.includes(id)) { //the button is operator
        result = operate(id, result, +firstNum);
        displayCurrent(result);
        displayLast(`${result} ${text}`);
        firstNum = "";
        //log last operator
        lastOperator[0] = id;
        lastOperator[1] = text;
    }
    else if(DIGITS.includes(id)) { //the button is digit
        firstNum += id;
        displayCurrent(firstNum);
    }
    else if(id === "clear") { //the button is clear
        clear();
    }
    else if(id === "equal") {//the button is equal
        displayLast(`${result} + ${firstNum} =`)
        result = operate(lastOperator[0], result, +firstNum);
        displayCurrent(result);
        firstNum = "";
    }

}

function clear() {
    displayCurrent("0");
    displayLast("");
    firstNum = "";
    result = 0;
}

function operate(operator, a, b) {
    console.log(`Called: Operator: ${operator} a: ${a} b: ${b}`);
    if (operator === "add")
        return a + b;
    else if(operator === "subtract")
        return a - b;
    else if(operator === "multiply")
        return a * b;
    else if(operator === "divide") 
        return a / b;
}

function displayCurrent(text) {
    const answer = document.querySelector(".screen-current");
    answer.textContent = text;
}


function displayLast(text) {
    const answer = document.querySelector(".screen-last");
    answer.textContent = text;
}


const buttons = document.querySelectorAll(".main button");
buttons.forEach(button => button.addEventListener("click", buttonFunctions))



// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }
