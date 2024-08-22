let listaDeCompras = {
  "Frutas": [],
  "Lacteos": [],
  "Congelados": [],
  "Dulces": [],
  "Otros": []
};

let producto = "";
let categoria = "";
let agregarMas = 1; 

while (agregarMas !== 2) {
  agregarMas = parseInt(prompt("¿Deseas agregar un producto a la lista de compras?\n1. Sí\n2. No"), 10);

  while (agregarMas !== 1 && agregarMas !== 2) { 
      alert("¡Opción incorrecta, marca solo el numero de tu respuesta!");
      agregarMas = parseInt(prompt("¿Deseas agregar un producto a la lista de compras?\n1. Sí\n2. No"), 10);
  }

  if (agregarMas === 2) {
      break;
  }

  producto = prompt("¿Qué producto deseas agregar?");
  let categoriaNumero = parseInt(prompt("¿A qué categoría pertenece este producto?\n1. Frutas\n2. Lácteos\n3. Congelados\n4. Dulces\n5. Otros"), 10);

  while (![1, 2, 3, 4, 5].includes(categoriaNumero)) {
      alert("Esa categoría no está predefinida. Por favor, elige una categoría válida.");
      categoriaNumero = parseInt(prompt("¿A qué categoría pertenece este producto?\n1. Frutas\n2. Lácteos\n3. Congelados\n4. Dulces\n5. Otros"), 10);
  }

  switch (categoriaNumero) {
      case 1:
          categoria = "Frutas";
          break;
      case 2:
          categoria = "Lacteos";
          break;
      case 3:
          categoria = "Congelados";
          break;
      case 4:
          categoria = "Dulces";
          break;
      case 5:
          categoria = "Otros";
          break;
  }

  listaDeCompras[categoria].push(producto);
}

// Mostrar la lista de compras
let listaTexto = "Tú lista de compras incluye:\n";
for (let categoria in listaDeCompras) {
  listaTexto += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
}
alert(listaTexto);