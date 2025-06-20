const calculateFuel = (num) => {
  let combustible = num * 10;
  return combustible > 100 ? combustible : 100;
};

console.log(calculateFuel(15)); // 150
// 15 * 10 = 150 → mayor que 100

console.log(calculateFuel(23.5)); // 235
// 23.5 * 10 = 235 → mayor que 100

console.log(calculateFuel(3)); // 100
// 3 * 10 = 30 → como es menor que 100, se retorna 100