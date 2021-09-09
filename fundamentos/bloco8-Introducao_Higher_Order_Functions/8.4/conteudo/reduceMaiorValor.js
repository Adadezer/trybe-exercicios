// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce

// com for

const numbers = [50, 85, -30, 3, 15];

let maiorValor = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i]
    }
}
console.log('maior valor (for): ' + maiorValor);

// com reduce

const maiorValorReduce = numbers.reduce((acc, number) => {
    if (acc > number) {
        return acc;
    } else {
        return number;
    }
});
console.log('maior valor (reduce): ' + maiorValorReduce); // 85

// usando ternário, e passando um segundo parâmetro (0), isso quer dizer q o bigger vai começar com o valor 0

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85