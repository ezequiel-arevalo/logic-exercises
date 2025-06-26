# Ejercicio 68 - Inches to Feet

Creá una función que reciba una medida en pulgadas (**inches**) y retorne su equivalente en **pies** (**feet**).

> Recordá: **12 pulgadas = 1 pie**

---

## 🧪 Ejemplos

```javascript
inchesToFeet(324) ➞ 27
// 324 / 12 = 27

inchesToFeet(12) ➞ 1
// 12 / 12 = 1

inchesToFeet(36) ➞ 3
// 36 / 12 = 3

inchesToFeet(10) ➞ 0
// Menos de 12 pulgadas → retorna 0
```

## 📝 Notas

- Si la cantidad de pulgadas es menor que 12, retorná 0.
- Usá Math.floor() si necesitás redondear hacia abajo.
- Recordá retornar el valor, no imprimirlo.
