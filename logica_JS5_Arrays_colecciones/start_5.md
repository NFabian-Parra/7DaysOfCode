# Arrays y colecciones

¿Alguna vez has ido al supermercado con una lista de compras y terminado volviendo por los mismos pasillos para completar la lista?

Hoy te proponemos un desafío que te ayudará a evitar eso. Imagina que estás creando un programa en JavaScript para gestionar tu lista de compras. El objetivo que deberá cumplir tu programa es:

  1. Preguntar si **¿Deseas agregar un producto a tu lista de compras?** : Responde con "sí" o "no".
  2. Preguntar **¿Qué producto deseas agregar?**: Por ejemplo, "zanahoria".
  3. Preguntar **¿A que categoria pertenece el producto?**: Elige entre opciones predefinidas como frutas, lácteos, congelados, dulces, etc.

Cuando decidas que ya no quieres agregar más ítems y respondas "no", el programa deberá mostrar una lista agrupada por categorías.

Por ejemplo, si agregas los siguientes ítems:

    banana
    leche en polvo
    tomate
    leche vegetal
    chicle
    gominola
    manzana
    uva
    aguacate
    leche de vaca

El programa debería imprimir algo así:

Lista de compras:

```javascript
Frutas: banana, tomate, manzana, uva, aguacate
Lacteos: leche vegetal, leche de vaca, leche en polvo
Congelados:
Dulces: chicle, gominola
```