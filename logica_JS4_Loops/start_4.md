# Mas loops y randomización

Debes crear un pequeño programa que comience con un valor aleatorio entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

> ### Nota:
Para hacer que la propia máquina elija el número a adivinar, puedes utilizar algo llamado `Math.random()`.

Para ello, utiliza el siguiente código:

 
```javascript
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
```

Donde, por supuesto, tendrás que cambiar los valores de mínimo y máximo por los límites inferior y superior, respectivamente.