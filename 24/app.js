function and(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

console.log(and(true, false));  // false
console.log(and(true, true));   // true
console.log(and(false, true));  // false
console.log(and(false, false)); // false