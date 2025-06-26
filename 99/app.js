const kineticEnergy = (masa, velocidad) => Math.round(0.5 * masa * Math.pow(velocidad, 2));

console.log(kineticEnergy(60, 3)); // 270
console.log(kineticEnergy(45, 10)); // 2250
console.log(kineticEnergy(63.5, 7.35)); // 1715