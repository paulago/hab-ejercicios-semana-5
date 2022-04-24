"use strict";

function password() {
  const generatePassword = Math.floor(Math.random() * 101);

  for (let i = 0; i < 5; i++) {
    const numUser = prompt("Introduce un número del 0 al 100");

    if (+numUser === generatePassword) {
      alert("¡Has ganado!");
      break;
    } else if (+numUser < generatePassword) {
      alert(`El número es mayor. Te quedan ${4 - i} intentos.`);
    } else {
      alert(`El número es menor. Te quedan ${4 - i} intentos.`);
    }

    if (i === 4) {
      alert("Has perdido! :(");
    }
  }
}

password();
