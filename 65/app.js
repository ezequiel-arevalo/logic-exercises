const checkNumber = (num) => {
  // return num === 0 ? true : num > 0 ? "positive" : "negative";
  if (num === 0) return true;
  return num > 0 ? "positive" : "negative";
}

console.log(checkNumber(0)); // true

console.log(checkNumber(7)); // "positive"

console.log(checkNumber(-3)); // "negative"