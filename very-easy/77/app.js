const leapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

console.log(leapYear(1990)); // false
console.log(leapYear(1924)); // true
console.log(leapYear(2021)); // false