# Ejercicio 33 - Cuadros por Segundo (FPS)

Crea una función que retorne la cantidad de cuadros (frames) que se muestran en un cierto número de **minutos**, dada una cantidad de **FPS (frames por segundo)**.

---

## 🧪 Ejemplos

```javascript
frames(1, 1) ➞ 60
// 1 minuto * 60 segundos * 1 FPS = 60

frames(10, 1) ➞ 600
// 10 minutos * 60 segundos * 1 FPS = 600

frames(10, 25) ➞ 15000
// 10 minutos * 60 segundos * 25 FPS = 15000
```

## 📝 Notas

- FPS significa “frames per second” (cuadros por segundo).
- Un minuto tiene 60 segundos.
- La fórmula es: frames = minutos _ 60 _ fps.
- Asegurate de retornar el valor, no imprimirlo.
