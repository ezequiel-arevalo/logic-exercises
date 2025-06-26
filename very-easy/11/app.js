function electroMan(voltaje, corriente) {
  let potencia = voltaje * corriente;
  return potencia;
}

console.log(electroMan(230, 10));