// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let contador = 0;
function maiorQuantCaracteres(array){
    for (index = 0; index < array.length; index ++){
        contador = contador + array[index].length;
    }
    

    return contador;
}

console.log(maiorQuantCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));