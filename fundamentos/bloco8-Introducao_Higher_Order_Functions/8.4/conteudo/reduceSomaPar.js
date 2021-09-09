// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

// Tente criar uma usando reduce e filter , e outra apenas usando reduce .

// redice e filter
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const paresFilter = numbers.filter((number) => number % 2 === 0);
console.log('array filter: ' + paresFilter);

const paresFilterReduce = paresFilter.reduce((acc, filteredNumber) => acc + filteredNumber);
console.log('soma array reduce filter: ' + paresFilterReduce);

// filter

const paresReduce = numbers.reduce((acc, number) => {
    if (number % 2 === 0) {
        return acc + number;
    } else {
        return acc;
    }
});
console.log(paresReduce);