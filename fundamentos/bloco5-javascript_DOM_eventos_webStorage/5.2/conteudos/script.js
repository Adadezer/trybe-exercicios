// 1- Acesse o elemento elementoOndeVoceEsta .
let ondeEstou = document.querySelector("#elementoOndeVoceEsta");


let primeiroFilho = document.querySelector("#primeiroFilho");

// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiOndeEstou = ondeEstou.parentNode.style.color = "blue";

// 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = ondeEstou.firstElementChild;
primeiroFilhoDoFilho.innerHTML = "eu sou o primeiro filho do filho";

// 4- Acesse o primeiroFilho a partir de pai .
console.log(document.querySelector("#pai").firstElementChild);

// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeEstou.previousElementSibling);

// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(ondeEstou.nextSibling); //retorna o próximo nó

// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeEstou.nextSibling.nextSibling);

// 8- Agora acesse o terceiroFilho a partir de pai.
let pai = document.querySelector("#pai");
console.log(pai.lastElementChild.previousElementSibling);