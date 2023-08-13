function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Convert strings to arrays, sort them, and compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const inputStr1 = "LISTEN";
const inputStr2 = "SILENT";
const result1 = areAnagrams(inputStr1, inputStr2);

console.log("Output:", result1);

const inputStr3 = "HELLO";
const inputStr4 = "JELLO";
const result2 = areAnagrams(inputStr3, inputStr4);

console.log("Output:", result2);
