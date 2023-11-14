// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo

// prompt numero n
// ciclo for con i < promprt utente che crea array
// array formati da numeri casuali da 1 a 100 (math.random)
//? numeri decimali, numeri negativi, numero tra 1 e 100(interi/decimali, compresi)?//

`use.strict`;

const n = +prompt("inserisci un numero");

if (!isNaN(n) && n !== 0) {
  for (let i = 1; i <= n; i++) {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      // return Math.floor(Math.random() * 98) + 2;  nel caso in cui 1 e 100 non siano compresi
      randomArray.push(randomNumber);
    }
    console.log(`Il ${i}° array è: ${randomArray}`);
    alert(`Il ${i}° array è: ${randomArray}`);
  }
} else if (n === 0) {
  alert("nessun array generato");
} else {
  alert("valore errato");
}
