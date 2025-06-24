const getLastItem = (arr) => arr.pop();

console.log(getLastItem([1, 2, 3])); // 3
console.log(getLastItem(["cat", "dog", "duck"])); // "duck"
console.log(getLastItem([true, false, true])); // true