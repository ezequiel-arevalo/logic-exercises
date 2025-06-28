# Ejercicio 1 - Operaciones Bit a Bit

Un número decimal puede representarse como una secuencia de bits. Por ejemplo:

- `6` = `00000110`
- `23` = `00010111`

A partir de esta representación, podemos calcular:

- **AND bit a bit** (`&`)
- **OR bit a bit** (`|`)
- **XOR bit a bit** (`^`)

## 🧪 Ejemplos

```javascript
bitwiseAND(7, 12) ➞ 4
bitwiseOR(7, 12) ➞ 15
bitwiseXOR(7, 12) ➞ 11
```

## 📝 Notas

- JavaScript tiene un método útil: `.toString(2)`, que te muestra la representación binaria de un número decimal.
- Pero para este ejercicio **no necesitás convertir a binario**, ya que las operaciones bit a bit se hacen directamente con los operadores `&`, `|` y `^`.
