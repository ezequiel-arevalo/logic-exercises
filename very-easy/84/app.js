const areaShape = (num1, num2, type) => {
  // switch (type) {
  //   case "triangle":
  //     return 0.5 * num1 * num2;
  //     break;
  //   case "parallelogram":
  //     return num1 * num2;
  //     break;
  //   case "shape":
  //     return 0.5 * num1 * num2;
  //     break;
  //   default:
  //     return "Error, Tipo no registrado";
  //     break;
  // }

  return type === "triangle" ? 0.5 * num1 * num2 : type === "parallelogram" && num1 * num2
}

console.log(areaShape(2, 3, "triangle")); // 3
console.log(areaShape(8, 6, "parallelogram")); // 48
console.log(areaShape(2.9, 1.3, "parallelogram")); // 3.77