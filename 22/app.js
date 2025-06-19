function swap(a, b) {
  return [b, a]
}

let a = 100;
let b = 200;

[a, b] = swap(a, b);
console.log(a, b); // Debería imprimir: 200, 100