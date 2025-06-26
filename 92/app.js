const word = (str) => {
  switch (str) {
    case "one": return 1
    case "two": return 2
    case "three": return 3
    case "four": return 4
    case "five": return 5
    case "six": return 6
    case "seven": return 7
    case "eight": return 8
    case "nine": return 9
    case "zero": return 0

    default:
      return "Eso no existe"
      break;
  }
}

console.log(word("one")); // 1
console.log(word("two")); // 2
console.log(word("nine")); // 9