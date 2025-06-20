function maxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maxNum(3, 7)); // 7
console.log(maxNum(-1, 0));  // 0
console.log(maxNum(1000, 400)); // 1000