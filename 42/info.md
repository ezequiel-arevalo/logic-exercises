# Ejercicio 42 - Verificar si un Entero es Divisible por Cinco

Crea una función que retorne `true` si un número entero es divisible por 5, y `false` en caso contrario.

---

## 🧪 Ejemplos

```javascript
divisibleByFive(5) ➞ true
// 5 dividido por 5 = 1, sin resto

divisibleByFive(-55) ➞ true
// -55 dividido por 5 = -11, sin resto

divisibleByFive(37) ➞ false
// 37 dividido por 5 = 7.4 → tiene resto
```

## 📝 Notas

- Usá el operador módulo % para verificar si num % 5 === 0.
- No olvides retornar el resultado como true o false.
