const makesTen = (num1, num2) => {
  return num1 === 10 || num2 === 10 || num1 + num2 === 10;
};

console.log(makesTen(9, 10)); // true
// Uno de los números es 10

console.log(makesTen(9, 9)); // false
// Ninguno es 10, y su suma es 18

console.log(makesTen(1, 9)); // true
// La suma es 10