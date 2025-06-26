function checkEquality(a, b) {
  return (a === b)
}

console.log(checkEquality(1, true)); // false
// Un número y un booleano: valor y tipo diferentes.

console.log(checkEquality(0, "0")); // false
// Un número y un string: tipo diferente.

console.log(checkEquality(1, 1)); // true
// Ambos son números: tipo y valor iguales.