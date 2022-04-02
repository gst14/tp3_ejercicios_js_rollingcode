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

  let lapValues = {
    number1: azarNumber1,
    number2: azarNumber2,
    total: sumDicesValues,
  };

  diceValuesRound.push(lapValues);
  vuelta++;
}

let listDiceValuesHTML = document.querySelector("#ex3 #list-values-dices");

// console.log(diceValuesRound);
listDiceValuesHTML.innerHTML = "";
for (let i = 0; i < diceValuesRound.length; i++) {
  let element = diceValuesRound[i];
  listDiceValuesHTML.innerHTML += `<li> Dado 1: ${element.number1} | Dado 2: ${element.number2}| Suma: ${element.total}</li>`;
}

// Funciones - Ejercicio 1

let inputOddEvenHTML = document.querySelector("#nro-user-oddEven");
let captionResultOddEvenHTML = document.querySelector("#fnex1 #caption-result");

const parOImpar = (nro) => {
  let resultado = "";
  if (nro % 2 === 0) {
    resultado = "par";
  } else {
    resultado = "impar";
  }
  return resultado;
};

inputOddEvenHTML.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log(e.target.validity.valid)
    if(e.target.validity.valid){
      let userInput = Number(inputOddEvenHTML.value);
      let result = parOImpar(userInput);
      captionResultOddEvenHTML.innerText = `el nro ${userInput} es ${result}`;
    }else{
      captionResultOddEvenHTML.innerText = `"${inputOddEvenHTML.value}" no es una entrada valida`;
    }
  }
  // contador++;
  // captionResultOddEvenHTML.innerText = `Hice click ${contador} veces`;
});
// QUE SE ASIGNA A UNA VARIABLE?
// EL RESULTADO DE EVALUAR UNA EXPRESION
