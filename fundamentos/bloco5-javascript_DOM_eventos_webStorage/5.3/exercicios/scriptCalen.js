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
    document.body.appendChild(liDays);
    ulDays.appendChild(liDays);

    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      liDays.className = "day holiday";
      document.body.appendChild(liDays);
      ulDays.appendChild(liDays);
    }

    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
      liDays.className = "day friday";
      document.body.appendChild(liDays);
      ulDays.appendChild(liDays);
    }
  }
}
daysOfMonth();