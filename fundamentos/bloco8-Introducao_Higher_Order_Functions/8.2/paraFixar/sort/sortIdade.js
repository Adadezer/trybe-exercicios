// Para fixar

// Sort altera o array original

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
people.sort((a, b) => a.age - b.age);

console.log('Por idade Crescente:');
console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente

console.log('');

people.sort((a , b) => b.age - a.age);

console.log('Por idade Decrescente:');
console.log(people);

console.log('');

people.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
console.log('Por nome:');
console.log(people)