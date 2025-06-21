const dividesEvenly = (num1, num2) => Number.isInteger((num1 / num2)) ? true : false;

console.log(dividesEvenly(98, 7)); // true
// 98 / 7 = 14

console.log(dividesEvenly(85, 4)); // false
// 85 / 4 = 21.25