const divisibleByFive = (num) => {
  return num % 5 === 0;
};

console.log(divisibleByFive(5));  //true
// 5 dividido por 5 = 1, sin resto

console.log(divisibleByFive(-55));  //true
// -55 dividido por 5 = -11, sin resto

console.log(divisibleByFive(37));  //false
// 37 dividido por 5 = 7.4 → tiene resto