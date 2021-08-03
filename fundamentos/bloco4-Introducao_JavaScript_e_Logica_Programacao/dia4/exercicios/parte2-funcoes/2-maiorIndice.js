// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array =[2, 3, 6, 7, 10, 1];
let maior = 0;

function maiorIndice(array) {
    for(key in array){
        if(maior < array[key]){
            maior = array[key];
        }
    }
    return array.indexOf(maior);
}

console.log(maiorIndice(array));



// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
//     return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4