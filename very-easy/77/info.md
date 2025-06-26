# Ejercicio 77 - Función de Año Bisiesto ⌚

Escribí una función que devuelva `true` si un año es bisiesto, o `false` en caso contrario.

Un año es "bisiesto" si tiene 366 días en lugar de los 365 de un año típico. Ese día extra se agrega al final del mes más corto, creando el 29 de febrero.

Un año bisiesto ocurre cada cuatro años, y sucede si el año es múltiplo de 4.  
La excepción es cuando el año es el comienzo de un siglo (por ejemplo, 1900 o 2000), en cuyo caso debe ser divisible por 400 para considerarse bisiesto.

---

## 🧪 Ejemplos

```javascript
leapYear(1990) ➞ false
leapYear(1924) ➞ true
leapYear(2021) ➞ false
```

## 📝 Notas

- No sobrepienses este desafío.
- Podés resolverlo en pocas líneas de código.
