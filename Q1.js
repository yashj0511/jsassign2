function searchNumber(array, searchElem) {
  let positions = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElem) {
      positions.push(i);
    }
  }
  
  if (positions.length === 0) {
    return -1;
  } else if (positions.length === 1) {
    return positions[0];
  } else {
    return positions;
  }
}

const inputArray = [1, 2, 3, 4, 5, 1, 3];
const searchElement = 4;
const result = searchNumber(inputArray, searchElement);

console.log("Output:", result);
