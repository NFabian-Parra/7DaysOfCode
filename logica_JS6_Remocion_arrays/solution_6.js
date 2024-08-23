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
  // Mostrar la opción de eliminar solo si hay al menos un producto en la lista
  let tieneProductos = Object.values(listaDeCompras).some(cat => cat.length > 0);

  // Mostrar opciones de menú
  let opciones = "¿Deseas agregar un producto a la lista de compras?\n1. Sí\n2. No";
  if (tieneProductos) opciones += "\n3. Eliminar un producto";

  agregarMas = parseInt(prompt(opciones), 10);

  while (![1, 2, (tieneProductos ? 3 : undefined)].includes(agregarMas)) {
    alert("¡Opción incorrecta, marca solo el número de tu respuesta!");
    agregarMas = parseInt(prompt(opciones), 10);
  }

  if (agregarMas === 2) {
    break;
  }

  if (agregarMas === 3 && tieneProductos) {
    // Mostrar productos actuales
    let productosEnLista = Object.keys(listaDeCompras).reduce((acc, cat) => {
      if (listaDeCompras[cat].length > 0) {
        acc.push(`${cat}: ${listaDeCompras[cat].join(", ")}`);
      }
      return acc;
    }, []);

    if (productosEnLista.length === 0) {
      alert("No hay productos en la lista para eliminar.");
      continue;
    }

    alert("Productos actuales:\n" + productosEnLista.join("\n"));
    let productoAEliminar = prompt("¿Cuál de estos productos deseas eliminar?").toLowerCase();
    
    // Eliminar el producto
    let encontrado = false;
    for (let cat in listaDeCompras) {
      let index = listaDeCompras[cat].indexOf(productoAEliminar);
      if (index !== -1) {
        listaDeCompras[cat].splice(index, 1);
        encontrado = true;
        alert(`El producto "${productoAEliminar}" ha sido eliminado de la categoría "${cat}".`);
        break;
      }
    }

    if (!encontrado) {
      alert("¡No fue posible encontrar el producto en la lista!");
    }
    continue;
  }

  // Agregar producto
  producto = prompt("¿Cuál es el nombre del producto?").toLowerCase().trim();
  
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
let listaTexto = "Tu lista de compras incluye:\n";
for (let categoria in listaDeCompras) {
  listaTexto += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
}
alert(listaTexto);