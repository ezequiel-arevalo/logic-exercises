# Ejercicio 24 - Usando el operador "&&"

JavaScript tiene un operador lógico `&&`.  
El operador `&&` toma dos valores booleanos y devuelve `true` solo si **ambos** valores son `true`.

Cómo funciona `a && b`:

1. Se evalúa `a` para ver si es `true` o `false`.
   - Si `a` es `false`, se devuelve `false` directamente.
2. Si `a` es `true`, se evalúa `b`.
   - Si `b` es `false`, se devuelve `false`.
3. Si `a` y `b` son `true`, se devuelve `true`.

---

## 🧪 Ejemplos

```javascript
and(true, false) ➞ false

and(true, true) ➞ true

and(false, true) ➞ false

and(false, false) ➞ false
```

## 📝 Notas

- El operador && solo devuelve true si ambos operandos son true.
- No olvides retornar el resultado (no solo imprimirlo).
