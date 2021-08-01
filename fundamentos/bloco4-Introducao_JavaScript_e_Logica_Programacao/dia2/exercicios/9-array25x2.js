// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let array = [];
let numero = 0;
for (let index = 0; index < 25; index +=1) {
    numero = numero + 1;
    array.push(numero);
}

for (let index = 0; index < array.length; index +=1) {
    console.log(array[index] / 2);
}

