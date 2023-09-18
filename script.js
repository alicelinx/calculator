const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  if (y === 0) {
    return "Cannot divide by 0";
  }
  return x / y;
};

const firstNumber = 2;
const secondNumber = 4;
const operator = '+';

const operate = (operator, x, y) => {
  switch (operator) {
    case '＋':
      return add(x, y);
    case '−':
      return subtract(x, y);
    case '×':
      return multiply(x, y);
    case '÷':
      return divide(x, y);
    default:
      return 'Invalid operator';
  }
};


let displayValue = "";

const updateDisplay = () => {
  const displayCalculation = document.querySelector('.display-calculation');
  displayCalculation.textContent = displayValue;
};

const handleClick = (button) => {
  const buttonValue = button.textContent;

  if (buttonValue === 'AC') {
    displayValue = '';
    document.querySelector('#result').textContent = '';
  } else if (buttonValue === '⌫') {
    displayValue = displayValue.slice(0, -1);
  } else if (buttonValue === '=') {
    displayValue += buttonValue;

    const numbers = displayValue.split(/[^A-Z0-9]+/ig);
    const operator = displayValue.slice(1, 2);
    const x = Number.parseInt(numbers[0]);
    const y = Number.parseInt(numbers[1]);

    let resultValue = document.querySelector('#result');

    const result = operate(operator, x, y);

    if (resultValue) {
      console.log(resultValue);
      resultValue.textContent = result;
    }

  } else {
    displayValue += buttonValue;
  }

  updateDisplay();

};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => handleClick(button)));
