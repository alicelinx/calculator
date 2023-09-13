const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    return "Cannot divide by 0";
  }
  return num1 / num2;
};

const firstNumber = 2;
const secondNumber = 4;
const operator = '+';

const operate = (operator, num1, num2) => {
  switch (operator) {
    case '＋':
      return add(num1, num2);
    case '−':
      return subtract(num1, num2);
    case '×':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
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
    const num1 = Number.parseInt(numbers[0]);
    const num2 = Number.parseInt(numbers[1]);

    let resultValue = document.querySelector('#result');

    const result = operate(operator, num1, num2);

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
