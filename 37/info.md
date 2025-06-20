# Ejercicio 37 - ¡Vamos a Cargar Combustible!

Un vehículo necesita **10 veces la distancia** en combustible para viajar.  
Sin embargo, **siempre** debe llevar **como mínimo 100 unidades** de combustible antes de salir.

Creá una función que calcule cuánta cantidad de combustible se necesita según la distancia.

---

## 🧪 Ejemplos

```javascript
calculateFuel(15) ➞ 150
// 15 * 10 = 150 → mayor que 100

calculateFuel(23.5) ➞ 235
// 23.5 * 10 = 235 → mayor que 100

calculateFuel(3) ➞ 100
// 3 * 10 = 30 → como es menor que 100, se retorna 100
```

## 📝 Notas

- La distancia siempre será un número mayor que cero.
- Si la cantidad calculada es menor que 100, retorná 100.
- Si es igual o mayor, retorná la cantidad calculada normalmente.
