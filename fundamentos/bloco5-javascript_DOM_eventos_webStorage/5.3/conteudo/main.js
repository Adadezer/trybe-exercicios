const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//1. Copie esse arquivo e edite apenas ele;

/*2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/

// adiciono em cada li, o evento click, e o nome da função (função essa q será executada depois que eu clicar na li)
firstLi.addEventListener("click", addTech); 
secondLi.addEventListener("click", addTech);
thirdLi.addEventListener("click", addTech);

function addTech(event) {
    let addTech = document.querySelector(".tech"); //pego a classe tech
    addTech.classList.remove("tech"); // como só pode ter uma classe tech, eu removo qualquer uma q já exista
    event.target.classList.add("tech"); // adiciono a classe tech, para quem chamou o função
} //.target se refere a qm está chamando a função, event é o parâmetro, ou seja, "event" (pode ser qualquer outro nome).target vai chamar o elemento clicado, e vai add a classe tech nesse elemento

/*3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
input.addEventListener("input", alterarTexto); // também pode ser usado o change, a diferença é q o input muda no hora, e o change muda somente depois de perder o foco

function alterarTexto(event){
    let addTech = document.querySelector(".tech"); // pego a classe tech
    addTech.innerHTML = event.target.value; // adiciono na classe o texto q está escrito no elemento que chamou a função, no caso o id input
} //.value é requisito para se usar o addEventListener(input), q pega oq é digitado no campo
  //.event.target é quem está chamando a função
  

/*4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?*/
myWebpage.addEventListener("dblclick", portifolio);

function portifolio(event) {
    window.location.assign("https://adadezer.github.io/");

    /* 
      Errado (Não funcional)
     let main = document.querySelector("main");
     let tagA = document.createElement("a");
     tagA.href = "https://adadezer.github.io/";
    
     document.body.appendChild(tagA);
     tagA.appendChild(myWebpage);
     main.appendChild(tagA);
    */
}

/*5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:*/


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.