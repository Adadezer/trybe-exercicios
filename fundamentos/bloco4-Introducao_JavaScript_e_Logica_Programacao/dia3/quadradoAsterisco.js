// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5;
let asterisco = '*';

if (n > 1) {

    for(index = 1; index < n; index += 1){
        asterisco = asterisco + '*';
    }
    console.log(asterisco);

    for (let index = 1; index < n; index +=1) {
        console.log(asterisco);
    }
} else {
    console.log('O valor de n tem que ser maior que 1');
}

// console.log('*****');
// console.log('*****');
// console.log('*****');
// console.log('*****');
// console.log('*****');


    // console.log(asterisco + '*');