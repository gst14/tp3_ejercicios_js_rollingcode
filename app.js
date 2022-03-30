const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Formas de representar un string
// 'Enero' -> Comilla simples
// "Enero"-> Comillas dobles
// `Enero` -> Comillas invertidas o 'backstics'

let listMonths = document.querySelector("#ex1 .list");

// let lM = document.getElementById('list-months');

// let lMQuery = document.querySelector('#list-months')

for (let i = 0; i < months.length; i++) {
  // Los arreglos en JS tiene base cero. Su primer elemento siempre va a ser el indice 0
  listMonths.innerHTML += `<li>${months[i]}</li>`;
}

// Ejercicio 3

let diceValuesRound = [];

let vuelta = 0;
while (vuelta < 50) {
  let azarNumber1 = Math.round(Math.random() * 6); // Primer dado

  azarNumber1 = azarNumber1 == 0 ? 1 : azarNumber1; // If ternario

  let azarNumber2 = Math.round(Math.random() * 6); // Segundo dado

  azarNumber2 = azarNumber2 == 0 ? 1 : azarNumber2; // If ternario : Operador ternario

  let sumDicesValues = azarNumber1 + azarNumber2;
  diceValuesRound.push(sumDicesValues);
  vuelta++;
}

console.log(diceValuesRound);
