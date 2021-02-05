function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString1(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
