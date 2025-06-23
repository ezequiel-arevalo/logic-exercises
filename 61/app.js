const futurePeople = (population, personas) => {
  // Calcular cuantas personas habrá dentro de 3 decadas = 30 años = 360 meses
  return population + (personas * 360);
};

console.log(futurePeople(256, 2)); // 976

console.log(futurePeople(3248, 6)); // 5408

console.log(futurePeople(5240, 3)); // 6320