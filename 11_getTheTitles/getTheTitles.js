const getTheTitles = (arr) => {
  let titles = [];
  for (const obj of arr) {
    titles.push(obj["title"]);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
