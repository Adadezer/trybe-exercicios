let numero = 10;
// console.log(numero);

// manda o conteudo para o brownser
//                      chave    valor
sessionStorage.setItem('numero',JSON.stringify(numero));

//pega o conteudo do brownser
let exibir = JSON.parse(sessionStorage.getItem('numero')); 
console.log(exibir);