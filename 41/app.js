const isEmpty = (str) => str.length === 0;

console.log(isEmpty("")); // true
// String completamente vacío

console.log(isEmpty(" ")); // false
// Contiene un espacio, por lo tanto NO está vacío

console.log(isEmpty("a")); // false
// Contiene una letra, no está vacío