const shouldServeDrinks = (age, allowed) => (age >= 18 && !allowed) && true;

console.log(shouldServeDrinks(17, true)); // false

console.log(shouldServeDrinks(19, false)); // true

console.log(shouldServeDrinks(30, true)); // false