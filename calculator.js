let display = document.querySelector(".display");
let previousDisplay = document.querySelector(".previous");
let currentDisplay = document.querySelector(".current");
const buttons = document.querySelectorAll(".btn");
let previousOperand = "";
let currentOperand = "";
let operator = null;

function updateDisplay() {
  currentDisplay.textContent = currentOperand;
  previousDisplay.textContent = previousOperand + " " + (operator || "");
}

function appendNumber(number) {
  if (currentOperand.length >= 12) return;
  currentOperand += number;
  updateDisplay();
}

function appendDot() {
  if (currentOperand.length >= 12) return;
  if (currentOperand.includes(".")) return;
  currentOperand += ".";
  updateDisplay();
}

function chooseOperator(value) {
  if (previousOperand !== "" && currentOperand === "") {
    operator = value;
  } else if (previousOperand === "") {
    previousOperand = currentOperand;
    operator = value;
    currentOperand = "";
  } else {
    let a = parseFloat(previousOperand);
    let b = parseFloat(currentOperand);
    let result = operate(operator, a, b);
    previousOperand = result;
    operator = value;
    currentOperand = "";
  }
  updateDisplay();
}

function compute() {
  if (operator === null || operator === "") return;

  let a = parseFloat(previousOperand);
  let b = parseFloat(currentOperand);

  if (operator === "/" && b === 0) {
    currentDisplay.textContent = "Error";
    previousOperand = "";
    currentOperand = "";
    operator = null;
    return;
  }

  let result = operate(operator, a, b);
  result = Math.round(result * 1000) / 1000;

  previousOperand = result;
  currentOperand = "";
  operator = null;

  updateDisplay();
}


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.value;

    if (value === "=") {
      compute();
    } else if (value === "C") {
      currentOperand = currentOperand.slice(0, -1);
      updateDisplay();
    } else if (value === "AC") {
      previousOperand = "";
      currentOperand = "";
      operator = null;
      updateDisplay();
    } else if (!isNaN(value)) {
      appendNumber(value);
    } else if (value === ".") {
      appendDot();
    } else if (["+", "-", "*", "/"].includes(value)) {
      chooseOperator(value);
    }
  });
});



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
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}


window.addEventListener("keydown", (e) => {
  let key = e.key;

  if (!isNaN(key)) {
    appendNumber(key);
  } else if (key === ".") {
    appendDot();
  } else if (["+", "-", "*", "/"].includes(key)) {
    chooseOperator(key);
  } else if (key === "Enter" || key === "=") {
    e.preventDefault();
    compute();
  } else if (key === "Backspace") {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
  } else if (key === "Escape") {
    previousOperand = "";
    currentOperand = "";
    operator = null;
    updateDisplay();
  }
});
