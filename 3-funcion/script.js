"use strict";

function password(num) {
  const numUser = prompt("Introduce un número del 0 al 100");
  let generatePassword = Math.random() * 100;

  if (+numUser === generatePassword) {
    prompt("¡Has ganado!");
  } else {
    prompt("El número es ");
  }
}
