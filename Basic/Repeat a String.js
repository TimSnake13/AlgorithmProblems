function repeatStringNumTimes(str, num) {
  if (num > 1) {
    str += repeatStringNumTimes(str, num - 1);
  } else if (num <= 0) {
    return "";
  }
  return str;
}

function repeatStringNumTimes2(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

repeatStringNumTimes("abc", 3);
