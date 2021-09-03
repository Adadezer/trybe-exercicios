// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

function verificacao(numApostado, numSorteado) {
    if (numApostado === numSorteado) {
        return 'Parabéns você ganhou';
    } else {
        return 'Tente novamente'
    }
}

function HOFsorteio(numApostado, callback) {
    const numSorteado = Math.floor(Math.random() * 5 + 1);
    return callback(numApostado, numSorteado); 

}
console.log(HOFsorteio(3, verificacao));


/*
LOGICA DO CÓDIGO

linha 3 - declaração da função verificacao pedida na linha 16, q pega como parametro o numero Apostado (linha 3), e o numero sorteado (linha 12), esses parametros são passados a ela na função HOFsorteio.

linha 4 - condição if do sorteio

linha 11 - HOF que recebe como parametro o numero apostado, e uma função
linha 12 - variavel q gera um numero aleatorio de 1 a 5
linha 13 - retorna o resultado da função passada como parametro na linha 11
linha 16 - executa a função HOFsorteio passando os parametros q ela pede (numero apostado, e a função, q no caso é a função verificação).

O QUE FAZ COMO UM TODO?

quando eu chamo HOFsorteio no final ele espera 2 parametros, o numApostado, e callback, o numApostado é 3, o callback é a função verificacao.

no return da HOF ela retorna o resultado da função verificação q é: verificação(3, numAleatório), q por sua vez faz o if do resultado do sorteio
*/

 
