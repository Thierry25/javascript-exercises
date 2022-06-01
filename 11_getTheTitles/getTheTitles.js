// Updated to use ES6 syntax

const getTheTitles = (arr) => {
  const titles = arr.map((value) => value.title);
  // let titles = [];
  // for (const obj of arr) {
  //   titles.push(obj["title"]);
  // }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
