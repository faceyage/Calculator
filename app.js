const OPERATORS = ["add", "subtract", "multiply", "divide"];
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lastOperator = [];
let firstNum = "";
let secondNum = "";

function buttonFunctions(e) {
    const id = e.target.id;
    const text = e.target.textContent;
    
    if (OPERATORS.includes(id)) { //the button is operator
        if (firstNum === "" && secondNum === "") {
            alert("you must enter number first");
            return;  
        }
        if (secondNum === "")
            secondNum = +firstNum;
        else//problem here
        {
            if(firstNum !== "" && lastOperator[0] !== "") {
                secondNum = Math.round(operate(lastOperator[0], +secondNum, +firstNum) * 100) / 100;
            }
        }
        displayLast(`${secondNum} ${text}`);
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
        if (firstNum === "" || secondNum === "") {
            alert("you must enter number first");
            return;  
        }
        displayLast(`${secondNum} ${lastOperator[1]} ${firstNum} =`)
        secondNum = Math.round(operate(lastOperator[0], +secondNum, +firstNum) * 100) / 100;
        firstNum = String(secondNum);
        secondNum = "";
        lastOperator[0] = ""
        lastOperator[1] = ""
        displayCurrent(firstNum);
    }
    else if(id === "delete") {//the button is equal
        if (firstNum !== "") {
            firstNum = firstNum.slice(0, firstNum.length - 1);
            displayCurrent(firstNum);
        }
    }
}

function clear() {
    firstNum = "";
    secondNum = "";
    displayCurrent(firstNum);
    displayLast("");
}

function operate(operator, a, b) {
    //console.log(`Called: Operator: ${operator} secondNum: ${a} firstNum: ${b}`);
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
    const secondNum = document.querySelector(".screen-current");
    secondNum.textContent = text;
}


function displayLast(text) {
    const secondNum = document.querySelector(".screen-last");
    secondNum.textContent = text;
}

const buttons = document.querySelectorAll(".main button");
buttons.forEach(button => button.addEventListener("click", buttonFunctions))

document.addEventListener("keydown", e => {
    if (e.key === "Backspace" && firstNum !== "") {
        firstNum = firstNum.slice(0, firstNum.length - 1);
        displayCurrent(firstNum);
    }
});