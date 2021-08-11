// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho

let pai = document.querySelector("#pai");

for(let index = pai.childNodes.length-1; index >= 0; index -= 1){
    let filhoAtual = pai.childNodes[index];

    if(filhoAtual.id !== "elementoOndeVoceEsta"){
        filhoAtual.remove();
    }
}

let segundoEUltimoFilhoDoFilho = document.querySelector("#segundoEUltimoFilhoDoFilho");
segundoEUltimoFilhoDoFilho.remove();

/* EXPLICANDO O CÓDIGO
Cada vez que o você remove algum elemento no for o elemento troca de posição.
Por exemplo: o elemento do array está na posição 0, se ele for removido o elemento da posição 1 do array passa para a posição 0.

Para a logica ficar mais fácil de entender, e não termos q fazer malabarismos para resolver esse problema, iremos começar do ultimo elemento, e ir excluindo até o primeiro, assim não teremos esse problema da posição ser substituida a cada iteração. 


for(let index = pai.childNodes.length-1; index >= 0; index -= 1)

//Para pegar o ultimo elemento, pegamos todos os nós filhos do id pai (o problema pede para não excluir ele), e colocamos -1 no length para pegar o 8º indice (o array tem 9 indices e o nono nó é um text de valor nulo, se começarmos por ele o index começará com valor indefinido e não irá satisfazer o loop, dando erro no código, o oitavo indice é um id filho válido); 

//como começaremos do ultimo nó até o primeiro, vamos fazer um decremento, então loop vai acontcer enquanto o indice for maior ou igual a 0; por fim recebe o decremento para continuar executando o loop 


let filhoAtual = pai.childNodes[index];

// a variavel filhoAtual recebe o valor de cada nó na iteração

if(filhoAtual.id !== "elementoOndeVoceEsta"){
    filhoAtual.remove();
}

// Se o id de filhoAtual for diferente de elementoOndeVoceEsta, remove o elemento


let segundoEUltimoFilhoDoFilho = document.querySelector("#segundoEUltimoFilhoDoFilho");
segundoEUltimoFilhoDoFilho.remove();

// os id's primeiroFilhoDoFilho e segundoEUltimoFilhoDoFilho não são excluidos no for pq não são filhos do id pai, como o problema pede para não excluir primeiroFilhoDoFilho, basta somente excluir segundoEUltimoFilhoDoFilho.
*/ 