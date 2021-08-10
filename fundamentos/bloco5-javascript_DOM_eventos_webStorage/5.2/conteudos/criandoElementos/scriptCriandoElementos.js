// 1- Crie um irmão para elementoOndeVoceEsta
let pai = document.querySelector("#pai");
let sectionIrmao = document.createElement("section");
sectionIrmao.id = "irmaoOndeEstou";

document.body.appendChild(sectionIrmao);
pai.appendChild(sectionIrmao);

// 2- Crie um filho para elementoOndeVoceEsta .
let ondeEstou = document.querySelector("#elementoOndeVoceEsta");
let sectionFilhoOndeEstou = document.createElement("section");
sectionFilhoOndeEstou.id = "filhoOndeEstou";

document.body.appendChild(sectionFilhoOndeEstou);
ondeEstou.appendChild(sectionFilhoOndeEstou);

// 3- Crie um filho para primeiroFilhoDoFilho
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let sectionPrimeiroFilhoDoFilho = document.createElement("section");
sectionPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";

document.body.appendChild(sectionPrimeiroFilhoDoFilho);
primeiroFilhoDoFilho.appendChild(sectionPrimeiroFilhoDoFilho);

// 4- A partir desse filho criado, acesse terceiroFilho
let filhoPrimeiroFilhoDoFilho = document.querySelector("#filhoPrimeiroFilhoDoFilho");
let sobeHierarquia = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.parentElement;
let desceHierarquia = sobeHierarquia.lastElementChild.previousElementSibling.previousElementSibling;
// console.log(desceHierarquia);