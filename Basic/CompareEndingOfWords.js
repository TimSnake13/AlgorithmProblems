function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

function confirmEnding3(str, target) {
  const reverseStr = str.split("").reverse().join("");
  const reverseTarget = target.split("").reverse().join("");
  for (let i = 0; i < target.length; i++) {
    if (reverseStr[i] !== reverseTarget[i]) {
      return false;
    }
  }
  return true;
}

confirmEnding("Connor", "n");
