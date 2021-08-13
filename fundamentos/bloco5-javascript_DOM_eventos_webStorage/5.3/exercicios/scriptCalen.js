function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
function daysOfMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  let ulDays = document.querySelector("#days");

  for(index = 0; index < dezDaysList.length; index += 1){
    let liDays = document.createElement("li");
    liDays.innerHTML = dezDaysList[index];
    liDays.className = "day";

    // document.body.appendChild(liDays);
    ulDays.appendChild(liDays);

    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      liDays.className = "day holiday";

      ulDays.appendChild(liDays);
    }

    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
      liDays.className = "day friday";

      ulDays.appendChild(liDays);
    }
  }
}
daysOfMonth();

// Exercício 2

function botaoFeriado(param) {
  let buttonsContainer = document.querySelector(".buttons-container")
  let btnFeriados = document.createElement("button");
  btnFeriados.innerHTML = param;
  btnFeriados.id = "btn-holiday";
  
  // document.body.appendChild(btnFeriados);
  buttonsContainer.appendChild(btnFeriados);
}
botaoFeriado("Feriados");

// Exercício 3

//preciso criar uma variavel pra pegar o id btn-holiday pois, no exercicio 2 ela foi criada por uma função, então nao posso usar a q já existe no exercicio 2
let btnFeriados = document.querySelector("#btn-holiday"); 
btnFeriados.addEventListener("click", corHoliday);

function corHoliday() {
  let liHoliday = document.querySelectorAll(".holiday"); //não esquecer q o querySelectorAll sempre precisa do for pra manipular o elemento, se quiser manipular somente um, usar o querySelector normal
  for (let index = 0; index < liHoliday.length; index += 1){
    //logica if - ele vem setado com o rgb, ao clicar na primeira vez, ele vai ver se a cor é igual red, não é... ele vai pro else e deixa red. Na segunda vez, a cor é red, se for igual a red, ele seta pra rgb
    if(liHoliday[index].style.backgroundColor === "red"){
      liHoliday[index].style.backgroundColor = "rgb(238,238,238)";
    }else{
      liHoliday[index].style.backgroundColor = "red";
    }
  }
}

// Exercício 4

function botaoSexta(params) {
  let btnSexta = document.createElement("button");
  btnSexta.innerHTML = params;
  btnSexta.id = "btn-friday";

  let buttonsContainer = document.querySelector(".buttons-container");
  
  buttonsContainer.appendChild(btnSexta);
}
botaoSexta("Sexta-Feira");
