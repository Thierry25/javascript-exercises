const findTheOldest = (arr) => {
  let max = 0;
  let idx = -1;
  for (const personObj of arr) {
    let age = personObj["yearOfDeath"]
      ? personObj["yearOfDeath"] - personObj["yearOfBirth"]
      : new Date().getFullYear() - personObj["yearOfBirth"];
    if (age > max) {
      idx += 1;
      max = age;
    }
  }
  return arr[idx];
};
// Do not edit below this line

module.exports = findTheOldest;
