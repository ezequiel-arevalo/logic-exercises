# Ejercicio 29 - Verificación de Igualdad

En este desafío debés verificar la **igualdad de dos valores** dados como parámetros `a` y `b`.

Tanto el **valor** como el **tipo de dato** deben ser iguales para que el resultado sea `true`.

Los tipos posibles de los parámetros son:

- Números
- Strings
- Booleanos (`true` o `false`)
- Valores especiales: `undefined`, `null` y `NaN`

---

## 🧪 Ejemplos

```javascript
checkEquality(1, true) ➞ false
// Un número y un booleano: valor y tipo diferentes.

checkEquality(0, "0") ➞ false
// Un número y un string: tipo diferente.

checkEquality(1, 1) ➞ true
// Ambos son números: tipo y valor iguales.
```

## 📝 Notas

- Usá el operador de comparación estricta (===), que compara tanto el valor como el tipo.
- No olvides retornar el resultado (no solo imprimirlo).
