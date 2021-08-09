// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let menor = 0;
function menorIndice(array){
    for(key in array){
        if(array[menor] > array[key]){
            menor = key;
        }
    }
    return menor;
}

console.log (menorIndice([2, 4, 6, 7, 10, 0, -3]));