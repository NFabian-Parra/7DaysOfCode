# capturar y almacenar valores dentro de variables

Las variables son los bloques básicos de construcción de cualquier sistema y son esenciales para procesar cualquier tipo de información, ya sea de una persona que ha iniciado sesión en el sistema o incluso para mostrar detalles de productos en un catálogo de comercio electrónico.

Por eso, hoy vamos a practicar como desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.

Al final, el sistema mostrará el mensaje:

```javascript
"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
```

Observa que cada información entre [ ] es una de las respuestas dadas por la persona.

### EJERCICIO OPCIONAL

Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:

``` ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO. ```


Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:

```
1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
```

> Nota:

Tanto `alert()` como `prompt()` se utilizan para crear cuadros de diálogo e interactuar con el usuario, pero son diferentes entre sí.

`alert()` se utiliza para mostrar un mensaje simple al usuario.

 

Ejemplo:
```
alert("¡Hola, todos!");
```



`prompt()` requiere que el usuario ingrese algún valor, que podrás manipular.

 

Ejemplo:

 
```
const ciudad = prompt("Escribe tu ciudad:");
const msg = `¡Eres de ${ciudad}!`;
alert(msg);
```