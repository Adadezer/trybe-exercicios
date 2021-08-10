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