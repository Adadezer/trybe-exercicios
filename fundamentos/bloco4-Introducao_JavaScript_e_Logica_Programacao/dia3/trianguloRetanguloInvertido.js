// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let asterisco = '*';
let espaco = '';
let imprimirEspaco;
let aux = n;

for (let indexAsterisco = 0; indexAsterisco < n; indexAsterisco += 1) {
    imprimirEspaco = indexAsterisco;

    for (let indexEspaco = 0; indexEspaco < n; indexEspaco += 1) {
        if (imprimirEspaco < aux) {
            espaco = espaco + ' ';
        }
        imprimirEspaco = imprimirEspaco + 1;
    }
    console.log(espaco, asterisco)
    asterisco = asterisco + '*';
    
    espaco = '';
}

