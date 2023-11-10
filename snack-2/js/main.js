// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// inserico le due parole con prompt
// controloo con if quale sia la piu lunga (stampo la piu corta) else (stampo l' altra)

`use.strict`;

//? variabili
const parolaUno = prompt("Inserisci qui la parola uno");
const parolaDue = prompt("Inserisci qui la parola due");

//? controllo in console dei valori inseriti
console.log({ parolaUno });
console.log({ parolaDue });
console.log(parolaUno.length);
console.log(parolaDue.length);

//? condizione
if (parolaUno.length > parolaDue.length) {
  console.log({ parolaUno });
  alert(parolaUno);
} else if (parolaUno.length < parolaDue.length) {
  console.log({ parolaDue });
  alert(parolaDue);
} else {
  console.log(`${parolaDue} è lunga come ${parolaUno}`);
  alert(`${parolaDue} è lunga come ${parolaUno}`);
}
