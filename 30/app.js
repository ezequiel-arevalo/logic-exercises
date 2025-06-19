function profitableGamble(prob, prize, pay) {
  // return (prob * prize > pay) ? true : false;
  return (prob * prize > pay); // Se puede simplificar mas
};

console.log(profitableGamble(0.2, 50, 9)); // true
// 0.2 * 50 = 10 → 10 > 9 → true

console.log(profitableGamble(0.9, 1, 2)); // false
// 0.9 * 1 = 0.9 → 0.9 < 2 → false

console.log(profitableGamble(0.9, 3, 2)); // true
// 0.9 * 3 = 2.7 → 2.7 > 2 → true