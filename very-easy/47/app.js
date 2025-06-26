const area = (num1, num2) => {
  if (num1 <= 0 || num2 <= 0) {
    return -1;
  }
  return (num1 * num2);
};

console.log(area(3, 4)); // 12

console.log(area(10, 11)); // 110

console.log(area(-1, 5)); // -1

console.log(area(0, 2)); // -1