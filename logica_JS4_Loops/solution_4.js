const numeroSecreto = Math.floor(Math.random() * 11); // Math.floor(Math.random() * (10 - 1 + 1 = 10) + 1)
let intentosRestantes = 3;
let adivinanza;

while (intentosRestantes > 0) {
  adivinanza = parseInt(prompt(`Adivina el número entre 0 y 10. Tienes ${intentosRestantes} intentos restantes:`), 10);

  if (adivinanza === numeroSecreto) {
    alert('¡Felicidades! Has adivinado el número correctamente.');
    break; 
  } else {
    intentosRestantes--; 
    if (intentosRestantes === 0) {
      alert(`Lo siento, has agotado tus intentos. El número correcto era ${numeroSecreto}.`);
    } else {
      alert(`Incorrecto. Te quedan ${intentosRestantes} intentos.`);
    }
  }
}