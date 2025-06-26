function firstElement(array = []) {
  // return array.slice(0, 1);
  return array.shift();
}

let myArray = [1, 2, 3];
console.log(firstElement(myArray));