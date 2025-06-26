const hasSpaces = (str) => str.match(" ") ? true : false;

console.log(hasSpaces("hello")); // false
console.log(hasSpaces("hello, world")); // true
console.log(hasSpaces(" ")); // true
console.log(hasSpaces("")); // false
console.log(hasSpaces(",./!@#")); // false