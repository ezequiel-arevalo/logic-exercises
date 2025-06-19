function footballPoints(victoria, empate, fallo) {
  let victory = 3 * victoria;
  let empatado = 1 * empate;
  let derrota = 0 * fallo;

  let resultadoDePuntos = victory + empatado + derrota;
  return resultadoDePuntos;
}

console.log(footballPoints(3, 4, 2)); // 13
console.log(footballPoints(5, 0, 2)); // 15
console.log(footballPoints(0, 0, 1)); // 0