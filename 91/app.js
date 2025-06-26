const search = (arr, index) => arr.indexOf(index);

console.log(search([1, 2, 3, 4], 3)); // 2
console.log(search([2, 4, 6, 8, 10], 8)); // 3
console.log(search([1, 3, 5, 7, 9], 11)); // -1