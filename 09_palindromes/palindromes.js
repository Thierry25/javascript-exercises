const palindromes = (text) => {
  let newText = text
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  let start = 0;
  let end = newText.length - 1;
  while (start <= end) {
    if (newText.charAt(start) !== newText.charAt(end)) return false;
    start++;
    end--;
  }
  return true;
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
