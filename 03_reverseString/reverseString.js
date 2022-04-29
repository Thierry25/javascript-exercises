const reverseString = (text) => {
  let newString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newString += text.charAt(i);
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
