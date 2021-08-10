const header = document.querySelector("#header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const urgente = document.getElementsByClassName("emergency-tasks");
urgente[0].style.backgroundColor = "rgb(255, 159, 132)"; //salmao

const urgenteTitulo = document.querySelectorAll(".emergency-tasks h3");
urgenteTitulo[0].style.backgroundColor = "rgb(165, 0, 243)"; //roxo 
urgenteTitulo[1].style.backgroundColor = "rgb(165, 0, 243)";

const semUrgencia = document.getElementsByClassName("no-emergency-tasks")[0];
semUrgencia.style.backgroundColor = "rgb(249, 219, 94)"; //dourado

const semUrgenciaTitulo = document.querySelectorAll(".no-emergency-tasks h3");
for (i = 0; i < semUrgenciaTitulo.length; i += 1){
    semUrgenciaTitulo[i].style.backgroundColor = "black";
}

const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(0, 53, 51)";