const acceptIntoMovie = (age, isSupervised) => (age > 15 || isSupervised) && true;

console.log(acceptIntoMovie(14, true)); // true

console.log(acceptIntoMovie(14, false)); // false

console.log(acceptIntoMovie(16, false)); // true