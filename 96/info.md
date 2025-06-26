# Ejercicio 96 - Serie de Robos (19): Prevenir Cambios

La policía te envía una declaración electrónica para que la firmes.  
Pero al comenzar a firmar, aparece un error: al parecer, te enviaron un documento protegido.

---

## 🧪 Ejemplos

```javascript
const obj = { noChanges: true };

preventChanges(obj) {
  // Escribí tu código acá, no uses una declaración return

  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}

// Resultado esperado ➞ { noChanges: true }
```

## 📝 Notas

- Esta consigna es distinta: la función ya contiene código que **no debés cambiar ni eliminar**.
- **No uses `return`, ya está incluido.**
- Tu tarea es, dado un objeto, evitar que se le puedan hacer cambios.
