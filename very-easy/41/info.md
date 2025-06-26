# Ejercicio 41 - ¿Está Vacío el String?

Crea una función que retorne `true` si un string está vacío, y `false` en caso contrario.

---

## 🧪 Ejemplos

```javascript
isEmpty("") ➞ true
// String completamente vacío

isEmpty(" ") ➞ false
// Contiene un espacio, por lo tanto NO está vacío

isEmpty("a") ➞ false
// Contiene una letra, no está vacío
```

## 📝 Notas

- Un string que contiene solo espacios (como " ") no se considera vacío.
- Usá .length === 0 para verificar si el string está vacío.
- No olvides retornar el resultado.
