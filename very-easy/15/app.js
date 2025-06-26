function arbitro(tiro, triple) {
  let puntos2 = 2 * tiro;
  let puntos3 = 3 * triple;
  let puntajeFinal = puntos2 + puntos3;

  return puntajeFinal;
}

console.log(arbitro(7, 5));