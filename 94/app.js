// function parity(n) {
//   let remainder = Boolean(n % 2)
//   if (remainder === false) {
//     return "even"
//   }
//   if (remainder === true) {
//     return "odd"
//   }
// }

const parity = (n) => n % 2 === 0 ? 'even' : 'odd';

console.log(parity(1)); // "odd"
console.log(parity(2)); // "even"
console.log(parity(3)); // "odd"