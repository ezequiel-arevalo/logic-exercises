const bitwiseAND = (num1, num2) => num1 & num2

const bitwiseOR = (num1, num2) => num1 | num2

const bitwiseXOR = (num1, num2) => num1 ^ num2

console.log(bitwiseAND(7, 12).toString(2).padStart(8, "0")); // 00000110
console.log(bitwiseOR(7, 12).toString(2).padStart(8, "0"));  // 00010111
console.log(bitwiseXOR(7, 12).toString(2).padStart(8, "0")); // 00010001