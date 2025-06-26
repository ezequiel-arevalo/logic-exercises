# Ejercicio 74 - Fórmula del Impostor en Among Us

Crea una función que calcule la probabilidad de ser el impostor.  
La fórmula para calcular la probabilidad es:  
`100 × (i / p)`  
donde `i` es la cantidad de impostores y `p` la cantidad de jugadores.

Asegurate de redondear el resultado al entero más cercano y devolver el valor como un porcentaje (con el símbolo `%`).

---

## 🧪 Ejemplos

```javascript
imposterFormula(1, 10) ➞ "10%"
imposterFormula(2, 5) ➞ "40%"
imposterFormula(1, 8) ➞ "13%"
```

## 📝 Notas

- El límite de jugadores es 10.
- La cantidad máxima de impostores es 3.
