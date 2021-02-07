function truncateString(str, num) {
  return num > 0 ? (num >= str.length ? str : str.slice(0, num) + "...") : "";
}

function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
