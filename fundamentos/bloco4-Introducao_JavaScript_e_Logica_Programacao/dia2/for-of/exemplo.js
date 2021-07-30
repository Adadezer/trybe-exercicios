// For/of
// Com a chegada do ES6, ganhamos uma nova funcionalidade para iterar arrays e objetos. Objetos iteráveis são objetos ou uma estrutura de dados que permite acessar o seu conteúdo com um for . O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros, mas vamos focar somente nesses dois!

// Veja o exemplo abaixo:
console.log('numeros: ');
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
    console.log(numero);
}
console.log('');
// O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros


// Vamos para outro exemplo:
console.log('letter: ');
let word = 'Hello';
for (let letter of word) {
    console.log(letter);
}
console.log('');

// Por fim, com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
console.log('Soma:');
let arrOfArray = [10, 20, 30]
for (let sum of arrOfArray) {
    sum +=1; // sum é soma em inglês
    console.log(sum);
}
// aqui ele pega o numero de cada posição e faz: 
// primeiro numero (posição 0) - sum = sum +1, ou seja, 10 = 10+1 q é igual a 11
// segundo numero (posição 1) - sum = sum +1, ou seja, 20 = 20+1 q é igual a 21
// terceiro numero (posição 2) - sum = sum+1, ou seja  30 = 30+1 q é igual a 31