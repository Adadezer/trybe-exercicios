// 2- Crie um filho para elementoOndeVoceEsta .
let ondeEstou = document.querySelector("#elementoOndeVoceEsta");
let sectionFilhoOndeEstou = document.createElement("section");
sectionFilhoOndeEstou.id = "filhoOndeEstou";

document.body.appendChild(sectionFilhoOndeEstou);
ondeEstou.appendChild(sectionFilhoOndeEstou);