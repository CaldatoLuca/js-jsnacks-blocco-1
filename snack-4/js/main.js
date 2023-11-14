// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.

`use.strict`;

const listaNumeri = [];
let somma = 0;

do {
  const numero = prompt("Inserisci un numero");
  if (!isNaN(numero)) {
    listaNumeri.push(numero);
    somma += +numero;
  } else {
    alert("inserisci un numero");
  }
} while (somma < 50);

console.log(`La tua lista di numeri è: ${listaNumeri}`);
console.log(`La somma dei tuoi numeri è: ${somma}`);

/*
while (somma < 50) {
  if (!isNaN(numero)) {
    listaNumeri.push(numero);
    somma += +numero;
  } else {
    alert("inserisci un numero");
  }
}

console.log(`La tua lista di numeri è: ${listaNumeri}`);
console.log(`La somma dei tuoi numeri è: ${somma}`);
*/

/*
 for (let i = 0; i < Infinity; i++) {
   if (somma < 50) {
     const numero = +prompt("Inserisci un numero");
     listaNumeri.push(numero);
     somma += numero;
   } else {
     break;
   }
 }

 console.log(`La tua lista di numeri è: ${listaNumeri}`);
 console.log(`La somma dei tuoi numeri è: ${somma}`);
*/
