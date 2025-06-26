# Ejercicio 57 - Admisión al Cine

Escribí una función que verifique si una persona puede ver una película clasificada **MA15+**.  
Se requiere cumplir **una** de las siguientes dos condiciones para ser admitido:

1. Tener al menos 15 años.
2. Estar bajo supervisión de un adulto.

La función acepta dos parámetros: `age` y `isSupervised`. Debe retornar un valor booleano.

---

## 🧪 Ejemplos

```javascript
acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true
```

## 📝 Notas

- age es un número decimal.
- isSupervised es un valor booleano.
- No olvides retornar el resultado.
