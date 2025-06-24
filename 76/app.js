const yearsInOneHouse = (edad, mundazas) => edad / (mundazas + 1);

console.log(yearsInOneHouse(30, 1)); // 15
console.log(yearsInOneHouse(15, 2)); // 5
console.log(yearsInOneHouse(80, 0)); // 80