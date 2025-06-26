const intToString = (num) => num.toString();

// const stringToInt = (str) => eval(str); No utilizar eval por temas de seguridad

const stringToInt = (str) => str * 1;

console.log(intToString(4)); // "4"
console.log(stringToInt("4")); // 4
console.log(intToString(29348)); // "29348"