function sortAscending(array) {
  return array.slice().sort((a, b) => a - b);
}

const inputArray = [3, 2, 1, 4, 5, 45];
const sortedArray = sortAscending(inputArray);

console.log("Output:", sortedArray);
