const fs = require("fs");

const createArray = ({ length }) => Array.from({ length }, (_, i) => i + 1); // [1, 2, 3, ...]

const createLargeArray = (length = 1000) =>
  Array.from(Array(length)).map(() => Math.random() * 10);
const string = `module.exports = [${[...createLargeArray(), 122]}]`;

fs.writeFile("largeArray.js", string, (error) => {
  if (error) throw error;
  console.log("Created a large array!");
});
