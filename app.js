const OPERATORS = ["add", "subtract", "multiply", "divide"];
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lastOperator = [];
let firstNum = "";
let answer = "";

function buttonFunctions(e) {
    const id = e.target.id;
    const text = e.target.textContent;
    
    if (OPERATORS.includes(id)) { //the button is operator
        if (firstNum === "" && answer === "") {
            alert("you must enter number first");
            return;  
        }
        if (answer === "")
            answer = +firstNum;
        else
            answer = Math.round(operate(lastOperator[0], +answer, +firstNum) * 100) / 100;
        displayLast(`${answer} ${text}`);
        displayCurrent("");
        firstNum = "";
        lastOperator[0] = id;
        lastOperator[1] = text;
    }
    else if(DIGITS.includes(id)) { //the button is digit
        firstNum += id;
        displayCurrent(firstNum);
    }
    else if(id === "point") { //the button is . to add decimal
        if (firstNum.includes(".")) {
            alert("You can't add more than one point '.'");
            return;
        }
        firstNum += text;
        displayCurrent(firstNum);
    }
    else if(id === "clear") { //the button is clear
        clear();
    }
    else if(id === "equal") {//the button is equal
        if (firstNum === "" || answer === "") {
            alert("you must enter number first");
            return;  
        }
        displayLast(`${answer} ${lastOperator[1]} ${firstNum} =`)
        answer = Math.round(operate(lastOperator[0], +answer, +firstNum) * 100) / 100;
        firstNum = "";
        displayCurrent(answer);
    }
}

function clear() {
    displayCurrent("0");
    displayLast("");
    firstNum = "";
    answer = "";
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
    {
        if (b === 0) {
            alert("You can't divide by 0");
            return a;
        }
        return a/b;
    }
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