# Ejercicio 54 - Upvotes vs Downvotes

Dado un objeto que contiene la cantidad de votos positivos (`upvotes`) y negativos (`downvotes`), retorná el resultado que debería mostrarse.  
Esto se calcula restando los downvotes a los upvotes.

---

## 🧪 Ejemplos

```javascript
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
```

## 📝 Notas

- Solo recibirás enteros positivos como conteo de votos.
- No olvides retornar el resultado.
