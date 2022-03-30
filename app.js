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
let listResultsEx3 = document.querySelector("#ex3 .list");

let diceValuesRound = [];

let lap = 0;
while (lap < 50) {
  let azarNumber1 = Math.round(Math.random() * 6); // Primer dado

  azarNumber1 = azarNumber1 == 0 ? 1 : azarNumber1; // If ternario

  let azarNumber2 = Math.round(Math.random() * 6); // Segundo dado

  azarNumber2 = azarNumber2 == 0 ? 1 : azarNumber2; // If ternario : Operador ternario

  let sumDicesValues = azarNumber1 + azarNumber2;
  diceValuesRound.push({
    dice_one: azarNumber1,
    dice_two: azarNumber2,
    sum: sumDicesValues,
  });
  lap++;
}

let htmlItemsGenerated = diceValuesRound.map(
  ({ dice_one, dice_two, sum }) =>
    `<li> Dice one: ${dice_one} | Dice two: ${dice_two} | Sum: ${sum} </li>`
);
listResultsEx3.innerHTML = htmlItemsGenerated.join("");

// Ejercicio 1 - Funciones

let numberInputExFN = document.querySelector("#number-only");
let messageEx1FN = document.querySelector("#result-number");

let userInput = {};

numberInputExFN.addEventListener("keydown", (e) => {
  userInput = {
    isValid: e.target.value === "" ? false : e.target.validity.valid,
    value: e.target.value,
  };
  if (e.key === "Enter") {
    if (userInput.isValid) {
      let oddOrEven = userInput.value % 2 === 0 ? "par" : "impar";
      messageEx1FN.innerText = `${userInput.value} es ${oddOrEven}`;
    } else {
      messageEx1FN.innerText = !userInput.value
        ? `No has ingresado nada`
        : `"${userInput.value}" no es una entrada valida`;
    }
  }
});

// Ejercicio 2 - Funciones

let areaInput = document.querySelector("#areafnex2");

const isUpper = (string) => {
  return string === string.toUpperCase();
};

const userInputHasLowerUpperOrBoth = (userInput) => {
  let letterCase = { upper: false, lower: false, both: false };
  userInput = Array.from(userInput);
  userInput = userInput.filter((x) => x !== " ");
  console.log(userInput);
  for (let n = 0; n < userInput.length; n++) {
    const letter = userInput[n];
    if (isUpper(letter)) {
      letterCase.upper = true;
    }
    if (!isUpper(letter)) {
      letterCase.lower = true;
    }
    if (letterCase.upper && letterCase.lower) {
      letterCase.both = true;
      break;
    }
  }
  return letterCase;
};

areaInput.addEventListener("input", (e) => {
  let userInputValidations = userInputHasLowerUpperOrBoth(e.target.value);
  let message = "";
  if (userInputValidations.lower && !userInputValidations.upper) {
    message = "El texto ingresado solo contiene minusculas";
  }
  if (userInputValidations.upper && !userInputValidations.lower) {
    message = "El texto ingresado solo contiene mayusculas";
  }
  if (userInputValidations.both) {
    message = "El texto ingresado contiene tanto mayusculas como minusculas";
  }
  document.querySelector("#validations p").innerText = message;
});

// Ejercicio 3 - Funcion
let resultCaptionFNEx3 = document.querySelector("#result-fnex3");
let btnSendSides = document.querySelector("#send-sides");

let inputSideA = document.querySelector("#side_a");
let inputSideB = document.querySelector("#side_b");

let entriesUser = {
  sideA: {
    value: 0,
    isValid: false,
  },
  sideB: {
    value: 0,
    isValid: false,
  },
};
inputSideA.addEventListener("change", (e) => {
  entriesUser.sideA = {
    value: inputSideA.value,
    isValid: inputSideA.value == "" ? false : e.target.validity.valid,
  };
});

inputSideB.addEventListener("change", (e) => {
  entriesUser.sideB = {
    value: inputSideB.value,
    isValid: inputSideB.value == "" ? false : e.target.validity.valid,
  };
});

const perimeterRectangle = (width, height) => {
  return 2 * (Number(width) + Number(height));
};

btnSendSides.addEventListener("click", (e) => {
  let invalidInputs = Object.keys(entriesUser).filter(
    (input) => !entriesUser[input].isValid
  );
  if (invalidInputs.length === 0) {
    resultCaptionFNEx3.classList.toggle("valid");
    let result = perimeterRectangle(entriesUser.sideA.value, entriesUser.sideB.value);
    resultCaptionFNEx3.innerText = `El perimetro del rectangulo es ${result}`;
  } else {
    resultCaptionFNEx3.classList.toggle("invalid");
    resultCaptionFNEx3.innerText = `${invalidInputs.length} ${
      invalidInputs.lenght == 1 ? "input es" : "inputs son"
    } ${invalidInputs.lenght == 1 ? "invalido" : "invalidos"}`;
  }
});


// Ejercicio 4 - Funciones

let resultView = document.querySelector('#fnex4 .result');

let numberTimes = document.querySelector('#number-times');

const timesValues = (number)=>{
  let results = [];
  for (let n = 1; n <= 10; n++) {
    results.push(number * n);
  }
  return results;
}

numberTimes.addEventListener('change',(e)=>{
  resultView.innerHTML = '';
  if(e.target.validity.valid && e.target.value != ''){
    let number = e.target.value;
    resultView.innerHTML += `<h3>Tabla del ${number}</h3>`
    let listItems = timesValues(number).map( (v,i)=>{
      return `<li>${number} x ${i+1} = ${v}</li>`
    } )

    resultView.innerHTML+= `<ul>${listItems.join("")}</ul>`
  }else{
    resultView.innerHTML = `<p>"${e.target.value}" no es una entrada valida</p>`
  }
})
