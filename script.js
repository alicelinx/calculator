const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll('.operators');
const clearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.backspace');
const percentageButton = document.querySelector('.percentage');
const decimalButton = document.querySelector('.decimal');
const equalButton = document.querySelector('.equal');
const lastOperationScreen = document.querySelector('.display-calculation');
const currentOperationScreen = document.querySelector('.display-current-result');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

clearButton.addEventListener('click', clearAll);
deleteButton.addEventListener('click', deleteInput);
equalButton.addEventListener('click', getResult);
decimalButton.addEventListener('click', addDecimal);
percentageButton.addEventListener('click', setPercent);

numberButtons.forEach(button =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach(button =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

const appendNumber = (number) => {
  if (currentOperationScreen.textContent === '0' || shouldResetScreen) {
    resetScreen();
  }
  if (currentOperationScreen.textContent.length < 7) {
    currentOperationScreen.textContent += number.toLocaleString("en-US");
  }
};

const setOperation = (operator) => {
  if (operator !== null) getResult();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
};

function resetScreen() {
  currentOperationScreen.textContent = '';
  shouldResetScreen = false;
};

function clearAll() {
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
  currentOperationScreen.textContent = '0';
  lastOperationScreen.textContent = '';
};

function deleteInput() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0, -1);
};

function getResult() {
  if (currentOperation === null || shouldResetScreen) return;
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
};

function addDecimal() {
  if (currentOperationScreen.textContent.includes('.')) return;
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.textContent === '') currentOperationScreen.textContent === '0';
  currentOperationScreen.textContent += '.';
}

function roundResult(number) {
  return Math.round(number * 100) / 100;
}

function setPercent() {
  currentOperationScreen.textContent = currentOperationScreen.textContent / 100;
}


const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => {
  if (y === 0) {
    return "Cannot divide by 0";
  }
  return x / y;
};

function operate(operator, x, y) {
  x = Number(x);
  y = Number(y);
  switch (operator) {
    case '+':
      return add(x, y);
    case '−':
      return subtract(x, y);
    case '×':
      return multiply(x, y);
    case '÷':
      return divide(x, y);
    default:
      return null;
  }
};
