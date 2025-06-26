# Ejercicio 69 - I'd Like a New Shade of Blue, Please

Tenés un balde con pintura azul y querés pintar tantas **paredes completas** como sea posible.  
Creá una función que retorne cuántas paredes completas podés pintar **antes de quedarte sin pintura**.

---

## 📥 Parámetros

- `n`: Cantidad de metros cuadrados que podés pintar.
- `w`: Ancho de una pared.
- `h`: Alto de una pared.

---

## 🧪 Ejemplos

```javascript
howManyWalls(100, 4, 5) ➞ 5
// Cada pared mide 20m² → 100 / 20 = 5

howManyWalls(10, 15, 12) ➞ 0
// Cada pared mide 180m² → no alcanza para una sola

howManyWalls(41, 3, 6) ➞ 2
// Cada pared mide 18m² → 41 / 18 = 2 paredes completas
```

## 📝 Notas

- No contés una pared si no podés terminar de pintarla.
- Todas las paredes tienen el mismo tamaño.
- Todos los valores son enteros positivos.
