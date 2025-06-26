const imposterFormula = (i, p) => `${Math.round(100 * (i / p))}%`

console.log(imposterFormula(1, 10)); // "10%"
console.log(imposterFormula(2, 5)); // "40%"
console.log(imposterFormula(1, 8)); // "13%"