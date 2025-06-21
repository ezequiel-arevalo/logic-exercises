const divisible = (num) => Number.isInteger((num / 100));

console.log(divisible(1)); // false

console.log(divisible(1000)); // true

console.log(divisible(100)); // true