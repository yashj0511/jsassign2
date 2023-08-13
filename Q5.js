function reverseString(inputStr) {
  let reversedStr = '';
  
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
  }
  
  return reversedStr;
}

const inputStr = "Hello";
const reversed = reverseString(inputStr);

console.log("Output:", reversed);
