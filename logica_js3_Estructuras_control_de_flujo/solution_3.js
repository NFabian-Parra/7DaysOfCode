const opciones = {
  frontEnd: ['React', 'Vue'],
  backEnd: ['C#', 'Java'],
};

let respuestas = [];
let pregunta1 = prompt("¿Quiere seguir hacia el área:\n1. Front-End\n2. Back-End");

if (pregunta1 == 1) {
  respuestas.push('Front-End');
  let pregunta2 = prompt("¿Quiere aprender:\n1. React\n2. Vue");
  respuestas.push(opciones.frontEnd[pregunta2 - 1]);
} else if (pregunta1 == 2) {
  respuestas.push('Back-End');
  let pregunta2 = prompt("¿Quiere aprender:\n1. C#\n2. Java");
  respuestas.push(opciones.backEnd[pregunta2 - 1]);
} else {
  alert('Opción no válida');
}

let pregunta3 = prompt(`¿Quieres especializarte en ${respuestas[0]} o ser desarrollador Full Stack?\n1. Especializarme\n2. Full Stack`);
if (pregunta3 == 1) {
  alert(`Serás un desarrollador especializado en ${respuestas[0]}`);
} else if (pregunta3 == 2) {
  alert('Serás un desarrollador Full Stack');
} else {
  alert('Opción no válida');
}

while (true) {
  let pregunta4 = prompt("¿Qué tecnologías quieres especializarte? Ingrese la tecnología o escriba 'No' para salir.");
  if (pregunta4.toLowerCase() === 'no') break;
  respuestas.push(pregunta4);
  alert(`Aprenderás mucho con ${pregunta4}`);
}

console.log(respuestas);