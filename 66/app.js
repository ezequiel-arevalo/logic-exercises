const oddOrEven = (str) => str.length % 2 === 0 && true;

console.log(oddOrEven("apples")); // true
// Tiene 6 caracteres → número par → retorna true

console.log(oddOrEven("pears")); // false
// Tiene 5 caracteres → número impar → retorna false

console.log(oddOrEven("cherry")); // true
// Tiene 6 caracteres → número par → retorna true