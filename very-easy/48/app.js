function isEven(n) {
  if (n % 2 === 0) {
    return true
  } else if (n % 2 === 1) {
    return false
  }
}

console.log(isEven(2)); // true

console.log(isEven(3)); // false

console.log(isEven(10)); // true