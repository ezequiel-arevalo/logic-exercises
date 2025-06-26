const concatName = (str1, str2) => {
  return str2 + ", " + str1
};

console.log(concatName("First", "Last")); // "Last, First"

console.log(concatName("John", "Doe")); // "Doe, John"

console.log(concatName("Mary", "Jane")); // "Jane, Mary"