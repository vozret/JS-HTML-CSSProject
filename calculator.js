let buffer = "0";
let runningTotal = 0;
let previousOperator;
const screen = document.querySelector(".input-output");

function calculateResult (firstOperand, operator, secondOperand) {
    if (operator === '+') {
        return firstOperand + secondOperand;
      } else if (operator === '-') {
        return firstOperand - secondOperand;
      } else if (operator === '*') {
        return firstOperand * secondOperand;
      } else if (operator === '/') {
        return firstOperand / secondOperand;
      }
    
    return secondOperand;
}

document.querySelector('.rows').addEventListener('click', function(event) {
    buttonClick(event.target.innerText)}
)

function buttonClick(value) {
    //check if the value is a number or not
    if(isNaN(parseInt(value))) {
        handleOperator(value);
    } else {
        handleNumber(value)
    }
    rerender();
}

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleMath(value) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
  
    previousOperator = value;
  
    buffer = "0";
  }

  function flushOperation(intBuffer) {
    if (previousOperator === "+") {
      runningTotal += intBuffer;
    } else if (previousOperator === "-") {
      runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
      runningTotal *= intBuffer;
    } else {
      runningTotal /= intBuffer;
    }
  }

  function handleOperator(value) {
    switch (value) {
      case "C":
        buffer = "0";
        runningTotal = 0;
        break;
      case "=":
        if (previousOperator === null) {
          // need two numbers to do math
          return;
        }
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = +runningTotal;
        runningTotal = 0;
        break;
      case "D":
        if (buffer.length === 1) {
          buffer = "0";
        } else {
          buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleMath(value);
        break;
    }
  }
  
  function rerender() {
    screen.innerText = buffer;
  }