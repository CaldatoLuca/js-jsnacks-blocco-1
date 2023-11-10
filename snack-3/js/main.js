// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

//ciclo for con prompt
//sommo a un totale il numero
//stampo fuori la somma totale

`use.strict`;

let total = 0;

for (i = 0; i < 10; i++) {
  // chiedo numero a utente
  const userNumber = Number(
    prompt(`inserisci il numero ${i + 1} della tua lista`)
  );
  //stampo il numero
  console.log(`Questo è il numero ${i + 1} della lista: ${userNumber}`);
  //sommo il numeero al totale
  total += userNumber;
}

//stampo il totale
console.log(`La somma totale è: ${total}`);
