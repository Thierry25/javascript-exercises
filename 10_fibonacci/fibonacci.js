const fibonacci = (val) => {
  let a = 0;
  let b = 1;
  let newVal = parseInt(val);
  if (newVal < 0) return "OOPS";
  for (let i = 1; i <= val; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a;
};
// Do not edit below this line
console.log(fibonacci(25));
module.exports = fibonacci;
