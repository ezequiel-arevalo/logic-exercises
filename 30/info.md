# Ejercicio 30 - Apuesta Rentable

Crea una función que tome **tres argumentos**: `prob`, `prize` y `pay`, y retorne `true` si `prob * prize > pay`; de lo contrario, retorná `false`.

Una apuesta se considera rentable si la ganancia esperada es mayor al costo de jugar.

---

## 🧪 Ejemplos

```javascript
profitableGamble(0.2, 50, 9) ➞ true
// 0.2 * 50 = 10 → 10 > 9 → true

profitableGamble(0.9, 1, 2) ➞ false
// 0.9 * 1 = 0.9 → 0.9 < 2 → false

profitableGamble(0.9, 3, 2) ➞ true
// 0.9 * 3 = 2.7 → 2.7 > 2 → true
```

## 📝 Notas

- Una apuesta rentable es aquella en la que la ganancia esperada (prob \* prize) es mayor al costo (pay).
- Usá el operador > para comparar el beneficio con el costo.
- Asegurate de retornar un valor booleano, no imprimir el resultado.
- Fórmula: resultado = prob \* prize > pay
