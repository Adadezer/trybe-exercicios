// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let asterisco = '';

for (let index = 1; index <= n; index +=1) {
    asterisco = asterisco + '*';
    console.log(asterisco);
}