let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
let result2 = codingRegex.test(extractStr);
console.log(result);
console.log(result2);
