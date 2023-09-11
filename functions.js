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
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Invalid operator';
  }
};

const result = operate(operator, firstNumber, secondNumber);
console.log(result);


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate,
};