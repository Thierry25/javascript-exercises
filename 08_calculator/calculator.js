const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (arr) => {
  let sum = 0;
  arr.forEach((number) => (sum += number));
  return sum;
};

const multiply = (arr) => {
  let product = 1;
  arr.forEach((number) => (product *= number));
  return product;
};

const power = (base, exponent) => base ** exponent;

const factorial = (number) => {
  if (number === 0 || number === 1) return 1;
  if (number < 0) return "ERROR";
  let factorial = 1;
  for (let i = 1; i <= number; i++) factorial *= i;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
