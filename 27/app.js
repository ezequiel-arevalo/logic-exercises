
function convert(horas, minutos) {
  // Primero debo convertir las horas -> minutos
  let minutosTotales = 0;
  minutosTotales += horas * 60;
  minutosTotales += minutos;

  // Segundo debo sumar los minutos y todo junto lo paso a segundos y eso lo retorno
  let segundosTotales = minutosTotales * 60;

  return segundosTotales;
}

console.log(convert(1, 3)); // 3780
console.log(convert(2, 0)); // 7200
console.log(convert(0, 0)); // 0