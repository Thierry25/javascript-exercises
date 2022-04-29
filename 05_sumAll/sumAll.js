const sumAll = function () {
  // Let's work with arguments because why not?
  let num1 = arguments[0];
  let num2 = arguments[1];
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  )
    return "ERROR";

  let end = Math.max(num1, num2);
  let start = Math.min(num1, num2);
  let sum = 0;
  for (let i = start; i <= end; i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
