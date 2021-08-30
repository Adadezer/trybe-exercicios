/* Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */
const fatorial = numero => {
    for (let i = numero - 1; i >= 1; i -= 1) {
        numero = numero * i;
    }
    return numero;
}
console.log(fatorial(5));

/* Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator */

// resposta trybe
const factorial = number => number > 1 ? number * factorial(4) : 1;
console.log(factorial(5));