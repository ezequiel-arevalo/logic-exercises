const howManyWalls = (num1, num2, num3) => 'Podes pintar ' + parseInt(num1 / (num2 * num3)) + ' paredes completas';

console.log(howManyWalls(100, 4, 5)); // 5
// Cada pared mide 20m² → 100 / 20 = 5

console.log(howManyWalls(10, 15, 12)); // 0
// Cada pared mide 180m² → no alcanza para una sola

console.log(howManyWalls(41, 3, 6)); // 2
// Cada pared mide 18m² → 41 / 18 = 2 paredes completas