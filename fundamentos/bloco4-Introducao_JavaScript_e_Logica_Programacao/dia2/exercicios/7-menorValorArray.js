// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 0;
for (let index = 0; index <= numbers.length; index +=1) {
    if (numbers[0] === 0) { 
        console.log ('o menor número é:');
        break;
    }else
    if (menorNumero === 0) {
        menorNumero = numbers[index];
    }

    if (menorNumero > numbers[index]) {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);


// EXPLICAÇÃO DA LOGICA

// 1º if - aqui eu verifico se a primeira posição do array é 0, caso for ele encerra o loop

// 2º if - aqui verificamos q o primeiro numero do array não é 0, mas a variavel 'menorNumero' é (colocamos ela em 0 pra ser inicializada), como 0 não existe no array, fazemos a variavel ser igual a primeira posição desse array, para assim, o programa continuar lverificando o resto das posições

// 3º if - se o menorNumero for maior q o item na posição, menorNumero recebe o esse valor menor (assim nos certificamos q menorNumero sempre será o menor entre todas as posição, se menorNumero já for menor q a posição verificada, ele continua do mesmo jeito)