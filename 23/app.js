function animals(chickens, cows, pigs) {
  let gallinas = 2 * chickens;
  let vacas = 4 * cows;
  let cerdos = 4 * pigs;

  let totalDePatas = gallinas + vacas + cerdos;
  return totalDePatas;
};

console.log(animals(2, 3, 5)); // 36
console.log(animals(1, 2, 3)); // 22
console.log(animals(5, 2, 8)); // 50