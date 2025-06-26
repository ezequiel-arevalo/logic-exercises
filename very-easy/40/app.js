// const comparativeStrings = (str1, str2) => {
//   return str1.length == str2.length
// };

const comparativeStrings = (str1, str2) => str1.length == str2.length;

console.log(comparativeStrings("AB", "CD")); // true
console.log(comparativeStrings("ABC", "DE")); // false
console.log(comparativeStrings("hello", "edabit")); // false